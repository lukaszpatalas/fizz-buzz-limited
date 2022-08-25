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