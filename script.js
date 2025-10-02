// CSSPMS.GRAMMAR Linktree - JavaScript

// Motivational Quotes Array
const quotes = [
    "Keep going! CSS and PMS are just stepping stones to your greatness.",
    "Every page you read today brings you closer to acing your exams tomorrow.",
    "Master English first, then the rest will be a piece of cake for you.",
    "Your struggle today is your strength tomorrow. Keep pushing!",
    "Ace this exam like the champion you are meant to be.",
    "Struggle, struggle, struggle – success is coming for you!",
    "Don't just study, conquer the syllabus with confidence.",
    "Every hour you invest today is a medal waiting for you tomorrow.",
    "Believe in yourself – CSS and PMS are no match for your determination.",
    "Hard work beats talent when talent doesn't work hard – now is your time!",
    "Keep grinding, keep learning, keep growing – the exams will bow to you.",
    "Focus today, shine tomorrow – you will ace it!",
    "Motivation is temporary, discipline lasts forever. Keep going!",
    "Every question you solve is a step closer to victory.",
    "Turn every 'I can't' into 'I just did!'",
    "Consistency is your secret weapon for these exams.",
    "Dream big, study hard, stay unstoppable!",
    "No shortcuts, no excuses – only results.",
    "Your future self will thank you for the effort you put in today.",
    "Push your limits – greatness waits beyond comfort zones.",
    "CSS and PMS are tough, but so are you!",
    "Every challenge you face is an opportunity to grow stronger.",
    "Remember: small progress is still progress. Keep moving!",
    "Your focus today determines your success tomorrow.",
    "Mistakes are proof that you are trying – keep going!",
    "Keep your eyes on the prize – you're almost there!",
    "Turn your hard work into results – and results into celebrations!",
    "You're not just studying for exams, you're building your empire.",
    "Stay hungry, stay motivated, stay unstoppable!",
    "Conquer your fears, conquer the syllabus, conquer the exam!",
    "Don't count hours, make hours count – every minute matters.",
    "Your dedication will outshine the toughest questions.",
    "Wake up, study, repeat – excellence is in the routine.",
    "No fear, no stress – just focus and success.",
    "You've got this! Keep pushing and never give up.",
    "Hard work today, triumph tomorrow – CSS and PMS won't know what hit them.",
    "Turn struggle into strength, and strength into victory.",
    "Your exam is just another mountain – climb it fearlessly.",
    "Believe, prepare, succeed – that's the formula!",
    "Every revision is a step closer to a 100% score.",
    "Stay positive, study smart, and conquer the exams.",
    "Your brain is a weapon – arm it with knowledge!",
    "Discipline, dedication, determination – your secret trio.",
    "The harder the exam, the sweeter the success.",
    "Push past the doubts – greatness is waiting for you.",
    "Keep calm, keep studying, keep winning.",
    "Every effort counts – even the smallest one leads to victory.",
    "Don't just aim to pass, aim to excel!",
    "Your mindset today shapes your success tomorrow.",
    "Stay strong, stay focused, stay motivated – CSS and PMS are yours!",
    "Make your struggle your story of triumph.",
    "One more chapter, one more topic, one step closer to success.",
    "Motivation is your fuel, consistency is your engine.",
    "Remember: champions are made in the books they read today."
];

// Initialize Swiper Carousel
let quoteSwiper;
let currentQuoteIndex = 0;

function initializeSwiper() {
    quoteSwiper = new Swiper('.quote-carousel', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 600,
    });
}

// Update Quote Function
function updateQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = newIndex;
    const quoteElement = document.getElementById('motivationalQuote');
    
    if (quoteElement) {
        // Fade out
        quoteElement.style.opacity = '0';
        quoteElement.style.transform = 'translateY(-10px)';
        
        // Update text and fade in
        setTimeout(() => {
            quoteElement.textContent = quotes[currentQuoteIndex];
            quoteElement.style.opacity = '1';
            quoteElement.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.section-modal');
    modals.forEach(modal => closeModal(modal));
}

// Event Listeners for Link Items
function initializeLinkItems() {
    const linkItems = document.querySelectorAll('.link-item');
    
    linkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            
            if (section) {
                const modalId = `${section}-modal`;
                openModal(modalId);
            }
        });
    });
}

