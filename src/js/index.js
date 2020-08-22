function changeTheme() {
    // Get the checkbox
var checkBox = document.getElementById("changetheme");
  
// If the checkbox is checked, display the output text
if (checkBox.checked == true){
    body.classList.add('bodydark')
    body.classList.remove('bodylight')
    document.getElementById("logo").src = "src/img/icon_dark.png";
} else {
    body.classList.add('bodylight')
    body.classList.remove('bodydark')
    document.getElementById("logo").src = "src/img/icon_light.png";
}
}
       
