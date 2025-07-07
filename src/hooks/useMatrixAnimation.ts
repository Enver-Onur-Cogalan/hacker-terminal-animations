import { useEffect } from 'react';
import {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    cancelAnimation,
    withSequence,
} from 'react-native-reanimated';

export const useMatrixAnimation = (width: number, height: number) => {
    const translateY = useSharedValue(-height);
    const opacity = useSharedValue(0.4);

    // Start animation
    const startAnimation = () => {
        // Sürekli aşağı kayma - ekran yüksekliği kadar kayıp tekrar başlıyor
        translateY.value = withRepeat(
            withTiming(height * 2, { duration: 8000 }), // 8 saniyede tam kayma
            -1,
            false
        );

        // Opacity pulse efekti
        opacity.value = withRepeat(
            withSequence(
                withTiming(0.2, { duration: 2000 }),
                withTiming(0.6, { duration: 2000 }),
                withTiming(0.3, { duration: 2000 }),
                withTiming(0.5, { duration: 2000 })
            ),
            -1,
            false
        );
    };

    // Stop animation
    const stopAnimation = () => {
        cancelAnimation(translateY);
        cancelAnimation(opacity);
    };

    // Animated style
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value,
    }));

    return {
        animatedStyle,
        startAnimation,
        stopAnimation,
    };
};