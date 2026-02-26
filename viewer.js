let slides = [];
let currentIndex = 0;

fetch("slides.json")
  .then((res) => res.json())
  .then((data) => {
    slides = data;
    loadFromHash();
    window.addEventListener("hashchange", loadFromHash);
  });

function loadFromHash() {
  const hash = window.location.hash.replace("#", "");
  const index = slides.findIndex((s) => s.id === hash);

  currentIndex = index >= 0 ? index : 0;
  renderSlide();
}

function renderSlide() {
  const viewer = document.getElementById("viewer");
  viewer.innerHTML = "";

  const obj = document.createElement("object");
  obj.data = slides[currentIndex].file;
  obj.type = "image/svg+xml";

  viewer.appendChild(obj);

  window.location.hash = slides[currentIndex].id;
}

document.getElementById("prev").onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderSlide();
  }
};

document.getElementById("next").onclick = () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    renderSlide();
  }
};
