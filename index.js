let input = document.querySelector("input");
let section = document.querySelector(".giphy-container");
// console.log(section);

let Apikey = "zqcngqfkfg5F7HBIlf5XqPKr3E2e8inm";
function getApi() {
  input.addEventListener("keypress", (event) => {
    console.log("e", event);
    console.log(input);
    let userInput = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${Apikey}`;
    console.log(userInput);
    fetch(userInput)
      .then((response) => response.json())
      .then((datacontent) => {
        let data = datacontent.data;
        data.map((element) => {
          // console.log(element.images.downsized.url);
          let div = document.createElement("div");
          div.className = "datacontent";
          let img = document.createElement("img");
          img.className = "imageBox";
          img.src = element.images.downsized.url;
          div.appendChild(img);
          section.appendChild(div);
        });
      })
      .catch((e) => console.error(e));
  });
  let url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${Apikey}`;

  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      let data = content.data;
      data.map((element) => {
        // console.log(element.images.downsized.url);
        let div = document.createElement("div");
        div.className = "datacontent";
        let img = document.createElement("img");
        img.className = "imageBox";
        img.src = element.images.downsized.url;
        div.appendChild(img);
        section.appendChild(div);
      });
    })
    .catch((error) => console.log(error));
}
getApi();
