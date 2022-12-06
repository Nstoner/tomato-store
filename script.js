const list = document.querySelectorAll(".list");
const homeId = document.getElementById("home");
const shopId = document.getElementById("shop");
const messageId = document.getElementById("message");
const photosId = document.getElementById("photos");
const settingId = document.getElementById("setting");
const sliderTag = document.querySelector(".nav-indicator");
const showTag = document.querySelectorAll(".show");
const navListTag = document.querySelectorAll(".nav-list");

function clickTagMenu () {
    navListTag.forEach((item) => 
    item.classList.remove("active"));
    this.classList.add("active");
    const clickedTagWidth = this.offsetWidth;
    const clickedTagOffsetLeft = this.offsetLeft;
    sliderTag.style.width = clickedTagWidth + "px";
    sliderTag.style.transform = `translateX(${clickedTagOffsetLeft}px)`;
    showTag.forEach((item) => item.classList.remove("active"));

    navListTag[0].addEventListener("click", () => {
        homeId.classList.add("active");
    })
    
    navListTag[1].addEventListener("click", () => {
        shopId.classList.add("active");
    })
    navListTag[2].addEventListener("click", () => {
        messageId.classList.add("active");
    })
    navListTag[3].addEventListener("click", () => {
        photosId.classList.add("active");
    })
    navListTag[4].addEventListener("click", () => {
        settingId.classList.add("active");
    })
}

navListTag.forEach((item) => item.addEventListener("click", clickTagMenu));


function handleClick () {
    
    list.forEach((item) => 
    item.classList.remove("active"));
    this.classList.add("active");
    showTag.forEach((item) => item.classList.remove("active"));

    list[0].addEventListener("click", () => {
        homeId.classList.add("active");
    })
    
    list[1].addEventListener("click", () => {
        shopId.classList.add("active");
    })
    list[2].addEventListener("click", () => {
        messageId.classList.add("active");
    })
    list[3].addEventListener("click", () => {
        photosId.classList.add("active");
    })
    list[4].addEventListener("click", () => {
        settingId.classList.add("active");
    })
        
}

list.forEach((item) => 
item.addEventListener("click", handleClick));




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  

  var swiper = new Swiper(".productSwiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    centeredslides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

