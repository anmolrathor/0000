/* =========================================================================
   Guru Kirpa Hospital - script.js
   Combines: inline SVG icon library + all page data, rendering and behaviour
   (slideshow, mobile navigation, scroll spy, image fallbacks)
   ========================================================================= */

/* ============ ICON LIBRARY ============ */
var ICONS = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'map-pin': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  'chevron-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  'chevron-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  stethoscope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>',
  microscope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>',
  scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>',
  droplets: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 4.7 7 2.75c-.29 1.95-1.14 3.38-2.29 4.31S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  bug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};

function renderIcons(root) {
  var scope = root || document;
  var nodes = scope.querySelectorAll('.ico[data-icon]');
  nodes.forEach(function (el) {
    if (el.dataset.rendered) return;
    var name = el.getAttribute('data-icon');
    if (ICONS[name]) {
      el.innerHTML = ICONS[name];
      el.dataset.rendered = 'true';
    }
  });
}

/* ============ DATA ============ */ 
var IMG ='';

var slideshowImages = [
  { src: IMG + 'camera.PNG', alt: 'Guru Kirpa Hospital Building' },
  { src: IMG + 'hospital-lab (2).jpg', alt: 'Hospital Lobby & Reception' },
  { src: IMG + 'medicals.PNG', alt: 'Patient Ward' },
  { src: IMG + 'hospital-lobby (2).jpg', alt: 'Laboratory & Diagnostics' },
  { src: IMG + 'doctor-male (1).jpg', alt: 'Hospital Campus' }
];

var doctors = [
  { name: 'Dr. Rajesh Kumar Sharma', specialty: 'Chief Dermatologist & Founder', experience: '25+ Years Experience', qualifications: 'MBBS, MD (Dermatology)', image: IMG + 'doctor-male (1).jpg', description: 'Pioneer in dermatological care with expertise in complex skin disorders and advanced laser treatments.' },
  { name: 'Dr. Priya Patel', specialty: 'Senior Skin Specialist', experience: '15+ Years Experience', qualifications: 'MBBS, DVD, DNB (Dermatology)', image: IMG + 'hospital-building-2 (2).jpg', description: 'Specialist in cosmetic dermatology, acne treatment, and anti-aging procedures.' },
  { name: 'Dr. Amit Singh Verma', specialty: 'Dermato-Surgeon', experience: '12+ Years Experience', qualifications: 'MBBS, MS, MCh (Plastic Surgery)', image: IMG + 'doctor-male (1).jpg', description: 'Expert in skin surgeries, scar revision, and dermatological laser procedures.' },
  { name: 'Dr. Sneha Gupta', specialty: 'Pediatric Dermatologist', experience: '10+ Years Experience', qualifications: 'MBBS, MD (Dermatology), Fellowship', image: IMG + 'hospital-lobby (2).jpg', description: 'Specialized in treating skin conditions in children and adolescents with gentle care.' }
];

var skinDiseases = [
  { name: 'Eczema (Atopic Dermatitis)', description: 'A chronic condition causing red, itchy, and inflamed skin. Common in children but can occur at any age.', icon: 'droplets', treatments: ['Topical Steroids', 'Moisturizers', 'Immunomodulators'] },
  { name: 'Psoriasis', description: 'An autoimmune condition causing rapid skin cell buildup, resulting in scaling and red patches on the skin surface.', icon: 'shield', treatments: ['Phototherapy', 'Biologics', 'Topical Treatments'] },
  { name: 'Acne Vulgaris', description: 'A skin condition occurring when hair follicles become plugged with oil and dead skin cells, causing pimples and cysts.', icon: 'sparkles', treatments: ['Chemical Peels', 'Laser Therapy', 'Medications'] },
  { name: 'Fungal Infections', description: "Various fungal skin infections including ringworm, athlete's foot, and yeast infections affecting different body areas.", icon: 'bug', treatments: ['Antifungal Medications', 'Topical Creams', 'Preventive Care'] },
  { name: 'Vitiligo', description: 'A condition where skin loses its pigment cells, resulting in discolored patches on different parts of the body.', icon: 'sun', treatments: ['Phototherapy', 'Melanocyte Transplant', 'Depigmentation'] }
];

var skincareServices = [
  { title: 'Acne Treatment', description: 'Advanced acne treatments including chemical peels, laser therapy, and customized medication plans for clear skin.', icon: 'sparkles' },
  { title: 'Anti-Aging Solutions', description: 'Comprehensive anti-aging treatments including Botox, dermal fillers, and skin tightening procedures.', icon: 'heart' },
  { title: 'Laser Hair Removal', description: 'State-of-the-art laser technology for permanent hair reduction with minimal discomfort and lasting results.', icon: 'activity' },
  { title: 'Skin Whitening', description: 'Safe and effective skin brightening treatments using advanced dermatological procedures and medications.', icon: 'star' },
  { title: 'Scar Removal', description: 'Advanced scar revision treatments including microdermabrasion, laser resurfacing, and surgical revision.', icon: 'scissors' },
  { title: 'Dermatosurgery', description: 'Surgical procedures for mole removal, cyst excision, skin biopsies, and other dermatological conditions.', icon: 'microscope' }
];

