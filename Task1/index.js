const extraParagraph = document.getElementsByClassName(
  "card__extra_paragraph"
)[0];
const btn = document.getElementsByClassName("btn")[0];
const hiddenElement = document.querySelectorAll(".card");

function showText() {
  btn.classList.toggle("fade-in");

  extraParagraph.classList.toggle("extra_paragraph");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenElement.forEach((element) => observer.observe(element));
