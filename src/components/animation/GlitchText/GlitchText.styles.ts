import { StyleSheet } from 'react-native';
import { ANIMATION_CONSTANTS } from '../../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    textContainer: {
        position: 'relative',
    },
    text: {
        fontFamily: 'Courier New',
        fontSize: 18,
        color: ANIMATION_CONSTANTS.COLORS.PRIMARY,
        fontWeight: 'bold',
        textShadowColor: ANIMATION_CONSTANTS.COLORS.PRIMARY,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5,
    },
    glitchLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        fontFamily: 'Courier New',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    glitchLayerRed: {
        color: '#ff0000',
        textShadowColor: '#ff0000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 3,
    },
    glitchLayerBlue: {
        color: '#0000ff',
        textShadowColor: '#0000ff',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 3,
    },
});