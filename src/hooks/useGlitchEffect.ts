import { useEffect, useState } from 'react';
import {
    useSharedValue,
    useAnimatedStyle,
    withSequence,
    withTiming,
} from 'react-native-reanimated';
import { ANIMATION_CONSTANTS } from '../utils/constants';
import { createGlitchOffset } from '../utils/animationHelpers';

interface UseGlitchEffectProps {
    text: string;
    intensity?: number;
    frequency?: number;
    autoStart?: boolean;
}

export const useGlitchEffect = ({
    text,
    intensity = ANIMATION_CONSTANTS.GLITCH.INTENSITY,
    frequency = ANIMATION_CONSTANTS.GLITCH.FREQUENCY,
    autoStart = true,
}: UseGlitchEffectProps) => {
    const glitchX = useSharedValue(0);
    const glitchY = useSharedValue(0);
    const glitchOpacity = useSharedValue(1);
    const glitchScale = useSharedValue(1);
    const [isGlitching, setIsGlitching] = useState(false);

    // Create glitch effect
    const createGlitchAnimation = () => {
        const offset = createGlitchOffset(intensity);

        setIsGlitching(true);

        glitchX.value = withSequence(
            withTiming(offset.x, { duration: 50 }),
            withTiming(-offset.x, { duration: 50 }),
            withTiming(0, { duration: 50 })
        );

        glitchY.value = withSequence(
            withTiming(offset.y, { duration: 50 }),
            withTiming(-offset.y, { duration: 50 }),
            withTiming(0, { duration: 50 })
        );

        glitchOpacity.value = withSequence(
            withTiming(0.8, { duration: 25 }),
            withTiming(1, { duration: 25 }),
            withTiming(0.9, { duration: 25 }),
            withTiming(1, { duration: 25 })
        );

        glitchScale.value = withSequence(
            withTiming(1.02, { duration: 50 }),
            withTiming(0.98, { duration: 50 }),
            withTiming(1, { duration: 50 })
        );

        // Reset glitching state
        setTimeout(() => setIsGlitching(false), 200);
    };

    // Start glitch animation
    const startGlitch = () => {
        createGlitchAnimation();
    };

    // Animated style 
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: glitchX.value },
                { translateY: glitchY.value },
                { scale: glitchScale.value },
            ],
            opacity: glitchOpacity.value,
        };
    });

    // Auto start effect
    useEffect(() => {
        if (autoStart) {
            const interval = setInterval(() => {
                startGlitch();
            }, frequency);

            return () => clearInterval(interval);
        }
    }, [autoStart, frequency]);

    return {
        animatedStyle,
        startGlitch,
        isGlitching,
    };
};