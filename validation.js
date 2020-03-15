const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-zA-Z0-9_]{5,15}$/,
    fullname: /^[a-zA-Z]{2,10}(?: [a-zA-Z]+){0,2}$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,30}$/g,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    telephone: /^\d{10}$/,


};

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',(e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});