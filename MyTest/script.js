const carousel = document.getElementById("carousel");

function scrollCarousel(direction) {
  carousel.scrollBy({
    left: direction * 300,
    behavior: "smooth"
  });
}

function openModal(title, price, location, detail, img) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-price").innerText = price;
  document.getElementById("modal-location").innerText = location;
  document.getElementById("modal-detail").innerText = detail;
  document.getElementById("modal-img").src = img;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
