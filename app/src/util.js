export const fizzBuzz = (
    computeLength = 0,
    fizzValue = 3,
    buzzValue = 5,
    fizzText = "Fizz",
    buzzText = "Buzz",
    fizzBuzzText = "FizzBuzz"
) => {
    let fizzBuzzResult = [];

    for (let i = 0; i < computeLength; i++) {
        const computeIndex = i + 1;

        if (computeIndex % fizzValue === 0 && computeIndex % buzzValue === 0) {
            fizzBuzzResult.push(fizzBuzzText);
        } else if (computeIndex % fuzzValue === 0) {
            fizzBuzzResult.push(fizzText);
        } else if (computeIndex % buzzValue === 0) {
            fizzBuzzResult.push(buzzText);
        } else {
            fizzBuzzResult.push(fizzBuzzText);
        }
    }

    return fizzBuzzResult;
}

export const fibonacci = (computeLength = 0, x = 0, y = 1) => {

}

export const fizzBonacci = () => {

}
