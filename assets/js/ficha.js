// Get parameters
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));           // convert to number
const language = params.get('language') || 'spanish'; // default to english

if(id === 0){
  window.location.replace('inicio.html' + '?' + params.toString());
}

// Fetch JSON file
fetch('/colecciones/CCP-fifa-2026.json')
  .then(response => response.json())
  .then(data => {
    let coleccion = data.coleccion;
    console.log(coleccion);
    console.log(coleccion.piezas);
    const item = coleccion.piezas.find(obj => obj.id == id);
    console.log(item);
    if (item) {
        const content = item[language.toLowerCase()] || 'Language not found';
        document.getElementById('content').textContent = content;
        const title = 'title_' + language.toLowerCase();
        document.getElementById('title').textContent = item[title];
        document.getElementById('author').textContent = item['author'];
        const audio = 'audio_' + language.toLowerCase();
    
        //set the audio
        const audioPath = item[audio];
        const audioElement = document.getElementById('audio');
        
        if (audioPath) {
          audioElement.src = audioPath;
          audioElement.load();
          const img = document.getElementById('image');
          img.src = item['image']
        } else {
          audioElement.style.display = 'none';
        }
        
    } else {
      window.location.replace('not-found.html' + '?' + params.toString());
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById('content').textContent = 'Error loading data';
  });