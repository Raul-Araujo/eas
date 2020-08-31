const container  = document.querySelector('#container');

    function creatingSquares(columns){

     for (let i = 0; i < columns; i++){
            const squares = document.createElement('div');
            squares.classList.add('columns'+[i]);
            squares.setAttribute('style', 'background: white;');
            container.appendChild(squares);

                for (let x = 0; x < columns; x++){
                    const columns1 = document.querySelector('.columns'+[i]);
                    const squares1 = document.createElement('div');
                    squares1.setAttribute('style', 'background: white');
                    columns1.appendChild(squares1);
                    
                }
        }   
    }
creatingSquares(10); //The above function creates the square.
