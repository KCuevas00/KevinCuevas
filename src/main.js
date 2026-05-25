// ============================================================
// ASSET IMPORTS - Vite will handle hashing and path resolution
// ============================================================
import gradImage from '../Photos/grad.JPEG';
import niuImage from '../Photos/niu.JPEG';
import img8592Image from '../Photos/IMG_8592.jpeg';

// ============================================================
// LANGUAGE SYSTEM - Must run BEFORE DOM is visible
// ============================================================

const translations = {
    en: {
        // Navigation
        nav_home: 'HOME',
        nav_work: 'GALLERY',
        nav_about: 'ABOUT',
        nav_contact: 'CONTACT',
        nav_menu: 'Menu',
        nav_close: 'Close menu',

        // Hero - Index
        hero_title: 'Simple websites for Illinois small businesses.',
        hero_name: 'Kevin Cuevas',
        //hero_education: 'Northern Illinois University — Computer Science',

        // Hero - Work
        hero_work_title: 'Project Gallery',
        //hero_work_by: 'by Kevin Cuevas.',

        // Hero - About
        hero_about_title: 'About Kevin',
        hero_about_desc: 'Computer Science student at Northern Illinois University creating websites for local businesses across Illinois.',

        // Hero - Contact
        hero_contact_title: 'Get in Touch',
        hero_contact_desc: 'Need a website for your Illinois business? I can help you get online quickly and affordably.',

        // Featured Work Section
        featured_work_title: 'Featured Work',
        featured_work_desc: 'I build clean, functional websites that help local businesses get found online.',

        // Project 1 - M&G Landscaping
        project_mg_title: 'M&G Landscaping',
        project_mg_category: 'Landscaping Company',
        project_mg_desc: 'Professional landscaping website showcasing services, portfolio gallery, and customer testimonials to attract local residential and commercial clients.',
        project_mg_view: 'View Project',

        // Project 2 - TAAG
        project_taag_title: 'TAAG Quality Construction Inc.',
        project_taag_category: 'Concrete & Masonry',
        project_taag_desc: 'Professional construction website showcasing concrete and masonry work for residential and commercial projects.',
        project_taag_view: 'View Project',

        // Project 3 - El Sarape
        project_elsarape_title: 'El Sarape',
        project_elsarape_category: 'Restaurant',
        project_elsarape_desc: 'Family-owned Mexican restaurant website in Silvis, IL featuring menu, location, and contact information.',
        project_elsarape_view: 'View Project',

        // Project 4 - Unidos Rocha
        project_unidos_title: 'Unidos Rocha',
        project_unidos_category: 'Landscaping & Snow Removal',
        project_unidos_desc: 'Professional landscaping and snow removal services serving the local community with reliable, year-round outdoor maintenance.',
        project_unidos_view: 'View Project',

        view_all_work: 'View All Work →',

        // Mobile First Section
        mobile_title: 'Designed for mobile first.',
        mobile_desc: 'Every website is designed with the mobile layout in mind first to ensure a simple and easy experience across all devices.',
        mobile_responsive: 'Responsive Design',
        mobile_touch: 'Touch-Friendly',
        mobile_fast: 'Fast Loading',

        // How I Work + What You Get Section
        how_work_title: 'How I Work + What You Get',
        how_work_subtitle: 'A simple process, clear deliverables',

        how_work_section: 'How I Work',
        step1_title: 'Send me your info',
        step1_desc: 'You send your contact details, business information, photos you want on the site, and any social media links.',
        step2_title: 'Design & Build',
        step2_desc: 'I\'ll create a clean, modern website tailored to your business',
        step3_title: 'Launch',
        step3_desc: 'I\'ll send you previews of the site. Once everything looks good, we set up your custom domain and publish it live.',

        what_get_section: 'What You Get',
        deliverable1: 'Desktop website designed for your business',
        deliverable2: 'Mobile-friendly responsive design',
        deliverable3: 'Contact forms so customers can reach you easily',
        deliverable4: 'Click-to-call phone and WhatsApp integration',
        deliverable5: 'Basic SEO setup for visibility',
        deliverable6: 'Hosting setup guidance',
        deliverable7: 'Custom domain setup guidance (yourbusiness.com)',
        deliverable8: 'Fast loading performance',
        deliverable9: 'Post-launch support and small edits',

        // About Preview Section
        about_preview_title: 'About Me',
        about_preview_p1: "I'm currently pursuing my Master's in Computer Science at Northern Illinois University while building websites for local businesses in my community.",
        about_preview_p2: 'I started doing this as a way to keep learning and growing as a developer, but it quickly turned into something I genuinely enjoy. I love helping small businesses create a professional online presence that still feels personal and authentic.',
        about_preview_p3: "I learn something new with every project. You'll probably see my style evolve as I grow.",
        learn_more: 'Learn More →',

        // Footer CTA
        footer_cta_title: "Contact me to get started.",
        footer_cta_desc: 'Ready to establish your professional online presence? Let\'s discuss how we can create a website that represents your business with authenticity and care.',
        start_project: 'Start a Project',

        // Contact Info
        contact_whatsapp_label: 'WhatsApp',
        contact_email_label: 'Email',
        contact_facebook_label: 'Facebook',

        // Footer
        footer_contact_title: 'Contact',
        footer_email_label: 'Email',
        footer_phone_label: 'Phone',
        footer_whatsapp_label: 'WhatsApp',
        footer_facebook_label: 'Facebook',
        footer_nav_title: 'Navigation',
        footer_copyright: '© 2026 Kevin Cuevas. All rights reserved.',

        // WhatsApp Float
        whatsapp_float_label: 'Contact on WhatsApp',

        // Work Page
        work_mg_tag: 'Landscaping',
        work_mg_feature1: 'Mobile-responsive design',
        work_mg_feature2: 'Service showcase',
        work_mg_feature3: 'Customer testimonials',

        work_taag_tag: 'Construction',
        work_taag_feature1: 'Concrete work',
        work_taag_feature2: 'Masonry services',
        work_taag_feature3: 'Commercial projects',

        work_elsarape_tag: 'Restaurant',
        work_elsarape_feature1: 'Online menu',
        work_elsarape_feature2: 'Location & hours',
        work_elsarape_feature3: 'Easy contact',

        work_unidos_tag: 'Landscaping',
        work_unidos_feature1: 'Landscaping services',
        work_unidos_feature2: 'Snow removal',
        work_unidos_feature3: 'Year-round maintenance',

        work_cta_title: 'Ready to start your project?',
        work_cta_desc: "Let's discuss how we can create a professional online presence for your business.",
        get_in_touch: 'Get in Touch',

        // About Page
        about_title: 'About Me',
        about_p1: "I'm a Computer Science student at Northern Illinois University. I build websites for local businesses because I understand what small businesses need to get found online.",
        about_p2: "I focus on simple, clean designs that work well and don't cost a fortune. No complicated setups or confusing tech talk - just straightforward websites that help your business grow.",
        contact_me: 'Contact Me →',

        education_title: 'My Education',
        education_desc: "I'm studying Computer Science at NIU and focusing on web development. My classes give me the technical skills to build websites that actually work well for businesses.",
        education_degree: 'Computer Science, B.S.',
        education_focus: 'Web Development & Design',
        education_grad: 'Expected Graduation: 2027',

        philosophy_title: 'How I Work',
        philosophy_1_title: 'Customer-Focused',
        philosophy_1_desc: 'I build websites that work for your customers - easy to use and find what they need.',
        philosophy_2_title: 'Honest & Reliable',
        philosophy_2_desc: 'I build websites that actually work and show what your business is really about.',
        philosophy_3_title: 'Mobile-First',
        philosophy_3_desc: "I make sure your website works great on phones since that's where most customers will find you.",

        skills_title: 'Technical Skills',
        skills_frontend: 'Frontend Development',
        skill_html: 'HTML5 & Semantic Markup',
        skill_css: 'CSS3 & Tailwind CSS',
        skill_js: 'JavaScript & Interactivity',
        skill_responsive: 'Responsive Design',
        skills_design: 'Design & UX',
        skill_ux: 'User Experience Design',
        skill_accessibility: 'Accessibility (WCAG)',
        skill_performance: 'Performance Optimization',
        skill_seo: 'SEO Best Practices',

        about_cta_title: "Let's work together",
        about_cta_desc: "I'm passionate about helping local businesses establish their online presence. Let's discuss how we can create a website that represents your business with authenticity and professionalism.",

        // Contact Page
        form_title: 'Send a Message',
        form_name_label: 'Your Name *',
        form_name_placeholder: 'John Smith',
        form_email_label: 'Email Address *',
        form_email_placeholder: 'john@example.com',
        form_business_label: 'Business Name',
        form_business_placeholder: "Smith's Landscaping",
        form_phone_label: 'Phone Number',
        form_phone_placeholder: '(815) 503-2302',
        form_message_label: 'Project Details *',
        form_message_placeholder: 'Tell me about your business and what kind of website you\'re looking for...',
        form_submit: 'Send Message',
        form_success: "Thank you for your message! I'll get back to you within 24 hours.",

        contact_other_title: 'Other Ways to Connect',
        contact_email_best: 'Best for detailed project discussions',
        contact_whatsapp_quick: 'Quick questions and project updates',
        contact_facebook_follow: 'Follow my work and updates',

        response_time_title: 'Response Time',
        response_time_desc: 'I typically respond to messages within 24 hours. For urgent project inquiries, WhatsApp is the fastest way to reach me.',

        service_area_title: 'Service Area',
        service_area_desc: 'I work with businesses throughout Illinois, with special focus on the Northern Illinois region including DeKalb, Sycamore, and surrounding communities.',
    },
    es: {
        // Navigation
        nav_home: 'INICIO',
        nav_work: 'GALERÍA',
        nav_about: 'SOBRE MÍ',
        nav_contact: 'CONTACTO',
        nav_menu: 'Menú',
        nav_close: 'Cerrar menú',

        // Hero - Index
        hero_title: 'Sitios web sencillos para negocios pequeños en Illinois.',
        hero_name: 'Kevin Cuevas',
        //hero_education: 'Universidad Northern Illinois — Ciencias de la Computación',

        // Hero - Work
        hero_work_title: 'Galería de Proyectos',
        //hero_work_by: 'por Kevin Cuevas.',

        // Hero - About
        hero_about_title: 'Sobre Kevin',
        hero_about_desc: 'Estudiante de Computación en Northern Illinois University haciendo sitios web para negocios locales en Illinois.',

        // Hero - Contact
        hero_contact_title: 'Contacto',
        hero_contact_desc: '¿Necesitas un sitio web para tu negocio en Illinois? Puedo ayudarte a estar en línea rápido y barato.',

        // Featured Work Section
        featured_work_title: 'Mis Proyectos',
        featured_work_desc: 'Hago sitios web limpios y fáciles de usar que ayudan a los negocios pequeños a aparecer en internet.',

        // Project 1 - M&G Landscaping
        project_mg_title: 'M&G Landscaping',
        project_mg_category: 'Jardinería',
        project_mg_desc: 'Sitio web de jardinería que muestra los servicios, fotos del trabajo y lo que dicen los clientes para atraer más gente.',
        project_mg_view: 'Ver Proyecto',

        // Project 2 - TAAG
        project_taag_title: 'TAAG Quality Construction Inc.',
        project_taag_category: 'Concreto y Albañilería',
        project_taag_desc: 'Sitio web moderno de construcción que muestra los trabajos de concreto y albañilería que hacen para clientes.',
        project_taag_view: 'Ver Proyecto',

        // Project 3 - El Sarape
        project_elsarape_title: 'El Sarape',
        project_elsarape_category: 'Restaurante',
        project_elsarape_desc: 'Sitio web de restaurante familiar en Silvis, IL que muestra el menú, ubicación y cómo contactarlos.',
        project_elsarape_view: 'Ver Proyecto',

        // Project 4 - Unidos Rocha
        project_unidos_title: 'Unidos Rocha',
        project_unidos_category: 'Jardinería y Remoción de Nieve',
        project_unidos_desc: 'Servicios profesionales de jardinería y remoción de nieve sirviendo a la comunidad local con mantenimiento exterior confiable todo el año.',
        project_unidos_view: 'Ver Proyecto',

        view_all_work: 'Ver Todos los Proyectos →',

        // Mobile First Section
        mobile_title: 'Hecho para celulares primero.',
        mobile_desc: 'Cada sitio web está pensado para celulares primero para que funcione bien en todos los dispositivos.',
        mobile_responsive: 'Se adapta a cualquier pantalla',
        mobile_touch: 'Fácil de usar con el dedo',
        mobile_fast: 'Carga rápido',

        // How I Work + What You Get Section
        how_work_title: 'Cómo Trabajo + Lo Que Te Doy',
        how_work_subtitle: 'Proceso sencillo, resultados claros',

        how_work_section: 'Cómo Trabajo',
        step1_title: 'Mándame tu información',
        step1_desc: 'Me mandas tu contacto, información del negocio, fotos que quieras en el sitio y tus redes sociales.',
        step2_title: 'Diseño y Construcción',
        step2_desc: 'Hago un sitio web limpio y moderno para tu negocio',
        step3_title: 'Lanzamiento',
        step3_desc: 'Te mando vistas previas del sitio. Cuando todo se vea bien, ponemos tu dominio y lo publicamos.',

        what_get_section: 'Lo Que Te Doy',
        deliverable1: 'Sitio web para computadoras',
        deliverable2: 'Diseño que funciona en celulares',
        deliverable3: 'Formularios para que los clientes te escriban',
        deliverable4: 'Botones para llamar y WhatsApp',
        deliverable5: 'SEO básico para que te encuentren',
        deliverable6: 'Ayuda con el hosting',
        deliverable7: 'Ayuda con tu dominio (tunegocio.com)',
        deliverable8: 'Sitio web que carga rápido',
        deliverable9: 'Ayuda después de lanzar el sitio',

        // About Preview Section
        about_preview_title: 'Sobre Mí',
        about_preview_p1: 'Estoy estudiando mi Maestría en Computación en Northern Illinois University mientras hago sitios web para negocios locales en mi comunidad.',
        about_preview_p2: 'Empecé esto para seguir aprendiendo como programador, pero ahora me gusta mucho. Me encanta ayudar a los negocios pequeños a tener un sitio web profesional pero que se sienta personal.',
        about_preview_p3: 'Aprendo algo nuevo con cada proyecto. Vas a ver cómo mi estilo cambia mientras sigo creciendo.',
        learn_more: 'Saber Más →',

        // Footer CTA
        footer_cta_title: 'Contáctame para empezar.',
        footer_cta_desc: '¿Listo para tener tu sitio web? Hablemos de cómo podemos hacer un sitio que represente tu negocio de verdad.',
        start_project: 'Empezar Proyecto',

        // Contact Info
        contact_whatsapp_label: 'WhatsApp',
        contact_email_label: 'Correo',
        contact_facebook_label: 'Facebook',

        // Footer
        footer_contact_title: 'Contacto',
        footer_email_label: 'Correo',
        footer_phone_label: 'Teléfono',
        footer_whatsapp_label: 'WhatsApp',
        footer_facebook_label: 'Facebook',
        footer_nav_title: 'Navegación',
        footer_copyright: '© 2026 Kevin Cuevas. Todos los derechos reservados.',

        // WhatsApp Float
        whatsapp_float_label: 'Contactar por WhatsApp',

        // Work Page
        work_mg_tag: 'Jardinería',
        work_mg_feature1: 'Funciona en celulares',
        work_mg_feature2: 'Muestra los servicios',
        work_mg_feature3: 'Testimonios de clientes',

        work_taag_tag: 'Construcción',
        work_taag_feature1: 'Trabajos de concreto',
        work_taag_feature2: 'Albañilería',
        work_taag_feature3: 'Proyectos comerciales',

        work_elsarape_tag: 'Restaurante',
        work_elsarape_feature1: 'Menú en línea',
        work_elsarape_feature2: 'Ubicación y horas',
        work_elsarape_feature3: 'Contacto fácil',

        work_unidos_tag: 'Jardinería',
        work_unidos_feature1: 'Servicios de jardinería',
        work_unidos_feature2: 'Remoción de nieve',
        work_unidos_feature3: 'Mantenimiento todo el año',

        work_cta_title: '¿Listo para empezar tu proyecto?',
        work_cta_desc: 'Hablemos de cómo podemos hacer un sitio web profesional para tu negocio.',
        get_in_touch: 'Contactar',

        // About Page
        about_title: 'Sobre Mí',
        about_p1: 'Soy estudiante de Computación en Northern Illinois University. Hago sitios web para negocios locales porque sé lo que necesitan los negocios pequeños para aparecer en internet.',
        about_p2: 'Me enfoco en diseños sencillos y limpios que funcionan bien y no cuestan mucho. Sin cosas complicadas ni palabras técnicas raras - solo sitios web que ayudan a tu negocio a crecer.',
        contact_me: 'Contactarme →',

        education_title: 'Mi Educación',
        education_desc: 'Estudio Computación en NIU y me enfoco en hacer sitios web. Mis clases me dan las habilidades técnicas para hacer sitios web que funcionan bien para los negocios.',
        education_degree: 'Computación, Lic.',
        education_focus: 'Desarrollo Web y Diseño',
        education_grad: 'Graduación: 2027',

        philosophy_title: 'Cómo Trabajo',
        philosophy_1_title: 'Pienso en el Cliente',
        philosophy_1_desc: 'Hago sitios web que funcionan para tus clientes - fáciles de usar y encontrar lo que necesitan.',
        philosophy_2_title: 'Honesto y Confiable',
        philosophy_2_desc: 'Hago sitios web que funcionan de verdad y muestran lo que hace tu negocio.',
        philosophy_3_title: 'Primero el Celular',
        philosophy_3_desc: 'Me aseguro de que tu sitio web funcione muy bien en celulares porque ahí es donde la mayoría de clientes te van a encontrar.',

        skills_title: 'Mis Habilidades',
        skills_frontend: 'Desarrollo Web',
        skill_html: 'HTML5',
        skill_css: 'CSS3 y Tailwind CSS',
        skill_js: 'JavaScript',
        skill_responsive: 'Diseño Responsivo',
        skills_design: 'Diseño',
        skill_ux: 'Experiencia de Usuario',
        skill_accessibility: 'Accesibilidad',
        skill_performance: 'Velocidad',
        skill_seo: 'SEO',

        about_cta_title: 'Trabajemos juntos',
        about_cta_desc: 'Me gusta ayudar a los negocios locales a tener su sitio web. Hablemos de cómo podemos hacer un sitio que represente tu negocio de verdad.',

        // Contact Page
        form_title: 'Enviar Mensaje',
        form_name_label: 'Tu Nombre *',
        form_name_placeholder: 'Juan Pérez',
        form_email_label: 'Correo *',
        form_email_placeholder: 'juan@ejemplo.com',
        form_business_label: 'Nombre del Negocio',
        form_business_placeholder: 'Jardinería Pérez',
        form_phone_label: 'Teléfono',
        form_phone_placeholder: '(815) 503-2302',
        form_message_label: 'Detalles del Proyecto *',
        form_message_placeholder: 'Cuéntame sobre tu negocio y qué tipo de sitio web buscas...',
        form_submit: 'Enviar Mensaje',
        form_success: '¡Gracias por tu mensaje! Te respondo en 24 horas.',

        contact_other_title: 'Otras Formas de Contactar',
        contact_email_best: 'Mejor para hablar del proyecto',
        contact_whatsapp_quick: 'Preguntas rápidas y actualizaciones',
        contact_facebook_follow: 'Sigue mi trabajo y actualizaciones',

        response_time_title: 'Tiempo de Respuesta',
        response_time_desc: 'Normalmente respondo en 24 horas. Para cosas urgentes, WhatsApp es lo más rápido.',

        service_area_title: 'Área de Servicio',
        service_area_desc: 'Trabajo con negocios en todo Illinois, especialmente en el norte incluyendo DeKalb, Sycamore y comunidades cercanas.',
    }
};

