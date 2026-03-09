const params=new URLSearchParams(window.location.search)

const id=params.get("id")

fetch('/data/projects.json')
.then(res=>res.json())
.then(data=>{

const project=data.find(p=>p.id==id)

if(!project) return

document.getElementById("title").textContent=project.title

document.getElementById("description").textContent=project.description

document.getElementById("image").src=project.image

})
