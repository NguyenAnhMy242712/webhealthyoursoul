// 1. XỬ LÝ THEME (Gom nhóm các hàm liên quan đến giao diện)
function applyTheme() {
    const theme = localStorage.getItem("user-theme") || "blue";
    document.body.setAttribute("data-theme", theme);
}

function changeTheme(name) {
    document.body.setAttribute("data-theme", name);
    localStorage.setItem("user-theme", name);
}

// 2. KHỞI TẠO KHI TRANG LOAD XONG
document.addEventListener("DOMContentLoaded", () => {
    applyTheme();

    // Xử lý sự kiện click cho các nút màu theme
    const themeButtons = document.querySelectorAll(".color");
    themeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const theme = btn.getAttribute("data-theme");
            changeTheme(theme);
        });
    });

    // Xử lý Dropdown Menu
    const btnDropdown = document.getElementById("btnDropdown");
    const dropdownContent = document.getElementById("myDropdown");

    if (btnDropdown && dropdownContent) {
        // Bật/Tắt menu khi click vào nút
        btnDropdown.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle("show");
        });

        // Đóng menu khi click ra ngoài vùng menu hoặc nút
        window.addEventListener("click", (e) => {
            if (!btnDropdown.contains(e.target) && dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        });
    }
});