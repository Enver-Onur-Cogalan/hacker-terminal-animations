import { useEffect, useRef, useState } from 'react';
import {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withSequence,
} from 'react-native-reanimated';
import { ANIMATION_CONSTANTS } from '../utils/constants';

interface UseTypewriterProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
    showCursor?: boolean;
    autoStart?: boolean;
}

export const useTypewritter = ({
    text,
    speed = ANIMATION_CONSTANTS.TYPEWRITER.SPEED,
    onComplete,
    showCursor = true,
    autoStart = true,
}: UseTypewriterProps) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const currentIndex = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout>();

    // Cursor animation
    const cursorOpacity = useSharedValue(1);

    // Start cursor blinking
    const startCursorBlink = () => {
        cursorOpacity.value = withRepeat(
            withSequence(
                withTiming(0, { duration: ANIMATION_CONSTANTS.TYPEWRITER.CURSOR_BLINK_DURATION }),
                withTiming(1, { duration: ANIMATION_CONSTANTS.TYPEWRITER.CURSOR_BLINK_DURATION })
            ),
            -1,
            true
        );
    };

    // Stop cursor blinking
    const stopCursorBlink = () => {
        cursorOpacity.value = withTiming(1);
    };

    // Type next character
    const typeNextCharacter = () => {
        if (currentIndex.current < text.length) {
            setDisplayText(text.slice(0, currentIndex.current + 1));
            currentIndex.current += 1;

            timeoutRef.current = setTimeout(typeNextCharacter, speed);
        } else {
            setIsComplete(true);
            setIsTyping(false);
            onComplete?.();
        }
    };

    // Start typing animation
    const startTyping = () => {
        currentIndex.current = 0;
        setDisplayText('');
        setIsComplete(false);
        setIsTyping(true);
        stopCursorBlink();
        typeNextCharacter();
    };

    // Reset animation
    const resetAnimation = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        currentIndex.current = 0;
        setDisplayText('');
        setIsComplete(false);
        setIsTyping(false);
        if (showCursor) {
            startCursorBlink();
        }
    };

    // Cursor animated style - ✅ .value okuması yok
    const cursorAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: showCursor ? cursorOpacity.value : 0,
        };
    });

    // Text container animated style
    const textAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(displayText.length > 0 ? 1 : 0, { duration: 200 }),
        };
    });

    // Auto start effect
    useEffect(() => {
        if (autoStart && text) {
            startTyping();
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [text, autoStart]);

    // Start cursor blink when not typing
    useEffect(() => {
        if (!isTyping && showCursor && isComplete) {
            startCursorBlink();
        }
    }, [isComplete, showCursor, isTyping]);

    return {
        displayText,
        isComplete,
        isTyping,
        cursorAnimatedStyle,
        textAnimatedStyle,
        startTyping,
        resetAnimation,
    };
};