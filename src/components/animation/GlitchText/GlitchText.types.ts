import type { ViewStyle, TextStyle } from 'react-native';

export interface GlitchTextProps {
    text: string;
    intensity?: number;
    frequency?: number;
    autoStart?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    showGlitchLayers?: boolean;
}