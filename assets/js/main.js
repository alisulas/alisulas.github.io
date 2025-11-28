document.getElementById("year")?.appendChild(
  document.createTextNode(new Date().getFullYear())
);

// Optional: highlight nav aktif saat scroll (simple)
const links = document.querySelectorAll(".sidenav a[href^='#']");
const sections = [...links].map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  let activeId = null;

  for (const s of sections) {
    if (s.offsetTop <= y) activeId = s.id;
  }
  links.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${activeId}`);
  });
});
