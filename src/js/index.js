window.onload=function(){
    document.getElementById('changetheme').addEventListener('click', function () {
        body.classList.add('bodydark')
        body.classList.remove('bodylight')
        document.getElementById("logo").src = "src/img/icon_dark.png";
    });
}