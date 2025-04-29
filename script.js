  // Initialize AOS animations
  AOS.init({
    duration: 800,
    once: true
  });

  // Artwork data
  const artworks = [
    {
      id: 1,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "paintings/p1.jpg"
    },
    {
      id: 2,
      title: "Pencil Portrait",
      category: "sketches",
      price: 450,
      image: "skeches/s1.jpg"
    },
    {
      id: 3,
      title: "Futuristic City",
      category: "digital",
      price: 800,
      image: "digital/d1.jpg"
    },
    {
      id: 4,
      title: "Mountain Landscape",
      category: "paintings",
      price: 1500,
      image: "paintings/p10.jpg"
    },
    {
      id: 5,
      title: "Old Man Sketch",
      category: "sketches",
      price: 350,
      image: "skeches/s10.jpg"
    },
    {
      id: 6,
      title: "Abstract Dreams",
      category: "digital",
      price: 950,
      image: "digital/d3.jpg"
    },
    {
      id: 7,
      title: "Floral Harmony",
      category: "paintings",
      price: 1800,
      image: "paintings/p11.jpg"
    },
    {
      id: 8,
      title: "Charcoal Study",
      category: "sketches",
      price: 400,
      image: "skeches/s11.jpg"
    },
    {
      id: 9,
      title: "Cyberpunk Streets",
      category: "digital",
      price: 1100,
      image: "digital/d4.jpg"
    },
  ];

  // Cart functionality
  let cart = [];
  const cartCount = document.querySelector('.cart-count');

  // Display artworks
  function displayArtworks(filter = 'all') {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    
    const filteredArtworks = filter === 'all' 
      ? artworks 
      : artworks.filter(art => art.category === filter);
    
    filteredArtworks.forEach(art => {
      const artItem = document.createElement('div');
      artItem.className = 'gallery-item';
      artItem.setAttribute('data-category', art.category);
      artItem.setAttribute('data-title', art.title.toLowerCase());
      
      artItem.innerHTML = `
        <a href="${art.image}" data-lightbox="gallery" data-title="${art.title}">
          <img src="${art.image}" alt="${art.title}" loading="lazy">
        </a>
        <div class="art-info">
          <h3 class="art-title">${art.title}</h3>
          <p class="art-price">₹${art.price.toLocaleString()}</p>
          <button class="buy-btn" data-id="${art.id}">Add to Cart</button>
        </div>
      `;
      
      gallery.appendChild(artItem);
    });
    
    // Add event listeners to new buy buttons
    document.querySelectorAll('.buy-btn').forEach(btn => {
      btn.addEventListener('click', addToCart);
    });
  }

  // Add to cart function
  function addToCart(e) {
    const artId = parseInt(e.target.getAttribute('data-id'));
    const artwork = artworks.find(art => art.id === artId);
    
    cart.push(artwork);
    updateCartCount();
    
    // Show notification
    const notification = document.getElementById('cart-notification');
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 2000);
  }

  // Update cart count
  function updateCartCount() {
    cartCount.textContent = cart.length;
  }

  // Filter functionality
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      document.querySelectorAll('.filter-button').forEach(btn => {
        btn.classList.remove('active');
      });
      
      this.classList.add('active');
      displayArtworks(category);
    });
  });

  // Initialize the gallery
  displayArtworks();

  // Logout function
  function logout() {
    // In a real app, you would clear the session properly
    alert('Logged out successfully');
    window.location.href = 'login.html';
  }

  // Improved Search Functionality
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    const activeFilter = document.querySelector('.filter-button.active').dataset.category;
    
    filterArtworks(searchTerm, activeFilter);
  });
  
  function filterArtworks(searchTerm = '', category = 'all') {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      const title = item.dataset.title;
      const itemCategory = item.dataset.category;
      
      // Check if item matches both search term and category filter
      const matchesSearch = searchTerm === '' || title.includes(searchTerm);
      const matchesCategory = category === 'all' || itemCategory === category;
      
      if (matchesSearch && matchesCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  let searchTimeout;
document.getElementById('search-input').addEventListener('input', function() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    filterArtworks(this.value, currentFilter);
  }, 300);
});

// Add artist to artwork data
const artwork = [
    {
      id: 1,
      title: "Sunset Over The Lake",
      artist: "John Smith",
      // ... other fields
    },
    // ...
  ];
  
  // Then modify the filter function to check both title and artist
  const matchesSearch = currentSearchTerm === '' || 
                       item.dataset.title.includes(currentSearchTerm) ||
                       item.dataset.artist.includes(currentSearchTerm);


                       function validateLogin() {
                        const username = document.getElementById('loginUser').value.trim();
                        const password = document.getElementById('loginPass').value.trim();
                        const usernameError = document.getElementById('username-error');
                        const passwordError = document.getElementById('password-error');
                        
                        // Reset error messages
                        usernameError.style.display = 'none';
                        passwordError.style.display = 'none';
                        
                        let isValid = true;
                        
                        if (!username) {
                          usernameError.style.display = 'block';
                          isValid = false;
                        }
                        
                        if (!password) {
                          passwordError.style.display = 'block';
                          isValid = false;
                        }
                        
                        if (isValid) {
                          login();
                        }
                      }
                  
                      function login() {
                        const username = document.getElementById('loginUser').value;
                        const password = document.getElementById('loginPass').value;
                        
                        // Check if user exists in localStorage
                        if (localStorage.getItem(username) === password) {
                          localStorage.setItem("loggedIn", "true");
                          localStorage.setItem("currentUser", username);
                          window.location.href = "index.html";
                        } else {
                          alert("Invalid username or password. Please try again.");
                        }
                      }
                  
                      // Allow pressing Enter to submit
                      document.addEventListener('DOMContentLoaded', () => {
                        document.getElementById('loginPass').addEventListener('keypress', (e) => {
                          if (e.key === 'Enter') {
                            validateLogin();
                          }
                        });
                      });

                      