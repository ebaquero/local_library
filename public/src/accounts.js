function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const borrows = book.borrows;
    const count = borrows.filter(borrow => borrow.id === account.id).length;
    return total + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => {
    const mostRecentBorrow = book.borrows[0];
    return mostRecentBorrow.id === account.id && !mostRecentBorrow.returned;
  }).map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return { ...book, author};
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
