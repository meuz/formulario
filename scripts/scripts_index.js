window.onload = function () {
    var btnCancelarFormRegistro = document.getElementById('btnCancelarFormRegistro')
    var botonRegistro = document.getElementById('btnEnviarFormRegistro')
    var inputNombre = document.getElementById("inputNombre");
    var inputRut = document.getElementById("inputRut");
    var inputContrasena = document.getElementById("inputContrasena")
    var inputRepetirContrasena = document.getElementById("inputRepetirContrasena")
    var inputEmail = document.getElementById("inputEmail")
    var inputCV = document.getElementById("inputCV")
    
    function validar_formulario_registro() {
        var rutRegex = /^\b[0-9|.]{1,10}\-[K|k|0-9]$/;
        var contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{6,12}$/; //ademas de todo lo pedido, no permite espacios en blanco
        var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;

        if (inputNombre.value == "") {
            inputNombre.classList.add('is-invalid');
        } else {
            inputNombre.classList.remove('is-invalid');
        }

        if (!rutRegex.test(inputRut.value)) {
            inputRut.classList.add('is-invalid');
        } else {
            inputRut.classList.remove('is-invalid');
        }

        if (!contrasenaRegex.test(inputContrasena.value)) {
            inputContrasena.classList.add('is-invalid');
        } else {
            inputContrasena.classList.remove('is-invalid')
        }

        if (inputRepetirContrasena.value != inputContrasena.value || inputRepetirContrasena.value == "") {
            inputRepetirContrasena.classList.add('is-invalid');
        } else {
            inputRepetirContrasena.classList.remove('is-invalid');
        }
        
        if (!emailRegex.test(inputEmail.value) || inputEmail.value == "") {
            inputEmail.classList.add('is-invalid');
        } else {
            inputEmail.classList.remove('is-invalid');
        }
        
    }

    function limpiar_formulario() {

        document.getElementById("inputNombre").value = "";
        document.getElementById("inputRut").value = "";
        document.getElementById("inputFechaNacimiento").value = "";
        document.getElementById("selectGenero").value = "Seleccione su Opción";
        document.getElementById("inputContrasena").value = "";
        document.getElementById("inputRepetirContrasena").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputCV").value = "";

        inputNombre.classList.remove('is-invalid');
        inputRut.classList.remove('is-invalid');
        inputContrasena.classList.remove('is-invalid');
        inputRepetirContrasena.classList.remove('is-invalid');
        inputEmail.classList.remove('is-invalid');
    }

    // esto impide que se ingrese otra cosa que no sean numeros o guiones en el campo rut
    inputRut.addEventListener("keypress", function(event) {
        if (
            (event.key < '0' || event.key > '9') && event.key !== '-'
        ) {
            event.preventDefault();
        }
    });

    btnCancelarFormRegistro.addEventListener("click", limpiar_formulario);
    botonRegistro.addEventListener("click", validar_formulario_registro);
    
};