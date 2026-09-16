const dots = document.querySelectorAll(".dot-rail .dot");
const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const dot = document.querySelector(`.dot[href="#${entry.target.id}"]`);
      if (!dot) return;
      dots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));
