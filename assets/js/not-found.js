function regresar(){
      const params = new URLSearchParams(window.location.search);
      let language = params.get('language');
      params.set('id', '0');
      // si no hay lenguaje redirecciona a seleccion de lenguaje
      if (language === null){
          window.location.replace('language.html' + '?' + params.toString());
      }
      window.location.replace('index.html' + '?' + params.toString());
    }