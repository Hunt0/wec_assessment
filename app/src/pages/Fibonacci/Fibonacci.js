import React, { useState } from 'react';
import AlgoForm from 'components/AlgoForm/AlgoForm';
import FormOutput from 'components/FormOutput/FormOutput';
import {
    DEFAULT_COMPUTE_LENGTH,
    DEFAULT_FIB_FUNC_ZERO_VALUE,
    DEFAULT_FIB_FUNC_ONE_VALUE,
    FIB_FUNC_ZERO_VALUE_FIELD,
    FIB_FUNC_ONE_VALUE_FIELD,
    COMPUTE_LENGTH_FIELD,
    FIBONACCI_FIELDS
} from 'constants';
import { isPositiveInteger, isSequence, computeFibonacci } from 'util';

const defaultFormData = {
    [FIB_FUNC_ZERO_VALUE_FIELD]: DEFAULT_FIB_FUNC_ZERO_VALUE,
    [FIB_FUNC_ONE_VALUE_FIELD]: DEFAULT_FIB_FUNC_ONE_VALUE,
    [COMPUTE_LENGTH_FIELD]: DEFAULT_COMPUTE_LENGTH
};

const Fibonacci = () => {
    const [computeResult, setComputeResult] = useState(null);

    const onValidate = (changedFormData) => {
        let fieldErrors = {};
        for (let key in changedFormData) {
            if (key === FIB_FUNC_ZERO_VALUE_FIELD || key === FIB_FUNC_ONE_VALUE_FIELD) {
                fieldErrors[key] = !isSequence(changedFormData[FIB_FUNC_ZERO_VALUE_FIELD], changedFormData[FIB_FUNC_ONE_VALUE_FIELD]);
            } else {
                fieldErrors[key] = !isPositiveInteger(changedFormData[key]);
            }
        }

        return fieldErrors;
    }

    const onCompute = (formData) => {
        const computeLength = parseInt(formData[COMPUTE_LENGTH_FIELD]);
        const fibFuncZero = parseInt(formData[FIB_FUNC_ZERO_VALUE_FIELD]);
        const fibFuncOne = parseInt(formData[FIB_FUNC_ONE_VALUE_FIELD]);

        const result = computeFibonacci(computeLength, fibFuncZero, fibFuncOne);

        setComputeResult(result);
    }

    return (
        <>
            <AlgoForm
                title="Fibonacci"
                fieldsConfig={FIBONACCI_FIELDS}
                defaultFormData={defaultFormData}
                onValidate={onValidate}
                onCompute={onCompute}
            />
            {computeResult && <FormOutput>{computeResult.join(", ")}</FormOutput>}
        </>
    );
}

export default Fibonacci;