// Get saved language or default to English
function getSavedLanguage() {
    return localStorage.getItem('preferredLanguage') || 'en';
}

// Save language preference
function saveLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
}

// Apply translations to the page
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Update language toggle button states
function updateLanguageToggleUI(lang) {
    document.querySelectorAll('.language-toggle').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active-language');
            btn.setAttribute('aria-current', 'true');
        } else {
            btn.classList.remove('active-language');
            btn.removeAttribute('aria-current');
        }
    });
}

// Switch language function
function switchLanguage(lang) {
    if (!translations[lang]) return;

    saveLanguage(lang);
    applyTranslations(lang);
    updateLanguageToggleUI(lang);
}

// Initialize language system
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.language-toggle');

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Apply saved language on page load
    const savedLang = getSavedLanguage();
    applyTranslations(savedLang);
    updateLanguageToggleUI(savedLang);
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    // Toggle mobile menu
    function toggleMobileMenu() {
        if (!mobileMenu || !mobileMenuBtn) return;
        
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        } else {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }
    }

    // Event listeners for mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on links
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    mobileMenuLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
}

// Desktop menu functionality
function initDesktopMenu() {
    // Find desktop menu button using data-translate attribute
    const desktopMenuBtn = document.querySelector('button[data-translate="nav_menu"]');
    
    if (desktopMenuBtn) {
        desktopMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle mobile menu for desktop as well (reuse same overlay)
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            
            if (mobileMenu && mobileMenuBtn) {
                const isOpen = !mobileMenu.classList.contains('hidden');
                
                if (isOpen) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                } else {
                    mobileMenu.classList.remove('hidden');
                    mobileMenuBtn.setAttribute('aria-expanded', 'true');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
        
        // Ensure button is clickable
        desktopMenuBtn.style.pointerEvents = 'auto';
        desktopMenuBtn.style.cursor = 'pointer';
    }
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card');
    animateElements.forEach(el => {
        el.classList.add('opacity-0');
        observer.observe(el);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// WhatsApp floating button (placeholder functionality)
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('[aria-label="WhatsApp"]');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Placeholder for WhatsApp functionality
            console.log('WhatsApp integration would go here');
        });
    }
}

