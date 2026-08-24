// ============================================================
// KEVIN CUEVAS PORTFOLIO - MAIN JAVASCRIPT (main.js)
// Pure Vanilla JavaScript - No Bundler, Framework, or Vite Required
// ============================================================

// ============================================================
// 1. TRANSLATION DICTIONARY (EN & ES)
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
        hero_title: 'Websites for small businesses in Illinois.',
        hero_name: 'Kevin Cuevas',
        hero_education: 'Northern Illinois University — Computer Science',

        // Hero - Work
        hero_work_title: 'Project Gallery',
        hero_work_by: 'by Kevin Cuevas.',

        // Hero - About
        hero_about_title: 'About Kevin',
        hero_about_desc: "Computer Science grad from Northern Illinois University, currently completing my Master's. I build websites for local businesses across Illinois.",

        // Hero - Contact
        hero_contact_title: 'Get in Touch',
        hero_contact_desc: 'Need a website for your Illinois business? I can help you get online quickly and affordably.',

        // Featured Work Section
        featured_work_title: 'Featured Work',
        featured_work_desc: 'Clean, easy to use websites that help local businesses get found online.',

        // Project 1 - The Tint Guy
        project_tintguy_title: 'The Tint Guy',
        project_tintguy_category: 'Window Tint & Auto Services',
        project_tintguy_desc: 'Window tinting, vehicle wraps, and auto mechanic service website featuring services, photos, and contact information.',
        project_tintguy_view: 'View Project',

        // Project 2 - Que Chido Catering
        project_quechidos_title: 'Que Chido Catering',
        project_quechidos_category: 'Mexican Food Catering',
        project_quechidos_desc: 'Mexican food catering business website in Elgin, IL featuring menu packages, party trays, and contact information.',
        project_quechidos_view: 'View Project',

        // Project 3 - M&G Landscaping
        project_mg_title: 'M&G Landscaping',
        project_mg_category: 'Landscaping Company',
        project_mg_desc: 'Professional landscaping website showcasing services and a portfolio gallery to attract local residential and commercial clients.',
        project_mg_view: 'View Project',

        // Project 4 - JR ProService
        project_jrpro_title: 'JR ProService',
        project_jrpro_category: 'Painting & Drywall',
        project_jrpro_desc: 'Professional painting and drywall services including interior/exterior painting, accent walls, deck staining, wallpaper removal, commercial work, and drywall repair.',
        project_jrpro_view: 'View Project',

        // Project 5 - TAAG
        project_taag_title: 'TAAG Quality Construction Inc.',
        project_taag_category: 'Concrete & Masonry',
        project_taag_desc: 'Professional construction website showcasing concrete and masonry work for residential and commercial projects.',
        project_taag_view: 'View Project',

        // Project 6 - El Sarape
        project_elsarape_title: 'El Sarape',
        project_elsarape_category: 'Restaurant',
        project_elsarape_desc: 'Family-owned Mexican restaurant website in Silvis, IL featuring menu, location, and contact information.',
        project_elsarape_view: 'View Project',

        // Project 7 - Unidos Rocha
        project_unidos_title: 'Unidos Rocha',
        project_unidos_category: 'Landscaping & Snow Removal',
        project_unidos_desc: 'Professional landscaping and snow removal services serving the local community with reliable, year round outdoor maintenance.',
        project_unidos_view: 'View Project',

        view_all_work: 'View All Work →',

        // Mobile First Section
        mobile_title: 'Designed for mobile first.',
        mobile_desc: 'Every website is designed with the mobile layout in mind first to ensure a simple and easy experience across all devices.',
        mobile_responsive: 'Responsive Design',
        mobile_touch: 'Touch Friendly',
        mobile_fast: 'Fast Loading',

        // How I Work + What You Get Section
        how_work_title: 'How I Work + What You Get',
        how_work_subtitle: 'A simple process, clear deliverables',

        how_work_section: 'How I Work',
        step1_title: 'Send me your info',
        step1_desc: 'You send your contact details, business information, photos you want on the site, and any social media links.',
        step2_title: 'Design & Build',
        step2_desc: "I'll create a clean, modern website tailored specifically to your business.",
        step3_title: 'Domain, Hosting & Launch',
        step3_desc: "I purchase your custom domain through Cloudflare (secure, zero markups), configure fast hosting and SSL security, and deploy everything live. I handle all the technical details end-to-end.",

        what_get_section: 'What You Get',
        deliverable1: 'Custom desktop website tailored to your business',
        deliverable2: 'Mobile-first responsive design for phones & tablets',
        deliverable3: 'Contact forms so customers can reach you directly',
        deliverable4: 'Click-to-call phone and WhatsApp buttons',
        deliverable5: 'Basic SEO setup for Google search visibility',
        deliverable6: 'Fast, secure cloud hosting configured for you',
        deliverable7: 'Domain registration via Cloudflare (safe, reliable & no hidden fees)',
        deliverable8: '100% turnkey deployment — I handle all technical setup',
        deliverable9: 'Post-launch support and edits',
        deliverable10: 'Custom QR code generation for your business',
        qr_code_example: 'Example QR code for your business',

        // About Preview Section
        about_preview_title: 'About Me',
        about_preview_p1: "I'm working on my Master's in Computer Science at Northern Illinois University while building websites for local businesses in my community.",
        about_preview_p2: 'I started doing this as a way to keep growing as a developer, but it quickly became something I genuinely enjoy. I love helping small businesses have a real online presence.',
        about_preview_p3: "I learn something new with every project. You'll probably see my style evolve as I grow.",
        learn_more: 'Learn More →',

        // Footer CTA
        footer_cta_title: 'Contact me to get started.',
        footer_cta_desc: "I'm passionate about helping local businesses establish their online presence. Let's talk about how we can create a website that represents your business with authenticity and professionalism.",
        start_project: 'Start a Project',

        // Contact Info Labels
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
        work_tintguy_tag: 'Tint & Auto',
        work_tintguy_feature1: 'Window tint & wraps',
        work_tintguy_feature2: 'Auto mechanic services',
        work_tintguy_feature3: 'Easy contact',

        work_quechidos_tag: 'Catering',
        work_quechidos_feature1: 'Mexican food menu',
        work_quechidos_feature2: 'Party & event trays',
        work_quechidos_feature3: 'Easy contact',

        work_mg_tag: 'Landscaping',
        work_mg_feature1: 'Mobile responsive design',
        work_mg_feature2: 'Service showcase',
        work_mg_feature3: 'Clean design',
        work_jrpro_tag: 'Painting & Drywall',
        work_jrpro_feature1: 'Before/after image slider',
        work_jrpro_feature2: 'Modern service tiles with icons',
        work_jrpro_feature3: 'Filterable project gallery',

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
        work_unidos_feature3: 'Year round maintenance',

        work_cta_title: 'Ready to start your project?',
        work_cta_desc: "Let's discuss how we can create a professional online presence for your business.",
        get_in_touch: 'Get in Touch',
        gallery_badge_count: '7 Live Client Websites',
        visit_website_btn: 'Visit Website',

        // About Page
        about_title: 'About Me',
        about_p1: 'I build websites for local businesses because I know what small businesses need to get found online.',
        about_p2: "I focus on clean designs that work well and don't cost a fortune. No complicated setups or confusing tech talk, just a straightforward website that helps your business grow.",
        contact_me: 'Contact Me →',

        education_title: 'My Education',
        education_desc: 'I study Computer Science at NIU. What I learn in my classes I use to build websites that actually work well for businesses.',
        education_degree: 'Computer Science, B.S. — Completed May 2025',
        education_focus: 'Web Development & Design',
        education_grad: "Master's in Computer Science — In Progress",

        philosophy_title: 'How I Work',
        philosophy_1_title: 'Customer Focused',
        philosophy_1_desc: 'I build websites that work for your customers, easy to use and find what they need.',
        philosophy_2_title: 'Honest & Reliable',
        philosophy_2_desc: 'I build websites that actually work and show what your business is really about.',
        philosophy_3_title: 'Mobile First',
        philosophy_3_desc: "I make sure your website works great on phones since that's where most customers will find you.",

        skills_title: 'Technical Skills',
        skills_frontend: 'Frontend Development',
        skill_html: 'HTML5 & Semantic Markup',
        skill_css: 'CSS3 Styling & Layout',
        skill_js: 'JavaScript & Interactivity',
        skill_responsive: 'Responsive Design',
        skills_design: 'Design & UX',
        skill_ux: 'User Experience Design',
        skill_accessibility: 'Accessibility (WCAG)',
        skill_performance: 'Performance Optimization',
        skill_seo: 'SEO Best Practices',

        about_cta_title: "Let's talk",
        about_cta_desc: "I'm passionate about helping local businesses establish their online presence. Let's talk about how we can create a website that represents your business with authenticity and professionalism.",

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
        form_message_placeholder: "Tell me about your business and what kind of website you're looking for...",
        form_submit: 'Send Message',
        form_success: "Thank you for your message! I'll get back to you within 24 hours.",

        contact_other_title: 'Other Ways to Connect',
        contact_email_best: 'Best for detailed project discussions',
        contact_whatsapp_quick: 'Quick questions and project updates',
        contact_facebook_follow: 'Follow my work and updates',

        response_time_title: 'Response Time',
        response_time_desc: 'I typically respond to messages within 24 hours. For urgent project inquiries, WhatsApp is the fastest way to reach me.',

        service_area_title: 'Service Area',
        service_area_desc: 'I work with businesses throughout Illinois, with special focus on the Northern Illinois region including DeKalb, Sycamore, and surrounding communities.'
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
        hero_title: 'Páginas web para negocios pequeños en Illinois.',
        hero_name: 'Kevin Cuevas',
        hero_education: 'Northern Illinois University — Ciencias de la Computación',

        // Hero - Work
        hero_work_title: 'Mis Proyectos',
        hero_work_by: 'por Kevin Cuevas.',

        // Hero - About
        hero_about_title: 'Sobre Kevin',
        hero_about_desc: 'Terminé mi carrera en Computación en Northern Illinois University y ahora estoy en mi Maestría. Hago páginas web para negocios en Illinois.',

        // Hero - Contact
        hero_contact_title: 'Contacto',
        hero_contact_desc: '¿Necesita una página web para su negocio? Lo ayudo rápido.',

        // Featured Work Section
        featured_work_title: 'Mis Proyectos',
        featured_work_desc: 'Hago páginas web limpias y fáciles de usar para que los clientes lo encuentren en internet.',

        // Project 1 - The Tint Guy
        project_tintguy_title: 'The Tint Guy',
        project_tintguy_category: 'Polarizado y Mecánica',
        project_tintguy_desc: 'Página web de polarizado de ventanas, wraps y mecánica automotriz con servicios, fotos y contacto.',
        project_tintguy_view: 'Ver Proyecto',

        // Project 2 - Que Chidos Catering
        project_quechidos_title: 'Que Chido Catering',
        project_quechidos_category: 'Catering de Comida Mexicana',
        project_quechidos_desc: 'Página web de catering de comida mexicana en Elgin, IL con paquetes de menú, charolas para fiestas y contacto.',
        project_quechidos_view: 'Ver Proyecto',

        // Project 3 - M&G Landscaping
        project_mg_title: 'M&G Landscaping',
        project_mg_category: 'Jardinería',
        project_mg_desc: 'Página web de jardinería con fotos del trabajo y los servicios que ofrecen.',
        project_mg_view: 'Ver Proyecto',

        // Project 4 - JR ProService
        project_jrpro_title: 'JR ProService',
        project_jrpro_category: 'Pintura y Drywall',
        project_jrpro_desc: 'Página web de pintura y drywall: pintura interior/exterior, paredes decorativas, barnizado de terrazas, remoción de papel tapiz y reparaciones.',
        project_jrpro_view: 'Ver Proyecto',

        // Project 5 - TAAG
        project_taag_title: 'TAAG Quality Construction Inc.',
        project_taag_category: 'Construcción',
        project_taag_desc: 'Página web de construcción que muestra los trabajos de concreto que han hecho.',
        project_taag_view: 'Ver Proyecto',

        // Project 6 - El Sarape
        project_elsarape_title: 'El Sarape',
        project_elsarape_category: 'Restaurante',
        project_elsarape_desc: 'Página web de restaurante familiar en Silvis, IL con el menú, horario y contacto.',
        project_elsarape_view: 'Ver Proyecto',

        // Project 7 - Unidos Rocha
        project_unidos_title: 'Unidos Rocha',
        project_unidos_category: 'Jardinería y Nieve',
        project_unidos_desc: 'Página web para un negocio de jardinería y limpieza de nieve durante todo el año.',
        project_unidos_view: 'Ver Proyecto',

        view_all_work: 'Ver Todos los Proyectos →',

        // Mobile First Section
        mobile_title: 'Hecho para celulares primero.',
        mobile_desc: 'Cada página está hecha pensando en el celular para que se vea bien en cualquier dispositivo.',
        mobile_responsive: 'Se ve bien en cualquier pantalla',
        mobile_touch: 'Fácil de usar con el dedo',
        mobile_fast: 'Carga rápido',

        // How I Work + What You Get Section
        how_work_title: 'Cómo Trabajo',
        how_work_subtitle: 'Simple y directo',

        how_work_section: 'El Proceso',
        step1_title: 'Mándeme su información',
        step1_desc: 'Me manda su contacto, información del negocio, fotos que quiera mostrar y sus redes sociales.',
        step2_title: 'Diseño y construcción',
        step2_desc: 'Hago una página web moderna, limpia y hecha a la medida de su negocio.',
        step3_title: 'Dominio, Hosting y Publicación',
        step3_desc: 'Yo compro su dominio en Cloudflare (sitio seguro y directo), configuro el hosting rápido con seguridad SSL y publico la página. Me encargo de todo para que usted no tenga complicaciones técnicas.',

        what_get_section: 'Lo Que Incluye',
        deliverable1: 'Página web personalizada para su negocio',
        deliverable2: 'Diseño adaptable hecho para celulares y computadoras',
        deliverable3: 'Formulario de contacto para que los clientes le escriban',
        deliverable4: 'Botones directos para llamadas y WhatsApp',
        deliverable5: 'SEO básico para aparecer en Google',
        deliverable6: 'Hosting rápido y seguro configurado para su página',
        deliverable7: 'Compra de dominio en Cloudflare (seguro, confiable y sin costos ocultos)',
        deliverable8: 'Servicio 100% completo — yo me encargo de toda la configuración técnica',
        deliverable9: 'Soporte y cambios después de publicar la página',
        deliverable10: 'Código QR personalizado para su negocio',
        qr_code_example: 'Ejemplo de código QR para su negocio',

        // About Preview Section
        about_preview_title: 'Sobre Mí',
        about_preview_p1: 'Estoy estudiando mi Maestría en Computación en Northern Illinois University y hago páginas web para negocios de la comunidad.',
        about_preview_p2: 'Empecé a hacer esto para seguir aprendiendo, pero ahora me gusta mucho. Me gusta ayudar a los negocios pequeños a tener una buena página web.',
        about_preview_p3: 'Con cada proyecto aprendo algo nuevo.',
        learn_more: 'Saber Más →',

        // Footer CTA
        footer_cta_title: 'Contácteme para empezar.',
        footer_cta_desc: '¿Listo para tener su página web? Hablemos de lo que necesita su negocio.',
        start_project: 'Empezar',

        // Contact Info Labels
        contact_whatsapp_label: 'WhatsApp',
        contact_email_label: 'Correo',
        contact_facebook_label: 'Facebook',

        // Footer
        footer_contact_title: 'Contacto',
        footer_email_label: 'Correo',
        footer_phone_label: 'Teléfono',
        footer_whatsapp_label: 'WhatsApp',
        footer_facebook_label: 'Facebook',
        footer_nav_title: 'Páginas',
        footer_copyright: '© 2026 Kevin Cuevas. Todos los derechos reservados.',

        // WhatsApp Float
        whatsapp_float_label: 'Contactar por WhatsApp',

        // Work Page
        work_tintguy_tag: 'Polarizado y Autos',
        work_tintguy_feature1: 'Polarizado y wraps',
        work_tintguy_feature2: 'Servicios de mecánica',
        work_tintguy_feature3: 'Contacto fácil',

        work_quechidos_tag: 'Catering',
        work_quechidos_feature1: 'Menú de comida mexicana',
        work_quechidos_feature2: 'Charolas para fiestas',
        work_quechidos_feature3: 'Contacto fácil',

        work_mg_tag: 'Jardinería',
        work_mg_feature1: 'Se ve bien en celulares',
        work_mg_feature2: 'Muestra los servicios',
        work_mg_feature3: 'Diseño limpio',
        work_jrpro_tag: 'Pintura y Drywall',
        work_jrpro_feature1: 'Slider de antes y después',
        work_jrpro_feature2: 'Azulejos de servicios modernos con iconos',
        work_jrpro_feature3: 'Galería de proyectos filtrable',

        work_taag_tag: 'Construcción',
        work_taag_feature1: 'Trabajos de concreto',
        work_taag_feature2: 'Proyectos residenciales',
        work_taag_feature3: 'Proyectos comerciales',

        work_elsarape_tag: 'Restaurante',
        work_elsarape_feature1: 'Menú en línea',
        work_elsarape_feature2: 'Horario y ubicación',
        work_elsarape_feature3: 'Contacto fácil',

        work_unidos_tag: 'Jardinería',
        work_unidos_feature1: 'Jardinería',
        work_unidos_feature2: 'Limpieza de nieve',
        work_unidos_feature3: 'Todo el año',

        work_cta_title: '¿Listo para empezar?',
        work_cta_desc: 'Hablemos de su página web.',
        get_in_touch: 'Contactar',
        gallery_badge_count: '7 Páginas Web Publicadas',
        visit_website_btn: 'Visitar Sitio Web',

        // About Page
        about_title: 'Sobre Mí',
        about_p1: 'Soy estudiante de Computación en Northern Illinois University. Hago páginas web para negocios pequeños porque sé lo que necesitan para que los clientes los encuentren.',
        about_p2: 'Hago diseños limpios que funcionan bien. Sin complicaciones. Solo una buena página web para su negocio.',
        contact_me: 'Contactarme →',

        education_title: 'Mi Educación',
        education_desc: 'Estudio Computación en NIU. Lo que aprendo en mis clases lo uso para hacer páginas web que funcionan bien.',
        education_degree: 'Computación, Lic. — Terminada en mayo 2025',
        education_focus: 'Páginas Web y Diseño',
        education_grad: 'Maestría en Computación — En curso',

        philosophy_title: 'Cómo Trabajo',
        philosophy_1_title: 'Pienso en sus clientes',
        philosophy_1_desc: 'Hago páginas fáciles de usar para que sus clientes encuentren lo que necesitan.',
        philosophy_2_title: 'Honesto y directo',
        philosophy_2_desc: 'Le digo lo que puede esperar y cumplo lo que prometo.',
        philosophy_3_title: 'Primero el celular',
        philosophy_3_desc: 'La mayoría de sus clientes lo van a buscar desde el celular, así que eso es lo primero.',

        skills_title: 'Lo Que Sé Hacer',
        skills_frontend: 'Páginas Web',
        skill_html: 'HTML5',
        skill_css: 'CSS3',
        skill_js: 'JavaScript',
        skill_responsive: 'Diseño para celulares',
        skills_design: 'Diseño',
        skill_ux: 'Fácil de usar',
        skill_accessibility: 'Accesible para todos',
        skill_performance: 'Carga rápido',
        skill_seo: 'SEO básico',

        about_cta_title: 'Hablemos',
        about_cta_desc: 'Me gusta ayudar a los negocios de la comunidad. Hablemos de lo que necesita.',

        // Contact Page
        form_title: 'Mándeme un Mensaje',
        form_name_label: 'Su Nombre *',
        form_name_placeholder: 'Juan Pérez',
        form_email_label: 'Correo *',
        form_email_placeholder: 'juan@ejemplo.com',
        form_business_label: 'Nombre del Negocio',
        form_business_placeholder: 'Jardinería Pérez',
        form_phone_label: 'Teléfono',
        form_phone_placeholder: '(815) 503-2302',
        form_message_label: 'Detalles *',
        form_message_placeholder: 'Cuénteme sobre su negocio y qué tipo de página busca...',
        form_submit: 'Enviar',
        form_success: '¡Gracias por su mensaje! Le respondo en 24 horas.',

        contact_other_title: 'Otras Formas de Contacto',
        contact_email_best: 'Para hablar del proyecto con más detalle',
        contact_whatsapp_quick: 'Para preguntas rápidas',
        contact_facebook_follow: 'Siga mi trabajo',

        response_time_title: 'Tiempo de Respuesta',
        response_time_desc: 'Normalmente respondo en 24 horas. Para algo urgente, WhatsApp es lo más rápido.',

        service_area_title: 'Área de Servicio',
        service_area_desc: 'Trabajo con negocios en todo Illinois, especialmente en el norte como DeKalb, Sycamore y alrededores.'
    }
};

