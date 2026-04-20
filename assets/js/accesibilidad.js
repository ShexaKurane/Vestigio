var menuOpen = true;
var modoAccesibilidad = false;
var modoDislexia = false;

var menuItems = [];
menuItems.push(document.getElementById("visual"));
menuItems.push(document.getElementById("dislexia"));

const options = {
    duration: 800,
    iterations: 1,
    fill: 'forwards', // Mantiene el estado final de la animación
    easing: 'ease-in-out' // Opcional: hace el movimiento más fluido
};

const options2 = {
    duration: 1100,
    iterations: 1,
    fill: 'forwards', // Mantiene el estado final de la animación
    easing: 'ease-in-out' // Opcional: hace el movimiento más fluido
};

function accesBtnActionState()
{    
    menuOpen = !menuOpen;
    menuItems.forEach(element => {
        if (menuOpen) {
            element.animate([
                { width: '0px' },
                { width: '50px', height: '50px' },
                { width: '50px', height: '50px' },
                { width: '100%', height: '50px' }
            ], options);
        } else {
            element.animate([
                { width: '100%' },
                { width: '100%' },
                { width: '75%' },
                { width: '50%' },
                { width: '50px', height: '50px' },
                { width: '50px', height: '50px' },
                { width: '50px', height: '50px' },
                { width: '0px', height: '0px' }
            ], options2);
        }
    });

}

function accesBtnVisualActionState()
{
    modoAccesibilidad = !modoAccesibilidad;

    if(modoAccesibilidad){
        menuItems[0].style.backgroundColor = "var(--success)";
        document.querySelectorAll(".access-txt").forEach(element => {
            element.style.fontSize = "var(--fs-accesibilidad) !important";
        });
    }else{
        menuItems[0].style.backgroundColor = "";
        document.querySelectorAll(".access-txt").forEach(element => {
            element.style.fontSize = "";
        });
    }
}

function accesBtnDislexiaActionState()
{
    modoDislexia = !modoDislexia;

    if(modoDislexia){
        menuItems[1].style.backgroundColor = "var(--success)";
        document.querySelectorAll(".access-txt").forEach(element => {
            element.style.fontFamily = "var(--acces-dislexia) !important";
        });
    }else{
        menuItems[1].style.backgroundColor = "";
        document.querySelectorAll(".access-txt").forEach(element => {
            element.style.fontFamily = "";
        });
    }
}

accesBtnActionState();