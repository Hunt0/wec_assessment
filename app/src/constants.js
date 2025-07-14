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
export const DEFAULT_FIB_FUNC_ZERO_VALUE = 0;
export const DEFAULT_FIB_FUNC_ONE_VALUE = 1;
export const FIB_FUNC_ZERO_VALUE_FIELD = "fibZeroValue";
export const FIB_FUNC_ONE_VALUE_FIELD = "fibOneValue";
export const COMPUTE_LENGTH_FIELD = "computeLength";
export const POSITIVE_INTEGER_ERROR = "Positive integers only";
export const ALPHA_CHAR_ERROR = "Alphabetical characters only";
export const SEQUENCE_ERROR = "Sequence values must be non-negative.  F(0) must be less than F(1).";
export const POS_INT_TYPE = "POS_INT";
export const ALPHA_TEXT_TYPE = "ALPHA_TEXT";

export const MUI_THEME_LIGHT = {
    cssVariables: true,
    palette: {
        mode: THEME_LIGHT,
        primary: {
            main: '#000000',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#424242',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F5F5F5', // Slightly off-white for paper
        },
        text: {
            primary: '#000000',
            secondary: '#424242',
        },
        divider: '#E0E0E0',
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
};

export const MUI_THEME_DARK = {
    cssVariables: true,
    palette: {
        mode: THEME_DARK,
        primary: {
            main: '#FFFFFF',
            contrastText: '#000000',
        },
        secondary: {
            main: '#B0B0B0',
            contrastText: '#000000',
        },
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B0B0B0',
        },
        divider: '#424242',
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
}

export const FIZZ_BUZZ_FIELDS = [
    {
        id: "fizz-value",
        name: FIZZ_VALUE_FIELD,
        label: "Fizz Value",
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

export const FIBONACCI_FIELDS = [
    {
        id: "fib-func-zero-value",
        name: FIB_FUNC_ZERO_VALUE_FIELD,
        label: "F(0)",
        helperText: SEQUENCE_ERROR,
        inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            min: 0,
            step: 1,
            maxLength: 3
        },
    },
    {
        id: "fib-func-one-value",
        name: FIB_FUNC_ONE_VALUE_FIELD,
        label: "F(1)",
        helperText: SEQUENCE_ERROR,
        inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            min: 0,
            step: 1,
            maxLength: 3
        },
    },
    {
        id: "compute-length",
        name: COMPUTE_LENGTH_FIELD,
        label: "Compute Length",
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

export const FIZZ_BONACCI_FIELDS = [
    {
        id: "fib-func-zero-value",
        name: FIB_FUNC_ZERO_VALUE_FIELD,
        label: "F(0)",
        helperText: SEQUENCE_ERROR,
        inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            min: 0,
            step: 1,
            maxLength: 3
        },
    },
    {
        id: "fib-func-one-value",
        name: FIB_FUNC_ONE_VALUE_FIELD,
        label: "F(1)",
        helperText: SEQUENCE_ERROR,
        inputProps: {
            inputMode: "numeric",
            pattern: "[0-9]*",
            min: 0,
            step: 1,
            maxLength: 3
        },
    },
    {
        id: "fizz-value",
        name: FIZZ_VALUE_FIELD,
        label: "Fizz Value",
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
