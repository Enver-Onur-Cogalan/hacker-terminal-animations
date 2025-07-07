export const HACKER_TEXTS = [
    "Accessing mainframe...",
    "Bypassing security protocols...",
    "Injecting payload...",
    "Establishing connection...",
    "Decrypting data...",
    "System breach detected...",
    "Uploading virus...",
    "Extracting files...",
    "Trace route initiated...",
    "Firewall disabled...",
    "Root access granted...",
    "Connection established...",
    "SX0o Em*( =G$ ic04H&8iuL",
    "Ju7*W-@i'zu£7.k",
    "Onur Cogalan <3"
];

export const generateRandomHackerText = (): string => {
    return HACKER_TEXTS[Math.floor(Math.random() * HACKER_TEXTS.length)];
};

export const generateGlitchText = (originalText: string, intensity: number): string => {
    const glitchChars = '!@#$%^&*()_+{}[]|;:,.<>?~`';
    return originalText
        .split('')
        .map(char => {
            if (Math.random() < intensity / 10) {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
        })
        .join('');
};
