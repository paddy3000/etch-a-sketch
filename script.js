// Create reference to container
const container=document.querySelector(".all-squares");
let gridMode="reverse";
let gridSize=4;

// Change colour function
changeColour=function(square, specifyType){
  square.addEventListener("mouseenter", function(e) {
    if (square.getAttribute("class")===specifyType + " blue") {
        square.setAttribute("class", specifyType + " pink");
    } else {
        square.setAttribute("class", specifyType + " blue");
    }
  })
}

// Change opacity function
changeOpacity=function(square) {
  square.addEventListener("mouseenter", function(e) {
    if (Number(square.style.opacity)<1) {
      square.style.opacity=Number(square.style.opacity)+0.1;
    }
  })
}

// Game mode function


// createSquares function to build grid
createSquares = function(rows){
  // Reset squares
  container.innerHTML="";

  // Create n rows and n boxes in each group
  for (let i = 1; i <= rows; i++) {
    row=document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row"+i);
      for (let j = 1; j<=rows; j++){
        node=document.createElement("div");
        node.setAttribute("class", "square blue");
        node.setAttribute("id", "square_"+i+"_"+j);
        row.appendChild(node);
        if (gridMode==="reverse") {node.style.opacity=1}
        if (gridMode==="opacity") {node.style.opacity=0}
      }
    container.appendChild(row);
  }

  const allSquares=document.querySelectorAll(".square");

  // Add relevant function to each square
  allSquares.forEach(square => {
    if (gridMode==="reverse") {changeColour(square, "square");}
    if (gridMode==="opacity") {changeOpacity(square);}
  })
};

// Set up 4x4 grid to start
createSquares(gridSize);

// Change grid mode
const reverseModeBtn=document.querySelector("#reverse-mode");
const opacityModeBtn=document.querySelector("#opacity-mode");
const gameModeBtn=document.querySelector("#game-mode");

reverseModeBtn.addEventListener("click", function() {
  reverseModeBtn.setAttribute("class", "modeHighlighted");
  opacityModeBtn.setAttribute("class", "");
  gameModeBtn.setAttribute("class", "");
  gridMode="reverse";
  createSquares(gridSize);
  
});

opacityModeBtn.addEventListener("click", function() {
  opacityModeBtn.setAttribute("class", "modeHighlighted");
  reverseModeBtn.setAttribute("class", "");
  gameModeBtn.setAttribute("class", "");
  gridMode="opacity";
  createSquares(gridSize);
});

gameModeBtn.addEventListener("click", function() {
  gameModeBtn.setAttribute("class", "modeHighlighted");
  opacityModeBtn.setAttribute("class", "");
  reverseModeBtn.setAttribute("class", "");
  gridMode="game";
  createSquares(gridSize);
});



// Button to change size of the grid
const changeGrid=document.querySelector("#changeGrid");

changeGrid.addEventListener("click", function(e){
    rows=prompt("How many rows?");
    gridSize=rows;

    if (rows>100){
        rows=100;
        alert("100 rows is maximum allowed");
    }
    createSquares(rows);

    // if (gridMode==="reverse") {changeColour(e.target, "changeGrid")};
});