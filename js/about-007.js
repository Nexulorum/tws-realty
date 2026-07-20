const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }

    });

},
{
    threshold: 0.2
}
);

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

window.addEventListener('scroll', () => {

    timelineItems.forEach(item => {

        const rect = item.getBoundingClientRect();

        if(rect.top < 300 && rect.bottom > 300){
            item.classList.add('current');
        } else {
            item.classList.remove('current');
        }

    });

});