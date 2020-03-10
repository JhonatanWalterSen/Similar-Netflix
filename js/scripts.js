//validar el formuladio
const inputs = document.querySelectorAll("form .campo input");

// Listener a los inputs
inputs.forEach(input =>{
    input.addEventListener('blur', validarInput);
});
inputs.forEach(input =>{
    input.addEventListener('input', validarInput);
});

function validarInput(e){
    // console.log(e.target.value);
    const estados = ["Valido","No-valido"];
    let clase;
    if(e.target.value.length === 0){
        clase = estados[1];
    }else{
        clase = estados[0];
    }
    e.target.classList.remove(...estados);
    e.target.nextElementSibling.classList.remove(...estados);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);
    console.log(clase);

    // inyectar dinamicamente el div con el error
    if(clase === 'No-valido'){
        if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta'){
            // construir el mensaje de error
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta'); 
            //insertar el errer
            e.target.parentElement.parentElement.insertBefore(errorDiv,
            e.target.parentElement.nextElementSibling); 
        }
    }else{
        // Limpiar el mensajke de error si existe
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta'){
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

// Mostrar y ocultar password
const mostrarpasswordBtn = document.querySelector('form .campo span');
mostrarpasswordBtn.addEventListener('click', e=>{
    const passwordInput = document.querySelector('#password');
    if(e.target.classList.contains('mostrar')){
        //mostrar el texto
        e.target.classList.remove('mostrar');
        //cambiar el texto
        e.target.textContent = 'Ocultar';
        //Cambiamos a password
        passwordInput.type='text';
    }else{
        //mostrar el password
        e.target.classList.add('mostrar');
        //cambiar el texto
        e.target.textContent ='Mostrar';
        //cambiamos a password
        passwordInput.type='password';
    }
})