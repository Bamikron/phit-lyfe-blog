const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light'; // Get current theme from localStorage

// Setting initial theme
document.body.classList.toggle('dark-theme', currentTheme === 'dark');

themeToggleBtn.addEventListener('click', () => {
  // Toggle theme
  document.body.classList.toggle('dark-theme');

  // Update theme in localStorage
  const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});



// Get the elements
const currentWeather = document.getElementById('current-weather');
const currentDate = document.getElementById('current-date');

// Fetch weather data (replace with your actual API call)
fetch('your-weather-api-endpgggggoint')
  .then(response => response.json())
  .then(data => {
    currentWeather.textContent = `${data.temperature}°C, ${data.description}`;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    currentWeather.textContent = 'Weather data unavailable';
  });

// Get current date
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDate.textContent = today.toLocaleDateString('en-US', options);








const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let isDragging = false;
let startX;
let scrollLeft;

const dragging = (e) => {
  if (isDragging) {
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const deltaX = x - startX;
    carousel.scrollLeft = scrollLeft - deltaX;
  }
};

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  e.preventDefault();
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
});

carousel.addEventListener('mousemove', dragging);



const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Show button after scrolling 300px
    scrollToTopBtn.classList.add('show-button');
  } else {
    scrollToTopBtn.classList.remove('show-button');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Enable smooth scrolling
  });
});

let year = document.getElementById('year');

let getYear = new Date().getFullYear();


year.innerHTML = getYear;


// const interactionIcons = document.getElementsByClassName('interbtn');
// const iconCounts = {
//   heart: 0,
//   comment: 0,
//   save: 0
// };

// // Load counts from localStorage
// for (const iconType in iconCounts) {
//   const storedCount = localStorage.getItem(iconType);
//   if (storedCount) {
//     iconCounts[iconType] = parseInt(storedCount); 
//   }
// }

// for (const icon of interactionIcons) {
//   icon.addEventListener('click', function() {
//     icon.classList.toggle('active');

//     const iconType = icon.dataset.icontype;

//     if (icon.classList.contains('active')) {
//       iconCounts[iconType]++;
//     } else {
//       iconCounts[iconType]--;
//     }

//     localStorage.setItem(iconType, iconCounts[iconType]); 

//     const countElement = document.getElementById(iconType);
//     countElement.innerHTML = iconCounts[iconType];
//   });
// }

// // Initial display of counts
// for (const iconType in iconCounts) {
//   const countElement = document.getElementById(iconType);
//   countElement.innerHTML = iconCounts[iconType];
// }

// // const search_btn = document.getElementById('search-btn');


// // search_btn.addEventListener('click', function() {

// //      let search_overlay = document.getElementsByClassName('search');
// //    search_overlay.classList.toggle('active');

// // });








// const interactionIcons = document.getElementsByClassName('interbtn');

// const iconCount = {
//   heart: 0,
//   comment: 0,
//   save: 0
// };

// for (const icon of interactionIcons) {
//   let clicked = false;

//   icon.addEventListener('click', function() {
//     icon.classList.toggle('active');


//     const iconType = icon.dataset.icontype;

//     if (!clicked) {
//      iconCount[iconType]++;
//      clicked = true;
//     }
//     else {
//       iconCount[iconType]--;
//       clicked = false;
//     };

//     const countElement = document.getElementById(iconType);
//     countElement.innerHTML = iconCount[iconType];
//   })
// }


// const interactionIcons = document.getElementsByClassName('interbtn');

// const iconCounts = {
//   heart: 0,
//   comment: 0,
//   save: 0
// };

// for (const icon of interactionIcons) {
//   let clicked = false; // Initialize clicked *outside* the click handler

//   icon.addEventListener('click', function() {
//     icon.classList.toggle('active');

//     const iconType = icon.dataset.icontype;

//     if (!clicked) {
//       iconCounts[iconType]++;
//       clicked = true;
//     } else {
//       iconCounts[iconType]--;
//       clicked = false;
//     }

//     const countElement = document.getElementById(iconType); // Use iconType directly
//     countElement.innerHTML = iconCounts[iconType];
//   });
// }

// const interactionIcons = document.getElementsByClassName('interbtn');

// for (const icon of interactionIcons) {
//   let count = 0;
//   let unclicked = false;

//   icon.addEventListener('click', function() {
//     icon.classList.toggle('active');

//     if (!unclicked) {
//       count++;
//       unclicked = true;
//     } else {
//       count--;
//       unclicked = false;
//     }

//     const count_for_like = document.getElementById('count-for-like');
//     count_for_like.innerHTML = count;

//     const count_for_comment = document.getElementById('count-for-comment');
//     count_for_comment.innerHTML = count;

//     const count_for_save = document.getElementById('count-for-save');
//     count_for_save.innerHTML = count;
//   });
// }







//     // Save active state in local storage
//     const postId = icon.parentNode.dataset.postId;
//     const isActive = icon.classList.contains('active');
//     localStorage.setItem(`post-${postId}-like`, isActive);

//     // Update icon and text color
//     const iconColor = icon.classList.contains('active') ? '#00B050' : '';
//     icon.style.color = iconColor;
//     const textNode = icon.nextSibling;
//     if (textNode.nodeType === Node.TEXT_NODE) {
//       textNode.textContent = icon.classList.contains('active') ? 'Liked' : 'Like';
//     }
//   });
// });

// // Restore active state from local storage on page load
// document.addEventListener('DOMContentLoaded', () => {
//   interactionIcons.forEach(icon => {
//     const postId = icon.parentNode.dataset.postId;
//     const isActive = localStorage.getItem(`post-${postId}-like`) === 'true';
//     if (isActive) {
//       icon.classList.add('active');
//       icon.style.color = '#00B050';
//       const textNode = icon.nextSibling;
//       if (textNode.nodeType === Node.TEXT_NODE) {
//         textNode.textContent = 'Liked';
//       }
//     }
//   });
// });


// themeToggleBtn.addEventListener('click', () => {
//   // Toggle theme
//   document.body.classList.toggle('dark-theme');

//   // Update theme in localStorage
//   const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
//   localStorage.setItem('theme', newTheme);
// });



let menuBtn = document.getElementById('burger');

let overlayClose = document.getElementById('close-overlay');
let overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {

  overlay.style.display = "block";

});


overlayClose.addEventListener('click', () => {
  overlay.style.display = "none";

});