// Event Listeners for Close Buttons
function initializeCloseButtons() {
    const closeButtons = document.querySelectorAll('.close-modal');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.section-modal');
            closeModal(modal);
        });
    });
}

// Close Modal on Outside Click
function initializeOutsideClick() {
    const modals = document.querySelectorAll('.section-modal');
    
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
}

// Close Modal on Escape Key
function initializeEscapeKey() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

// Smooth Scroll for Anchor Links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Add Animation to Elements on Scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe link items
    const linkItems = document.querySelectorAll('.link-item');
    linkItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// Add Ripple Effect to Buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple CSS dynamically
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .link-item {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(37, 99, 235, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Full-Screen Physics Playground - Complete Engine! 🎮
function initializePlayfulIcons() {
    const playground = document.getElementById('physicsPlayground');
    if (!playground) return;
    
    // Physics constants
    const gravity = 0.6;
    const bounce = 0.5; // Wall bounce
    const friction = 0.98; // Air resistance
    const iconBounce = 0.8; // Icon-to-icon bounce
    // Responsive icon size based on precise breakpoints
    const screenWidth = window.innerWidth;
    let iconSize;
    let bottomSpace;
    
    if (screenWidth <= 390) {
        iconSize = 38; // Small mobile (iPhone SE, small Android)
        bottomSpace = 35;
    } else if (screenWidth <= 430) {
        iconSize = 40; // Medium mobile (iPhone 12/13/14)
        bottomSpace = 40;
    } else if (screenWidth <= 480) {
        iconSize = 42; // Large mobile (iPhone 15 Pro Max)
        bottomSpace = 40;
    } else if (screenWidth <= 768) {
        iconSize = 48; // Tablet
        bottomSpace = 50;
    } else {
        iconSize = 55; // Desktop
        bottomSpace = 70;
    }
    
    const icons = [];
    
    // Social media icons data + Mystery button (Mystery in MIDDLE position)
    const socialIconsData = [
        { class: 'whatsapp', icon: 'fab fa-whatsapp', link: 'https://whatsapp.com/channel/0029Va81q0TLtOj8Und0ua0l', title: 'WhatsApp' },
        { class: 'facebook', icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/csspmsgrammar', title: 'Facebook' },
        { class: 'mystery', icon: 'fas fa-question', link: '#', title: 'Social Icons Guide', isMystery: true },
        { class: 'instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/csspms.grammar', title: 'Instagram' },
        { class: 'broadcast', icon: 'fas fa-broadcast-tower', link: 'https://www.instagram.com/channel/AbbiG2WKNSpJDJuy/', title: 'Broadcast' }
    ];
    
    // Create icons in physics playground
    socialIconsData.forEach((data, index) => {
        const icon = document.createElement('a');
        icon.href = data.link;
        icon.target = '_blank';
        icon.rel = 'noopener noreferrer';
        icon.className = `physics-icon ${data.class}`;
        icon.title = data.title;
        icon.innerHTML = `<i class="${data.icon}"></i>`;
        
        // Position icons at bottom center initially with precise calculations
        const startY = window.innerHeight - iconSize - bottomSpace;
        
        // Calculate responsive spacing to prevent overlap
        let spacing;
        if (screenWidth <= 390) {
            // Small mobile - tight spacing
            spacing = Math.max(36, Math.min(45, (screenWidth - 180) / 5));
        } else if (screenWidth <= 430) {
            // Medium mobile
            spacing = Math.max(40, Math.min(50, (screenWidth - 200) / 5));
        } else if (screenWidth <= 480) {
            // Large mobile (iPhone 15 Pro Max)
            spacing = Math.max(42, Math.min(52, (screenWidth - 210) / 5));
        } else if (screenWidth <= 768) {
            // Tablet
            spacing = Math.max(50, Math.min(60, (screenWidth - 240) / 5));
        } else {
            // Desktop
            spacing = Math.max(55, Math.min(70, (screenWidth - 275) / 5));
        }
        
        const totalWidth = (socialIconsData.length - 1) * spacing;
        const startX = (window.innerWidth - totalWidth) / 2 + (index * spacing);
        
        icon.style.left = startX + 'px';
        icon.style.top = startY + 'px';
        
        playground.appendChild(icon);
        
        const iconData = {
            element: icon,
            x: 0,
            y: 0,
            absoluteX: startX,
            absoluteY: startY,
            vx: 0,
            vy: 0,
            isDragging: false,
            isPhysicsActive: false,
            startDragX: 0,
            startDragY: 0,
            lastX: 0,
            lastY: 0,
            dragStartTime: 0,
            link: data.link
        };
        
        icons.push(iconData);
        
        // Click handler - prevent if dragging/physics, or handle mystery modal
        icon.addEventListener('click', (e) => {
            if (iconData.isPhysicsActive || iconData.isDragging) {
                e.preventDefault();
                return;
            }
            
            // Handle mystery button click
            if (data.isMystery) {
                e.preventDefault();
                const mysteryModal = document.getElementById('mysteryModal');
                if (mysteryModal) {
                    mysteryModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    console.log('🔮 Mystery revealed! The secrets of the physics playground are now unveiled!');
                }
                return;
            }
        });
        
        // Mouse down - start drag
        icon.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            iconData.isDragging = true;
            iconData.dragStartTime = Date.now();
            iconData.startDragX = e.clientX;
            iconData.startDragY = e.clientY;
            iconData.lastX = e.clientX;
            iconData.lastY = e.clientY;
            iconData.vx = 0;
            iconData.vy = 0;
            icon.style.cursor = 'grabbing';
            icon.style.zIndex = '1000';
        });
        
        // Touch start
        icon.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            iconData.isDragging = true;
            iconData.dragStartTime = Date.now();
            iconData.startDragX = e.touches[0].clientX;
            iconData.startDragY = e.touches[0].clientY;
            iconData.lastX = e.touches[0].clientX;
            iconData.lastY = e.touches[0].clientY;
            iconData.vx = 0;
            iconData.vy = 0;
        });
    });
    
    // Mouse move - drag
    document.addEventListener('mousemove', (e) => {
        icons.forEach(iconData => {
            if (iconData.isDragging) {
                const dx = e.clientX - iconData.lastX;
                const dy = e.clientY - iconData.lastY;
                
                iconData.absoluteX += dx;
                iconData.absoluteY += dy;
                
                // Calculate velocity for throw
                iconData.vx = dx;
                iconData.vy = dy;
                
                iconData.element.style.left = iconData.absoluteX + 'px';
                iconData.element.style.top = iconData.absoluteY + 'px';
                iconData.element.style.transform = 'none';
                
                iconData.lastX = e.clientX;
                iconData.lastY = e.clientY;
            }
        });
    });
    
    // Touch move
    document.addEventListener('touchmove', (e) => {
        icons.forEach(iconData => {
            if (iconData.isDragging) {
                const dx = e.touches[0].clientX - iconData.lastX;
                const dy = e.touches[0].clientY - iconData.lastY;
                
                iconData.absoluteX += dx;
                iconData.absoluteY += dy;
                
                iconData.vx = dx;
                iconData.vy = dy;
                
                iconData.element.style.left = iconData.absoluteX + 'px';
                iconData.element.style.top = iconData.absoluteY + 'px';
                iconData.element.style.transform = 'none';
                
                iconData.lastX = e.touches[0].clientX;
                iconData.lastY = e.touches[0].clientY;
            }
        });
    });
    
    // Mouse up - release (throw or click)
    document.addEventListener('mouseup', (e) => {
        icons.forEach(iconData => {
            if (iconData.isDragging) {
                iconData.isDragging = false;
                const dragDuration = Date.now() - iconData.dragStartTime;
                const dragDistance = Math.sqrt(
                    Math.pow(e.clientX - iconData.startDragX, 2) + 
                    Math.pow(e.clientY - iconData.startDragY, 2)
                );
                
                iconData.element.style.cursor = 'grab';
                
                // Quick click = open link or mystery modal
                if (dragDuration < 200 && dragDistance < 10) {
                    iconData.isPhysicsActive = false;
                    if (socialIconsData[icons.indexOf(iconData)].isMystery) {
                        const mysteryModal = document.getElementById('mysteryModal');
                        if (mysteryModal) {
                            mysteryModal.classList.add('active');
                            document.body.style.overflow = 'hidden';
                            console.log('🔮 Mystery revealed! The secrets of the physics playground are now unveiled!');
                        }
                    } else {
                        window.open(iconData.link, '_blank');
                    }
                } else {
                    // Throw = activate physics
                    iconData.isPhysicsActive = true;
                    iconData.vx *= 1.5;
                    iconData.vy *= 1.5;
                }
            }
        });
    });
    
    // Touch end
    document.addEventListener('touchend', (e) => {
        icons.forEach(iconData => {
            if (iconData.isDragging) {
                iconData.isDragging = false;
                const dragDuration = Date.now() - iconData.dragStartTime;
                
                if (dragDuration < 200) {
                    // Tap = open link or mystery modal
                    iconData.isPhysicsActive = false;
                    if (socialIconsData[icons.indexOf(iconData)].isMystery) {
                        const mysteryModal = document.getElementById('mysteryModal');
                        if (mysteryModal) {
                            mysteryModal.classList.add('active');
                            document.body.style.overflow = 'hidden';
                            console.log('🔮 Mystery revealed! The secrets of the physics playground are now unveiled!');
                        }
                    } else {
                        window.open(iconData.link, '_blank');
                    }
                } else {
                    // Throw = activate physics
                    iconData.isPhysicsActive = true;
                    iconData.vx *= 1.5;
                    iconData.vy *= 1.5;
                }
            }
        });
    });
    
    // Circle-to-Circle Collision Detection
    function checkIconCollisions() {
        for (let i = 0; i < icons.length; i++) {
            for (let j = i + 1; j < icons.length; j++) {
                const icon1 = icons[i];
                const icon2 = icons[j];
                
                // Skip if either is being dragged
                if (icon1.isDragging || icon2.isDragging) continue;
                
                // Calculate centers using absolute positions
                const center1X = icon1.absoluteX + iconSize / 2;
                const center1Y = icon1.absoluteY + iconSize / 2;
                const center2X = icon2.absoluteX + iconSize / 2;
                const center2Y = icon2.absoluteY + iconSize / 2;
                
                // Calculate distance between centers
                const dx = center2X - center1X;
                const dy = center2Y - center1Y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                const minDistance = iconSize; // Minimum distance (60px)
                
                // Collision detected!
                if (distance < minDistance && distance > 0) {
                    // Calculate collision normal
                    const nx = dx / distance;
                    const ny = dy / distance;
                    
                    // Separate icons to prevent overlap
                    const overlap = minDistance - distance;
                    const separateX = (overlap / 2) * nx;
                    const separateY = (overlap / 2) * ny;
                    
                    icon1.absoluteX -= separateX;
                    icon1.absoluteY -= separateY;
                    icon2.absoluteX += separateX;
                    icon2.absoluteY += separateY;
                    
                    // Calculate relative velocity
                    const dvx = icon2.vx - icon1.vx;
                    const dvy = icon2.vy - icon1.vy;
                    const dvn = dvx * nx + dvy * ny; // Dot product
                    
                    // Only bounce if moving towards each other
                    if (dvn < 0) {
                        // Apply impulse (elastic collision)
                        const impulse = dvn * iconBounce;
                        
                        icon1.vx += impulse * nx;
                        icon1.vy += impulse * ny;
                        icon2.vx -= impulse * nx;
                        icon2.vy -= impulse * ny;
                        
                        // Reactivate physics for both
                        icon1.isPhysicsActive = true;
                        icon2.isPhysicsActive = true;
                    }
                }
            }
        }
    }
    
    // Physics animation loop - Full-screen engine
    function updatePhysics() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const radius = iconSize / 2;
        
        icons.forEach(iconData => {
            if (iconData.isPhysicsActive && !iconData.isDragging) {
                // ALWAYS apply gravity
                iconData.vy += gravity;
                
                // Apply air friction
                iconData.vx *= friction;
                iconData.vy *= friction;
                
                // Update absolute position
                iconData.absoluteX += iconData.vx;
                iconData.absoluteY += iconData.vy;
                
                // FULL-SCREEN BOUNDARY COLLISIONS
                
                // Right wall (full screen edge)
                if (iconData.absoluteX + iconSize >= screenWidth) {
                    iconData.absoluteX = screenWidth - iconSize;
                    iconData.vx = -Math.abs(iconData.vx) * bounce;
                }
                
                // Left wall (screen left edge)
                if (iconData.absoluteX <= 0) {
                    iconData.absoluteX = 0;
                    iconData.vx = Math.abs(iconData.vx) * bounce;
                }
                
                // Bottom (floor) - ONLY settling place
                if (iconData.absoluteY + iconSize >= screenHeight) {
                    iconData.absoluteY = screenHeight - iconSize;
                    iconData.vy = -Math.abs(iconData.vy) * bounce;
                    iconData.vx *= 0.9; // Ground friction
                    
                    // Stop small bounces
                    if (Math.abs(iconData.vy) < 2) {
                        iconData.vy = 0;
                        iconData.vx *= 0.85;
                    }
                }
                
                // Top (ceiling) - NEVER STICK
                if (iconData.absoluteY <= 0) {
                    iconData.absoluteY = 0;
                    iconData.vy = Math.abs(iconData.vy) * bounce * 0.7;
                }
                
                // Update DOM position
                iconData.element.style.left = iconData.absoluteX + 'px';
                iconData.element.style.top = iconData.absoluteY + 'px';
                
                // Rotation based on horizontal velocity
                const rotation = iconData.vx * 2;
                iconData.element.style.transform = `rotate(${rotation}deg)`;
                
                // Check for settling (ONLY on ground)
                const isOnGround = iconData.absoluteY + iconSize >= screenHeight - 2;
                const isStationary = Math.abs(iconData.vx) < 0.6 && Math.abs(iconData.vy) < 0.6;
                
                if (isOnGround && isStationary) {
                    iconData.isPhysicsActive = false;
                    iconData.vx = 0;
                    iconData.vy = 0;
                    iconData.absoluteY = screenHeight - iconSize;
                    iconData.element.style.top = iconData.absoluteY + 'px';
                    iconData.element.style.transform = 'rotate(0deg)';
                }
            }
        });
        
        // Check for icon-to-icon collisions
        checkIconCollisions();
        
        requestAnimationFrame(updatePhysics);
    }
    
    // Start physics loop
    updatePhysics();
    
    // Window resize handler - Update boundaries
    function handleResize() {
        const newScreenWidth = window.innerWidth;
        const newScreenHeight = window.innerHeight;
        // Calculate responsive icon size and spacing based on new screen width
        let newIconSize;
        let newBottomSpace;
        
        if (newScreenWidth <= 390) {
            newIconSize = 38;
            newBottomSpace = 35;
        } else if (newScreenWidth <= 430) {
            newIconSize = 40;
            newBottomSpace = 40;
        } else if (newScreenWidth <= 480) {
            newIconSize = 42;
            newBottomSpace = 40;
        } else if (newScreenWidth <= 768) {
            newIconSize = 48;
            newBottomSpace = 50;
        } else {
            newIconSize = 55;
            newBottomSpace = 70;
        }
        
        icons.forEach((iconData, index) => {
            // Calculate responsive spacing to prevent overlap
            let spacing;
            if (newScreenWidth <= 390) {
                spacing = Math.max(36, Math.min(45, (newScreenWidth - 180) / 5));
            } else if (newScreenWidth <= 430) {
                spacing = Math.max(40, Math.min(50, (newScreenWidth - 200) / 5));
            } else if (newScreenWidth <= 480) {
                spacing = Math.max(42, Math.min(52, (newScreenWidth - 210) / 5));
            } else if (newScreenWidth <= 768) {
                spacing = Math.max(50, Math.min(60, (newScreenWidth - 240) / 5));
            } else {
                spacing = Math.max(55, Math.min(70, (newScreenWidth - 275) / 5));
            }
            
            const totalWidth = (socialIconsData.length - 1) * spacing;
            const startX = (newScreenWidth - totalWidth) / 2 + (index * spacing);
            const startY = newScreenHeight - newIconSize - newBottomSpace;
            
            // If icon is settled, move to new position
            if (!iconData.isPhysicsActive && !iconData.isDragging) {
                iconData.absoluteX = startX;
                iconData.absoluteY = startY;
                iconData.element.style.left = startX + 'px';
                iconData.element.style.top = startY + 'px';
            } else {
                // If flying, keep within new bounds
                iconData.absoluteX = Math.max(0, Math.min(newScreenWidth - iconSize, iconData.absoluteX));
                iconData.absoluteY = Math.max(0, Math.min(newScreenHeight - iconSize, iconData.absoluteY));
                iconData.element.style.left = iconData.absoluteX + 'px';
                iconData.element.style.top = iconData.absoluteY + 'px';
            }
        });
        
        console.log(`📐 Screen resized: ${newScreenWidth}×${newScreenHeight} - Physics boundaries updated!`);
    }
    
    // Listen for window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
    });
    
    // Double click to reset all icons
    document.addEventListener('dblclick', () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        icons.forEach((iconData, index) => {
            iconData.isPhysicsActive = false;
            iconData.vx = 0;
            iconData.vy = 0;
            
            // Calculate original position based on current screen size
            let resetBottomSpace;
            if (screenWidth <= 390) {
                resetBottomSpace = 35;
            } else if (screenWidth <= 430) {
                resetBottomSpace = 40;
            } else if (screenWidth <= 480) {
                resetBottomSpace = 40;
            } else if (screenWidth <= 768) {
                resetBottomSpace = 50;
            } else {
                resetBottomSpace = 70;
            }
            
            // Calculate spacing to prevent overlap
            let spacing;
            if (screenWidth <= 390) {
                spacing = Math.max(36, Math.min(45, (screenWidth - 180) / 5));
            } else if (screenWidth <= 430) {
                spacing = Math.max(40, Math.min(50, (screenWidth - 200) / 5));
            } else if (screenWidth <= 480) {
                spacing = Math.max(42, Math.min(52, (screenWidth - 210) / 5));
            } else if (screenWidth <= 768) {
                spacing = Math.max(50, Math.min(60, (screenWidth - 240) / 5));
            } else {
                spacing = Math.max(55, Math.min(70, (screenWidth - 275) / 5));
            }
            
            const totalWidth = (socialIconsData.length - 1) * spacing;
            const targetX = (screenWidth - totalWidth) / 2 + (index * spacing);
            const targetY = screenHeight - iconSize - resetBottomSpace;
            
            iconData.element.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            iconData.element.style.left = targetX + 'px';
            iconData.element.style.top = targetY + 'px';
            iconData.element.style.transform = 'rotate(0deg)';
            
            iconData.absoluteX = targetX;
            iconData.absoluteY = targetY;
            
            setTimeout(() => {
                iconData.element.style.transition = 'none';
            }, 600);
        });
        console.log('🔄 All icons reset to original positions!');
    });
    
    console.log('🎮 FULL-SCREEN Physics Playground Active!');
    console.log('💡 Icons can be thrown ANYWHERE on screen!');
    console.log('💥 Icons bounce off walls AND each other!');
    console.log('👆 Quick tap = Open link | Drag & throw = Physics fun!');
    console.log('🔄 Double-click anywhere = Reset all icons');
    console.log(`📐 Playground size: ${window.innerWidth}×${window.innerHeight}px`);
}

