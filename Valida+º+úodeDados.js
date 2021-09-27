
function validateFormulario () {
    var resposta = document.getElementById("resposta").value

    let feedback = document.getElementById("feedback")

    if (resposta == "1890") {  
        feedback.innerHTML = "Vincent Van Gogh foi o criador da obra Campo de Trigo no 1890"
    } else {
        feedback.innerHTML = "Tente novamente"
    }  
   
}


