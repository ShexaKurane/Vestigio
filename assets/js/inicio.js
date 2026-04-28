// construye sesion
const params = new URLSearchParams(window.location.search);
let language = params.get('language');
let idPieza = params.get('id');
// valida nulos
if (idPieza !== null){
    params.set('id', idPieza);
}else{
    params.set('id', '0');
}
// si no hay lenguaje redirecciona a seleccion de lenguaje
if (language === null){
    window.location.replace('language.html' + '?' + params.toString());
}
// si el id es  diferente de 0 redirecciona a ficha
if (idPieza !== '0'){
    window.location.replace('ficha.html' + '?' + params.toString());
}