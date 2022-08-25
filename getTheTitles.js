const getTheTitles = function (books) {
    const onlyBooks = [];
    books.forEach(book => {
        onlyBooks.push(book.title);
    });
    return onlyBooks;
};
