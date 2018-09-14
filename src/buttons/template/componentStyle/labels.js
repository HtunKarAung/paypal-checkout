/* @flow */

import { BUTTON_SIZE_STYLE } from '../../config';
import { BUTTON_LABEL, BUTTON_LOGO, BUTTON_SIZE, BUTTON_LAYOUT, BUTTON_NUMBER, CLASS } from '../../../constants';

export let labelStyle = `

    .${ CLASS.BUTTON }.${ CLASS.LABEL }-${ BUTTON_LABEL.CARD } {
        border-radius: 0 !important;
    }

    .${ CLASS.BUTTON }.${ CLASS.LABEL }-${ BUTTON_LABEL.CREDIT } .${ CLASS.TEXT } {
        display: none !important;
    }

    .${ CLASS.BUTTON }.${ CLASS.LAYOUT }-${ BUTTON_LAYOUT.HORIZONTAL }.${ CLASS.NUMBER }-${ BUTTON_NUMBER.MULTIPLE }.${ CLASS.LABEL }-${ BUTTON_LABEL.CREDIT } .${ CLASS.LOGO }.${ CLASS.LOGO }-${ BUTTON_LOGO.PAYPAL } {
        display: none;
    }

    @media only screen and (max-width : ${ BUTTON_SIZE_STYLE[BUTTON_SIZE.SMALL].minWidth }px) {

        .${ CLASS.BUTTON }.${ CLASS.LABEL }-${ BUTTON_LABEL.CREDIT } .${ CLASS.LOGO }.${ CLASS.LOGO }-${ BUTTON_LOGO.PAYPAL } {
            display: none;
        }
    }

    @media only screen and (min-width : ${ BUTTON_SIZE_STYLE[BUTTON_SIZE.SMALL].minWidth  }px) {

        .${ CLASS.BUTTON }.${ CLASS.LABEL }-${ BUTTON_LABEL.CREDIT } .${ CLASS.LOGO }.${ CLASS.LOGO }-${ BUTTON_LOGO.PAYPAL } {
            display: inline-block;
        }
    }
`;