import React, { memo, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { useMatrixAnimation } from '../../../hooks/useMatrixAnimation';
import { generateRandomChar } from '../../../utils/animationHelpers';
import { styles } from './MatrixRain.styles';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface MatrixRainProps {
    width?: number;
    height?: number;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
    width = screenWidth,
    height = screenHeight,
}) => {
    const { animatedStyle, startAnimation, stopAnimation } = useMatrixAnimation(width, height);

    useEffect(() => {
        startAnimation();
        return () => stopAnimation();
    }, []);

    // Generate matrix columns - optimize edilmiş
    const generateMatrixColumns = () => {
        const columns = [];
        const columnCount = 12; // Daha az column = daha performanslı
        const charsPerColumn = Math.ceil(height / 25) + 10; // Extra karakterler smooth scroll için

        for (let col = 0; col < columnCount; col++) {
            const columnChars = [];

            for (let row = 0; row < charsPerColumn; row++) {
                columnChars.push({
                    id: `${col}-${row}`,
                    char: generateRandomChar(),
                    opacity: Math.random() * 0.8 + 0.1,
                });
            }

            columns.push(
                <View
                    key={col}
                    style={[
                        styles.column,
                        { left: col * (width / columnCount) }
                    ]}
                >
                    {columnChars.map((char, index) => (
                        <Text
                            key={char.id}
                            style={[
                                styles.charText,
                                {
                                    opacity: char.opacity,
                                    top: index * 25,
                                    // İlk karakterler daha parlak (leading effect)
                                    color: index < 3 ? '#00ff00' : '#00aa00',
                                    textShadowRadius: index < 3 ? 8 : 3,
                                }
                            ]}
                        >
                            {char.char}
                        </Text>
                    ))}
                </View>
            );
        }

        return columns;
    };

    return (
        <Animated.View style={[styles.container, { width, height }, animatedStyle]}>
            {generateMatrixColumns()}

            {/* Duplicate for seamless loop */}
            <View style={[styles.duplicateLayer, { top: -height }]}>
                {generateMatrixColumns()}
            </View>
        </Animated.View>
    );
};

export default memo(MatrixRain);
