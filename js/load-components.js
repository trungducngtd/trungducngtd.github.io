const appBaseUrl = new URL('../', new URL(document.currentScript?.src || './js/load-components.js', document.baseURI));

function withBase(path) {
  return new URL(path.replace(/^\//, ''), appBaseUrl).toString();
}

async function loadComponent(selector, path) {
  const target = document.querySelector(selector);
  if (!target) return;

  try {
    const response = await fetch(withBase(path));
    if (!response.ok) {
      throw new Error(`Failed to load ${path}: ${response.status}`);
    }
    target.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

function toggleHeaderShadow() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.site-nav a');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const isHome = href === '/' && currentPath === '/';
    const isAbout = href === '/about.html' && currentPath.endsWith('/about.html');
    const isProjects = href === '/projects.html' && (
      currentPath.endsWith('/projects.html') ||
      currentPath.includes('/projects/') ||
      currentPath.endsWith('/project.html') ||
      currentPath.endsWith('/vai-thu-linh-tinh.html')
    );
    const isBlog = href === '/blog.html' && currentPath.endsWith('/blog.html');

    if (isHome || isAbout || isProjects || isBlog) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('#header', 'components/header.html');
  await loadComponent('#footer', 'components/footer.html');
  setActiveNavLink();
  toggleHeaderShadow();
});
