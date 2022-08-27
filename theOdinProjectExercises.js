const findTheOldest = function (people) {
    const oldest = people.sort(function (a, b) {
        let lastPerson = null;
        let nextPerson = null;
        const date = new Date();
        let currentYear = date.getFullYear();

        if (a.hasOwnProperty('yearOfDeath')) {
            lastPerson = a.yearOfDeath - a.yearOfBirth;
        } else {
            lastPerson = currentYear - a.yearOfBirth;
        }

        if (b.hasOwnProperty('yearOfDeath')) {
            nextPerson = b.yearOfDeath - b.yearOfBirth;
        } else {
            nextPerson = currentYear - b.yearOfBirth;
        }

        return lastPerson > nextPerson ? -1 : 1;
    })
    return oldest[0];
};

const getTheTitles = function (books) {
    const onlyBooks = [];
    books.forEach(book => {
        onlyBooks.push(book.title);
    });
    return onlyBooks;
};

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
