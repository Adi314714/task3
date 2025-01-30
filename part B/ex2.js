const Menu = document.querySelector(".menu");
const MenuItem = document.querySelectorAll(".menu-item");

// הצגת התפריט בלחיצה ימנית
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  // מניעת יציאה מהמסך
  const menuWidth = Menu.offsetWidth;
  const menuHeight = Menu.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let x = e.clientX;
  let y = e.clientY;

  if (x + menuWidth > windowWidth) {
    x = windowWidth - menuWidth;
  }
  if (y + menuHeight > windowHeight) {
    y = windowHeight - menuHeight;
  }

  Menu.style.left = `${x}px`;
  Menu.style.top = `${y}px`;
  Menu.classList.add("active");
});

// הוספת פונקציונליות לפריטי התפריט
MenuItem.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(`Clicked: ${item.textContent.trim()}`);
    Menu.classList.remove("active");
  });
});

// סגירת התפריט בלחיצה מחוץ לו
document.addEventListener("click", (e) => {
  if (!Menu.contains(e.target)) {
    Menu.classList.remove("active");
  }
});
