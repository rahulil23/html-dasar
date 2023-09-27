// Ambil elemen carousel untuk produk
const produkCarousel = document.getElementById("produk-carousel");

// Self-executing function
(async function() {
  try {
    const response = await fetch("https://650d9d73a8b42265ec2c7ced.mockapi.io/api/v1/produk/");
    const data = await response.json();

    // Loop melalui data produk dari API dan tampilkan dalam carousel
    data.forEach((produk, index) => {
      const produkElement = document.createElement("div");
      produkElement.className = "list-produk";

      produkElement.innerHTML = `
        <img src="${produk.gambar}" alt="${produk.gambar}">
        <h4>${produk.name}</h4>
        <h5>Rp. ${produk.harga},-</h5>
        <a class="tombol tombol-detail" href="#" onclick="showPopup('detail-popup')">Detail</a>
        <a class="tombol tombol-beli" href="#" onclick="showPopup('beli-popup')">Beli</a>
      `;

      produkCarousel.appendChild(produkElement);
    });
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
}
)()
  
  
  
  
  
  // Fungsi untuk menampilkan popup
  function showPopup(popupId) {
      var popup = document.getElementById(popupId);
      if (popup) {
          popup.style.display = "block";
      }
    }
    
    // Fungsi untuk menutup popup
    function closePopup(popupId) {
      var popup = document.getElementById(popupId);
      if (popup) {
          popup.style.display = "none";
      }
    }
    
    
    
    
    // Ambil elemen-elemen yang diperlukan dari DOM
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    let currentSlideIndex = 0;
    
    // Fungsi untuk menampilkan slide saat ini
    function showSlide(slideIndex) {
      // Sembunyikan semua slide
      for (const slide of carouselSlides) {
        slide.style.display = 'none';
      }
      // Tampilkan slide yang dipilih
      carouselSlides[slideIndex].style.display = 'block';
    }
    
    // Fungsi untuk menampilkan slide berikutnya
    function showNextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= carouselSlides.length) {
        currentSlideIndex = carouselSlides.length - 1; // ubah ke indeks terakhir
      }
      showSlide(currentSlideIndex);
    }
    
    // Fungsi untuk menampilkan slide sebelumnya
    function showPrevSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = 0 ; // ubah ke indeks pertama
      }
      showSlide(currentSlideIndex);
    }
    
    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentSlideIndex);
    
    // Tambahkan event listener untuk tombol-tombol prev dan next
    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);
    