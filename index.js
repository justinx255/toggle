function change_text() {
    var name = document.getElementById("content").value;
    document.getElementById("div").innerHTML = "Hello this page is done by Justin and you entered " + `<span class=tie>` + name + "</span>" + "&nbsp;&nbsp;" + "dude!!!!";
}
function clearText() {
    document.getElementById("div").innerHTML = "";
    // document.getElementById("content").value = "";
}