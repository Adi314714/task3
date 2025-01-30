//alert(1);

const Menu = document.querySelector(".menu");
const MenuItem = document.querySelectorAll(".menu-item");

//איפוס הלחיצה על המקש הימני בעכבר
//בשלב זה לא יופיע כלום
document.addEventListener("contextmenu", (element) => {
  element.preventDefault();
});

// הצגת תפריט עם לפחות  3 אופציות
