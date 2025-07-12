import './FizzBuzz.css';
import {
    Box,
    Button,
    IconButton
} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useState }  from 'react';
import Form from 'components/Form/Form';
import FormOutput from 'components/FormOutput/FormOutput';
import FieldGenerator from 'components/FieldGenerator/FieldGenerator';
import {
    DEFAULT_FIZZ_VALUE,
    DEFAULT_BUZZ_VALUE,
    DEFAULT_FIZZ_TEXT,
    DEFAULT_BUZZ_TEXT,
    DEFAULT_COMPUTE_LENGTH,
    FIZZ_VALUE_FIELD,
    BUZZ_VALUE_FIELD,
    FIZZ_TEXT_FIELD,
    BUZZ_TEXT_FIELD,
    COMPUTE_LENGTH_FIELD,
    FIZZ_BUZZ_FIELDS
} from 'constants';
import { isPositiveInteger, isAlphaText } from 'util';

const initFormData = {
    isValid: true,
    [FIZZ_VALUE_FIELD]: DEFAULT_FIZZ_VALUE,
    [BUZZ_VALUE_FIELD]: DEFAULT_BUZZ_VALUE,
    [FIZZ_TEXT_FIELD]: DEFAULT_FIZZ_TEXT,
    [BUZZ_TEXT_FIELD]: DEFAULT_BUZZ_TEXT,
    [COMPUTE_LENGTH_FIELD]: DEFAULT_COMPUTE_LENGTH
};

const initFieldErrors = {
    [FIZZ_VALUE_FIELD]: false,
    [BUZZ_VALUE_FIELD]: false,
    [FIZZ_TEXT_FIELD]: false,
    [BUZZ_TEXT_FIELD]: false,
    [COMPUTE_LENGTH_FIELD]: false,
};

const FizzBuzz = () => {
    const [formData, setFormData] = useState(initFormData);
    const [fieldErrors, setFieldErrors] = useState(initFieldErrors);

    const onSubmit = () => {

    }

    const onFormChange = ({ target: { name, value } }) => {
        let isIntegerField = name === FIZZ_VALUE_FIELD || name === BUZZ_VALUE_FIELD || name === COMPUTE_LENGTH_FIELD;
        let isValid = isIntegerField ? isPositiveInteger(value) : isAlphaText(value);

        setFieldErrors((prevData) => ({
            ...prevData,
            [name]: !isValid
        }));

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            isValid
        }));
    }

    const onReset = () => {
        setFormData(initFormData);
    }

    return (
        <div className="FizzBuzz-Container">
            <header className="FizzBuzz-Header">FizzBuzz</header>
            <Form>
                <FieldGenerator
                    fields={FIZZ_BUZZ_FIELDS}
                    formData={formData}
                    fieldErrors={fieldErrors}
                    onFormChange={onFormChange}
                />
                <Box className="FizzBuzz-Form-Actions-Container">
                    <Button
                        onClick={onSubmit}
                        aria-label="Submit button"
                        variant="contained"
                        disabled={!formData.isValid}
                    >
                        Submit
                    </Button>
                    <IconButton aria-label="Reset button" onClick={onReset}>
                        <RestartAltIcon />
                    </IconButton>
                </Box>
            </Form>
        </div>
    );
}

export default FizzBuzz;
