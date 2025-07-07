import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StatusBar, Text, View } from 'react-native';
import Animated, { FadeIn, FadeInUp, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated';
import { HACKER_TEXTS } from '../../../utils/textGenerators';
import { styles } from './HackerScreen.styles';
import MatrixRain from '../../animation/MatrixRain';
import GlitchText from '../../animation/GlitchText';
import TypewriterText from '../../animation/TypewriterText';


const { width, height } = Dimensions.get('window');

const HackerScreen: React.FC = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isInıtialized, setIsInıtialized] = useState(false);

    // Animation values
    const headerOpacity = useSharedValue(0);
    const contentOpacity = useSharedValue(0);
    const overlayOpacity = useSharedValue(0.7);

    // Initialize animations
    useEffect(() => {
        const initAnimations = () => {
            // Header animation
            headerOpacity.value = withDelay(500, withTiming(1, { duration: 1000 }));

            // Content animation
            contentOpacity.value = withDelay(1500, withTiming(1, { duration: 800 }));

            // Overlay pulse effect
            overlayOpacity.value = withSequence(
                withTiming(0.3, { duration: 2000 }),
                withTiming(0.7, { duration: 2000 })
            );
            setIsInıtialized(true);
        };

        initAnimations();
    }, []);

    // Cycle through effect
    useEffect(() => {
        if (!isInıtialized) return;

        const interval = setInterval(() => {
            setCurrentTextIndex(prev => (prev + 1) % HACKER_TEXTS.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isInıtialized]);

    // Animated styles
    const headerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: headerOpacity.value,
        transform: [
            {
                translateY: withTiming(headerOpacity.value === 1 ? 0 : -20, { duration: 800 }),
            },
        ],
    }));

    const contentAnimatedStyle = useAnimatedStyle(() => ({
        opacity: contentOpacity.value,
        transform: [
            {
                scale: withTiming(contentOpacity.value === 1 ? 1 : 0.9, { duration: 800 }),
            },
        ],
    }));

    const overlayAnimatedStyle = useAnimatedStyle(() => ({
        opacity: overlayOpacity.value,
    }));

    const handleTypewriterComplete = () => {
        console.log('Typewriter animation completed');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />

            {/* Matrix Rain Background */}
            <MatrixRain width={width} height={height} />

            {/* Dark Overlay */}
            <Animated.View style={[styles.overlay, overlayAnimatedStyle]} />

            {/* Content Container */}
            <View style={styles.contentContainer}>

                {/* Header Section */}
                <Animated.View
                    style={[styles.headerSection, headerAnimatedStyle]}
                    entering={FadeInUp.delay(300).duration(1000)}
                >
                    <GlitchText
                        text="SYSTEM BREACH DETECTED"
                        intensity={3}
                        frequency={2000}
                        style={styles.headerGlitch}
                        textStyle={styles.headerText}
                    />
                </Animated.View>

                {/* Main Terminal Section */}
                <Animated.View
                    style={[styles.terminalSection, contentAnimatedStyle]}
                    entering={FadeIn.delay(800).duration(1000)}
                >
                    <View style={styles.terminalHeader}>
                        <View style={styles.terminalButtons}>
                            <View style={[styles.terminalButton, styles.closeButton]} />
                            <View style={[styles.terminalButton, styles.minimizeButton]} />
                            <View style={[styles.terminalButton, styles.maximizeButton]} />
                        </View>
                        <TypewriterText
                            text="root@blackhat:~$"
                            speed={100}
                            style={styles.terminalPrompt}
                            textStyle={styles.promptText}
                        />
                    </View>

                    <View style={styles.terminalBody}>
                        <TypewriterText
                            text={HACKER_TEXTS[currentTextIndex]}
                            speed={80}
                            onComplete={handleTypewriterComplete}
                            style={styles.commandLine}
                            textStyle={styles.commandText}
                            key={currentTextIndex} // Force re-render on text change
                        />

                        <View style={styles.statusSection}>
                            <GlitchText
                                text="STATUS: UNAUTHORIZED ACCESS"
                                intensity={2}
                                frequency={3000}
                                style={styles.statusLine}
                                textStyle={styles.statusText}
                            />

                            <TypewriterText
                                text={"[✓] Encryption bypassed...\n[●] Downloading classified files...\n[!] Transfer complete: 2.1GB"}
                                speed={60}
                                style={styles.progressLine}
                                textStyle={styles.progressText}
                            />
                        </View>
                    </View>
                </Animated.View>

                {/* Footer Section */}
                <Animated.View
                    style={styles.footerSection}
                    entering={FadeIn.delay(1500).duration(1000)}
                >
                    <GlitchText
                        text="CREATED BY ONUR COGALAN"
                        intensity={1}
                        frequency={5000}
                        style={styles.footerGlitch}
                        textStyle={styles.footerText}
                    />
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};


export default HackerScreen;
