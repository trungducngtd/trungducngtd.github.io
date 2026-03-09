fetch('/data/projects.json')
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("featured-projects")

if(!container) return

data.slice(0,3).forEach(project=>{

const card=document.createElement("div")

card.className="project-card"

card.innerHTML=`

<img src="${project.image}">

<h3>${project.title}</h3>

<p>${project.description}</p>

`

container.appendChild(card)

})

})
