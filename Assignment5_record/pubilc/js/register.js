// !form assignment 4
const output = document.querySelector('p[id=captcha]')
        const max = 9999;
        const min = 1000;
        const captcha = Math.floor(Math.random().toFixed(2)*(max-min+1))+min;
        output.innerHTML = 'Captcha = '+(captcha);

        let users = [{ "id": 1, "username": "admin", "password": "1111", "role": 1 },
        { "id": 2, "username": "aaa", "password": "2222", "role": 2 },
        { "id": 3, "username": "bbb", "password": "333", "role": 2 }];

        document.querySelector('#button_register').onclick = function () {
            const username = document.querySelector('input[id=username]').value
            const password = document.querySelector('input[id=password]').value
            const re_password = document.querySelector('input[id=re_password]').value
            const enter_captcha = document.querySelector('input[id=enter_captcha]').value
            const output_check = document.querySelector('h2[id=check]');
            let check = '';
            if (username.trim() == '' || password.trim() == '' || re_password.trim() == '' ) {
                check = 'No username and Passwords do not match and Wrong captcha'
            
            }else if (password != re_password || enter_captcha != captcha) {
                check = 'Passwords do not match and Wrong captcha' 
            }else{
                check = 'Registration is complete'
                users.push({"id":users.length+1,"username":username,"password":password,"role":2});
                // console.log(users);
                output_check.innerHTML = check;
                localStorage.setItem("users",JSON.stringify(users));
                window.location.replace('login.html');
            }
            output_check.innerHTML = check;
        }