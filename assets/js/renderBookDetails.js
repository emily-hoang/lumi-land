function renderBookDetails(book) {
  return `
    <section id="${book.id}" class="book-details section">
      <div class="container section-title" data-aos="fade-up">
        <h2>${book.title}</h2>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="book-book-details-wrapper" data-aos="fade-up" data-aos-delay="300">
              <div class="book-page-design">
                <div class="page-number">${book.pageNumber}</div>
                <div class="chapter-title">${book.chapterTitle}</div>
                <div class="book-details-content">
                  ${book.images.map((img, idx) => `
                    <div class="story-image text-center my-4">
                      <img src="${img}" alt="${book.altPrefix} - ${idx+1}" class="img-fluid rounded" loading="lazy">
                    </div>
                  `).join('')}
                </div>
                <div class="cta-wrapper text-center mt-4">
                  <a href="#available-books" class="btn-read-more">
                    Available Books <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}