var stats = [
  { icon: 'users', value: '50,000+', label: 'Patients Treated' },
  { icon: 'award', value: '25+', label: 'Years Experience' },
  { icon: 'stethoscope', value: '15+', label: 'Expert Doctors' },
  { icon: 'building', value: '100+', label: 'Hospital Beds' }
];

var features = ['Advanced Equipment', 'Experienced Doctors', 'Affordable Care', '24/7 Emergency'];
var footerLinks = ['Home', 'About Us', 'Our Services', 'Our Doctors', 'Gallery', 'Contact Us'];
var footerServices = ['Acne Treatment', 'Anti-Aging', 'Laser Hair Removal', 'Skin Whitening', 'Scar Removal', 'Dermatosurgery'];

var PHONE = '+91-98765-43210';

/* ============ RENDER HELPERS ============ */
function icon(name, cls) {
  return '<span class="ico ' + (cls || '') + '" data-icon="' + name + '"></span>';
}

/* Inline SVG placeholder used if an image file is missing */
function placeholder(label) {
  var svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#1e3a8a"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>' +
    '<rect width="800" height="600" fill="url(#g)"/>' +
    '<text x="400" y="300" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="bold" ' +
    'text-anchor="middle" dominant-baseline="middle">' + label + '</text>' +
    '</svg>';
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

/* Attach onerror fallback to every image on the page */
function attachImageFallbacks() {
  document.querySelectorAll('img').forEach(function (img) {
    if (img.dataset.fbBound) return;
    img.dataset.fbBound = 'true';
    img.addEventListener('error', function () {
      if (img.dataset.failed) return;
      img.dataset.failed = 'true';
      img.src = placeholder(img.alt || 'Guru Kirpa Hospital');
    });
  });
}

function renderStats() {
  var html = stats.map(function (s) {
    return (
      '<div class="stat">' +
      '<div class="stat-icon">' + icon(s.icon) + '</div>' +
      '<h3 class="stat-value">' + s.value + '</h3>' +
      '<p class="stat-label">' + s.label + '</p>' +
      '</div>'
    );
  }).join('');
  document.getElementById('stats-grid').innerHTML = html;
}

function renderFeatures() {
  var html = features.map(function (f) {
    return '<div class="feature-item">' + icon('check') + '<span>' + f + '</span></div>';
  }).join('');
  document.getElementById('feature-grid').innerHTML = html;
}

function renderServices() {
  var html = skincareServices.map(function (s) {
    return (
      '<div class="service-card">' +
      '<div class="service-icon">' + icon(s.icon) + '</div>' +
      '<h3 class="service-title">' + s.title + '</h3>' +
      '<p class="service-desc">' + s.description + '</p>' +
      '<a href="tel:' + PHONE + '" class="service-link">Book Now ' + icon('arrow') + '</a>' +
      '</div>'
    );
  }).join('');
  document.getElementById('services-grid').innerHTML = html;
}

function renderDiseases() {
  var html = skinDiseases.map(function (d) {
    var tags = d.treatments.map(function (t) {
      return '<span class="treat-tag">' + t + '</span>';
    }).join('');
    return (
      '<div class="disease-card"><div class="disease-inner">' +
      '<div class="disease-top">' +
      '<div class="disease-icon">' + icon(d.icon) + '</div>' +
      '<div><h3 class="disease-name">' + d.name + '</h3><p class="disease-desc">' + d.description + '</p></div>' +
      '</div>' +
      '<div class="disease-treat"><p class="disease-treat-label">Treatment Options</p><div class="treat-tags">' + tags + '</div></div>' +
      '</div></div>'
    );
  }).join('');
  document.getElementById('diseases-grid').innerHTML = html;
}

function renderDoctors() {
  var html = doctors.map(function (d) {
    return (
      '<div class="doctor-card">' +
      '<div class="doctor-image-wrap">' +
      '<img class="doctor-img" src="' + d.image + '" alt="' + d.name + '" />' +
      '<div class="doctor-image-overlay"></div>' +
      '<div class="doctor-exp"><p>' + d.experience + '</p></div>' +
      '</div>' +
      '<div class="doctor-body">' +
      '<h3 class="doctor-name">' + d.name + '</h3>' +
      '<p class="doctor-spec">' + d.specialty + '</p>' +
      '<p class="doctor-qual">' + d.qualifications + '</p>' +
      '<p class="doctor-desc">' + d.description + '</p>' +
      '<a href="tel:' + PHONE + '" class="doctor-btn">' + icon('phone') + ' Book Appointment</a>' +
      '</div>' +
      '</div>'
    );
  }).join('');
  document.getElementById('doctors-grid').innerHTML = html;
}

function renderFooterLists() {
  document.getElementById('footer-links').innerHTML = footerLinks.map(function (l) {
    return '<li><a href="#">' + icon('arrow') + l + '</a></li>';
  }).join('');
  document.getElementById('footer-services').innerHTML = footerServices.map(function (s) {
    return '<li><a href="#">' + icon('arrow') + s + '</a></li>';
  }).join('');
}

/* ============ SLIDESHOW ============ */
var currentSlide = 0;
var slideTimer = null;

function renderSlides() {
  var slidesHtml = slideshowImages.map(function (img, i) {
    return (
      '<div class="slide' + (i === 0 ? ' active' : '') + '" data-index="' + i + '">' +
      '<img src="' + img.src + '" alt="' + img.alt + '" />' +
      '<div class="slide-caption"><p class="slide-caption-title">' + img.alt + '</p>' +
      '<p class="slide-caption-sub">Guru Kirpa Hospital</p></div>' +
      '</div>'
    );
  }).join('');
  document.getElementById('slides').innerHTML = slidesHtml;

  var dotsHtml = slideshowImages.map(function (_, i) {
    return '<button class="slide-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>';
  }).join('');
  document.getElementById('slide-dots').innerHTML = dotsHtml;

  var thumbsHtml = slideshowImages.map(function (img, i) {
    return '<button class="thumb' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"><img src="' + img.src + '" alt="' + img.alt + '" /></button>';
  }).join('');
  document.getElementById('thumbs').innerHTML = thumbsHtml;
}

function goToSlide(index) {
  currentSlide = (index + slideshowImages.length) % slideshowImages.length;
  var slides = document.querySelectorAll('.slide');
  var dots = document.querySelectorAll('.slide-dot');
  var thumbs = document.querySelectorAll('.thumb');
  slides.forEach(function (s, i) { s.classList.toggle('active', i === currentSlide); });
  dots.forEach(function (d, i) { d.classList.toggle('active', i === currentSlide); });
  thumbs.forEach(function (t, i) { t.classList.toggle('active', i === currentSlide); });
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoplay() {
  stopAutoplay();
  slideTimer = setInterval(nextSlide, 5000);
}
function stopAutoplay() {
  if (slideTimer) clearInterval(slideTimer);
}

function initSlideshow() {
  renderSlides();
  document.getElementById('slide-next').addEventListener('click', function () { nextSlide(); startAutoplay(); });
  document.getElementById('slide-prev').addEventListener('click', function () { prevSlide(); startAutoplay(); });
  document.getElementById('slide-dots').addEventListener('click', function (e) {
    var btn = e.target.closest('.slide-dot');
    if (btn) { goToSlide(parseInt(btn.dataset.index, 10)); startAutoplay(); }
  });
  document.getElementById('thumbs').addEventListener('click', function (e) {
    var btn = e.target.closest('.thumb');
    if (btn) { goToSlide(parseInt(btn.dataset.index, 10)); startAutoplay(); }
  });
  startAutoplay();
}

/* ============ NAVIGATION ============ */
function initNav() {
  var toggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('nav-mobile');
  var isOpen = false;

  toggle.addEventListener('click', function () {
    isOpen = !isOpen;
    mobileMenu.classList.toggle('open', isOpen);
    toggle.querySelector('.ico').setAttribute('data-icon', isOpen ? 'x' : 'menu');
    toggle.querySelector('.ico').removeAttribute('data-rendered');
    renderIcons(toggle);
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link-mobile, .mobile-cta').forEach(function (link) {
    link.addEventListener('click', function () {
      isOpen = false;
      mobileMenu.classList.remove('open');
      toggle.querySelector('.ico').setAttribute('data-icon', 'menu');
      toggle.querySelector('.ico').removeAttribute('data-rendered');
      renderIcons(toggle);
    });
  });

  // Active link highlight on scroll
  var sections = ['home', 'about', 'skincare', 'diseases', 'gallery', 'doctors', 'contact'];
  var navLinks = document.querySelectorAll('.nav-desktop .nav-link');

  window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY + 120;
    var current = 'home';
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) current = id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', function () {
  renderStats();
  renderFeatures();
  renderServices();
  renderDiseases();
  renderDoctors();
  renderFooterLists();
  initSlideshow();
  initNav();
  renderIcons(document);
  attachImageFallbacks();
});
