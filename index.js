let input = document.querySelector("#input");
console.log(input.value);

let section = document.querySelector(".giphy-container");
// console.log(section);

let Apikey = "zqcngqfkfg5F7HBIlf5XqPKr3E2e8inm";
// function getApi() {
//   let url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${Apikey}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((content) => {
//       let data = content.data;
//       //console.log(data)
//       data.map((element) => {
//         // console.log(element.images.downsized.url);
//         let div = document.createElement("div");
//         div.className = "datacontent";
//         let img = document.createElement("img");
//         img.classList.add("imageBox");
//         //  img.src = element.images.downsized.url;
//         img.setAttribute("src", element.images.downsized.url);
//         div.appendChild(img);
//         section.appendChild(div);
//       });
//     })
//     .catch((error) => console.log(error));
// }
//getApi();

function searchGifs() {
  let inputValue = document.querySelector("input");

  if (!inputValue.value) {
    //let url = `https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=${Apikey}`;
    let url = `https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=${Apikey}`;
    fetch(url)
      .then((response) => response.json())
      .then((dataContent) => {
        let data = dataContent.data;
        data.map((element) => {
          let div = document.createElement("div");
          div.classList.add("dataContent");
          let img = document.createElement("img");
          img.classList.add("imageBox");
          img.src = element.images.downsized.url;
          div.appendChild(img);
          section.appendChild(div);
        });
      })
      .catch((e) => console.log(e));
  } else {
    console.log("value", inputValue.value);
    url = `https://api.giphy.com/v1/gifs/search?q=${inputValue.value}&api_key=${Apikey}`;
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        let data = content.data;
        data.map((e) => {
          let div = document.createElement("div");
          div.classList.add("dataContent");
          let img = document.createElement("img");
          img.classList.add("imageBox");
          img.setAttribute("src", e.images.downsized.url);
          div.appendChild(img);
          section.appendChild(div);
        });
      })
      .catch((e) => console.log(e));
  }
}
searchGifs();
