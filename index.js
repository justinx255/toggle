function change_text() {
    var name = document.getElementById("content").value;
    document.getElementById("demo").innerHTML = "Hello this page is done by Justin and you entered " + `<span class=tie>` + name + "</span>" + "&nbsp;&nbsp;" + "dude!!!!";
}
function clear_text() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("content").value = "";
}