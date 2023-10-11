let table = document.createElement("table");
table.border = "1";

for (let i = 0; i < 12; i++) {
    let row = document.createElement("tr");
    row.className = "row";

    if ((i + 1) % 4 == 0) {
        row.className += " row-highlight-background";
    }

    let data = document.createElement("td");
    data.innerText = i + 1;
    data.style.paddingLeft = "4px";
    data.style.paddingRight = "4px";

    row.appendChild(data);

    table.appendChild(row);
}

document.getElementById("output").appendChild(table);