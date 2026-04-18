var menuOpen = true;
var modoAccesibilidad = false;

menuItems = [];
menuItems.push(document.getElementById("visual"));

function accesBtnActionState()
{    
    menuOpen = !menuOpen;


    menuItems.forEach(element => {
        if(menuOpen)
        {
            element.style.width = "50px";
            element.style.height = "50px";
        }
        else{
            element.style.width = "0px";
            element.style.height = "0px";
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

accesBtnActionState();