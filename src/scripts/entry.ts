import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import lottie from 'lottie-web'
import { resolvePath } from './utils'

gsap.registerPlugin(ScrollTrigger)

const animation = lottie.loadAnimation({
	container: document.querySelector('.lottie-container')!,
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: resolvePath('resources/data.json'),
})

// ScrollTrigger.create({
// 	trigger: '.animation-region',
// 	start: 'top top',
// 	end: 'bottom bottom',
// 	scrub: true,
// 	onUpdate: (e) => {
// 		animation.goToAndStop(e.progress * animation.totalFrames, true)
// 	},
// })

// animation + scroll damping
const state = { progress: 0 }
gsap.to(state, {
	progress: 1,
	ease: 'none',
	scrollTrigger: {
		trigger: '.animation-region',
		start: 'top top',
		end: 'bottom bottom',
		scrub: 1,
	},
	onUpdate: () => {
		animation.goToAndStop(state.progress * animation.totalFrames, true)
	},
})
