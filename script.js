// Luxury Skincare Advertisement - Interactive Effects with Multi-Brand & Theme System
document.addEventListener('DOMContentLoaded', function() {
    
    // Brand Data
    const brandData = {
        'luxe-glow': {
            badge: 'NEW COLLECTION',
            title: ['Radiant', 'Perfection', 'Serum'],
            description: 'Experience the ultimate luxury in skincare with our revolutionary anti-aging serum. Infused with 24K gold particles and rare botanical extracts for unparalleled radiance.',
            features: ['24K Gold Infusion', 'Botanical Extracts', 'Diamond Peptides'],
            price: '$299',
            priceLabel: '30ml Premium Serum',
            bottleBrand: 'LUXE GLOW',
            bottleProduct: 'RADIANT SERUM',
            bottleVolume: '30ML'
        },
        'radiance-pro': {
            badge: 'PROFESSIONAL GRADE',
            title: ['Clinical', 'Radiance', 'Complex'],
            description: 'Professional-grade skincare formula developed by dermatologists. Advanced peptide technology for visible results in just 14 days.',
            features: ['Clinical Peptides', 'Dermatologist Tested', 'Fast Results'],
            price: '$399',
            priceLabel: '50ml Clinical Formula',
            bottleBrand: 'RADIANCE PRO',
            bottleProduct: 'CLINICAL COMPLEX',
            bottleVolume: '50ML'
        },
        'golden-essence': {
            badge: 'LUXURY EDITION',
            title: ['Golden', 'Youth', 'Elixir'],
            description: 'Rare golden essence extracted from precious minerals and organic botanicals. The ultimate anti-aging treatment for discerning clients.',
            features: ['Pure Gold Extract', 'Rare Minerals', 'Youth Restoration'],
            price: '$599',
            priceLabel: '25ml Luxury Elixir',
            bottleBrand: 'GOLDEN ESSENCE',
            bottleProduct: 'YOUTH ELIXIR',
            bottleVolume: '25ML'
        },
        'pure-botanics': {
            badge: 'ORGANIC CERTIFIED',
            title: ['Pure', 'Botanical', 'Renewal'],
            description: 'Certified organic skincare made from sustainably sourced botanical ingredients. Gentle yet effective for all skin types.',
            features: ['100% Organic', 'Sustainable Sourcing', 'All Skin Types'],
            price: '$199',
            priceLabel: '40ml Organic Formula',
            bottleBrand: 'PURE BOTANICS',
            bottleProduct: 'BOTANICAL RENEWAL',
            bottleVolume: '40ML'
        },
        'diamond-skin': {
            badge: 'PREMIUM COLLECTION',
            title: ['Diamond', 'Perfection', 'Treatment'],
            description: 'Infused with real diamond particles and platinum peptides. The most luxurious skincare experience for ultimate skin perfection.',
            features: ['Diamond Particles', 'Platinum Peptides', 'Luxury Experience'],
            price: '$799',
            priceLabel: '20ml Diamond Treatment',
            bottleBrand: 'DIAMOND SKIN',
            bottleProduct: 'PERFECTION TREATMENT',
            bottleVolume: '20ML'
        },
        'celestial-beauty': {
            badge: 'COSMIC INNOVATION',
            title: ['Celestial', 'Glow', 'Serum'],
            description: 'Revolutionary formula inspired by cosmic energy. Meteorite extracts and stellar peptides for otherworldly radiance.',
            features: ['Meteorite Extracts', 'Stellar Peptides', 'Cosmic Energy'],
            price: '$449',
            priceLabel: '35ml Cosmic Serum',
            bottleBrand: 'CELESTIAL BEAUTY',
            bottleProduct: 'COSMIC SERUM',
            bottleVolume: '35ML'
        }
    };

    // Theme Management
    let currentTheme = localStorage.getItem('skincare-theme') || 'rose-gold';
    let isDarkMode = localStorage.getItem('skincare-dark-mode') === 'true';
    
    // Initialize theme
    function initializeTheme() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (isDarkMode) {
            document.documentElement.setAttribute('data-mode', 'dark');
            document.querySelector('.theme-icon').textContent = '☀️';
        }
        
        // Set active color button
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-theme') === currentTheme) {
                btn.classList.add('active');
            }
        });
    }

    // Brand switching functionality
    const brandSelector = document.getElementById('brandSelector');
    
    function updateBrandContent(brandKey) {
        const brand = brandData[brandKey];
        if (!brand) return;

        // Remove existing brand classes
        document.body.classList.remove(
            'brand-luxe-glow', 'brand-radiance-pro', 'brand-golden-essence',
            'brand-pure-botanics', 'brand-diamond-skin', 'brand-celestial-beauty'
        );

        // Add new brand class with animation
        setTimeout(() => {
            document.body.classList.add(`brand-${brandKey}`);
        }, 100);

        // Update text content with animation
        const elements = {
            badge: document.getElementById('brandBadge'),
            titleLine1: document.getElementById('titleLine1'),
            titleLine2: document.getElementById('titleLine2'),
            titleLine3: document.getElementById('titleLine3'),
            description: document.getElementById('heroDescription'),
            feature1: document.getElementById('feature1'),
            feature2: document.getElementById('feature2'),
            feature3: document.getElementById('feature3'),
            price: document.getElementById('productPrice'),
            priceLabel: document.getElementById('priceLabel'),
            bottleBrand: document.getElementById('bottleBrandName'),
            bottleProduct: document.getElementById('bottleProductName'),
            bottleVolume: document.getElementById('bottleVolume')
        };

        // Animate content change
        Object.keys(elements).forEach((key, index) => {
            const element = elements[key];
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    switch(key) {
                        case 'badge':
                            element.textContent = brand.badge;
                            break;
                        case 'titleLine1':
                            element.textContent = brand.title[0];
                            break;
                        case 'titleLine2':
                            element.textContent = brand.title[1];
                            break;
                        case 'titleLine3':
                            element.textContent = brand.title[2];
                            break;
                        case 'description':
                            element.textContent = brand.description;
                            break;
                        case 'feature1':
                            element.textContent = brand.features[0];
                            break;
                        case 'feature2':
                            element.textContent = brand.features[1];
                            break;
                        case 'feature3':
                            element.textContent = brand.features[2];
                            break;
                        case 'price':
                            element.textContent = brand.price;
                            break;
                        case 'priceLabel':
                            element.textContent = brand.priceLabel;
                            break;
                        case 'bottleBrand':
                            element.textContent = brand.bottleBrand;
                            break;
                        case 'bottleProduct':
                            element.textContent = brand.bottleProduct;
                            break;
                        case 'bottleVolume':
                            element.textContent = brand.bottleVolume;
                            break;
                    }
                    
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100 + 300);
            }
        });

        // Update navbar brand
        const navBrand = document.querySelector('.nav-brand h1');
        if (navBrand) {
            navBrand.style.opacity = '0';
            setTimeout(() => {
                navBrand.textContent = brand.bottleBrand;
                navBrand.style.opacity = '1';
            }, 400);
        }

        // Update particle colors based on brand
        updateParticleColors(brandKey);
    }

    // Update particle colors based on brand
    function updateParticleColors(brandKey) {
        const brandColors = {
            'luxe-glow': '#B8956B',
            'radiance-pro': '#5A7FA7',
            'golden-essence': '#C4A876',
            'pure-botanics': '#6B9B7A',
            'diamond-skin': '#A894C4',
            'celestial-beauty': '#7A6B9B'
        };

        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            const color = brandColors[brandKey] || '#B8956B';
            particle.style.background = color;
            particle.style.boxShadow = `0 0 10px ${color}66`; // Adding transparency for softer glow
        });
    }

    // Theme switching functionality
    function switchTheme(themeName) {
        currentTheme = themeName;
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('skincare-theme', themeName);
        
        // Update active color button
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-theme') === themeName) {
                btn.classList.add('active');
            }
        });
        
        // Add theme change animation
        document.body.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    }

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        const themeIcon = document.querySelector('.theme-icon');
        
        if (isDarkMode) {
            document.documentElement.setAttribute('data-mode', 'dark');
            themeIcon.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-mode');
            themeIcon.textContent = '🌙';
        }
        
        localStorage.setItem('skincare-dark-mode', isDarkMode);
    }

    // Event Listeners
    brandSelector.addEventListener('change', function() {
        updateBrandContent(this.value);
        
        // Add selection animation
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });

    // Color theme buttons
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            switchTheme(theme);
        });
    });

    // Dark mode toggle
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);

    // Initialize
    initializeTheme();
    
    // Initialize default brand
    document.body.classList.add('brand-luxe-glow');
    updateParticleColors('luxe-glow');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Parallax effect for product bottle
    const productBottle = document.querySelector('.product-bottle');
    const spotlight = document.querySelector('.spotlight');
    
    window.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Subtle parallax movement for bottle
        if (productBottle) {
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            productBottle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
        
        // Spotlight follows mouse subtly
        if (spotlight) {
            const spotlightX = (mouseX - 0.5) * 50;
            const spotlightY = (mouseY - 0.5) * 50;
            spotlight.style.transform = `translate(calc(-50% + ${spotlightX}px), ${spotlightY}px)`;
        }
    });

    // Enhanced glow effect on hover
    const productContainer = document.querySelector('.product-container');
    if (productContainer) {
        productContainer.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 40px rgba(212, 175, 55, 0.8))';
            this.style.transform = 'scale(1.05)';
        });
        
        productContainer.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
            this.style.transform = 'scale(1)';
        });
    }

    // Animated counter for price
    const priceElement = document.querySelector('.price');
    if (priceElement) {
        const targetPrice = 299;
        let currentPrice = 0;
        const increment = targetPrice / 60; // 60 frames for smooth animation
        
        function animatePrice() {
            if (currentPrice < targetPrice) {
                currentPrice += increment;
                priceElement.textContent = `$${Math.floor(currentPrice)}`;
                requestAnimationFrame(animatePrice);
            } else {
                priceElement.textContent = `$${targetPrice}`;
            }
        }
        
        // Start animation when element comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animatePrice();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(priceElement);
    }

    // Floating particles animation enhancement
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        // Add random glow effect
        setInterval(() => {
            const glowIntensity = Math.random() * 0.8 + 0.2;
            particle.style.boxShadow = `0 0 ${glowIntensity * 20}px rgba(212, 175, 55, ${glowIntensity})`;
        }, 2000 + index * 500);
        
        // Random size variation
        setInterval(() => {
            const scale = Math.random() * 0.5 + 0.75;
            particle.style.transform = `scale(${scale})`;
        }, 3000 + index * 700);
    });

    // Smooth reveal animations for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });

    // Testimonial cards stagger animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
                testimonialObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
        card.style.transition = 'all 0.5s ease';
        testimonialObserver.observe(card);
    });

    // Enhanced button interactions
    const buttons = document.querySelectorAll('.cta-primary, .cta-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(248, 246, 240, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(248, 246, 240, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Dynamic bottle shine effect
    const bottleShine = document.querySelector('.bottle-shine');
    if (bottleShine) {
        setInterval(() => {
            bottleShine.style.animation = 'none';
            setTimeout(() => {
                bottleShine.style.animation = 'shine 4s ease-in-out';
            }, 100);
        }, 8000);
    }

    // Interactive glow intensity based on scroll position
    const bottleGlow = document.querySelector('.bottle-glow');
    if (bottleGlow) {
        window.addEventListener('scroll', function() {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            const glowIntensity = 0.4 + (scrollPercent * 0.4);
            bottleGlow.style.opacity = Math.min(glowIntensity, 0.8);
        });
    }

    // Add sparkle effect on product hover
    productContainer?.addEventListener('mouseenter', function() {
        createSparkles(this);
    });

    function createSparkles(container) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: radial-gradient(circle, #D4AF37, transparent);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: sparkle 1.5s ease-out forwards;
                    top: ${Math.random() * 100}%;
                    left: ${Math.random() * 100}%;
                `;
                
                container.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 1500);
            }, i * 100);
        }
    }

    // Add sparkle animation to CSS dynamically
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Smooth page load animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Enhanced feature icons animation
    const featureIcons = document.querySelectorAll('.feature-icon-large');
    featureIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.filter = 'drop-shadow(0 5px 15px rgba(212, 175, 55, 0.5))';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'none';
        });
    });

    // Add premium loading effect
    function addLoadingShimmer() {
        const shimmerElements = document.querySelectorAll('.feature-card, .testimonial-card');
        shimmerElements.forEach(element => {
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            
            const shimmer = document.createElement('div');
            shimmer.style.cssText = `
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
                animation: shimmer 2s ease-in-out infinite;
                pointer-events: none;
            `;
            
            element.appendChild(shimmer);
        });
    }

    // Add shimmer animation
    const shimmerStyle = document.createElement('style');
    shimmerStyle.textContent = `
        @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
        }
    `;
    document.head.appendChild(shimmerStyle);

    // Initialize premium effects
    setTimeout(addLoadingShimmer, 1000);

    console.log('🌟 LUXE GLOW - Premium Skincare Experience Loaded');
});
