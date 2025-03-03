var quotesArray = [
    'Roosevelt',
    'ok',
    'teddy'
];
var randomNumber = Math.floor(Math.random() * quotesArray.length);
document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '” —' + quotesArray[randomNumber].split(' —')[1] ;


