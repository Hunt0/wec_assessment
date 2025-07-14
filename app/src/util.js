export const computeFizzBuzz = (
    computeLength,
    fizzValue,
    buzzValue,
    fizzText,
    buzzText,
) => {
    let result = [];

    for (let i = 0; i < computeLength; i++) {
        const value = getFizzBuzzValue(i, fizzValue, buzzValue, fizzText, buzzText);

        result.push(value);
    }

    return result;
}

const getFizzBuzzValue = (computeValue, fizzValue, buzzValue, fizzText, buzzText) => {
    if (computeValue % fizzValue === 0 && computeValue % buzzValue === 0) {
        return fizzText + buzzText;
    } else if (computeValue % fizzValue === 0) {
        return fizzText;
    } else if (computeValue % buzzValue === 0) {
        return buzzText;
    }

    return computeValue;
}

export const computeFibonacci = (computeLength, funcZero, funcOne) => {
    if (computeLength === 1) {
        return [funcZero];
    }

    if (computeLength === 2) {
        return [funcZero, funcOne];
    }

    let result = [funcZero, funcOne];
    let previousCompute = result[0];

    for (let i = 2; i < computeLength; i++) {
        let currentCompute = result[i - 1];
        let newCompute = currentCompute + previousCompute;

        result.push(newCompute);

        previousCompute = currentCompute;
    }

    return result;
}

export const computeFizzBonacci = (
    computeLength,
    funcZero,
    funcOne,
    fizzValue,
    buzzValue,
    fizzText,
    buzzText,
) => {
    let result = [];

    let fibonacciResult = computeFibonacci(computeLength, funcZero, funcOne);

    for (let i = 0; i < fibonacciResult.length; i++) {
        const value = getFizzBuzzValue(fibonacciResult[i], fizzValue, buzzValue, fizzText, buzzText);

        result.push(value);
    }

    return result;
}

export const isSequence = (funcZeroValue, funcOneValue) => {
    return isInteger(funcZeroValue) && isInteger(funcOneValue) &&
        parseInt(funcZeroValue) >= 0 && parseInt(funcZeroValue) < parseInt(funcOneValue);
}

const isInteger = (value) => {
    const regex = /^-?\d+$/;
    return regex.test(value);
}

export const isPositiveInteger = (value) => {
    const regex = /^\d+$/;
    return regex.test(value) && parseInt(value) > 0;
}

export const isAlphaText = (value) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(value);
}
