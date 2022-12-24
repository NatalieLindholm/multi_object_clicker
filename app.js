let count = 0

function createBalls(number) {
    for (let i = 0; i < number; i++) {
        const image = document.createElement('img')
        image.setAttribute('src', 'goose2.png')
        image.classList.add('goose')
        image.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px'
        image.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px'
        document.body.appendChild(image)
        image.addEventListener('click', onBallClicked)
    }
}

createBalls(10)


function onBallClicked(e) {
    e.target.setAttribute('src', 'boom.png')
    setTimeout(() => {
        document.body.removeChild(e.target)
    }, 500)
    console.log(e.target.src)
    audio.play();
    score();
}

const audio = new Audio("Honk.mp3");

function score() {
    count++
    document.querySelector(".number").innerText = count
        ;

    if (count == 10) alert("YOU KILLED EM ALL!")
}


function refreshPage() {
    window.location.reload();
}