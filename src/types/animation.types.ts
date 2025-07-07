export interface MartrixRainProps {
    width: number;
    height: number;
    speed?: number;
    destiny?: number;
}

export interface TypewriterProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
    showCursor?: boolean;
}

export interface GlitchTextProps {
    text: string;
    intensity?: number;
    frequency?: number;
    children?: React.ReactNode;
}

export interface AnimationState {
    isActive: boolean;
    progress: number;
    currentText: string;
}

export type MatrixCharacter = {
    id: string;
    x: number;
    y: number;
    char: string;
    opacity: number;
    speed: number;
};