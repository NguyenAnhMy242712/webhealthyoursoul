const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

  // đổi hướng mũi tên
  const icon = toggleBtn.querySelector("i");
  if (sidebar.classList.contains("collapsed")) {
    icon.setAttribute("data-feather", "chevron-right");
  } else {
    icon.setAttribute("data-feather", "chevron-left");
  }
  feather.replace();
});