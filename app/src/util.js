
export const fizzBuzz = (
    computeLength,
    fizzValue,
    buzzValue,
    fizzText,
    buzzText,
    fizzBuzzText
) => {
    let fizzBuzzResult = [];

    for (let i = 0; i < computeLength; i++) {
        const computeIndex = i + 1;

        if (computeIndex % fizzValue === 0 && computeIndex % buzzValue === 0) {
            fizzBuzzResult.push(fizzBuzzText);
        } else if (computeIndex % fizzValue === 0) {
            fizzBuzzResult.push(fizzText);
        } else if (computeIndex % buzzValue === 0) {
            fizzBuzzResult.push(buzzText);
        } else {
            fizzBuzzResult.push(fizzBuzzText);
        }
    }

    return fizzBuzzResult;
}

export const fibonacci = (computeLength, x, y) => {

}

export const fizzBonacci = () => {

}

export const isPositiveInteger = (value) => {
    const regex = /^\d+$/;
    const ret = regex.test(value);
    return regex.test(value);
}

export const isText = (value) => {
    const regex = new RegExp('^[A-Za-z]+$');
    return regex.test(value);
}
