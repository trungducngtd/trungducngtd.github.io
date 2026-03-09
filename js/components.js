async function loadComponent(id, file){

const el = document.getElementById(id)

if(!el) return

const res = await fetch(file)

const html = await res.text()

el.innerHTML = html

}

loadComponent("site-header","/components/header.html")
loadComponent("site-footer","/components/footer.html")
