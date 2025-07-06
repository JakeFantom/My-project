window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelector("body").style.backgroundPositionY = `-${scrollY * 0.2}px`;
});
