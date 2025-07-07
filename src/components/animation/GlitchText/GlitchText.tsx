import React, { memo, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useGlitchEffect } from '../../../hooks/useGlitchEffect';
import { generateGlitchText } from '../../../utils/textGenerators';
import { ANIMATION_CONSTANTS } from '../../../utils/constants';
import type { GlitchTextProps } from './GlitchText.types';
import { styles } from './GlitchText.styles';

const GlitchText: React.FC<GlitchTextProps> = ({
    text,
    intensity = ANIMATION_CONSTANTS.GLITCH.INTENSITY,
    frequency = ANIMATION_CONSTANTS.GLITCH.FREQUENCY,
    autoStart = true,
    style,
    textStyle,
    showGlitchLayers = true,
}) => {
    const [glitchText, setGlitchText] = useState(text);
    const [isGlitchActive, setIsGlitchActive] = useState(false);

    const { animatedStyle, startGlitch } = useGlitchEffect({
        text,
        intensity,
        frequency,
        autoStart,
    });

    // Update glitch text periodically
    useEffect(() => {
        if (autoStart) {
            const interval = setInterval(() => {
                setIsGlitchActive(true);
                setGlitchText(generateGlitchText(text, intensity));

                setTimeout(() => {
                    setGlitchText(text);
                    setIsGlitchActive(false);
                }, 150);
            }, frequency);

            return () => clearInterval(interval);
        }
    }, [text, intensity, frequency, autoStart]);

    const renderGlitchLayers = () => {
        if (!showGlitchLayers || !isGlitchActive) return null;

        return (
            <>
                <Text
                    style={[
                        styles.glitchLayer,
                        styles.glitchLayerRed,
                        textStyle,
                        { transform: [{ translateX: -2 }] },
                    ]}
                >
                    {glitchText}
                </Text>
                <Text
                    style={[
                        styles.glitchLayer,
                        styles.glitchLayerBlue,
                        textStyle,
                        { transform: [{ translateX: 2 }] },
                    ]}
                >
                    {glitchText}
                </Text>
            </>
        );
    };

    return (
        <View style={[styles.container, style]}>
            <Animated.View style={[styles.textContainer, animatedStyle]}>
                {renderGlitchLayers()}
                <Text style={[styles.text, textStyle]}>
                    {isGlitchActive ? glitchText : text}
                </Text>
            </Animated.View>
        </View>
    );
};

export default memo(GlitchText);