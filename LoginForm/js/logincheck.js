var CORRECT_USER = 'admin123@gmail.com';
var CORRECT_PASSWORD = 'admin123';

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if (formLogin.attachEvent)
{
    formLogin.attachEvent('submit', onFormSubmit);
}
else
{
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e)
{
    var username = inputUsername.value;
    var password = inputPassword.value;
    if (username == CORRECT_USER && password == CORRECT_PASSWORD)
    {
        alert('Đăng nhập thành công');
    }
    else
    {
        alert('Sai mật khẩu');
    }
}