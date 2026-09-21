document.addEventListener("DOMContentLoaded", function () {
  function includeComponent(elementId, filePath) {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) throw new Error("تعذر تحميل الملف: " + filePath);
        return response.text();
      })
      .then((data) => {
        const container = document.getElementById(elementId);
        if (container) container.innerHTML = data;
      })
      .catch((error) => console.error(error));
  }

  includeComponent("navbar-container", "components/navbar.html");
  includeComponent("footer-container", "components/footer.html");
});

document.addEventListener("click", function (e) {
  const navbarToggle = e.target.closest(".navbar-toggle");

  if (navbarToggle) {
    const navbarMenu = document.querySelector(".navbar-menu");
    if (navbarMenu) {
      navbarToggle.classList.toggle("active");
      navbarMenu.classList.toggle("active");

      document.body.style.overflow = navbarMenu.classList.contains("active")
        ? "hidden"
        : "auto";
    }
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

/* ==========================================================================
   DYNAMIC GOLDEN CUBES GENERATOR (أضف هذا الجزء في نهاية assets/js/main.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const cubesContainer = document.getElementById("heroCubes");

  if (cubesContainer) {
    const cubeCount = 8; // عدد المكعبات العائمة

    for (let i = 0; i < cubeCount; i++) {
      const cube = document.createElement("div");
      cube.classList.add("gold-cube");

      // أحجام وأماكن عشوائية لكل مكعب
      const size = Math.floor(Math.random() * 70) + 40; // حجم بين 40px و 110px
      const posX = Math.random() * 90; // موقع أفيقي بين 0% و 90%
      const posY = Math.random() * 80; // موقع عمودي بين 0% و 80%
      const delay = Math.random() * 5; // تأخير الحركة
      const duration = Math.random() * 8 + 8; // سرعة الحركة بين 8s و 16s

      cube.style.width = `${size}px`;
      cube.style.height = `${size}px`;
      cube.style.left = `${posX}%`;
      cube.style.top = `${posY}%`;
      cube.style.animationDelay = `${delay}s`;
      cube.style.animationDuration = `${duration}s`;

      cubesContainer.appendChild(cube);
    }
  }
});

/* ==========================================================================
   DYNAMIC 3D GOLDEN TRIANGLES GENERATOR (أضف هذا إلى assets/js/main.js)
   ========================================================================== */

function generate3DTriangles(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const triangle = document.createElement("div");
    triangle.classList.add("gold-triangle-3d");

    const size = Math.floor(Math.random() * 35) + 20; // أحجام متناسقة من 20px إلى 55px
    const posX = Math.random() * 95;
    const posY = Math.random() * 85;
    const delay = Math.random() * 6;
    const duration = Math.random() * 10 + 10; // من 10 إلى 20 ثانية

    triangle.style.setProperty("--tri-size", `${size}px`);
    triangle.style.left = `${posX}%`;
    triangle.style.top = `${posY}%`;
    triangle.style.animationDelay = `${delay}s`;
    triangle.style.animationDuration = `${duration}s`;

    container.appendChild(triangle);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // توليد 12 مثلثاً عائماً لسكشن الخدمات والإحصائيات المدمج
  if (typeof generate3DTriangles === "function") {
    generate3DTriangles("servicesTriangles", 12);
  }
});