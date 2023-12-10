// Function to handle file upload
document.getElementById('fileInput').addEventListener('change', function(event) {
    const slideshowContainer = document.getElementById('slideshowContainer');
    const files = event.target.files;
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const slide = document.createElement('div');
        slide.className = 'mySlides';
        const img = document.createElement('img');
        img.src = e.target.result;
        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
      };
  
      reader.readAsDataURL(file);
    }
  });
  
  // Slideshow functionality
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    const slides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  