// Mystery Modal Functionality
function initializeMysteryModal() {
    const mysteryModal = document.getElementById('mysteryModal');
    const mysteryCloseBtn = document.getElementById('mysteryCloseBtn');
    
    // Close modal
    function closeMysteryModal() {
        if (mysteryModal) {
            mysteryModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    if (mysteryCloseBtn) {
        mysteryCloseBtn.addEventListener('click', closeMysteryModal);
    }
    
    // Close on outside click
    if (mysteryModal) {
        mysteryModal.addEventListener('click', (e) => {
            if (e.target === mysteryModal) {
                closeMysteryModal();
            }
        });
    }
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mysteryModal && mysteryModal.classList.contains('active')) {
            closeMysteryModal();
        }
    });
}

// Initialize all ripple effects
function initializeRippleEffects() {
    addRippleStyles();
    const buttons = document.querySelectorAll('.link-item');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

// Track Analytics (Optional - placeholder function)
function trackEvent(eventName, eventData) {
    // You can integrate Google Analytics or other analytics here
    console.log('Event:', eventName, eventData);
}

// Add click tracking to links
function initializeAnalytics() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', () => {
            const linkText = link.textContent.trim();
            const linkHref = link.href;
            trackEvent('external_link_click', {
                text: linkText,
                url: linkHref
            });
        });
    });
}

