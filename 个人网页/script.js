// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // 页面切换功能
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const landingPage = document.getElementById('landing-page');
    const resumePage = document.getElementById('resume-page');

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            switchToResumePage();
        });
    }

    // 导航链接平滑滚动
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                smoothScrollTo(targetElement);
            }
        });
    });

    // 技能星级动画
    animateSkillStars();

    // 滚动动画
    initializeScrollAnimations();

    // 视差效果
    initializeParallax();
}

// 切换到简历页
function switchToResumePage() {
    const landingPage = document.getElementById('landing-page');
    const resumePage = document.getElementById('resume-page');

    // 淡出引导页
    landingPage.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    landingPage.style.opacity = '0';
    landingPage.style.transform = 'translateY(-50px)';

    setTimeout(() => {
        landingPage.classList.remove('active');
        resumePage.classList.add('active');
        
        // 淡入简历页
        resumePage.style.opacity = '0';
        resumePage.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            resumePage.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            resumePage.style.opacity = '1';
            resumePage.style.transform = 'translateY(0)';
        }, 100);
    }, 800);
}

// 平滑滚动到目标元素
function smoothScrollTo(targetElement) {
    const headerHeight = document.querySelector('.fixed-header').offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight - 20;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// 技能星级动画
function animateSkillStars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stars = entry.target.querySelectorAll('.skill-stars i');
                stars.forEach((star, index) => {
                    setTimeout(() => {
                        star.style.opacity = '0';
                        star.style.transform = 'scale(0)';
                        star.style.transition = 'all 0.3s ease';
                        
                        setTimeout(() => {
                            star.style.opacity = '1';
                            star.style.transform = 'scale(1)';
                        }, 100);
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        observer.observe(item);
    });
}

// 滚动动画
function initializeScrollAnimations() {
    const contentCards = document.querySelectorAll('.content-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                entry.target.style.transition = 'all 0.6s ease-out';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    contentCards.forEach(card => {
        observer.observe(card);
    });
}

// 视差效果
function initializeParallax() {
    const stars = document.querySelector('.stars');
    const twinkling = document.querySelector('.twinkling');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (stars) {
            stars.style.transform = `translateY(${rate}px)`;
        }
        if (twinkling) {
            twinkling.style.transform = `translateY(${rate * 0.5}px)`;
        }
    });
}

// 添加星光粒子效果
function createStarParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'star-particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    // 创建随机星光粒子
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        opacity: 0;
        animation: particleFloat 6s infinite linear;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    container.appendChild(particle);
}

// 添加粒子浮动动画
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        10% {
            opacity: 1;
            transform: translateY(-10px) scale(1);
        }
        90% {
            opacity: 1;
            transform: translateY(-100px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-120px) scale(0);
        }
    }
`;
document.head.appendChild(style);

// 初始化粒子效果
setTimeout(createStarParticles, 1000);

// 添加鼠标跟随效果
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor-follow') || createCursorFollow();
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

function createCursorFollow() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follow';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);
    return cursor;
}

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' && document.getElementById('landing-page').classList.contains('active')) {
        e.preventDefault();
        switchToResumePage();
    }
});

// 添加触摸支持
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (diff > swipeThreshold && document.getElementById('landing-page').classList.contains('active')) {
        switchToResumePage();
    }
}

// 性能优化：节流滚动事件
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 应用节流到视差效果
const throttledParallax = throttle(initializeParallax, 16);
window.addEventListener('scroll', throttledParallax); 