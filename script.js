 const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');

  const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 120;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // run on page load


  function sendToWhatsApp(button) {
    let product = button.parentElement.querySelector("h3").textContent;
    let price = button.parentElement.querySelector(".price").textContent;

    let message = `Hello AJ Walter Beauty! I am interested in the "${product}" `;

    let url = `https://wa.me/2349033847211?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  }
