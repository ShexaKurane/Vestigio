const params = new URLSearchParams(window.location.search);
let language = params.get('language');
let previousPiece = params.get('id');

if (previousPiece === null){
  params.set('id', '0');
}else{
  params.set('id', previousPiece);
}
if (previousType === null){
    previousType = '0';
}

document.querySelectorAll('.form').forEach(form => {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const language = form.querySelector('[name="language"]').value;
    params.set('language', language);
    const newUrl = form.action + '?' + params.toString();
    window.location.href = newUrl;
  });
});