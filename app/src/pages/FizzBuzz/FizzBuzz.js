import './FizzBuzz.css';
import {
    FormControl,
    TextField,
    Grid,
    Box,
    Button,
    IconButton
} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useState }  from 'react';
import Form from 'components/Form/Form';
import FormOutput from 'components/FormOutput/FormOutput';
import FizzBuzzGrid from 'components/FizzBuzzGrid/FizzBuzzGrid';
import {
    DEFAULT_FIZZ_VALUE,
    DEFAULT_BUZZ_VALUE,
    DEFAULT_FIZZ_TEXT,
    DEFAULT_BUZZ_TEXT,
    DEFAULT_FIZZ_BUZZ_TEXT,
    DEFAULT_COMPUTE_LENGTH,
    FIZZ_VALUE_FIELD,
    BUZZ_VALUE_FIELD,
    FIZZ_TEXT_FIELD,
    BUZZ_TEXT_FIELD,
    COMPUTE_LENGTH_FIELD
} from 'constants';

const initFormData = {
    computeLength: 1,
    isValid: true,
    [FIZZ_VALUE_FIELD]: DEFAULT_FIZZ_VALUE,
    [BUZZ_VALUE_FIELD]: DEFAULT_BUZZ_VALUE,
    [FIZZ_TEXT_FIELD]: DEFAULT_FIZZ_TEXT,
    [BUZZ_TEXT_FIELD]: DEFAULT_BUZZ_TEXT,
    [COMPUTE_LENGTH_FIELD]: DEFAULT_COMPUTE_LENGTH
};

const FizzBuzz = () => {
    const [formData, setFormData] = useState(initFormData);

    const onSubmit = () => {

    }

    const onFormChange = (fieldName, value, isValid) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
            isValid
        }));
    }

    const onReset = () => {
        setFormData(initFormData);
    }

    return (
        <div className="FizzBuzz-Container">
            <header className="FizzBuzz-Header">FizzBuzz</header>
            <Form onSubmit={onSubmit}>
                <FizzBuzzGrid formData={formData} onFormChange={onFormChange} />
                <Box className="FizzBuzz-Box">
                    <FormControl className="FizzBuzz-Compute-FormControl">
                        <TextField
                            id="compute-length-input"
                            label="Compute Length"
                            name={COMPUTE_LENGTH_FIELD}
                            type="number"
                            defaultValue={formData.computeLength}
                            //onChange={handleChange}
                            inputProps={{ min: 1 }}
                        />
                    </FormControl>
                    <Box className="FizzBuzz-Button-Container">
                        <Button
                            type="submit"
                            variant="contained"
                            aria-label="Submit form"
                            disabled={!formData.isValid}
                        >
                            Submit
                        </Button>
                        <IconButton aria-label="Reset form" onClick={onReset}>
                            <RestartAltIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Form>
        </div>
    );
}

export default FizzBuzz;
