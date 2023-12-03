    //
    //
    //
    //     /*==================================================================
    //     [ Validate ]*/
    //     var input = $('.validate-input .input100');
    //
    //     $('.validate-form').on('submit',function(){
    //         var check = true;
    //
    //         for(var i=0; i<input.length; i++) {
    //             if(validate(input[i]) === false){
    //                 showValidate(input[i]);
    //                 check=false;
    //             }
    //         }
    //
    //         return check;
    //     });
    //
    //
    //     $('.validate-form .input100').each(function(){
    //         $(this).focus(function(){
    //            hideValidate(this);
    //         });
    //     });
    //
    //     function validate (input) {
    //         if($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
    //             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    //                 return false;
    //             }
    //         }
    //         else {
    //             if($(input).val().trim() === ''){
    //                 return false;
    //             }
    //         }
    //     }
    //
    //     function showValidate(input) {
    //         var thisAlert = $(input).parent();
    //
    //         $(thisAlert).addClass('alert-validate');
    //     }
    //
    //     function hideValidate(input) {
    //         var thisAlert = $(input).parent();
    //
    //         $(thisAlert).removeClass('alert-validate');
    //     }
    //
    //
            (function ($) {
                "use strict";


                /*==================================================================
                [ Focus Contact2 ]*/
                $('.input100').each(function(){
                    $(this).on('blur', function(){
                        if($(this).val().trim() != "") {
                            $(this).addClass('has-val');
                        }
                        else {
                            $(this).removeClass('has-val');
                        }
                    })
                })
    })(jQuery);
    //
    function login() {
        event.preventDefault();
        // Lấy giá trị từ các trường đăng nhập
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Kiểm tra nếu có dữ liệu nhập vào
        if (username && password) {
            // Lấy danh sách người dùng từ localStorage (nếu có)
            var userList = JSON.parse(localStorage.getItem('userList')) || [];

            // Kiểm tra xem người dùng có phải là admin không
            if (username === 'admin123@gmail.com' && password === 'admin123') {
                alert('Đăng nhập thành công! Chuyển hướng tới trang admin.');
                // Chuyển hướng đến trang admin.html
                window.location.href = 'adindex.html';
            } else {
                // Kiểm tra xem người dùng có tồn tại không
                var user = userList.find(function (user) {
                    return user.username === username && user.password === password;
                });

                if (user) {
                    // Lưu thông tin người dùng đăng nhập thành công vào localStorage
                    localStorage.setItem('loggedInUser', username);

                    alert('Đăng nhập thành công!');
                    // Chuyển hướng đến trang index.html
                    window.location.href = 'index.html';
                } else {
                    alert('Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.');
                }
            }
        } else {
            alert('Vui lòng điền đầy đủ thông tin đăng nhập.');
        }
    }
    function register() {
        event.preventDefault();
        // Lấy giá trị từ các trường đăng ký
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var password = document.getElementById('pass').value;
        var confirmPassword = document.getElementById('pass2').value;

        // Kiểm tra nếu có dữ liệu nhập vào
        if (username && email && phone && password && confirmPassword) {
            // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp nhau không
            if (password !== confirmPassword) {
                alert('Mật khẩu và xác nhận mật khẩu không khớp.');
                return;
            }

            // Tạo đối tượng chứa thông tin người dùng
            var userInfo = {
                username: username,
                email: email,
                phone: phone,
                password: password
            };

            // Lấy danh sách người dùng từ localStorage (nếu có)
            var userList = JSON.parse(localStorage.getItem('userList')) || [];

            // Kiểm tra xem email, số điện thoại và tên người dùng đã tồn tại chưa
            var userExists = userList.some(function (user) {
                return user.email === email || user.phone === phone || user.username === username;
            });

            if (!userExists) {
                // Thêm thông tin người dùng mới vào danh sách
                userList.push(userInfo);

                // Lưu danh sách người dùng mới vào localStorage
                localStorage.setItem('userList', JSON.stringify(userList));

                // Hiển thị thông báo hoặc chuyển hướng đến trang đăng nhập, tùy thuộc vào yêu cầu của bạn.
                alert('Đăng ký thành công!');
                window.location.href = 'login.html';
                // Reset form sau khi đăng ký thành công (nếu cần)
            } else {
                alert('Email, số điện thoại hoặc tên người dùng đã được sử dụng. Vui lòng chọn thông tin khác.');
            }
        } else {
            alert('Vui lòng điền đầy đủ thông tin đăng ký.');
        }
    }
    function logout() {
        // Xóa thông tin người dùng từ localStorage khi đăng xuất
        localStorage.removeItem('loggedInUser');

        // Chuyển hướng đến trang login.html hoặc trang khác tùy thuộc vào quy định của bạn
        window.location.href = 'index.html';
    }

    // Kiểm tra xem có thông tin người dùng trong localStorage không khi trang tải
