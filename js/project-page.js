const params = new URLSearchParams(window.location.search)

const id = params.get("id")

fetch(`/projects/${id}.md`)
.then(res => res.text())
.then(md => {

const html = marked.parse(md)

document.getElementById("content").innerHTML = html

})
