# About

`After Effects` で作成したアニメーションを、`lottie` を使用して svg としてブラウザでアニメーションさせる。

[🪶 デモ](https://spoon-inoue.github.io/lottie-test/)

# 手順

1. After Effects に、拡張機能 [bodymovin](https://exchange.adobe.com/apps/cc/12557) を導入します。

2. After Effects でアニメーションを作成して、`bodymovin` を使用して、json 形式で出力します。

```
ツールバー [ウィンドウ] → [エクステンション] → [Bodymovin]
```

![スクリーンショット 2022-10-24 155138](https://user-images.githubusercontent.com/105195761/197464884-6466066e-0ec6-472d-abf8-e7acfaaec57b.png)

3. ブラウザで動かします。

```
npm i lottie-web
```

基本的な使い方は、こちら ↓ 参照。<br>
[Lottie for Web, Android, iOS, React Native, and Windows](https://github.com/airbnb/lottie-web)

# スクロール連動

`lottie-web` が提供している基本的なアニメーション方法に加えて、`gsap` を使用してスクロールに連動させたいケースが多いと思います。

lottie 側の設定で、`loop: false`, `autoplay: false` にします。
https://github.com/spoon-inoue/lottie-test/blob/fde621d8d5976a7aa65b1550503e7ad8368ba651/src/scripts/entry.ts#L8-L14

lottie の`goToAndStop`に、対象の frame 数を与えることで、アニメーションの位置を停止した状態で指定できます。<br>
`scrub: 1`に設定することで、アニメーションに対して、実際のスクロール値に 1 秒かけて追い付くようなスムーズをかけることができます。
https://github.com/spoon-inoue/lottie-test/blob/fde621d8d5976a7aa65b1550503e7ad8368ba651/src/scripts/entry.ts#L27-L40

### 参考

- [Scroll Based Animation using GSAP 3, lottie-web and ScrollTrigger](https://greensock.com/forums/topic/24416-scroll-based-animation-using-gsap-3-lottie-web-and-scrolltrigger/)
