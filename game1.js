let secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score=20;
let highscore=0;
 document.querySelector('.number').textContent='?';
// document.querySelector('.number').textContent=secretNumber;

// let guess= document.querySelector('.guess').value;
// console.log(guess,typeof guess)
let displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
    let guess=Number( document.querySelector('.guess').value);
     
    if(!guess){
        document.querySelector('.message').textContent='No Number!'
    }
    else if(guess === secretNumber){
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.message').textContent='Congrats 🎉🎉'
        document.querySelector('body').style.backgroundColor= 'green';
        if(score > highscore){
            document.querySelector('.highscore').textContent=score
        }

    }
    else if(guess !== secretNumber){
          if(guess>20 || guess<0){
            document.querySelector('.message').textContent='Out Of Range'
          }
          else{
            displayMessage(guess>secretNumber? '📈 Too High':'📉 Too low')
          }
         
        
         if(score<=0)
           {
            score=0;
            document.querySelector('.message').textContent='You lost.🥲'
           } 
         else
         {
            score--;
         }
         
         document.querySelector('.score').textContent=score
    }
    else if(guess>20 || guess<0)
    {
        document.querySelector('.message').textContent='Out Of Range'
       
    }
    
})



document.querySelector('.again').addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor= '#222';
    score=20;
    document.querySelector('.score').textContent=score
    document.querySelector('.message').textContent='Start guessing...'

})