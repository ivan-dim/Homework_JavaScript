document.getElementById("genBtn").addEventListener("click", function () {
  let rows = document.getElementById("rows").value;
  let cols = document.getElementById("cols").value;
  let table = "<table border='3' style='border: 3px solid red;'>";

  if (rows <= 0 || cols <= 0) {
    alert("NUMS ONLY");
    return;
  }

  for (let i = 1; i <= rows; i++) {
    table += "<tr>";
    for (let x = 1; x <= cols; x++) {
      table += "<td>row" + i + " column" + x + "</td>";
    }
    table += "</tr>";
  }

  table += "</table>";
  document.getElementById("table-cont").innerHTML = table;
});
