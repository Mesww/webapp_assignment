// let users = JSON.parse( localStorage.getItem("users")); 
let users = [{ "id": 1, "username": "admin", "password": "1111", "role": 1 },
        { "id": 2, "username": "aaa", "password": "2222", "role": 2 },
        { "id": 3, "username": "bbb", "password": "333", "role": 2 }];
document.querySelector('button').onclick = function () {
    let username = document.querySelector('#username').value; 
    let password = document.querySelector('#password').value; 
    // console.log(username+password);

        for (const iterator of users) {
            if(username == iterator.username && password == iterator.password){
                // alert(username);
                window.location.replace('asset.html');
                break;
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Login failed,try again!',
                  })
            }
            
        }    
    

}

