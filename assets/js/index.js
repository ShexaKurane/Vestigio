// Get parameters
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));           // convert to number
const language = params.get('language') || 'spanish'; // default to english

// Fetch JSON file
fetch('inventory.json')
  .then(response => response.json())
  .then(data => {
    const item = data.find(obj => obj.id == id);
    if (item) {
        const content = item[language.toLowerCase()] || 'Language not found';
        document.getElementById('content').textContent = content;
        const title = 'title_' + language.toLowerCase();
        document.getElementById('title').textContent = item[title];
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
      document.getElementById('content').textContent = 'Item not found';
    }
      document.getElementById('author').textContent = item['author'];
  })
  .catch(err => {
    console.error(err);
    document.getElementById('content').textContent = 'Error loading data';
  });