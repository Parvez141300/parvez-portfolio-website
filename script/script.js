
// button add active
const addActive = (id) => {
    document.getElementById(id).classList.add('bg-red-500', 'text-white');
}

// button remove active
const removeActive = (id) => {
    document.getElementById(id).classList.remove('bg-red-500', 'text-white');
}



// button show function
const showBlock = (id) => {
    document.getElementById(id).classList.remove('hidden')
}

// button hide function
const hideBlock = (id) => {
    document.getElementById(id).classList.add('hidden');
}




// all button event handle
document.getElementById('all-btn').addEventListener('click', (event) => {
    addActive('all-btn');
    removeActive('education-btn');
    removeActive('features-skills-btn');
    removeActive('experience-btn');


    showBlock('education-block');
    showBlock('features-block');
    showBlock('experience-block');
})

// education button event handle
document.getElementById('education-btn').addEventListener('click', (event) => {
    removeActive('all-btn');
    addActive('education-btn');
    removeActive('features-skills-btn');
    removeActive('experience-btn');


    showBlock('education-block');
    hideBlock('features-block');
    hideBlock('experience-block')
})

// features skill button event handle
document.getElementById('features-skills-btn').addEventListener('click', (event) => {
    removeActive('all-btn');
    removeActive('education-btn');
    addActive('features-skills-btn');
    removeActive('experience-btn');
    
    hideBlock('education-block');
    showBlock('features-block');
    hideBlock('experience-block')
})

// experience button event handle
document.getElementById('experience-btn').addEventListener('click', (event) => {
    removeActive('all-btn');
    removeActive('education-btn');
    removeActive('features-skills-btn');
    addActive('experience-btn');
   
    hideBlock('education-block');
    hideBlock('features-block');
    showBlock('experience-block')
})