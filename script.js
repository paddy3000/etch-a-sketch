const container=document.querySelector(".all-squares");

changeColour=function(box){
    if (box.getAttribute("class")==="square blue") {
        box.setAttribute("class", "square pink");
    } else {
        box.setAttribute("class", "square blue");
}
}

createSquares = function(rows){
  for (let i = 1; i <= rows; i++) {
    row=document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row"+i);
      for (let j = 1; j<=rows; j++){
        node=document.createElement("div");
        node.setAttribute("class", "square blue");
        node.setAttribute("id", "square"+i+"_"+j);
        row.appendChild(node);
      }
    container.appendChild(row);
  }

  const allSquares=document.querySelectorAll(".square");

  allSquares.forEach(square => {
    square.addEventListener("mouseenter", function(e) {
        console.log(e.target.getAttribute("id"))
        changeColour(e.target);
    })
});
}

createSquares(4);

const button=document.querySelector("button");

button.addEventListener("click", function(e){
    rows=prompt("How many rows?");

    if (rows>100){
        rows=100;
        alert("100 rows is maximum allowed");
    }
    container.innerHTML="";
    createSquares(rows);

    changeColour(e.target);
})