let button = document.getElementById("myButton");
button.addEventListener("click", function() {

    let rows = document.getElementById("setRows").value;
    let cols = document.getElementById("setCols").value;

    let table = `<table border="1">`;
    table += "<tbody>";

    for (i = 0; i < rows; i++) {
        table += "<tr>";

        for (j = 0; j < cols; j++) {
            table += "<td>&nbsp;</td>";
        }

        table += "</tr>";
    }

    table += "</tbody>";
    table += "</table>";

    document.getElementById("result").innerHTML = table;

})