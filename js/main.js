// Chech If There's Local Storage Color Option
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', mainColors);

    document.querySelectorAll(".colors-list li").forEach(el => {
        el.classList.remove("active")

        if (el.dataset.color === mainColors) {
            el.classList.add("active")
        }
    });
}


// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background-option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {

    element.classList.remove("active");

  });

  if (backgroundLocalItem === 'true') {

    backgroundOption = true;

    document.querySelector(".random-backgrounds .yes").classList.add("active");

  } else {

    backgroundOption = false;

    document.querySelector(".random-backgrounds .no").classList.add("active");

  }

}
// Toggle Spin Class On Icon 
document.querySelector(".toggle-settings i").onclick = function () {
    this.classList.toggle("fa-spin")
    document.querySelector(".settings-box").classList.toggle("open")
};

// Switch Colors 
let colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {

    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        localStorage.setItem("color-option", e.target.dataset.color);

        handleActive(e)
    });
});




// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {

  // Click On Every Span
  span.addEventListener("click", (e) => {

    handleActive(e);

    if (e.target.dataset.background === 'yes') {

      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background-option", true);

    } else {

      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background-option", false);

    }

  });

});
// Select Landing Page Element 
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "09.jpg", "10.jpg"];


// Function to Randomize Imgs 
function randomizeImgs() {
    if (backgroundOption === true) {

       backgroundInterval =  setInterval(() => {
            // Get Random Number 
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")'
        
        }, 10000);
    };
};

randomizeImgs()

function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
  
      element.classList.remove("active");
  
    });
     // Add Active Class On Self
  ev.target.classList.add("active");

};

// Select Skkils Selector 
// let ourSkills = document.querySelector(".skills");

// window.onscroll = function () {
  // Skills Offset Top 
//   let skillsOfsetTop = ourSkills.offsetTop;

  //  Skills Outer hight
//   let skillsOuter = ourSkills.offsetHeight; 

  // Window Height 
//   let windowHeight = this.innerHeight;
  
  // Window Scroll Top
//   let windowScrollTop = this.pageYOffset;

//   if (windowScrollTop > (skillsOfsetTop + skillsOuter - windowHeight)) {
//     let allSkills = document.querySelectorAll(".skill-box .skill-Progress span");
//     allSkills.forEach(skill => {
//       skill.style.width = skill.dataset.progress
//     });
//   };
// };
let skil = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills .skill-box span");

window.onscroll = function () {
  if (window.scrollY >= skil.offsetTop - 600) {
    spans.forEach(span => {
        span.style.width = span.dataset.wid;
    })
  }
  if (window.scrollY >= skil.offsetTop - 500) {
    spans.forEach(span => {
      span.style.width = span.dataset.progress;
    })
  }
  if (window.scrollY >= skil.offsetTop + 500) {
    spans.forEach(span => {
      span.style.width = span.dataset.wid;
    })
  }
};

// Craeta Popup With The Image
let ourGallery = document.querySelectorAll(".gallery .images-box img");


ourGallery.forEach(img => {
  img.addEventListener('click', (e) => {
    
    let overlay = document.createElement("div");
    // Creata Overlay Element
    overlay.className = "popup-overlay";
    
    document.body.appendChild(overlay);
    
    // Craeta The Popup Box 
    let popupBox = document.createElement("div");
    
    popupBox.className = "popup-box";
    
    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      imgHeading.className = "headone"
      let textimg = document.createTextNode(img.alt);
      
      imgHeading.appendChild(textimg);
      popupBox.appendChild(imgHeading)
      
      
      if (img.alt === "") {
        // console.log("d")
        imgHeading.textContent = "Not, anythink"
      }
    }
    // Craeta The Image 
    let popupImage = document.createElement("img");

    popupImage.src = img.src

    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);

    // Creata The Cloes Span 
    let cloesButton = document.createElement("span");

    let cloesButtonText = document.createTextNode("X");

    cloesButton.appendChild(cloesButtonText);

    cloesButton.className = "cloes-button";

    popupBox.appendChild(cloesButton)

    // cloesButton.onclick = function () {
    //   cloesButton.parentElement.remove()
    //   overlay.remove()
    // }

  });
});

// Close Popup 
document.addEventListener("click", function (e) {

  if (e.target.className == 'cloes-button') {
    e.target.parentNode.remove()

    document.querySelector('.popup-overlay').remove()
  }
});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Bullets
const allLinks = document.querySelectorAll(".links a");


function scrollToSomewhere (element) {
  element.forEach(ele => {

    ele.addEventListener("click", (e) =>{
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: "smooth"
  
      })
  
     });
  });
};

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets-option");

if (backgroundLocalItem !== null) {

  bulletsSpan.forEach(span => {
    span.classList.remove("active")
  });

  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active")
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active")
  }

}

bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullets-option", "block")
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets-option", "none")
    }

    handleActive(e)

  });

});

// Reset Button
document.querySelector(".reset-options").onclick = function() {

  // localStorage.clear();
  localStorage.removeItem("background-option");
  localStorage.removeItem("color-option");
  localStorage.removeItem("bullets-option");
  window.location.reload();
};

// 

document.querySelector(".submit").onclick = function(e) {
  e.preventDefault();
}

// Toggel Manu
let toggleBtn = document.querySelector(".toggle-manu");
let theLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  e.stopPropagation();

  this.classList.toggle("manu-active")

  theLinks.classList.toggle("open")

};

document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== theLinks) {

    if (theLinks.classList.contains("open")) {
      
      toggleBtn.classList.toggle("manu-active")

      theLinks.classList.toggle("open")
    }
      
  }

});

theLinks.onclick = function (e) {
  e.stopPropagation()
}