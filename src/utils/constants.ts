export const ANIMATION_CONSTANTS = {
    MATRIX_RAIN: {
        COLUMN_COUNT: 20,
        DROP_SPEED: 100,
        CHARACTERS: '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?',
        FONT_SIZE: 16,
        LINE_HEIGHT: 20,
    },
    TYPEWRITER: {
        SPEED: 50,
        CURSOR_BLINK_DURATION: 500,
    },
    GLITCH: {
        INTENSITY: 5,
        DURATION: 200,
        FREQUENCY: 3000,
    },
    COLORS: {
        PRIMARY: '#00ff00',
        SECONDARY: '#00cc00',
        ACCENT: '#008800',
        BACKGROUND: '#000000',
        TEXT: '#ffffff',
    },
} as const;