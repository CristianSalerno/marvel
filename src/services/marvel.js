const urlApi =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f40a5338a4d10dd29a3cf7c57e2c7b44&hash=1f40a5338a4d10dd29a3cf7c57e2c7b44bc6f5424a5595d11ebc200aba271adc7bbcb5f07";

fetch(urlApi)
  .then(res => res.json)
  .then(json => console.log(json));
