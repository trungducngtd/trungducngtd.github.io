async function renderPosts() {
  const target = document.getElementById('posts-list');
  if (!target) return;

  try {
    const response = await fetch('/data/posts.json');
    if (!response.ok) {
      throw new Error(`Could not load posts.json: ${response.status}`);
    }

    const posts = await response.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      target.innerHTML = '<p class="section-subtitle">Chưa có bài viết nào được xuất bản.</p>';
      return;
    }

    target.innerHTML = posts
      .map(
        (post) => `
          <article class="project-card">
            <div class="project-card__body">
              <h3 class="project-card__title"><a href="${post.url}">${post.title}</a></h3>
              <p class="project-card__description">${post.summary || ''}</p>
            </div>
          </article>
        `
      )
      .join('');
  } catch (error) {
    target.innerHTML = '<p>Không thể tải danh sách bài viết vào lúc này.</p>';
    console.error(error);
  }
}

window.addEventListener('DOMContentLoaded', renderPosts);
