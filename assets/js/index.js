// construye sesion
    const params = new URLSearchParams(window.location.search);
    let language = params.get('language');
    let previousPiece = params.get('id');
    // valida nulos
    if (previousPiece !== null){
        params.set('id', previousPiece);
    }else{
        params.set('id', '0');
    }
    // si no hay lenguaje redirecciona a seleccion de lenguaje
    if (language === null){
        console.log('language.html' + '?' + params.toString());
        window.location.replace('language.html' + '?' + params.toString());
    }
    // si el id es 0 redirecciona a inicio, sino a ficha
    if (previousPiece === '0'){
        console.log('inicio.html' + '?' + params.toString());
        window.location.replace('inicio.html' + '?' + params.toString());
    }else{
        console.log('ficha.html' + '?' + params.toString());
        window.location.replace('ficha.html' + '?' + params.toString());
    }