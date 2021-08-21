window.addEventListener('load', function () {
    baguetteBox.run('.gallery', {
        animation: 'fadeIn',
        overlayBackgroundColor: 'rgba(142,43,232,0.5)'
    });
});
const search = () => {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('photos');
    for (let i = 0; i < x.length; i++) {
        if (!x[i].getAttribute('data-caption').includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}