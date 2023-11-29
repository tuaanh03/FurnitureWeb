function auth() {
    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;
    if (inputUsername === "user123@gmail.com" && inputPassword === "user123") {
        location.href = "index.html";
        alert("Đăng nhập thành công");
        return;
    }


    else {
        alert("Đăng nhập thất bại");
        return;
    }
}