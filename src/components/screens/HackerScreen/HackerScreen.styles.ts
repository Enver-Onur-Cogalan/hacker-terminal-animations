import { StyleSheet, Dimensions } from 'react-native';
import { ANIMATION_CONSTANTS } from '../../../utils/constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ANIMATION_CONSTANTS.COLORS.BACKGROUND,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: ANIMATION_CONSTANTS.COLORS.BACKGROUND,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 40,
        zIndex: 1,
    },
    headerSection: {
        alignItems: 'center',
        marginTop: 60,
    },
    headerGlitch: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: ANIMATION_CONSTANTS.COLORS.PRIMARY,
        textAlign: 'center',
        letterSpacing: 2,
    },
    terminalSection: {
        flex: 1,
        marginVertical: 40,
    },
    terminalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderWidth: 1,
        borderColor: ANIMATION_CONSTANTS.COLORS.SECONDARY,
    },
    terminalButtons: {
        flexDirection: 'row',
        marginRight: 15,
    },
    terminalButton: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 6,
    },
    closeButton: {
        backgroundColor: '#ff5f57',
    },
    minimizeButton: {
        backgroundColor: '#ffbd2e',
    },
    maximizeButton: {
        backgroundColor: '#28ca42',
    },
    terminalPrompt: {},
    promptText: {
        fontSize: 14,
        color: ANIMATION_CONSTANTS.COLORS.PRIMARY,
        fontFamily: 'Courier New',
    },
    terminalBody: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: ANIMATION_CONSTANTS.COLORS.SECONDARY,
        paddingHorizontal: 15,
        paddingVertical: 20,
        minHeight: 200,
    },
    commandLine: {
        marginBottom: 15,
    },
    commandText: {
        fontSize: 16,
        color: ANIMATION_CONSTANTS.COLORS.PRIMARY,
        fontFamily: 'Courier New',
        lineHeight: 24,
    },
    statusSection: {
        marginTop: 20,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 255, 0, 0.3)',
    },
    statusLine: {
        marginBottom: 10,
    },
    statusText: {
        fontSize: 14,
        color: '#ff6b6b',
        fontFamily: 'Courier New',
        fontWeight: 'bold',
    },
    progressLine: {},
    progressText: {
        fontSize: 14,
        color: ANIMATION_CONSTANTS.COLORS.SECONDARY,
        fontFamily: 'Courier New',
        lineHeight: 20,
    },
    footerSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    footerGlitch: {},
    footerText: {
        fontSize: 12,
        color: ANIMATION_CONSTANTS.COLORS.ACCENT,
        fontFamily: 'Courier New',
        textAlign: 'center',
        letterSpacing: 1,
    },
});