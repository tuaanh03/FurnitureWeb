window.onload = function () {
    var loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        // Hiển thị tên người dùng
        document.getElementById('userIcon').innerHTML = loggedInUser;
    }
};
function directCart() {
    location.href = "shoppingcart.html";
}
function login() {
    location.href = "login.html";
}
function register()
{
    location.href="register.html";
}
function userinfo()
{
    location.href="userinfo.html";
}
function historypurchase()
{
    location.href="historypurchase.html";
}