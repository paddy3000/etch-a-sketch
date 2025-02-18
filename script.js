const container=document.querySelector(".all-squares");

for (let i = 0; i < 16; i++) {
    node=document.createElement("div");
    node.setAttribute("class", "square square-default")
    container.appendChild(node);
}