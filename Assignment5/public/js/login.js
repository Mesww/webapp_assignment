
const users = JSON.parse(localStorage.getItem("users")); 
console.log(users); 

document.querySelector('button').onclick = function(){
    console.log('Test');
    const loginuser = document.querySelector('#loginusername').value;
    const loginpass = document.querySelector('#loginpassword').value;
    for (const iterator of users) {
        if (iterator.password == loginpass && iterator.username == loginuser) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login success!',
                showConfirmButton: false,
                timer: 1500
              })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Login failed, try again!',
              })
        }
    }
}