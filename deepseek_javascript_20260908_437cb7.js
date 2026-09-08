// ===== DOM Elements =====
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const menuGrid = document.getElementById('menuGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const contactForm = document.getElementById('contactForm');

// ===== Menu Data =====
const menuData = [
    // Starters
    { id: 1, name: 'Chicken 65', category: 'starters', price: '₹260', image: 'https://images.unsplash.com/photo-1604908176897-d0b33a877212?w=400', badge: 'Popular' },
    { id: 2, name: 'Boneless Chicken 65', category: 'starters', price: '₹350', image: 'https://images.unsplash.com/photo-1604908176897-d0b33a877212?w=400' },
    { id: 3, name: 'Chilli Chicken Dry', category: 'starters', price: '₹310', image: 'https://images.unsplash.com/photo-1604908176897-d0b33a877212?w=400' },
    { id: 4, name: 'Gobi 65', category: 'starters', price: '₹240', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400' },
    { id: 5, name: 'Paneer 65', category: 'starters', price: '₹300', image: 'https://images.unsplash.com/photo-1631452180519-c54fe3cdc1ae?w=400' },
    { id: 6, name: 'Mushroom 65', category: 'starters', price: '₹290', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400' },
    
    // Biryani
    { id: 7, name: 'Malabar Biryani', category: 'biryani', price: '₹320', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', badge: 'Signature' },
    { id: 8, name: 'Chicken Biryani', category: 'biryani', price: '₹280', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400' },
    { id: 9, name: 'Mutton Biryani', category: 'biryani', price: '₹380', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400' },
    
    // Main Course
    { id: 10, name: 'Plain Rice with Rasam', category: 'main', price: '₹180', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400' },
    { id: 11, name: 'Chicken Manchurian', category: 'main', price: '₹310', image: 'https://images.unsplash.com/photo-1604908176897-d0b33a877212?w=400' },
    { id: 12, name: 'Schezwan Chicken Noodles', category: 'main', price: '₹320', image: 'https://images.unsplash.com/photo-1604908176897-d0b33a877212?w=400' },
    { id: 13, name: 'Chilli Paneer', category: 'main', price: '₹310', image: 'https://images.unsplash.com/photo-1631452180519-c54fe3cdc1ae?w=400' },
    { id: 14, name: 'Paneer Manchurian', category: 'main', price: '₹320', image: 'https://images.unsplash.com/photo-1631452180519-c54fe3cdc1ae?w=400' },
    
    // Seafood
    { id: 15, name: 'Vanjaram King Fish Fry', category: 'seafood', price: '₹300', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
    { id: 16, name: 'Ayala Fry', category: 'seafood', price: '₹240', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
    { id: 17, name: 'Prawns Fry', category: 'seafood', price: '₹450', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
    { id: 18, name: 'Chilli Fish', category: 'seafood', price: '₹300', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
    
    // Vegetarian
    { id: 19, name: 'Green Salad', category: 'veg', price: '₹140', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400' },
    { id: 20, name: 'Mushroom Pepper Fry', category: 'veg', price: '₹300', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400' },
    { id: 21, name: 'Chilli Mushroom', category: 'veg', price: '₹300', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400' },
    { id: 22, name: 'Gobi Manchurian', category: 'veg', price: '₹260', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400' },
];

// ===== Render Menu =====
function renderMenu(category = 'all') {
    const filtered = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);
    
    menuGrid.innerHTML = filtered.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${getCategoryLabel(item.category)}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price}</span>
                    <button class="menu-item-add" onclick="addToCart('${item.name}')">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        starters: 'Starters',
        biryani: 'Biryani',
        main: 'Main Course',
        seafood: 'Seafood',
        veg: 'Vegetarian'
    };
    return labels[category] || category;
}

// ===== Category Filter =====
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(btn.dataset.category);
    });
});

// ===== Add to Cart =====
function addToCart(itemName) {
    // Simple feedback - in production, this would integrate with a cart system
    const btn = event.target.closest('.menu-item-add');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.style.background = '#2ECC71';
    
    // Show toast notification
    showToast(`Added ${itemName} to cart!`);
    
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
    }, 2000);
}

// ===== Toast Notification =====
function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fas fa-check-circle" style="color: #2ECC71;"></i>
        <span>${message}</span>
    `;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        padding: 16px 32px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 500;
        z-index: 9999;
        animation: slideUp 0.3s ease;
        border-left: 4px solid #2ECC71;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== Mobile Menu =====
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

// Close menu on link click
document.querySelectorAll('.nav-menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===== Header Scroll Effect =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Header shadow
    if (currentScroll > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button
    if (currentScroll > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    lastScroll = currentScroll;
});

// ===== Back to Top =====
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Contact Form =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        showToast('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.btn-primary');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showToast('Message sent successfully! We\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('all');
});

// ===== Add CSS Animations =====
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
    }
`;
document.head.appendChild(styleSheet);