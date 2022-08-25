const fibonacci = function (number) {
    const myArray = [];
    myArray[0] = 1;
    myArray[1] = 1;
    let num = null;
    if (typeof number === "string") {
        num = parseInt(number);
    } else {
        num = number;
    }

    if (num === 1 || num === 2) {
        return 1;
    }
    else if (num > 2) {

        for (let i = 2; i < num; i++) {
            myArray[i] = myArray[i - 1] + myArray[i - 2];
        }
        return myArray[myArray.length - 1];
    } else {
        return "OOPS";
    }
};
