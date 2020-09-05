const container  = document.querySelector('#container');

    function creatingSquares(columns){

     for (let i = 0; i < columns; i++){
            const squares = document.createElement('div');
            squares.classList.add('columns'+[i]);
            container.appendChild(squares);

                for (let x = 0; x < columns; x++){
                    const columns1 = document.querySelector('.columns'+[i]);
                    const squares1 = document.createElement('div');
                    squares.appendChild(squares1);
                    
                }
        }   
    }
creatingSquares(100); //The above function creates the square.
const divs = document.querySelectorAll('div');

function largeOption(){
    divs.forEach(div => div.style = 'height:32px; width: 32px');

}
function mediumOption(){
    divs.forEach(div => div.style = 'height:16px; width: 16px');
}

function smallOption(){
    divs.forEach(div => div.style = 'height:8px; width: 8px');
}

//function to refresh the squares` color
function refreshing(){
    divs.forEach(div => div.style.background = 'white');
}


//making the squares colored

divs.forEach(div => div.addEventListener('mouseover', function (e){
    e.target.style.background = 'blue';
}));