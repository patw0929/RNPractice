# react native 練習用專案

## packages

* react-native 0.43.4
* react-navigation 1.0.0-beta.8
* react-redux 4
* redux 3
* remote-redux-devtools
* superagent
* firebase

## how to run

First, install packages:

```bash
yarn install
```

Then, run it on iOS/Android:

iOS:

```bash
react-native run-ios
```

Android:

```bash
react-native run-android
```

## features

* 支援 Android & iOS 雙平台
* 可用 E-mail 註冊帳號、登入（基於 `firebase`）
* 使用與 `redux` 整合好的 `react-navigation` 作導覽切換
* 在開發環境可透過 `remote-redux-devtools` 觀察 store
