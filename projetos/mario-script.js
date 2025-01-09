
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const walter = document.querySelector('.walter')
const startMessage = document.getElementById('start-message');


let gameStarted = false;
let gameOver = false;

const startGame = () => {
    startMessage.style.display = 'none';
    gameStarted = true;
};

const restartGame = () => {
    location.reload();
}



const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './mario-img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        // WALTER WHITE GAME OVER
        walter.style.display = 'block';
        walter.style.position = 'absolute';
        walter.style.right = '150px';
        walter.style.bottom = '50px';

        

        clearInterval(loop);
        gameOver = true;

        startMessage.innerText = 'Pressione qualquer tecla para reiniciar'
        startMessage.style.display = 'block';
    }

}, 10);


// document.addEventListener('keydown', jump);

document.addEventListener('keydown', (event) => {

    // para nao scrollar
    event.preventDefault();

    if (!gameStarted) {
        startGame();
    } else if (gameOver) {
        restartGame();
    } else if (event.keyCode === 38) {
        jump();
    }
})