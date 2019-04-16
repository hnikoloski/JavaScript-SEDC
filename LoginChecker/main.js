let username = document.getElementById("userName");
let password = document.getElementById("password");
let button = document.getElementById("button");
let result = document.getElementById("result");

// DATABASE START
let users = [`john`, `mike`, `jack`, 'bob'];
let pws = [`john123`, `m1k3`, `password123`, 'bob'];
let checker = -1;
// DATABASE END

button.addEventListener("click", function() {

    for (let i = 0; i < users.length; i++) {
        if ((username.value == users[i]) && (password.value == pws[i])) {
            checker = i;
            break;
        }
    }

    if (checker !== -1) {
        result.innerText = `Welcome ${username.value}`
    } else {
        result.innerText = `Wrong username or password`
    }

})