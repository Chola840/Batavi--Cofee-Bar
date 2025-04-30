document.addEventListener('DOMContentLoaded', function () {
    const orderButton = document.querySelector('.order');
    const contactButton = document.querySelector('.contact');
  
    orderButton.addEventListener('click', () => {
      document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
    });
  
    contactButton.addEventListener('click', () => {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
  
    const mainContent = document.querySelector('main');
  
    const testimonialsSection = document.querySelector('#testimonials');
    testimonialsSection.innerHTML = '<h2>Testimonials</h2>';
  
    siteContent.testimonials.forEach(({ name, comment }) => {
      const div = document.createElement('div');
      div.innerHTML = `<p><strong>${name}</strong>: ${comment}</p>`;
      testimonialsSection.appendChild(div);
    });
  
    
    const gallerySection = document.querySelector('#gallery');
    gallerySection.innerHTML = '<h2>Gallery</h2>';
  
    const galleryContainer = document.createElement('div');
    siteContent.galleryImages.forEach(img => {
      const el = document.createElement('img');
      el.src = `Images/${img}`;
      el.alt = `Gallery Image ${img}`;
      galleryContainer.appendChild(el);
    });
    gallerySection.appendChild(galleryContainer);
  
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
  });
  