// EARLY LANGUAGE INITIALIZATION - Run before DOM is visible
(function initLanguageEarly() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const t = translations[savedLang];
    if (!t) return;

    // Apply translations immediately to prevent flash of wrong language
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Set HTML lang attribute
    document.documentElement.lang = savedLang;
})();

// Mobile image cycling animation
function initMobileImageCycling() {
    const images = document.querySelectorAll('.mobile-image');
    if (images.length === 0) return;

    let currentIndex = 0;
    const cycleInterval = 3000; // 3 seconds

    function cycleImages() {
        // Fade out current image
        images[currentIndex].classList.remove('opacity-100');
        images[currentIndex].classList.add('opacity-0');

        // Move to next image
        currentIndex = (currentIndex + 1) % images.length;

        // Fade in next image
        images[currentIndex].classList.remove('opacity-0');
        images[currentIndex].classList.add('opacity-100');
    }

    // Start cycling
    setInterval(cycleImages, cycleInterval);
}

// Set dynamic image paths for Vite assets
function initDynamicImagePaths() {
    // Set graduation image src
    const gradImages = document.querySelectorAll('img[data-asset="grad"]');
    gradImages.forEach(img => {
        img.src = gradImage;
    });

    // Set NIU image src
    const niuImages = document.querySelectorAll('img[data-asset="niu"]');
    niuImages.forEach(img => {
        img.src = niuImage;
    });

    // Set background image src
    const bgImages = document.querySelectorAll('img[data-asset="bg"]');
    bgImages.forEach(img => {
        img.src = img8592Image;
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initDesktopMenu();
    initWhatsAppButton();
    initLanguageToggle();
    initMobileImageCycling();
    initDynamicImagePaths();

    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Scroll-based animations (optional enhancement)
const scrollHandler = debounce(() => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.animate-slow-zoom');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 10);

// Only add parallax if user prefers motion
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    window.addEventListener('scroll', scrollHandler);
}