// Dynamic Background Effect
function initializeDynamicBackground() {
    const backgrounds = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
        'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    ];

    let currentBg = 0;
    
    setInterval(() => {
        currentBg = (currentBg + 1) % backgrounds.length;
        const bgElement = document.querySelector('.background-image');
        if (bgElement) {
            bgElement.style.transition = 'background 2s ease';
            // This would require actual background images for the blur effect
            // For now, we'll keep the default gradient
        }
    }, 15000);
}

// Performance Optimization - Lazy Load Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Page Visibility API - Pause/Resume animations
function initializeVisibilityChange() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause animations when tab is not visible
            if (quoteSwiper) {
                quoteSwiper.autoplay.stop();
            }
        } else {
            // Resume animations when tab becomes visible
            if (quoteSwiper) {
                quoteSwiper.autoplay.start();
            }
        }
    });
}

// Initialize PWA Service Worker (Optional)
function initializeServiceWorker() {
    if ('serviceWorker' in navigator) {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js').then(registration => {
        //     console.log('Service Worker registered:', registration);
        // }).catch(error => {
        //     console.log('Service Worker registration failed:', error);
        // });
    }
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');
    const body = document.body;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
    
    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            const isLightMode = body.classList.contains('light-mode');
            
            // Toggle icons
            moonIcon.classList.toggle('hidden', isLightMode);
            sunIcon.classList.toggle('hidden', !isLightMode);
            
            // Save preference
            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
            
            // Track theme change
            trackEvent('theme_toggle', { theme: isLightMode ? 'light' : 'dark' });
            
            // Add animation effect
            themeToggle.style.transform = 'scale(1.2) rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 300);
        });
    }
}

