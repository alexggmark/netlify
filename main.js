const boxes = document.querySelectorAll('.box');
const animate = document.querySelectorAll('.animate');
const menu = document.querySelector('menu');
const anchors = document.querySelectorAll('a.anchor[href^="#"]');

const logoAnim = anime({
    targets: '.cls-1',
    stroke: 'rgba(255,255,255, 1)',
    keyframes: [
    {strokeDashoffset: [anime.setDashoffset, 0],},
    {delay: 500},
    ],
    easing: 'easeInOutSine',
    duration: 3500/*,
    direction: 'alternate',
    loop: true */
});

const logoAnimBall = anime({
    targets: '.cls-2',
    translateX: ['500px','0'],
    stroke: ['#00e4bc','#fff'],
    duration:2000,
    delay: anime.stagger(400)
})

function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = (elemTop >= 0) && (elemTop <= window.innerHeight - 300);
    return isVisible;
}

function scrollAnimation(...elements){
    elements.forEach(function(item){
        item.forEach(function(item){
            if(isScrolledIntoView(item)&&!item.classList.contains('completed')){
                anime({
                    targets: item,
                    translateY: ['30px', '0'],
                    opacity: [0,1],
                    duration: 3500
                });
                item.classList.add('completed');
            }
        })
    });
}

function menuSlide(el) {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset;
    const elemTop = scrollTop - (scrollTop/2.2);
    //el.style.top = `${scrollTop}px`;
    //el.style.top = 0;
    if(scrollTop>10){
        document.querySelector('menu .container').classList.add('full-width');
    } else {
        document.querySelector('menu .container').classList.remove('full-width');
    }
    const mq = window.matchMedia('(max-width: 767px)');
    if(mq.matches){
        el.style.top = `${elemTop}px`;
    } else {
        el.style.top = '0px';
    }
}

(function(){
    const portfolioItem = document.querySelectorAll('.portfolio-container .item');
    portfolioItem.forEach((item) => {
        let itemImage = item.dataset.image;
        item.style.backgroundImage = `url('${itemImage}')`;
    })
})();

(function(){
    anchors.forEach((item) => {
        item.addEventListener('click', (e) => {
            let hashval = item.getAttribute('href')
            let target = document.querySelector(hashval)
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            history.pushState(null, null, hashval)
            e.preventDefault()
        })
    });
})();

scrollAnimation(boxes, animate);
window.addEventListener('scroll', (e) => {
    scrollAnimation(boxes, animate);
    menuSlide(menu);
})
window.addEventListener('resize', () => {
    menuSlide(menu);
})