window.onload = function () {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('animate')
                // observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('animate')
            }
        })
    })
    
    document.querySelectorAll('mark').forEach(mark => {
        observer.observe(mark)
    })
}