
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })

});


const hiddenElements = document.querySelectorAll('.p1');
hiddenElements.forEach((el) => observer.observe(el));



const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('pop');
        } else {
            entry.target.classList.remove('pop');
        }
    })

});


const hiddenElements1 = document.querySelectorAll('.p2');
hiddenElements1.forEach((el) => observer1.observe(el));