// Grab the projects container, the intro and the outro
let grid     = document.querySelector('.projects');
let projects = document.querySelectorAll('.project-container');
let intro    = document.querySelector('.intro');
let outro    = document.querySelector('.outro');

// If we don't have the intersaction observer add all the classes
if (!window.IntersectionObserver )
    images.forEach(function(image){image.classList.add('visible')})

// If we dont have the resize observer, set everything as static
//if (!window.ResizeObserver ) {
//    grid.style.position  = "relative";
//    outro.style.position = "relative";
//}



//if (!!window.ResizeObserver) {
//    
//    // Set the correct top value otherwise the sticky won't work
//    function setHeight (target) {
//        target.style.top = "-" + target.clientHeight - window.innerHeight + "px";
//    }
//
//    // Create the Resize Observer
//    const RO = new ResizeObserver((entries) => {
//        for (let entry of entries) {
//            entry.target.style.top = Math.round((entry.target.clientHeight - window.innerHeight) * -1)  + 'px';
//        }
//    });
//
//    window.addEventListener('load' , setHeight(grid));
//    RO.observe(grid); // Observer The Projects Container
//}


if (!!window.IntersectionObserver) {

    // Create the Interection Observer
    const IO = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: [.5] });

    projects.forEach(project => { IO.observe(project) }); // Observe Each Project
}