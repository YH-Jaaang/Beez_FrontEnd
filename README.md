# Beez_FrontEnd

# 개요
```bash
과학기술정보통신부가 주최한 혁신성장 블록체인 시스템 엔지니어 양성과정 프로젝트로
이더리움 기반 지역상권 선순환 지역화폐 시스템 입니다.
```

# 목표
```bash
 * 기존 지역화폐의 한계인 홍보 문제를 리뷰시스템으로 해결
 * 지역화폐 유통과정의 투명성을 위하여 토큰을 활용하여 화폐 발행
 * 지역 상권 활성화를 위하여 가입된 가맹점들 내의 쿠폰 공유 시스템 도입
```

# 프로젝트 관련 PPT/영상
```bash
 * https://drive.google.com/drive/folders/19GeGUIG9Dh2e3YhCmFr3-qRD9bDX8jzZ?usp=sharing
```

# 프로젝트 구조
```bash
│  App.vue
│  main.js
│
├─assets
│  │  Card3.png
│  │
│  ├─footer
│  │      sns01.png
│  │      sns02.png
│  │      sns04.png
│  │      sns05.png
│  │      sns06.png
│  │
│  ├─header
│  │      logo.png
│  │      logo2.png
│  │
│  ├─main
│  │      main01.png
│  │      main02.png
│  │      main03.png
│  │      main04.png
│  │      main05.png
│  │      main06.png
│  │      main08.png
│  │
│  └─start_main
│          icon01.png
│          icon02.png
│          icon07.png
│          icon08.png
│          join01.png
│          kakao_login.png
│          start1.png
│          start2.png
│          start3.png
│          start4.png
│          start5.png
│
├─components
│      VueQrReader.vue
│
├─contract
│      ContractABI.js
│      ContractAddress.js
│      Provider.js
│
├─fonts
│      BCcardB.otf
│      BCcardB.ttf
│      BCcardL.otf
│      BCcardL.ttf
│      Cafe24Ssurround.ttf
│      Cafe24SsurroundAir.ttf
│      GmarketSansTTFBold.ttf
│      GmarketSansTTFLight.ttf
│      GmarketSansTTFMedium.ttf
│      KoPubWorld Dotum Bold.ttf
│      KoPubWorldDotumLight.ttf
│      KoPubWorldDotumMedium.ttf
│
├─layout
│      Footer.vue
│      Header.vue
│      StartHeader.vue
│      StoreHeader.vue
│
├─router
│      index.js
│
├─store
│      index.js
│
└─views
    │  Charge.vue
    │  ChargeList.vue
    │  KakaoCallback.vue
    │  Main.vue
    │  PasswordCheck.vue
    │  Payment.vue
    │  PaymentList.vue
    │  ReviewList.vue
    │  SignUp.vue
    │  Start.vue
    │  StoreExchangeToken.vue
    │  StoreList.vue
    │  StoreMain.vue
    │  StorePasswordCheck.vue
    │  StoreQR.vue
    │  StoreReviewList.vue
    │  StoreWithdrawal.vue
    │  StoreWithdrawalList.vue
    │
    └─components
            DatePicker.vue
            DatePicker2.vue
            KaKaoMap.vue
            Keypad.vue
            PaymentCompleted.vue
            PrivacyPolicy.vue
            UseConditions.vue
 ```   

 # FE
```bash
* Vue.js
* ETHERS(WEB3.js)
```

 # BlockChain
```bash
* Ethereum
* NETWORK : ROPSTEN
```

# 프로그램 실행방법
```bash
 1) npm i
 
 2) npm run serve
```

