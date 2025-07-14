import React, { useState } from 'react';
import AlgoForm from 'components/AlgoForm/AlgoForm';
import FormOutput from 'components/FormOutput/FormOutput';
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
    DEFAULT_FIB_FUNC_ZERO_VALUE,
    DEFAULT_FIB_FUNC_ONE_VALUE,
    FIB_FUNC_ZERO_VALUE_FIELD,
    FIB_FUNC_ONE_VALUE_FIELD,
    COMPUTE_LENGTH_FIELD,
    FIZZ_BONACCI_FIELDS
} from 'constants';
import { isPositiveInteger, isAlphaText, isSequence, computeFizzBonacci } from 'util';

const defaultFormData = {
    [FIB_FUNC_ZERO_VALUE_FIELD]: DEFAULT_FIB_FUNC_ZERO_VALUE,
    [FIB_FUNC_ONE_VALUE_FIELD]: DEFAULT_FIB_FUNC_ONE_VALUE,
    [FIZZ_VALUE_FIELD]: DEFAULT_FIZZ_VALUE,
    [BUZZ_VALUE_FIELD]: DEFAULT_BUZZ_VALUE,
    [FIZZ_TEXT_FIELD]: DEFAULT_FIZZ_TEXT,
    [BUZZ_TEXT_FIELD]: DEFAULT_BUZZ_TEXT,
    [COMPUTE_LENGTH_FIELD]: DEFAULT_COMPUTE_LENGTH
};

const FizzBonacci = () => {
    const [computeResult, setComputeResult] = useState(null);

    const onValidate = (changedFormData) => {
        let fieldErrors = {};
        for (let key in changedFormData) {
            if (key === FIB_FUNC_ZERO_VALUE_FIELD || key === FIB_FUNC_ONE_VALUE_FIELD) {
                fieldErrors[key] = !isSequence(changedFormData[FIB_FUNC_ZERO_VALUE_FIELD], changedFormData[FIB_FUNC_ONE_VALUE_FIELD]);
            } else if (key === FIZZ_TEXT_FIELD || key === BUZZ_TEXT_FIELD) {
                fieldErrors[key] = !isAlphaText(changedFormData[key]);
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
        const fizzValue = parseInt(formData[FIZZ_VALUE_FIELD]);
        const buzzValue = parseInt(formData[BUZZ_VALUE_FIELD]);
        const fizzText = formData[FIZZ_TEXT_FIELD];
        const buzzText = formData[BUZZ_TEXT_FIELD];

        const result = computeFizzBonacci(
            computeLength,
            fibFuncZero,
            fibFuncOne,
            fizzValue,
            buzzValue,
            fizzText,
            buzzText);

        setComputeResult(result);
    }

    return (
        <>
            <AlgoForm
                title="FizzBonacci"
                fieldsConfig={FIZZ_BONACCI_FIELDS}
                defaultFormData={defaultFormData}
                onValidate={onValidate}
                onCompute={onCompute}
            />
            {computeResult && <FormOutput>{computeResult.join(", ")}</FormOutput>}
        </>
    );
}

export default FizzBonacci;
