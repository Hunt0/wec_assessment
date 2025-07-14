import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FieldGenerator from 'components/FieldGenerator/FieldGenerator';
import './AlgoForm.css';

const AlgoForm = ({
    title,
    fieldsConfig,
    defaultFormData,
    onValidate,
    onCompute,
}) => {
    const initFieldErrors = Object.keys(defaultFormData).map((key) => ({
        [key]: false,
    }), {});

    const [formData, setFormData] = useState({ ...defaultFormData });
    const [fieldErrors, setFieldErrors] = useState(initFieldErrors);
    const [isFormValid, setIsFormValid] = useState(true);

    const onFormChange = (changedFieldName, changedValue) => {
        const changedFormData = {
            ...formData,
            [changedFieldName]: changedValue,
        };
        const fieldErrors = onValidate(changedFormData);
        const isValid = Object.keys(fieldErrors).every(key => fieldErrors[key] === false);

        setFieldErrors(fieldErrors);
        setFormData({ ...changedFormData });
        setIsFormValid(isValid);
    };

    const onReset = () => {
        setFormData({ ...defaultFormData });
        setFieldErrors(initFieldErrors);
        setIsFormValid(true);
    };

    const onSubmit = () => {
        if (isFormValid && onCompute) {
            onCompute(formData);
        }
    };

    return (
        <div className="AlgoForm-Container">
            <h1 className="AlgoForm-Header">{title}</h1>
            <form className="AlgoForm-Form">
                <FieldGenerator
                    fields={fieldsConfig}
                    formData={formData}
                    fieldErrors={fieldErrors}
                    onFormChange={onFormChange}
                />
                <Box className="AlgoForm-Actions-Container">
                    <Button
                        onClick={onSubmit}
                        aria-label="Submit button"
                        variant="contained"
                        disabled={!isFormValid}
                    >
                        Submit
                    </Button>
                    <IconButton aria-label="Reset button" onClick={onReset}>
                        <RestartAltIcon />
                    </IconButton>
                </Box>
            </form>
        </div>
    );
};

export default AlgoForm;
