import {
    FormControl,
    TextField,
    Grid,
} from '@mui/material';
import {
    FIZZ_VALUE_FIELD,
    BUZZ_VALUE_FIELD,
    FIZZ_TEXT_FIELD,
    BUZZ_TEXT_FIELD,
    FIZZ_BUZZ_TEXT_FIELD,
    POSITIVE_INTEGER_ERROR,
    ALPHA_CHAR_ERROR
} from 'constants';
import { useState } from 'react';
import { isPositiveInteger, isText } from 'util';

const initFieldErrors = {
    [FIZZ_VALUE_FIELD]: false,
    [BUZZ_VALUE_FIELD]: false,
    [FIZZ_TEXT_FIELD]: false,
    [BUZZ_TEXT_FIELD]: false,
};

const FizzBuzzGrid = ({formData, onFormChange}) => {
    const [fieldErrors, setFieldErrors] = useState(initFieldErrors);

    const onChange = ({ target: { name, value } }) => {
        let isIntegerField = name === FIZZ_VALUE_FIELD || name === BUZZ_VALUE_FIELD;
        let isValid = isIntegerField ? isPositiveInteger(value) : isText(value);

        setFieldErrors((prevData) => ({
            ...prevData,
            [name]: !isValid
        }));

        onFormChange(name, value, isValid);
    }

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
                <FormControl>
                    <TextField
                        id="fizz-value"
                        name={FIZZ_VALUE_FIELD}
                        defaultValue={formData[FIZZ_VALUE_FIELD]}
                        label="Fizz Value" 
                        error={fieldErrors[FIZZ_VALUE_FIELD]}
                        helperText={fieldErrors[FIZZ_VALUE_FIELD] ? POSITIVE_INTEGER_ERROR : ""}
                        inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            min: 0,
                            step: 1,
                            maxLength: 3
                        }}
                        onChange={onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl>
                    <TextField
                        id="buzz-value"
                        name={BUZZ_VALUE_FIELD}
                        defaultValue={formData[BUZZ_VALUE_FIELD]}
                        label="Buzz Value" 
                        error={fieldErrors[BUZZ_VALUE_FIELD]}
                        helperText={fieldErrors[BUZZ_VALUE_FIELD] ? POSITIVE_INTEGER_ERROR : ""}
                        inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            min: 0,
                            step: 1,
                            maxLength: 3
                        }}
                        onChange={onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl>
                    <TextField
                        id="fizz-text"
                        name={FIZZ_TEXT_FIELD}
                        defaultValue={formData[FIZZ_TEXT_FIELD]}
                        label="Fizz Text" 
                        error={fieldErrors[FIZZ_TEXT_FIELD]}
                        helperText={fieldErrors[FIZZ_TEXT_FIELD] ? ALPHA_CHAR_ERROR: ""}
                        inputProps={{
                            inputMode: "text",
                            maxLength: 10
                        }}
                        onChange={onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl>
                    <TextField
                        id="buzz-text"
                        name={BUZZ_TEXT_FIELD}
                        defaultValue={formData[BUZZ_TEXT_FIELD]}
                        label="Buzz Text" 
                        error={fieldErrors[BUZZ_TEXT_FIELD]}
                        helperText={fieldErrors[BUZZ_TEXT_FIELD] ? ALPHA_CHAR_ERROR: ""}
                        inputProps={{
                            inputMode: "text",
                            maxLength: 10
                        }}
                        onChange={onChange}
                    />
                </FormControl>
            </Grid>
        </Grid>
    )
};

export default FizzBuzzGrid;
