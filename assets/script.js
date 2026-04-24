/**
 * 胡英杰作品集 - 交互脚本
 * 深色科技风格个人网站
 */

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSkillBars();
    initSkillFilter();
    initProjectFilter();
    initProjectModal();
    initContactForm();
    initScrollEffects();
    initSkillCloudHover();
});

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ============================================
// Skill Progress Bars Animation
// ============================================
function initSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.querySelector('.skill-progress');
                if (progress) {
                    const value = progress.dataset.progress;
                    progress.style.width = value + '%';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => {
        observer.observe(card);
    });
}

// ============================================
// Skills Filter
// ============================================
function initSkillFilter() {
    const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
    const skillCards = document.querySelectorAll('#skillsGrid .skill-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            skillCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    // Re-animate progress bar
                    const progress = card.querySelector('.skill-progress');
                    if (progress) {
                        progress.style.width = '0%';
                        setTimeout(() => {
                            progress.style.width = progress.dataset.progress + '%';
                        }, 100);
                    }
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ============================================
// Projects Filter
// ============================================
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('#projectsGrid .project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            projectCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ============================================
// Project Modal
// ============================================
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const viewBtns = document.querySelectorAll('.btn-view');
    
    // Project data
    const projectData = {
        'ai-travel': {
            title: 'AI行程助手',
            tags: ['LLM', 'POI召回', '产品策略'],
            background: {
                title: '项目背景',
                content: '针对旅行规划场景中的目的地搜索与商业转化痛点，设计并开发基于LLM的智能行程规划系统。通过自然语言处理技术理解用户出行意图，结合POI召回算法实现个性化路线推荐，同时优化商业转化路径，提升订单GMV。'
            },
            methods: {
                title: '技术方法',
                content: '采用检索增强生成(RAG)架构，结合POI知识库实现精准召回。设计意图识别模块理解用户偏好，通过协同过滤与内容推荐结合的方式生成个性化行程。优化用户交互流程，提升转化效率。'
            },
            gallery: [
                '用户上传/image_1777011603387_0_5cwv.gif',
                '用户上传/image_1777011612211_0_ntqh.gif'
            ]
        },
        'poi-gov': {
            title: 'POI数据治理与空间聚类',
            tags: ['空间分析', '坐标纠偏', '数据治理'],
            background: {
                title: '项目背景',
                content: '针对海量POI数据存在坐标偏移、分类混乱、质量参差等问题，建立完整的数据治理体系。实现5000万+级POI数据的统一治理，通过坐标纠偏算法提升位置精度，采用K-Means聚类识别商业价值区域。'
            },
            methods: {
                title: '技术方法',
                content: '开发GCJ02到WGS84坐标转换的优化算法，解决沿海区域坐标偏移问题。建立语义标准化层实现智能去重，设计"2km空间熔断机制"识别异常POI。通过K-Means算法提取商业集群，生成商圈标签体系。'
            },
            gallery: [
                '用户上传/image_1777011483543_0_n5p4.gif',
                '用户上传/image_1777011491677_0_xq27.gif',
                '用户上传/image_1777011497613_0_yhb1.gif'
            ]
        },
        'data-platform': {
            title: '城市级POI空间数据中台',
            tags: ['数据中台', '热力分析', 'K-Means'],
            background: {
                title: '项目背景',
                content: '构建面向深圳全域的POI空间数据中台，实现数据采集、清洗、存储、分析、可视化的全链路管理。通过热力图分析与K-Means聚类算法，为商业选址、区域规划、用户画像等场景提供数据支撑。'
            },
            methods: {
                title: '技术方法',
                content: '设计多源数据融合架构，实现POI数据的自动化采集与增量更新。建立数据质量监控体系，通过热力分析可视化空间分布特征。应用K-Means算法进行商业区域聚类，输出高价值POI标签。'
            },
            gallery: [
                '用户上传/image_1777011504874_0_1c22.gif',
                '用户上传/image_1777011513777_0_j8x1.gif',
                '用户上传/image_1777011519367_0_hx7l.gif'
            ]
        },
        'lbs-biz': {
            title: 'LBS商业转化与选址优化',
            tags: ['LBS', '商业分析', '选址优化'],
            background: {
                title: '项目背景',
                content: '基于位置服务的商业转化分析平台，通过空间数据分析帮助企业优化门店选址策略。整合POI数据、用户轨迹、消费行为等多维数据，构建商业价值评估模型，提升选址决策的科学性。'
            },
            methods: {
                title: '技术方法',
                content: '构建区域商业价值评估模型，综合考量人口密度、竞争态势、交通便利度等因素。开发选址推荐算法，结合空间可达性与市场饱和度分析，输出优化建议。实现GMV转化预测与ROI评估。'
            },
            gallery: [
                '用户上传/image_1777011497613_0_yhb1.gif'
            ]
        }
    };
    
    // Open modal
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.dataset.project;
            const data = projectData[projectId];
            
            if (data) {
                let galleryHTML = '';
                data.gallery.forEach(img => {
                    galleryHTML += `<img src="${img}" alt="项目图片">`;
                });
                
                modalContent.innerHTML = `
                    <div class="project-detail-header">
                        <h2>${data.title}</h2>
                        <div class="project-detail-tags">
                            ${data.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="project-detail-section">
                        <h4><i class="fas fa-info-circle"></i> ${data.background.title}</h4>
                        <p>${data.background.content}</p>
                    </div>
                    <div class="project-detail-section">
                        <h4><i class="fas fa-cogs"></i> ${data.methods.title}</h4>
                        <p>${data.methods.content}</p>
                    </div>
                    <div class="project-detail-section">
                        <h4><i class="fas fa-images"></i> 项目展示</h4>
                        <div class="project-gallery">
                            ${galleryHTML}
                        </div>
                    </div>
                `;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Close on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================
// Contact Form
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> 发送成功!';
            submitBtn.classList.add('success');
            
            // Reset form
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('success');
            }, 2000);
        }, 1500);
    });
}

// ============================================
// Scroll Effects
// ============================================
function initScrollEffects() {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.section-header, .about-content, .skills-grid, .projects-grid, .contact-content');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Skill Cloud Hover Effect
// ============================================
function initSkillCloudHover() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
}

// ============================================
// Tag Click Filter (Projects)
// ============================================
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('tag') && e.target.closest('.card-tags')) {
        const tag = e.target.dataset.tag;
        const projectFilterBtns = document.querySelectorAll('.projects-filter .filter-btn');
        
        // Map tags to project categories
        const tagCategoryMap = {
            'LLM': 'ai',
            'POI召回': 'ai',
            '产品策略': 'ai',
            '空间分析': 'data',
            '坐标纠偏': 'data',
            '数据治理': 'data',
            '数据中台': 'data',
            '热力分析': 'data',
            'K-Means': 'data',
            'LBS': 'lbs',
            '商业分析': 'lbs',
            '选址优化': 'lbs'
        };
        
        const category = tagCategoryMap[tag];
        if (category) {
            // Update filter buttons
            projectFilterBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                }
            });
            
            // Filter projects
            const projectCards = document.querySelectorAll('#projectsGrid .project-card');
            projectCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (cardCategory === category) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
            
            // Scroll to projects section
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Preload Images
// ============================================
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) return;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
}

preloadImages();
