    // function auth() {
    //     var inputUsername = document.getElementById('username').value;
    //     var inputPassword = document.getElementById('password').value;
    //     if (inputUsername === "user123@gmail.com" && inputPassword === "user123") {
    //         location.href = "index.html";
    //         alert("Đăng nhập thành công");
    //         return;
    //     }
    //     else {
    //         alert("Đăng nhập thất bại");
    //         return;
    //     }
    // }
    document.addEventListener('DOMContentLoaded', function () {
        // Kiểm tra xem có thông tin người dùng trong localStorage không khi trang tải
        var loggedInUser = localStorage.getItem('loggedInUser');
        var subMenu = document.getElementById('subMenu');
        var userInfoLink = document.getElementById('userInfoLink');
        var purchaseHistoryLink = document.getElementById('purchaseHistoryLink');
        var loginLink = document.getElementById('loginLink');
        var registerLink = document.getElementById('registerLink');
        var logoutLink = document.getElementById('logoutLink');

        if (loggedInUser) {
            // Nếu đã đăng nhập, hiển thị tên người dùng
            // Hiển thị submenu cho người dùng đã đăng nhập
            userInfoLink.style.display = 'block';
            purchaseHistoryLink.style.display = 'block';
            loginLink.style.display = 'none';
            registerLink.style.display = 'none';
            logoutLink.style.display = 'block';
        } else {
            userInfoLink.style.display = 'none';
            purchaseHistoryLink.style.display = 'none';
            loginLink.style.display = 'block';
            registerLink.style.display = 'block';
            logoutLink.style.display = 'none';
        }
    });

    function toggleSubMenu(show) {
        var subMenu = document.getElementById('subMenu');
        if (show) {
            // Hiển thị submenu khi trỏ vào icon user
            subMenu.style.display = 'block';
        } else {
            // Ẩn submenu khi rời khỏi icon user
            subMenu.style.display = 'none';
        }

    }



