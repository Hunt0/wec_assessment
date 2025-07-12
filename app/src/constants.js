export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const LOCAL_COLOR_THEME = "colorTheme";
export const DEFAULT_FIZZ_TEXT = "Fizz";
export const DEFAULT_BUZZ_TEXT = "Buzz";
export const DEFAULT_FIZZ_VALUE = 3;
export const DEFAULT_BUZZ_VALUE = 5;
export const DEFAULT_COMPUTE_LENGTH = 10;
export const FIZZ_VALUE_FIELD = "fizzValue";
export const BUZZ_VALUE_FIELD = "buzzValue";
export const FIZZ_TEXT_FIELD = "fizzText";
export const BUZZ_TEXT_FIELD = "buzzText";
export const COMPUTE_LENGTH_FIELD = "computeLength";
export const POSITIVE_INTEGER_ERROR = "Positive integers only";
export const ALPHA_CHAR_ERROR = "Alphabetical characters only";
export const POS_INT_TYPE = "POS_INT";
export const ALPHA_TEXT_TYPE = "ALPHA_TEXT";

export const FIZZ_BUZZ_FIELDS = [
    {
        id: "fizz-value",
        name: FIZZ_VALUE_FIELD,
        label: "Fizz Value",
        type: POS_INT_TYPE, 
        helperText: POSITIVE_INTEGER_ERROR,
        inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            min: 0,
            step: 1,
            maxLength: 3
        },
    },
    {
        id: "buzz-value",
        name: BUZZ_VALUE_FIELD,
        label: "Buzz Value",
        type: POS_INT_TYPE, 
        helperText: POSITIVE_INTEGER_ERROR,
        inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            min: 0,
            step: 1,
            maxLength: 3
        },
    },
    {
        id: "fizz-text",
        name: FIZZ_TEXT_FIELD,
        label: "Fizz Text",
        type: ALPHA_TEXT_TYPE,
        helperText: ALPHA_CHAR_ERROR,
        inputProps: {
            inputMode: "text",
            maxLength: 10
        }
    },
    {
        id: "buzz-text",
        name: BUZZ_TEXT_FIELD,
        label: "Buzz Text",
        type: ALPHA_TEXT_TYPE,
        helperText: ALPHA_CHAR_ERROR,
        inputProps: {
            inputMode: "text",
            maxLength: 10
        }
    },
    {
        id: "compute-length",
        name: COMPUTE_LENGTH_FIELD,
        label: "Compute Length",
        type: POS_INT_TYPE,
        helperText: POSITIVE_INTEGER_ERROR,
        inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            min: 1,
            step: 1,
            maxLength: 3
        },
    }
];
