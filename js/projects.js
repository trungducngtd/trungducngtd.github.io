function createProjectCard(project) {
  const tags = (project.tags || [])
    .map((tag) => `<span>${tag}</span>`)
    .join('');

  const imageMarkup = project.image
    ? `
      <div class="project-card__image">
        <img src="${project.image}" alt="${project.image_alt || project.title}">
      </div>
    `
    : '';

  return `
    <a class="project-card" href="${project.url}">
      ${imageMarkup}
      <div class="project-card__body">
        <p class="project-card__id">${project.project_id || ''}</p>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__description">${project.description || project.summary || ''}</p>
        <div class="project-card__tags">${tags}</div>
      </div>
    </a>
  `;
}

async function renderProjects({ targetId, limit } = {}) {
  const target = document.getElementById(targetId || 'projects-list');
  if (!target) return;

  try {
    const response = await fetch('data/projects.json');
    if (!response.ok) {
      throw new Error(`Could not load projects.json: ${response.status}`);
    }

    const projects = await response.json();
    const list = typeof limit === 'number' ? projects.slice(0, limit) : projects;

    target.innerHTML = list.map(createProjectCard).join('');
  } catch (error) {
    target.innerHTML = '<p>Không thể tải danh sách dự án vào lúc này.</p>';
    console.error(error);
  }
}

window.renderProjects = renderProjects;

window.addEventListener('DOMContentLoaded', () => {
  const fullListTarget = document.getElementById('projects-list');
  if (fullListTarget) {
    renderProjects({ targetId: 'projects-list' });
  }

  const featuredTarget = document.getElementById('featured-projects-list');
  if (featuredTarget) {
    renderProjects({ targetId: 'featured-projects-list', limit: 3 });
  }
});
