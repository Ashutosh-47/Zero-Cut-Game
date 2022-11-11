 
let point = new Audio("Aim.mp3") ;
let finish = new Audio("GameOver.mp3") ;
let draw = new Audio("game-lose.mp3") ;

const aim = document.querySelectorAll('.aim') ;

const btnX = document.querySelector('.btnX');
const btnO = document.querySelector('.btnO');
const turnX = document.querySelector('.turnX');
const popup = document.querySelector('.popup');
const game = document.querySelector('.game');
const result = document.querySelector('.result');
const turnO = document.querySelector('.turnO');
const AllText = document.querySelectorAll('.text');
const p = document.querySelector('.winner');
const restart = document.querySelector('.btnR') ;

let flag = false ;
let cnt = 0;
let turn = '' ;

const disapper = () => {
    point.play();
    popup.style.display = 'none';
    game.style.display = 'block';
    game.style.transition = `all 1.2s ease`;

}

const slider = () => {
    if(turn === 'X') {
    turnO.classList.remove('active');
    turnX.classList.add('active');
    }

    if(turn === 'O') {
    turnX.classList.remove('active');
    turnO.classList.add('active');
    }
}

btnX.addEventListener('click',(e) =>{
    turn = 'X';
    slider();
    disapper();
})

btnO.addEventListener('click' , () =>{
    turn = 'O';
    slider();
    disapper();
})

const swap = function () {
    return turn === 'O' ? 'X' : 'O' ;
}





const findWinner = function () {
 let winner = [
    [ 0 , 1 , 2  ] ,
    [ 3 , 4 , 5  ] ,
    [ 6 , 7 , 8  ] ,
    [ 0 , 3 , 6  ] ,
    [ 1 , 4 , 7  ] ,
    [ 2 , 5 , 8  ] ,
    [ 0 , 4 , 8  ] ,
    [ 2 , 4 , 6  ] ,
 ]

 winner.forEach ( ( e ) => {

    if ( (AllText[ e[0]].innerText === AllText[ e[1]].innerText) && (AllText[ e[1]].innerText === AllText[ e[2]].innerText) && (AllText[ e[0]].innerText !== "" ) ) {
       
        flag = true ;
    
        finish.play();
    
        turn = "" ;
    
    game.style.display = 'none' ;
    result.style.display = 'block';
    result.classList.add('ok');
    p.innerHTML = `<b><i>The winner is Player- ${AllText[ e[1]].innerText}  🎉🎉😎😎</i></b>`
    }
    
    else {
        
if ( flag == false  && cnt == 9 ) {        

    game.style.display = 'none' ;
    result.style.display = 'block';
    result.classList.add('o');
    draw.play();
    p.innerHTML = `<b><i> The Game is Draw 😪</i></b>`
}
    }
 } )
}



Array.from ( aim ).map  ( (element) => {
    let text = element.querySelector('.text' ) ;
        element.addEventListener( 'click' , () => {
        
            if ( text.innerText === "" ) {
                text.innerText = turn;
                cnt++;
                turn = swap();
                slider();
                point.play();
                findWinner() ;
            }
    })
})

findWinner() ;
    


restart.addEventListener('click' , () => {
    point.play();
    setTimeout(()=> {
        window.location.reload(); 
    },100)
})

