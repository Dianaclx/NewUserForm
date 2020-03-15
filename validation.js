const inputs = document.querySelectorAll(input);

const forms{
    telephone: /^\d[10]$/
};

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid'
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup'.(e) => {
        validate(e.target, forms[e.target.attributes.name.value])
    });
});