// Background Images Array - High quality exam preparation and study images
const backgroundImages = [
    // Pexels - Exam Preparation Photos
    'https://images.pexels.com/photos/6684209/pexels-photo-6684209.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/7516544/pexels-photo-7516544.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/5940703/pexels-photo-5940703.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/7128752/pexels-photo-7128752.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/5538629/pexels-photo-5538629.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/7092583/pexels-photo-7092583.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/7516381/pexels-photo-7516381.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/6281827/pexels-photo-6281827.jpeg?auto=compress&cs=tinysrgb&w=1920',
    
    // Unsplash - Student Studying Photos
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80',
    
    // Additional exam preparation images
    'https://images.pexels.com/photos/16562727/pexels-photo-16562727.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/7092587/pexels-photo-7092587.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

// Update Background Images based on theme
function updateBackgroundImages() {
    const bgElement = document.querySelector('.background-image');
    
    if (bgElement) {
        // Select random background image on page load
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        const selectedImage = backgroundImages[randomIndex];
        
        // Set background image with important flag to override CSS
        bgElement.style.setProperty('background-image', `url('${selectedImage}')`, 'important');
        bgElement.style.setProperty('opacity', '0.6', 'important');
        
        console.log(`✅ Background image ${randomIndex + 1} of ${backgroundImages.length} loaded: ${selectedImage}`);
        
        // Verify image loaded
        const img = new Image();
        img.onload = () => console.log('✅ Background image successfully loaded');
        img.onerror = () => console.error('❌ Failed to load background image');
        img.src = selectedImage;
    } else {
        console.error('❌ Background element not found');
    }
}

// Preload images for better performance
function preloadBackgroundImages() {
    backgroundImages.forEach((src, index) => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Background ${index + 1} preloaded`);
    });
}

// Main Initialization Function
function init() {
    // Core functionality
    initializeSwiper();
    initializeLinkItems();
    initializeCloseButtons();
    initializeOutsideClick();
    initializeEscapeKey();
    initializeSmoothScroll();
    
    // Theme toggle
    initializeThemeToggle();
    
    // Enhancements
    initializeScrollAnimations();
    initializeRippleEffects();
    initializeMysteryModal(); // Mystery reveal system!
    initializePlayfulIcons(); // Fun draggable social icons!
    initializeAnalytics();
    initializeLazyLoading();
    initializeVisibilityChange();
    
    // Background effects
    updateBackgroundImages(); // Set random background on load
    preloadBackgroundImages(); // Preload all backgrounds
    initializeDynamicBackground();
    
    // Update first quote
    updateQuote();
    
    // Update quote every 10 seconds
    setInterval(updateQuote, 10000);
    
    // Log initialization
    console.log('═══════════════════════════════════════════════════');
    console.log('🚀 CSSPMS.GRAMMAR - Full-Screen Physics Playground!');
    console.log('═══════════════════════════════════════════════════');
    console.log('');
    console.log('🖼️  Background: 14 rotating study images');
    console.log('💡 Refresh = New random background');
    console.log('');
    console.log('🎮 FULL-SCREEN PHYSICS ENGINE:');
    console.log(`   📐 Playground: ${window.innerWidth}×${window.innerHeight}px`);
    console.log('   💥 5 Icons with collision detection (4 social + 1 mystery)');
    console.log('   🎯 Drag anywhere on ENTIRE screen');
    console.log('   🏀 Icons bounce off walls & each other');
    console.log('   ♻️  Auto-resize on window change');
    console.log('');
    console.log('🔮 MYSTERY SYSTEM:');
    console.log('   🔴 Red glowing mystery ball = 5th physics icon');
    console.log('   ❓ Click mystery ball to reveal secrets!');
    console.log('   🎪 Instructions hidden until discovered');
    console.log('   💫 Fully integrated with physics system');
    console.log('');
    console.log('🎪 HOW TO PLAY:');
    console.log('   👆 Quick tap = Open link (or mystery modal)');
    console.log('   🎯 Drag & throw = Physics mode');
    console.log('   🔄 Double-click = Reset all');
    console.log('   📏 Resize window = Boundaries adapt');
    console.log('');
    console.log('═══════════════════════════════════════════════════');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Expose functions globally for debugging
window.CSSPMS = {
    openModal,
    closeModal,
    closeAllModals,
    updateQuote,
    trackEvent,
    toggleTheme: () => {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) themeToggle.click();
    },
    changeBackground: updateBackgroundImages,
    totalBackgrounds: backgroundImages.length
};

