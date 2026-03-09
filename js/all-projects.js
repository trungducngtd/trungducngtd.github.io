fetch('/data/projects.json')
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("projects")

data.forEach(project=>{

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
