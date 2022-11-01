var a = -1;
function change() {
    if (a == 4) {
        a = 0
    }
    a++;
    var arr = ["Health", "Food", "Education", "Wedding", "Health"]
    document.getElementById("change").innerHTML = arr[a];
    setTimeout("change()", 1000)
}