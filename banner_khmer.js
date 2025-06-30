fetch("../banner_Khmer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("banner-container").innerHTML = data;

    // Inject slide switching script
    const slideScript = document.createElement("script");
    slideScript.textContent = `
      const slides = document.querySelectorAll(".slide");
      let current = 0;
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.remove("active");
          if (i === index) slide.classList.add("active");
        });
      }
      function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
      }
      setInterval(nextSlide, 5000);
    `;
    document.body.appendChild(slideScript);

    // Inject typing text script
    const typingScript = document.createElement("script");
    typingScript.textContent = `
      const text = "ស្វាគមន៍មកកាន់ហាងម្ហូបខ្មែរ";
      const typingText = document.getElementById("typing-text");
      let index = 0;
      let isDeleting = false;
      function typeLoop() {
        if (!isDeleting) {
          typingText.innerHTML = text.substring(0, index + 1);
          index++;
          if (index === text.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1200);
            return;
          }
        } else {
          typingText.innerHTML = text.substring(0, index - 1);
          index--;
          if (index === 0) {
            isDeleting = false;
            setTimeout(typeLoop, 600);
            return;
          }
        }
        setTimeout(typeLoop, isDeleting ? 60 : 100);
      }
      typeLoop();
    `;
    document.body.appendChild(typingScript);
  });
