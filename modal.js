var botones = document.getElementsByClassName("boton");


botones = [...botones];

botones.forEach(
    boton =>{
        boton.addEventListener("click", ()=>{
            let modal = document.getElementById("modale");
            modal.showModal();
        })
    }
)

var confirm = document.getElementById("confirm");

confirm.addEventListener("click", ()=>{
    let modal = document.getElementById("modale");
    modal.close();
})


var confirm = document.getElementById("confirm").addEventListener('click', ()=>{
    let si = document.getElementById('si')
    let no = document.getElementById('no')

    if(si.checked){
        alert('Usted esta comprando una hamburguesa')
    }
    else if(no.checked) {
        alert('Usted esta cancelando la compra')
    }
})



