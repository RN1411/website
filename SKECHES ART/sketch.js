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
      image: "sketche/s1.jpg"
    },
    {
      id: 2,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s2.jpg"
    },
    {
      id: 3,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image:"sketche/s3.jpg"
    },
    {
      id: 4,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s4.jpg"
    },
    {
      id: 5,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s5.jpg"
    },
     {
      id: 1,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s1.jpg"
    },
    {
      id: 2,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s2.jpg"
    },
    {
      id: 3,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image:"sketche/s3.jpg"
    },
    {
      id: 4,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s4.jpg"
    },
    {
      id: 5,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s5.jpg"
    },
     {
      id: 1,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s1.jpg"
    },
    {
      id: 2,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s2.jpg"
    },
    {
      id: 3,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image:"sketche/s3.jpg"
    },
    {
      id: 4,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s4.jpg"
    },
    {
      id: 5,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s5.jpg"
    },
     {
      id: 1,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s1.jpg"
    },
    {
      id: 2,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s2.jpg"
    },
    {
      id: 3,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image:"sketche/s3.jpg"
    },
    {
      id: 4,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s4.jpg"
    },
    {
      id: 5,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s5.jpg"
    },
     {
      id: 1,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s1.jpg"
    },
    {
      id: 2,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s2.jpg"
    },
    {
      id: 3,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image:"sketche/s3.jpg"
    },
    {
      id: 4,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s4.jpg"
    },
    {
      id: 5,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s5.jpg"
    },
     {
      id: 1,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s1.jpg"
    },
    {
      id: 2,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s2.jpg"
    },
    {
      id: 3,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image:"sketche/s3.jpg"
    },
    {
      id: 4,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s4.jpg"
    },
    {
      id: 5,
      title: "Sunset Over The Lake",
      category: "paintings",
      price: 1200,
      image: "sketche/s5.jpg"
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
  
  // Intro Animation - Hide after 3 seconds
  setTimeout(() => {
      document.getElementById("intro").style.opacity = "0"; // Smooth fade-out
      setTimeout(() => {
          document.getElementById("intro").style.display = "none";
          document.getElementById("galleryPage").style.opacity = "1"; // Smooth fade-in
      }, 1000); // Wait for fade-out transition
  }, 3000);

  // Image Filter Function with Smooth Animation
  function filterImages(category) {
      let images = document.querySelectorAll('.gallery a');
      images.forEach(image => {
          if (category === 'all' || image.classList.contains(category)) {
              image.style.display = 'inline-block';
              setTimeout(() => {
                  image.style.opacity = "1"; // Smooth fade-in
              }, 200);
          } else {
              image.style.opacity = "0"; // Smooth fade-out
              setTimeout(() => {
                  image.style.display = 'none';
              }, 300);
          }
      });
  }

