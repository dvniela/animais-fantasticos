export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#'"
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href"); // ou event.currentTarget.getAttribute
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /* forma alternativa:
    const topo = section.offsetTop;
    window.scrollTo({
    top: topo,
    behavior: "smooth",
  });*/
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
