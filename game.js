document.addEventListener('DOMContentLoaded', function() {
    const bird = document.getElementById('bird');
    const gameArea = document.getElementById('gameArea');
    let gravity = 0.6;
    let velocity = 0;
    let gameInProgress = false;
  
    function startGame() {
      gameInProgress = true;
      document.addEventListener('keydown', jump);
      animate();
      createPipes();
    }
  
    function jump(event) {
      if (event.key === ' ') {
        velocity = -10; // Adjust jump strength as needed
      }
    }
  
    function animate() {
      if (gameInProgress) {
        velocity += gravity;
        bird.style.top = bird.offsetTop + velocity + 'px';
        checkCollision();
        requestAnimationFrame(animate);
      }
    }
  
    function createPipes() {
      setInterval(() => {
        if (gameInProgress) {
          let pipeHeight = Math.floor(Math.random() * 200) + 100; // Random height for pipes
          let pipeTop = document.createElement('div');
          let pipeBottom = document.createElement('div');
          pipeTop.classList.add('pipe');
          pipeBottom.classList.add('pipe');
          pipeTop.style.height = pipeHeight + 'px';
          pipeBottom.style.height = (gameArea.clientHeight - pipeHeight - 100) + 'px'; // 100px gap between pipes
          gameArea.appendChild(pipeTop);
          gameArea.appendChild(pipeBottom);
        }
      }, 2000); // Adjust pipe creation interval as needed
    }
  
    function checkCollision() {
      let birdTop = bird.getBoundingClientRect().top;
      let birdBottom = bird.getBoundingClientRect().bottom;
      let birdLeft = bird.getBoundingClientRect().left;
      let birdRight = bird.getBoundingClientRect().right;
  
      let pipes = document.querySelectorAll('.pipe');
      pipes.forEach(pipe => {
        let pipeTop = pipe.getBoundingClientRect().top;
        let pipeBottom = pipe.getBoundingClientRect().bottom;
        let pipeLeft = pipe.getBoundingClientRect().left;
        let pipeRight = pipe.getBoundingClientRect().right;
  
        if (
          birdTop <= pipeBottom &&
          birdBottom >= pipeTop &&
          birdRight >= pipeLeft &&
          birdLeft <= pipeRight
        ) {
          gameOver();
        }
      });
    }
  
    function gameOver() {
      gameInProgress = false;
      alert('Game Over! Refresh the page to play again.');
    }
  
    startGame();
  });
  
  
  