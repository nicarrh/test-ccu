# Mobile app for ccu

## DESCRIPTION

- This app is developed with React Native and Expo.
- It consumes data from fakestoreapi.com to display a list of products only if the user is authenticated, we use secure storage to store the token, and for the state management, we use Context API.
- The folder structure is based on hexagonal architecture, which makes it easier to maintain and scale the app.
- I use eslint for code linting and prettier for code formatting.
- I try to make the app as simple and intuitive as possible, while still providing a good user experience.

## RUNNING THE APP

### Prerequisites

- Install Node.js and npm (https://nodejs.org/en/)
- Install Expo CLI: `npm install -g expo-cli`
- Install Android Studio or Xcode for Android or iOS development respectively.

### Setup

1. Clone the repository: `git clone https://github.com/nicarrh/test-ccu.git`
2. Navigate to the cloned directory: `cd test-ccu`
3. Install dependencies: `npm install`

### Run the app

#### Android

1. Set up an Android emulator or connect an Android device.
2. Run the app: `npm start --android`

#### iOS

1. Set up an iOS simulator or connect an iOS device.
2. Run the app: `npm start --ios`

---

#### Created by [nicarrh](https://github.com/nicarrh)
