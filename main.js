// Shared site behaviour: hero carousel + FAQ accordion + certificates demo
// Nav dropdowns (Competitions / Participants) open on hover via CSS only, matching
// the live site, which has no mobile-specific menu — see styles.css min-width note.

document.addEventListener('DOMContentLoaded', () => {
  // Hero carousel (home page only)
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) {
    const dots = document.querySelectorAll('.hero-dots .dot');
    const prevBtn = document.querySelector('.hero-arrow-prev');
    const nextBtn = document.querySelector('.hero-arrow-next');

    // Each image already has its event name baked into the photo itself (no text overlay on the live site).
    const slides = [
      'https://static.wixstatic.com/media/551cc9_c8562a3cf05f4f199089fafdf89fa3e9~mv2.jpg/v1/fill/w_1265,h_427,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/551cc9_c8562a3cf05f4f199089fafdf89fa3e9~mv2.jpg',
      'https://static.wixstatic.com/media/551cc9_e132d57b1b56491dbe085d092239843a~mv2.jpg/v1/fill/w_1265,h_427,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/551cc9_e132d57b1b56491dbe085d092239843a~mv2.jpg',
      'https://static.wixstatic.com/media/551cc9_591a23ce9c1f47eabf053f7ca4115a53~mv2.jpg/v1/fill/w_1265,h_427,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/551cc9_591a23ce9c1f47eabf053f7ca4115a53~mv2.jpg',
      'https://static.wixstatic.com/media/551cc9_f7573763b03b4626be66809b3539fa25~mv2.jpg/v1/fill/w_1265,h_427,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/551cc9_f7573763b03b4626be66809b3539fa25~mv2.jpg',
      'https://static.wixstatic.com/media/551cc9_5e5bcdde9a3e488eaa91acb0c781c961~mv2.jpg/v1/fill/w_1265,h_427,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/551cc9_5e5bcdde9a3e488eaa91acb0c781c961~mv2.jpg',
      'https://static.wixstatic.com/media/551cc9_39a4c27dd67c42d786dde5f2a4e504aa~mv2.png/v1/fill/w_1265,h_427,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/551cc9_39a4c27dd67c42d786dde5f2a4e504aa~mv2.png'
    ];

    let current = 0;

    function goToSlide(index) {
      current = (index + slides.length) % slides.length;
      heroImg.src = slides[current];
      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));
  }

  // FAQ accordion (faq.html)
  document.querySelectorAll('.faq-card').forEach((card) => {
    card.addEventListener('click', () => {
      const answer = document.getElementById(card.getAttribute('aria-controls'));
      if (!answer) return;
      const isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq-answer.open').forEach((a) => a.classList.remove('open'));
      if (!isOpen) answer.classList.add('open');
    });
  });

  // Certificates search (static demo — no backend available)
  const certForm = document.querySelector('.certificates-section');
  if (certForm) {
    const searchBtn = certForm.querySelector('.btn-search');
    const resultsLabel = certForm.querySelector('.results-label');
    if (searchBtn && resultsLabel) {
      searchBtn.addEventListener('click', () => {
        resultsLabel.textContent = 'Results — no matching record (demo: not connected to a live database)';
      });
    }
  }
});
