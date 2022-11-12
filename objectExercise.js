function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read

    this.info = function() {
        if (read === true) {
            return `${title} by ${author}, ${pages}, read already.`
        } else {
            return `${title} by ${author}, ${pages}, not read yet.`
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);