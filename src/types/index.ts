export type LetterInfo = { frequency: number; maxRepeat: number };

export type AlphabetMap = Record<string, LetterInfo>;

export type CountsMap = Record<string, number>;

export type SortedLetterMap = Array<{letter: string, angle: number}>;