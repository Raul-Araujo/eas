const container  = document.querySelector('#container');

function creatingSquares(columns){
    for (let i = 0; i < columns; i++){
        
        const squares = document.createElement('div');
        squares.setAttribute('style', 'border: 1px black solid; height:16px; width:16px;');
        container.appendChild(squares);
        
    }    
}
creatingSquares(10);