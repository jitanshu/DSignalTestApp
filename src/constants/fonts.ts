import { isIOS } from './utils/platformUtils';

export const fontFamilies = {
    UBER_MOVE_TEXT: {
        light: isIOS() ? 'UberMove-Light' : 'UberMoveLight',
        normal: isIOS() ? 'UberMove-Regular' : 'UberMoveRegular',
        medium: isIOS() ? 'UberMove-Medium' : 'UberMoveMedium',
        bold: isIOS() ? 'UberMove-Bold' : 'UberMoveBold',
    },
};