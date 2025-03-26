const toggle = document.getElementById('modeToggle');
    const modeText = document.getElementById('modeText');
    const content = document.getElementById('content');
    const body = document.body;

    toggle.addEventListener('change', function () {
      if (this.checked) {
        // Beverage Mode
        body.classList.remove('bg-amber-50', 'text-brown-900');
        body.classList.add('bg-blue-50', 'text-blue-900');
        modeText.textContent = "🥤 Beverage Mode";
        content.textContent = "Explore our refreshing Beverages 🥤";
      } else {
        // Coffee Mode
        body.classList.remove('bg-blue-50', 'text-blue-900');
        body.classList.add('bg-amber-50', 'text-brown-900');
        modeText.textContent = "☕ Coffee Mode";
        content.textContent = "Welcome to our Coffee Collection ☕";
      }
    });
    // Get references to the buttons and the slider
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slider = document.getElementById("slider");

  // Set the width of each product card (this value should match your product card's width)
  const productWidth = 320; // 300px for the card + 8px space between products

  // Event listener for the previous button
  prevBtn.addEventListener("click", () => {
    // Scroll the slider to the left by the width of one product card
    slider.scrollLeft -= productWidth;
  });

  // Event listener for the next button
  nextBtn.addEventListener("click", () => {
    // Scroll the slider to the right by the width of one product card
    slider.scrollLeft += productWidth;
  });











const searchBtn = document.getElementById('search-btn');
const searchForm = document.getElementById('search-form');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('hidden');
});







document.getElementById('search-box').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = this.value.trim().toLowerCase();
        if (query) performSearch(query);
    }
});

document.querySelector('label[for="search-box"]').addEventListener('click', function () {
    const query = document.getElementById('search-box').value.trim().toLowerCase();
    if (query) performSearch(query);
});

function performSearch(query) {
    alert('Searching for: ' + query);
}

// JavaScript for toggling cart items visibility
const cartIcon = document.getElementById('cart-btn');
const cartContainer = document.getElementById('cart-items-container');

cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('hidden');
});

// Remove individual cart items
document.querySelectorAll('.cart-item .fa-times').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.parentElement.remove();
    });
});


// JavaScript for mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});

// JavaScript to close cart items or search form when clicking the close button
const closeCartItems = document.querySelectorAll('.cart-item .fas.fa-times');
closeCartItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.closest('.cart-item').remove();
    });
});

const closeSearchForm = document.querySelector('.search-form .fas.fa-times');
if (closeSearchForm) {
    closeSearchForm.addEventListener('click', () => {
        searchForm.classList.add('hidden');
    });
};

 // Home Section Animation
 document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.fade-in').forEach((el) => {
        setTimeout(() => {
            el.classList.add('show');
        }, 500);
    });
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-gray-900", "shadow-lg");
    } else {
        navbar.classList.remove("bg-gray-900", "shadow-lg");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const aboutInfo = document.querySelector(".about-info");
    const aboutImage = document.querySelector(".about-image");

    function revealAboutSection() {
        const aboutSection = document.getElementById("about");
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            aboutInfo.classList.remove("opacity-0", "translate-x-[-50px]");
            aboutInfo.classList.add("opacity-100", "translate-x-0");

            setTimeout(() => {
                aboutImage.classList.remove("opacity-0", "translate-x-[50px]");
                aboutImage.classList.add("opacity-100", "translate-x-0");
            }, 300); 
        }
    }

    window.addEventListener("scroll", revealAboutSection);
   });

    document.addEventListener("DOMContentLoaded", () => {
        const menuItems = document.querySelectorAll('.menu-item');
        
        const checkVisibility = () => {
            menuItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // initial check
    });

    document.addEventListener("DOMContentLoaded", () => {
        const products = document.querySelectorAll('.product');

        const checkVisibility = () => {
            products.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // initial check
    });

    document.addEventListener("DOMContentLoaded", () => {
        const blogPosts = document.querySelectorAll('.blog-post');

        const checkVisibility = () => {
            blogPosts.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // initial check
    });

 





