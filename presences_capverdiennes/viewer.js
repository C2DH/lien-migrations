let slides = [];

fetch("slides.json")
  .then((res) => res.json())
  .then((data) => {
    slides = data;
    loadFromPath();
  });

window.addEventListener("hashchange", loadFromPath);

function loadFromPath() {
  const hash = window.location.hash.slice(1); // Remove '#'
  const index = hash ? slides.findIndex((s) => s.id === hash) : 0;

  if (index >= 0) {
    renderSlide(index);
  } else {
    renderSlide(0); // fallback
  }
}

function renderSlide(index) {
  const viewer = document.getElementById("viewer");
  viewer.innerHTML = "";

  const obj = document.createElement("object");
  obj.data = slides[index].file;
  obj.type = "image/svg+xml";

  viewer.appendChild(obj);

  createNavigation(index);
}

function createNavigation(index) {
  const nav = document.getElementById("nav");
  nav.innerHTML = "";

  if (index > 0) {
    const prev = document.createElement("a");
    prev.href = "#" + slides[index - 1].id;
    prev.innerText = "← Previous";
    nav.appendChild(prev);
  }

  if (index < slides.length - 1) {
    const next = document.createElement("a");
    next.href = "#" + slides[index + 1].id;
    next.innerText = "Next →";
    nav.appendChild(next);
  }
}
