const observer = new IntersectionObserver(
  (entries) => {
    Array.from(entries).forEach((entry) => {
      if (entry.intersectionRatio >= 0.3) {
        entry.target.classList.add("init-hidden-off");
      }
    });
    entries[0].target.classList.add("init-hidden-off");
  },
  {
    threshold: 0.3,
  }
);

Array.from(document.querySelectorAll(".init-hidden")).forEach((element) => {
  observer.observe(element);
});
