import type { ViewStyle, TextStyle } from 'react-native';

export interface TypewriterTextProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
    showCursor?: boolean;
    autoStart?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    cursorStyle?: ViewStyle;
}
