function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  books.forEach(book => {
    const isBorrowed = !book.borrows[0].returned;
    if (isBorrowed) {
      result += 1;
    }
  });
  return result;
}

function getMostCommonGenres(books) {
  const genreCounts = {};
  books.forEach(book => {
    const genre = book.genre;
    if (genreCounts[genre]) {
      genreCounts[genre]++;
    } else {
      genreCounts[genre] = 1;
    }
  });
  const genreArray = Object.keys(genreCounts).map(name => ({
    name,
    count: genreCounts[name],
  }));
  genreArray.sort((a, b) => b.count - a.count);
  return genreArray.slice(0, 5);
}

function getMostPopularBooks(books) {
  const mostPopularBooks = [];
  books.forEach(book => {
    const borrowsCount = book.borrows.length;
    const bookInfo = {
      name: book.title,
      count: borrowsCount,
    };
    mostPopularBooks.push(bookInfo);
  });
  mostPopularBooks.sort((a, b) => b.count - a.count);
  return mostPopularBooks.slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  const authorBorrowCounts = {};
  books.forEach(book => {
    const authorId = book.authorId;
    const borrowsCount = book.borrows.length;
    const author = authors.find(author => author.id === authorId);
    const authorName = `${author.name.first} ${author.name.last}`;
    if (authorBorrowCounts[authorName]) {
      authorBorrowCounts[authorName] += borrowsCount;
    } else {
      authorBorrowCounts[authorName] = borrowsCount;
    }
  });
  const popularAuthorsArray = Object.keys(authorBorrowCounts).map(name => ({
    name,
    count: authorBorrowCounts[name],
  }));
  popularAuthorsArray.sort((a, b) => b.count - a.count);
  return popularAuthorsArray.slice(0, 5);
}

/* helper function: */

function getAuthorFullName(author) {
  return `${author.name.first} ${author.name.last}`;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
