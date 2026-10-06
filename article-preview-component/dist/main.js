let shareBtn = document.getElementById("shareBtn");
let social = document.getElementById("social");
let tg = document.querySelectorAll(
  "body, main div:not(#social) ~ *, main div:not(#social) > * "
);

shareBtn.addEventListener("click", () => {
  social.classList.remove("hidden");
  social.classList.add("flex");
});

window.onclick = (e) => {
  if (social.classList.contains("flex")) {
    for (i = 0; i < tg.length; i++) {
      if (e.target == tg[i]) {
        // console.log("something happened?");
        social.classList.add("hidden");
        social.classList.remove("flex");
      }
    }
  }
};
