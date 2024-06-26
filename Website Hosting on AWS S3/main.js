import {projects} from './projects.js';

const template = document.querySelector("#project-card")
const wrapper= document.createElement("div")


projects.forEach(project =>{
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent=project.title

    const img = clone.querySelector("img")
    img.src = project.image

    
    clone.querySelector('span').textContent=project.tech

    // project.techs.forEach(function(tech){
    //     let item = document.createElement('span')
    //     let tag = document.createTextNode('tech')
    //     item.appendChild(tag)
    //     clone.querySelector('.tech-used').appendChild(item)
    // });

    clone.querySelector(".description").textContent=project.about

    clone.querySelector(".primary-btn").href = project.github
 
        


    wrapper.appendChild(clone)
})

document.querySelector(".projects").appendChild(wrapper)

const filterButtons = document.querySelectorAll(".filter-nav a")
filterButtons.forEach(el =>{
    el.addEventListener("click", e => handleFilterNav(e))
})

const handleFilterNav=(e)=>{
    let target = e.target
    e.preventDefault()
    filterButtons.forEach(el =>{
        el.classList.remove("active")
    })
    target.classList.add("active")

    filtrProjects(target.dataset.filter)

}

function filtrProjects(project){
    const allProjects = document.querySelectorAll(".project-card")
    if (project =='all'){
        allProjects.forEach(el =>{
            el.style.display=""
        })
    }else{
        allProjects.forEach(el =>{
            if (el.querySelector(".tech").textContent == project){
                el.style.display=""
            } else{
                el.style.display="none"


            }
        })
    }
}