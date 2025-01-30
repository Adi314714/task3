//alert(1);

const Menu = document.querySelector(".menu");
const MenuItem = document.querySelectorAll(".menu-item");

//איפוס הלחיצה על המקש הימני בעכבר
//בשלב זה לא יופיע כלום
document.addEventListener("contextmenu", (element) => {
  element.preventDefault();

  //הצגה תפריט שמותאם אישית
  Menu.style.top = `${element.clientY}px`;
  Menu.style.left = `${element.clientX}px`;
  Menu.classList.add("active");
});

//הוספת ערכים לתפריט החדש
MenuItem.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(`clicked]: ${item.textContent.trim()}`);
    Menu.classList.remove("active");
  });
});

// אם לוחצים על המסך לבטל את זה
document.addEventListener("click", (e) => {
  if (!Menu.contains(e.target)) {
    Menu.classList.remove("active");
  }
});

// שהתפריט תמיד יופיע על המסך
document.addEventListener("contextmenu", (e) => {
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

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
});
