function renderBookOverview(book) {
  return `
    <section id="${book.id}-overview" class="overview section light-background">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-center gy-5 gx-lg-5">
          <div class="col-lg-6">
            <div class="overview-book-img" data-aos="fade-right" data-aos-delay="200">
              <img src="${book.cover}" alt="${book.title}" class="img-fluid">
              <div class="book-details">
                <div class="detail-item"><i class="bi bi-journal"></i><div><span>Pages</span><p>${book.pages}</p></div></div>
                <div class="detail-item"><i class="bi bi-calendar3"></i><div><span>Published</span><p>${book.published}</p></div></div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="overview-book-content" data-aos="fade-left" data-aos-delay="300">
              <h2>${book.title}</h2>
              <div class="book-category">
                ${book.category.map(cat => `<span><i class="bi bi-bookmark"></i> ${cat}</span>`).join('')}
              </div>
              ${book.description.map(desc => `<p>${desc}</p>`).join('')}
              <div class="highlights">
                <h3>What You'll Discover:</h3>
                <ul>
                  ${book.highlights.map(h => `<li><i class="bi bi-check-circle"></i><span>${h}</span></li>`).join('')}
                </ul>
              </div>
              <a href="${book.cta}" class="overview-book-cta">
                Start Reading <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}