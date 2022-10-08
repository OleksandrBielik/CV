'use strict'

//progressLine

const lines = document.querySelectorAll('.progress-line');


const skills = {

    html: "70%",
    js: "70%",
    vue: "50%",
    git: "60%",
    github: "60%",
    teamwork: "90%",
    responsibility: "100%",
    selfmotivated: "100%",
    abletolearn: "100%",
    abletorelocate: "100%"

}

for (let key in skills) {
    lines.forEach(item => {
        if (item.classList.contains(`${key}`)) {
            item.style.width = `${skills[key]}`
        }
    })
}


//accordion

const cvLeftBlock = document.querySelector('.cv__left-block');
const cvLeftBlocks = cvLeftBlock.querySelectorAll('.left-block');
const triggers = cvLeftBlock.querySelectorAll('h2');

cvLeftBlocks.forEach(item => {
    const trigger = item.querySelector('h2');
    const block = item.querySelector('.description');
    item.addEventListener('click', (e)=> {
        if (e.target == trigger) {
            block.classList.toggle('off');
        }
    })

})
