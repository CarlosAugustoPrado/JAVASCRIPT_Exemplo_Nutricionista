var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET",  "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        
        if(xhr.status == 200) {
            erroAjax.classList.add("Invisvel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);

            adicionaPacienteNaTabela(paciente);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            });    
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("insivel");
        }        
   
    });

    xhr.send();
        
})