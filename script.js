//loading 
setTimeout(function() {
  document.getElementById('loader-container').classList.add('active')
}, 4000);

//header fixed
var header = document.querySelector('.header-2')

window.onscroll = function() {
  if(window.scrollY > 80) {
    header.classList.add('active')
  }
  else {
    header.classList.remove('active')
  }
}

window.onload = function() {
  if(window.scrollY > 80) {
    header.classList.add('active')
  }
  else {
    header.classList.remove('active')
  }
}

//search animation
var searchBox = document.querySelector('#search-box')
var searchBtn = document.querySelector('#searchBtn')

searchBtn.onclick = function() {
  searchBox.classList.toggle('active')
}

//form login animation
var closeForm = document.querySelector('#close-form');
var formContainer = document.querySelector('.login-form-container');
var loginBtn = document.querySelector('#loginBtn');

loginBtn.onclick = function() {
  formContainer.style.right = "0px";
}
closeForm.onclick = function() {
  formContainer.style.right = "-7000px";
}

//swiper Js 
const bookSlider = new Swiper('.book-slider', {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2
    }
  }
});

/* featured slide */
const featuredSlider = new Swiper('.featured-slider', {
  spaceBetween: 6,
  loop: false,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    450: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});

//arrivals slider 
const arrivalsSlider = new Swiper('.arrivals-slider', {
  spaceBetween: 6,
  loop: false,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

//reviews
const review = new Swiper('.reviews-slider', {
  spaceBetween: 6,
  loop: false,
  grabCursor: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

//blogs 
const blogs = new Swiper('.blogs-slider', {
  spaceBetween: 6,
  loop: false,
  grabCursor: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});