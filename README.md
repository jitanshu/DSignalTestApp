# DSignalApp

A React Native application built with TypeScript, featuring a modern UI with custom components and navigation.

## Features

- 🚀 React Native 0.81.4
- 📱 Cross-platform (iOS & Android)
- 🎨 Custom UI components with atomic design pattern
- 🧭 React Navigation for seamless navigation
- 📊 TypeScript for type safety
- 🎯 SVG icon support
- 📱 Safe area handling

## Prerequisites

Before running this app, make sure you have the following installed:

- **Node.js** (version 20 or higher)
- **npm** or **yarn**
- **React Native CLI**
- **Xcode** (for iOS development on macOS)
- **Android Studio** (for Android development)
- **Java Development Kit (JDK)** 11 or higher

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jitanshu/DSignalTestApp.git
   cd DSignalApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### Development Mode

1. **Start the Metro bundler**
   ```bash
   npm start
   # or
   yarn start
   ```

2. **Run on iOS** (macOS only)
   ```bash
   npm run ios
   # or
   yarn ios
   ```

3. **Run on Android**
   ```bash
   npm run android
   # or
   yarn android
   ```

### Production Build

#### iOS
```bash
# Build for iOS
cd ios
xcodebuild -workspace DSignalApp.xcworkspace -scheme DSignalApp -configuration Release -destination generic/platform=iOS -archivePath DSignalApp.xcarchive archive
```

#### Android
```bash
# Build APK
cd android
./gradlew assembleRelease
```

## Project Structure

```
DSignalApp/
├── src/
│   ├── assets/
│   │   ├── fonts/          # Custom fonts
│   │   └── icons/          # SVG icons
│   ├── components/
│   │   ├── atoms/          # Basic UI components
│   │   ├── molecules/      # Composite components
│   │   └── organisms/      # Complex components
│   ├── constants/
│   │   └── utils/          # Color schemes, fonts, platform utils
│   ├── navigation/         # Navigation configuration
│   ├── screens/           # App screens
│   └── types/             # TypeScript type definitions
├── android/               # Android-specific code
├── ios/                   # iOS-specific code
└── App.tsx               # Main app component
```

## Available Scripts

- `npm start` - Start the Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator/device
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Dependencies

### Main Dependencies
- **React Native** 0.81.4
- **React Navigation** - Navigation library
- **React Native SVG** - SVG support
- **React Native Safe Area Context** - Safe area handling

### Development Dependencies
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework

## Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npx react-native start --reset-cache
   ```

2. **iOS build issues**
   ```bash
   cd ios
   pod install
   cd ..
   npx react-native run-ios
   ```

3. **Android build issues**
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

4. **Node modules issues**
   ```bash
   rm -rf node_modules
   npm install
   ```

### Platform-specific Setup

#### iOS
- Ensure Xcode is installed and updated
- Install iOS Simulator
- Set up iOS development certificates if running on device

#### Android
- Install Android Studio
- Set up Android SDK
- Create Android Virtual Device (AVD) or connect physical device
- Enable Developer Options and USB Debugging on Android device

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support and questions, please contact the development team.
