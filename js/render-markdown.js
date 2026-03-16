function getMarkdownPath() {
  const params = new URLSearchParams(window.location.search);
  const file = params.get('file');
  const source = params.get('source') || 'projects';

  if (!file) {
    return null;
  }

  return `${source}/${file}.md`;
}

async function renderMarkdown() {
  const target = document.getElementById('content');
  if (!target) return;

  const markdownPath = getMarkdownPath();
  if (!markdownPath) {
    target.innerHTML = '<p>Thiếu tham số <code>file</code> trong URL.</p>';
    return;
  }

  if (typeof marked === 'undefined') {
    target.innerHTML = '<p>Không thể tải thư viện Markdown renderer.</p>';
    return;
  }

  try {
    const response = await fetch(markdownPath);
    if (!response.ok) {
      throw new Error(`Could not load markdown file: ${response.status}`);
    }

    const markdown = await response.text();
    target.innerHTML = marked.parse(markdown);
  } catch (error) {
    target.innerHTML = '<p>Không thể tải nội dung vào lúc này.</p>';
    console.error(error);
  }
}

window.addEventListener('DOMContentLoaded', renderMarkdown);
