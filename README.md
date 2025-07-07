# 🎯 Hacker Terminal Animation - React Native

> Matrix-style terminal animation built with React Native CLI + Reanimated 3

![Platform](https://img.shields.io/badge/platform-React%20Native-blue)
![Reanimated](https://img.shields.io/badge/Reanimated-3.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🌧️ **Matrix Rain Animation** - Smooth falling characters
- ⌨️ **Typewriter Effect** - Character-by-character typing
- ⚡ **Glitch Effects** - RGB shift and text corruption
- 🖥️ **Terminal Interface** - Realistic hacker terminal
- 🎨 **Custom Hooks** - Reusable animation logic
- 📱 **Performance Optimized** - 60 FPS smooth animations

## 🎬 Demo

![Image](https://github.com/user-attachments/assets/962fc641-bf10-4283-913c-775be0af57cb)

## 🛠️ Tech Stack

- **React Native CLI** - Cross-platform mobile development
- **Reanimated 3** - High-performance animations
- **TypeScript** - Type safety and better DX
- **Custom Hooks** - Modular animation logic

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- React Native CLI
- Android Studio / Xcode

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hacker-terminal-animation.git

# Navigate to project directory
cd hacker-terminal-animation

# Install dependencies
npm install

# iOS setup (Mac only)
cd ios && pod install && cd ..

# Start Metro bundler
npx react-native start

# Run on Android
npx react-native run-android

# Run on iOS (Mac only)
npx react-native run-ios
```

## 🎯 Usage Examples

### TypewriterText Component
```tsx
<TypewriterText
  text="Accessing mainframe..."
  speed={80}
  onComplete={() => console.log('Done!')}
  showCursor={true}
/>
```

### GlitchText Component
```tsx
<GlitchText
  text="SYSTEM BREACH"
  intensity={3}
  frequency={2000}
  showGlitchLayers={true}
/>
```

### MatrixRain Component
```tsx
<MatrixRain
  width={screenWidth}
  height={screenHeight}
  speed={100}
/>
```

## 🗂️ Project Structure

```
src/
├── components/
│   ├── animation/
│   │   ├── MatrixRain/
│   │   ├── TypewriterText/
│   │   └── GlitchText/
│   └── screens/
│       └── HackerScreen/
├── hooks/
│   ├── useMatrixAnimation.ts
│   ├── useTypewriter.ts
│   └── useGlitchEffect.ts
├── utils/
│   ├── animationHelpers.ts
│   ├── textGenerators.ts
│   └── constants.ts
└── types/
    └── animation.types.ts
```

## 🎨 Customization

### Colors

Edit `src/utils/constants.ts`:

```typescript
COLORS: {
  PRIMARY: '#00ff00',    // Matrix green
  SECONDARY: '#00cc00',  // Secondary green
  ACCENT: '#008800',     // Accent color
  BACKGROUND: '#000000', // Background
}
```

### Animation Speeds

```typescript
TYPEWRITER: {
  SPEED: 50,              // Typing speed (ms)
  CURSOR_BLINK_DURATION: 500,
},
GLITCH: {
  INTENSITY: 5,           // Glitch intensity (1-10)
  FREQUENCY: 3000,        // Glitch frequency (ms)
}
```

## 🔧 Performance Tips

- Use `memo()` for static components.
- Avoid directly reading `.value` during render.
- Use `useSharedValue` for reactive animations.
- Always clean up animations in `useEffect`.

## 📚 Learning Resources

- [React Native Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)
- [Performance Best Practices](https://reactnative.dev/docs/performance)
- [TypeScript with React Native](https://reactnative.dev/docs/typescript)

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to your branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by "The Matrix" movie trilogy.
- Built with React Native and Reanimated.
- Thanks to the open-source community.

## 📞 Contact

- **LinkedIn**: [Onur Çoğalan](https://www.linkedin.com/in/onurcogalan/)
- **Medium**: [onurcogalan_96763](https://medium.com/@onurcogalan_96763)
