import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
    column: {
        position: 'absolute',
        top: 0,
    },
    charText: {
        position: 'absolute',
        fontSize: 14,
        color: '#00aa00',
        fontWeight: 'bold',
        textShadowColor: '#00ff00',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 3,
    },
    duplicateLayer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});