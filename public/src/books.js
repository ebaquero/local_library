function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const result = [[], []];
  books.forEach(book => {
    const isBorrowed = !book.borrows[0].returned;
    isBorrowed ? result[0].push(book) : result[1].push(book);
  });
  return result
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  const result = [];
  for (const borrow of borrows) {
    const account = accounts.find(account => account.id === borrow.id);
    const accountWithStatus = { ...account, returned: borrow.returned };
    result.push(accountWithStatus);
  }
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
