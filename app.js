document.addEventListener('DOMContentLoaded',()=>{
  const bird=document.querySelector('.bird');
  const gameDisplay=document.querySelector('.game-container');
  const ground=document.querySelector('.ground');

  let birdLeft=220;
let isGameOver=false;
let birdBottom=100;
let gravity=2;
function startGame(){
  birdBottom-=gravity;
  bird.style.bottom=birdBottom+'px';
  bird.style.left=birdLeft+'px';
}
let gameTimerId=setInterval(startGame,20);

function control(e){
  if(e.keyCode=32){
    jump();
  }
}
function jump(){
  if(birdBottom<490){
    birdBottom+=50;
    bird.style.bottom=birdBottom+'px';
  }
else{
  birdBottom+=0;
  bird.style.bottom=birdBottom+'px';
}
}
document.addEventListener('keyup',jump);


function generateObstacles(){
  let randomHeight=Math.random()*60;
  let obstacleLeft=500;
  let obstacleBottom=randomHeight;
  const obstacle=document.createElement('div');
  if(!isGameOver){
    obstacle.classList.add('obstacle');
  }
  gameDisplay.appendChild(obstacle);
  obstacle.style.left=obstacleLeft+'px';
    obstacle.style.bottom=obstacleBottom+'px';
    function moveObstacle(){
      obstacleLeft -=2;
        obstacle.style.left=obstacleLeft+'px';
if(obstacleLeft<(-50)){
  obstacle.style.display="none";
  clearInterval(timerId);
  gameDisplay.removeChild(obstacle);
}
if(obstacleLeft > 220 && obstacleLeft < 280 && birdLeft===220 && birdBottom<obstacleBottom+160 ||
  birdBottom===2 || birdBottom<randomHeight){
  gameOver();
  clearInterval(timerId)
}

    }
    let timerId=setInterval(moveObstacle,20);
    setTimeout(generateObstacles,3000);
}
generateObstacles();
function gameOver(){
    console.log("game   ");
  clearInterval(gameTimerId);
  isGameOver=true;


    document.removeEventListener('keyup',control);
}
});