// ============================================================
// 2. LANGUAGE ENGINE
// ============================================================
function getSavedLanguage() {
    try {
        const lang = localStorage.getItem('preferredLanguage');
        if (lang === 'es' || lang === 'en') return lang;
    } catch (e) {
        // Fallback if localStorage is restricted
    }
    return 'en';
}

function saveLanguage(lang) {
    try {
        localStorage.setItem('preferredLanguage', lang);
    } catch (e) {
        // Ignore localStorage error
    }
}

function applyTranslations(lang) {
    const t = translations[lang] || translations.en;
    if (!t) return;

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    document.documentElement.lang = lang;
}

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

function switchLanguage(lang) {
    if (!translations[lang]) return;
    saveLanguage(lang);
    applyTranslations(lang);
    updateLanguageToggleUI(lang);
}

function initLanguageToggle() {
    // Global event listener using closest() to catch flag or text clicks
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.language-toggle');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            const lang = btn.getAttribute('data-lang');
            if (lang) {
                switchLanguage(lang);
            }
        }
    });

    const savedLang = getSavedLanguage();
    applyTranslations(savedLang);
    updateLanguageToggleUI(savedLang);
}

// Early translation execution (run as soon as script evaluates)
(function initLanguageEarly() {
    const savedLang = getSavedLanguage();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            applyTranslations(savedLang);
            updateLanguageToggleUI(savedLang);
        });
    } else {
        applyTranslations(savedLang);
        updateLanguageToggleUI(savedLang);
    }
})();

