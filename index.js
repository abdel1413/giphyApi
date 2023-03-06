let input = document.querySelector("input");
console.log(input);
function getApi() {
  let api = fetch("api.giphy.com/v1/gifs");
  console.log(api);
}
getApi();
