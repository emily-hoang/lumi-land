function renderAvailableBookCard(book, index) {
  return `
    <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="${100 + index * 100}">
      <div class="book-format-card">
        <div class="format-icon">
          <i class="bi bi-book"></i>
        </div>
        <h3>${book.title}</h3>
        <div class="format-price">${book.duration}</div>
        <ul class="format-features">
          ${book.features.map(f => `<li><i class="bi bi-check-circle"></i> ${f}</li>`).join('')}
        </ul>
        <div class="buy-options">
          <a href="${book.link}" class="btn-available-books">${book.linkText}</a>
        </div>
      </div>
    </div>
  `;
}