// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = []; //lista de los amigos que participarán en el juego
let numeroAmigoSorteado = 0; //número de ubicación del amigo sorteado en la lista array
let listaAmigosSorteados = []; //lista auxiliar para verificar los amigos ya sorteados para no repetir asignación

function asignarElementoLista(elemento, amigo){
    let elementoLista = document.querySelector(elemento);
    elementoLista.innerHTML = amigo;
}


function limpiarInput(){ //vacía la caja de ingreso de nombres 
    let valorInput = document.querySelector('#amigo');
    valorInput.value = '';
    return;
    }


function mostrarListaAmigoSecreto() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // limpia la lista actual
    listaAmigoSecreto.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
        });
    }


function agregarAmigo(){ //añade amigos a la lista para el sorteo
    let amigoNuevo = document.getElementById('amigo').value;
        if(listaAmigoSecreto.includes(amigoNuevo)){ //verifica que no exista para agregarlo o no
            return;
        }else{
            if(typeof amigoNuevo === 'string' && isNaN(amigoNuevo)){
                listaAmigoSecreto.push(amigoNuevo);
                console.log(listaAmigoSecreto);
                mostrarListaAmigoSecreto(); //muestra lista actualizada
            }
            else{alert('Ese no es un nombre válido. Intenta de nuevo.')}
        }

    limpiarInput();
}


function sortearAmigo(){ //revela el amigo secreto para el participante que haga clic en el botón
    let numeroAmigoSorteado = Math.floor(Math.random()*listaAmigoSecreto.length); //elige ubicacion de amigo sorteado

    console.log(numeroAmigoSorteado);

    if(listaAmigosSorteados.length<listaAmigoSecreto.length){ //verifica que aún queden amigos válidos por sortear

        console.log(numeroAmigoSorteado);
        if(listaAmigosSorteados.includes(listaAmigoSecreto[numeroAmigoSorteado])){ //verifica que el amigo sorteado no haya sido asignado antes
            return sortearAmigo();
        }else{
            listaAmigosSorteados.push(listaAmigoSecreto[numeroAmigoSorteado]);
            console.log(listaAmigosSorteados);
        }
        
        console.log(listaAmigoSecreto[numeroAmigoSorteado]);
        alert("Tu amigo secreto será " + listaAmigoSecreto[numeroAmigoSorteado] + ". Diviértete enviándole mensajes y regalos.");

    }
    else{
        alert("Se sortearon todos los amigos de la lista. Reinicia para un nuevo sorteo. ¡Gracias! :)")
    }
    

}


//Código creado por Tulsi Daniela.