import { ANIMATION_CONSTANTS } from "./constants";
import type { MatrixCharacter } from "../types/animation.types";

export const generateRandomChar = (): string => {
    const chars = ANIMATION_CONSTANTS.MATRIX_RAIN.CHARACTERS;
    return chars[Math.floor(Math.random() * chars.length)];
};

export const generateMatrixColumn = (
    columIndex: number,
    screenWidth: number,
    screenHeight: number
): MatrixCharacter[] => {
    const columWidth = screenWidth / ANIMATION_CONSTANTS.MATRIX_RAIN.COLUMN_COUNT;
    const charactersPerColumn = Math.floor(screenHeight / ANIMATION_CONSTANTS.MATRIX_RAIN.LINE_HEIGHT);

    return Array.from({ length: charactersPerColumn }, (_, index) => ({
        id: `${columIndex}-${index}`,
        x: columIndex * columWidth,
        y: index * ANIMATION_CONSTANTS.MATRIX_RAIN.LINE_HEIGHT,
        char: generateRandomChar(),
        opacity: Math.random(),
        speed: 1 + Math.random() * 2,
    }));
};

export const createGlitchOffset = (intensity: number) => {
    return {
        x: (Math.random() - 0.5) * intensity,
        y: (Math.random() - 0.5) * intensity,
    };
};

export const interpolateColor = (
    progress: number,
    startColor: string,
    endColor: string
): string => {
    // Basic hex color interpolation
    const start = hexToRgb(startColor);
    const end = hexToRgb(endColor);

    if (!start || !end) return startColor;

    const r = Math.round(start.r + (end.r - start.r) * progress);
    const g = Math.round(start.g + (end.g - start.g) * progress);
    const b = Math.round(start.b + (end.b - start.b) * progress);

    return `rgb(${r}, ${g}, ${b})`;
};

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
};
