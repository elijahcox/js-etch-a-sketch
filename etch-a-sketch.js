var rows = 16;
var cols = 16;
var clicked = false;
const containerDiv = document.querySelector('.etch-a-sketch-container');

containerDiv.addEventListener('click',function(e){
    clicked = !clicked;
    
    let rowChildren = containerDiv.childNodes;
    for(let i = 0; i < rowChildren.length; i++){
        let row = rowChildren.item(i).childNodes;
        for(let j = 0; j < row.length; j++){
            let square = row.item(j);
            if(clicked){
                square.onmouseover = function(){square.style.backgroundColor="lightgreen";}
            }else{
                square.onmouseover = function(){;}
            }
            
        }
        
    }
});


initGrid();

function initGrid(){
    for(var i = 0; i < rows; i++){
        //create row div
        const rowDiv = document.createElement('div');
        for(var j = 0; j < cols; j++){
            //create div
            const squareDiv = document.createElement('div');  
            squareDiv.setAttribute('style', 'height: 40px; width: 40px; background-color: lightgrey;border-style: dotted;border-color: lightgrey;display: inline-block;');  
            //squareDiv.onmouseover = function(){squareDiv.style.backgroundColor="lightgreen";}
            //add css styling to make it a grid, give a grey colors
            //add to row div
            rowDiv.appendChild(squareDiv);
        }
        containerDiv.appendChild(rowDiv);
        //add row div to containerDiv
    }
} 