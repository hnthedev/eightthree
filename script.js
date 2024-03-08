const nambtn = document.getElementById("nam");
const nubtn = document.getElementById("nu");
const t = document.getElementById("textforgirl");

nambtn.addEventListener('click', function() {
    const mainh1 = document.getElementById("texts");
    const img = document.getElementById("pic");

    mainh1.innerHTML = "DUDE WTF ARE U DOING HERE???  GET OUT!";
    img.src = "wtf.jpg";

    nambtn.innerHTML = "U A GUY?!?";
    nambtn.style.width = '200px';

    nubtn.innerHTML = "EWWW";

    t.innerHTML = "nếu bạn là nữ mà ấn lộn thì cho mình xinloi nhee. Ấn nút load lại trang đi :Đ"
});

nubtn.addEventListener('click', function() {
    window.location.href = "forgirl.html";
})