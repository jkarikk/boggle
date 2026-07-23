import {useState} from "react";
import type {AlphabetMap, CountsMap, SortedLetterMap} from "../types";

export const alphabet: AlphabetMap = {
    'a': { frequency: 5, maxRepeat: 3 },
    'б': { frequency: 2, maxRepeat: 2 },
    'в': { frequency: 3, maxRepeat: 2 },
    'г': { frequency: 2, maxRepeat: 2 },
    'д': { frequency: 3, maxRepeat: 2 },
    'е': { frequency: 5, maxRepeat: 3 },
    'ж': { frequency: 1, maxRepeat: 2 },
    'з': { frequency: 2, maxRepeat: 2 },
    'и': { frequency: 5, maxRepeat: 2 },
    'й': { frequency: 1, maxRepeat: 1 },
    'к': { frequency: 3, maxRepeat: 2 },
    'л': { frequency: 4, maxRepeat: 2 },
    'м': { frequency: 3, maxRepeat: 2 },
    'н': { frequency: 4, maxRepeat: 2 },
    'о': { frequency: 5, maxRepeat: 3 },
    'п': { frequency: 3, maxRepeat: 2 },
    'р': { frequency: 4, maxRepeat: 2 },
    'c': { frequency: 4, maxRepeat: 2 },
    'т': { frequency: 4, maxRepeat: 2 },
    'у': { frequency: 3, maxRepeat: 2 },
    'ф': { frequency: 1, maxRepeat: 2 },
    'х': { frequency: 1, maxRepeat: 2 },
    'ц': { frequency: 1, maxRepeat: 2 },
    'ч': { frequency: 2, maxRepeat: 2 },
    'ш': { frequency: 1, maxRepeat: 2 },
    'щ': { frequency: 1, maxRepeat: 2 },
    'ы': { frequency: 1, maxRepeat: 1 },
    'ь': { frequency: 1, maxRepeat: 1 },
    'э': { frequency: 1, maxRepeat: 2 },
    'ю': { frequency: 1, maxRepeat: 2 },
    'я': { frequency: 2, maxRepeat: 2 },
};

export const rotateAngles: Array<number> = [0, 90, 180, 270];