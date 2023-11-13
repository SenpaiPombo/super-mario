let formulario = document.querySelector(".formulario")

let mascaraForm = document.querySelector(".mascara-form")

function cliquei(){
    formulario.style.left = "700px"
    mascaraForm.style.visibility = "visible"

}

function sumirFormulario(){
    formulario.style.left = "-370px"
    mascaraForm.style.visibility = "hidden"
}