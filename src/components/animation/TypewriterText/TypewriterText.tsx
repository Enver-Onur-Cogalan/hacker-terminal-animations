import React, { memo } from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTypewritter } from '../../../hooks/useTypewriter';
import { ANIMATION_CONSTANTS } from '../../../utils/constants';
import type { TypewriterTextProps } from './TypewriterText.types';
import { styles } from './TypewriterText.styles';

const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    speed = ANIMATION_CONSTANTS.TYPEWRITER.SPEED,
    onComplete,
    showCursor = true,
    autoStart = true,
    style,
    textStyle,
    cursorStyle,
}) => {
    const {
        displayText,
        isComplete,
        isTyping,
        cursorAnimatedStyle,
        textAnimatedStyle,
        startTyping,
        resetAnimation,
    } = useTypewritter({
        text,
        speed,
        onComplete,
        showCursor,
        autoStart,
    });

    return (
        <View style={[styles.container, style]}>
            <Animated.View style={[styles.textContainer, textAnimatedStyle]}>
                <Text style={[styles.text, textStyle]}>
                    {displayText}
                </Text>
                {showCursor && (
                    <Animated.View style={[styles.cursor, cursorAnimatedStyle, cursorStyle]}>
                        <Text style={[styles.cursorText, textStyle]}>|</Text>
                    </Animated.View>
                )}
            </Animated.View>
        </View>
    );
};

export default memo(TypewriterText);