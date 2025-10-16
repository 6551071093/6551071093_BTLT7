function insert_Row(){
    var newRow = $("<tr>");
    newRow.append("<td>Row1 cell1</td>");
    newRow.append("<td>Row1 cell2</td>")
    $("#sampleTable").append(newRow);
}