// ============================================================
// 3. NAVIGATION & MENU CONTROLLERS
// ============================================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    function toggleMobileMenu() {
        if (!mobileMenu || !mobileMenuBtn) return;
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close when clicking internal links
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('.mobile-menu-link') : [];
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
                if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
}

function initDesktopMenu() {
    const desktopMenuBtn = document.querySelector('.desktop-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    if (desktopMenuBtn && mobileMenu) {
        desktopMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('hidden');
                if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
}

// ============================================================
// 4. PHONE SHOWCASE IMAGE CYCLING (INDEX PAGE)
// ============================================================
function initMobileImageCycling() {
    const images = document.querySelectorAll('.mobile-image');
    if (images.length === 0) return;

    let currentIndex = 0;
    const cycleInterval = 3000; // 3 seconds

    setInterval(() => {
        // Fade out current image
        images[currentIndex].classList.remove('opacity-100');
        images[currentIndex].classList.add('opacity-0');

        // Increment index
        currentIndex = (currentIndex + 1) % images.length;

        // Fade in next image
        images[currentIndex].classList.remove('opacity-0');
        images[currentIndex].classList.add('opacity-100');
    }, cycleInterval);
}

// ============================================================
// 5. CONTACT FORM HANDLER
// ============================================================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formAlert = document.getElementById('form-message');

    if (contactForm && formAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const currentLang = getSavedLanguage();
            const messageText = translations[currentLang]?.form_success || "Thank you for your message! I'll get back to you within 24 hours.";

            formAlert.textContent = messageText;
            formAlert.classList.remove('hidden');

            contactForm.reset();

            setTimeout(() => {
                formAlert.classList.add('hidden');
            }, 6000);
        });
    }
}

// ============================================================
// 7. GALLERY FILTER TABS
function initGalleryFilter() {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
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

    const animatedItems = document.querySelectorAll('.featured-project-card, .gallery-project-card, .concept1-card, .concept2-card, .browser-card, .spotlight-card');
    animatedItems.forEach(el => {
        observer.observe(el);
    });
}

// ============================================================
// 9. INITIALIZE ALL COMPONENTS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initDesktopMenu();
    initMobileImageCycling();
    initContactForm();
    initGalleryFilter();
    initScrollAnimations();
});
