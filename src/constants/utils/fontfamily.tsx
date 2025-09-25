import { fontFamilies } from '../fonts';

export const getFontFamily = (
    weight: 'light' | 'normal' | 'medium' | 'bold',
) => {
    const selectedFontFamily = fontFamilies.UBER_MOVE_TEXT;
    return selectedFontFamily[weight];
};