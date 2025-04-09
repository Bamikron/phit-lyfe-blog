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








const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // Show button after scrolling 100px
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




const search_btn = document.getElementById('search-btn');
const close_btn = document.getElementById('close');

search_btn.addEventListener('click', function() {
//  window.alert("Hello world");
 const searchBar = document.getElementsByClassName('search');
 searchBar.classList.toggle('active'); 
})








let menuBtn = document.getElementById('burger');

let overlayClose = document.getElementById('close-overlay');
let overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {

  overlay.style.display = "block";

});


overlayClose.addEventListener('click', () => {
  overlay.style.display = "none";

});
