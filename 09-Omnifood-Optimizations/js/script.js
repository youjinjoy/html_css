const myName = "Jonas Schmedtmann";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// <p class="copyright">
//   Copyright &copy; <span class="year">2027</span> by Omnifood, Inc. All rights reserved.
// </p>

// Set current year
const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear() + " ";
yearElement.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

// <button class="btn-mobile-nav">
//   <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
//   <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
// </button>
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header"); // header가 btn-mobile-nav의 parent

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // href에 설정된 값 읽기
    const href = link.getAttribute("href");
    // console.log(href);

    // Scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0, // top에서 0px 떨어진 위치로 이동
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      // console.log(href);
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    // intersectionRatio, isIntersecting 주목
    if (!ent.isIntersecting) {
      // document.querySelector(".header").classList.add("sticky");
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    // 섹션이 뷰포트를 완전히 벗어나자마자 이벤트가 발생하게 한 것.
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
// 관찰하고자 하는 섹션: hero.
// 위 섹션이 뷰포트에서 나오자마자 네비게이션이 sticky하길 원한다.

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// 사파리에서 js에서의 스크롤 속성 역시 지원하지 않았기 때문에 해당 polyfill을 넣어야 한다.
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
