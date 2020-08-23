window.onload = function(){ 
    var checkBox = document.getElementById("changetheme");
    var checked = JSON.parse(localStorage.getItem('changetheme'));
    document.getElementById("changetheme").checked = checked;

    changeTheme();
}

function changeTheme() {
    // Get the checkbox
var checkBox = document.getElementById("changetheme");
  
// If the checkbox is checked, display the output text
if (checkBox.checked == true){

    body.classList.add('bodydark')
    body.classList.remove('bodylight')
    codeicons.classList.add("codeiconsdark")
    codeicons.classList.remove("codeiconslight")
    atitle.classList.add("adark")
    atitle.classList.remove("alight")
    btitle.classList.add("adark")
    btitle.classList.remove("alight")
    ctitle.classList.add("adark")
    ctitle.classList.remove("alight")
    atitletext.classList.remove("lightcolor")
    btitletext.classList.remove("lightcolor")
    ctitletext.classList.remove("lightcolor")
    p1.classList.remove("plight")
    p2.classList.remove("plight")
    p3.classList.remove("plight")
    document.getElementById("logo").src = "src/img/icon_dark.png";

    localStorage.setItem("changetheme", checkBox.checked)
} else {

    body.classList.add('bodylight')
    body.classList.remove('bodydark')
    codeicons.classList.add("codeiconslight")
    codeicons.classList.remove("codeiconsdark")
    atitle.classList.add("alight")
    atitle.classList.remove("adark")
    btitle.classList.add("alight")
    btitle.classList.remove("adark")
    ctitle.classList.add("alight")
    ctitle.classList.remove("adark")
    atitletext.classList.add("lightcolor")
    btitletext.classList.add("lightcolor")
    ctitletext.classList.add("lightcolor")
    p1.classList.add("plight")
    p2.classList.add("plight")
    p3.classList.add("plight")
    document.getElementById("logo").src = "src/img/icon_light.png";

    localStorage.setItem("changetheme", checkBox.checked)}
} 

