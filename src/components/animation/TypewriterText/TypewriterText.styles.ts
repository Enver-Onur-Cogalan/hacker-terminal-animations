import { StyleSheet } from 'react-native';
import { ANIMATION_CONSTANTS } from '../../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Courier New',
        fontSize: 16,
        color: ANIMATION_CONSTANTS.COLORS.PRIMARY,
        fontWeight: 'bold',
        textShadowColor: ANIMATION_CONSTANTS.COLORS.PRIMARY,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 3,
    },
    cursor: {
        marginLeft: 2,
    },
    cursorText: {
        fontFamily: 'Courier New',
        fontSize: 16,
        color: ANIMATION_CONSTANTS.COLORS.PRIMARY,
        fontWeight: 'bold',
        textShadowColor: ANIMATION_CONSTANTS.COLORS.PRIMARY,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 3,
    },
});