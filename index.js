let input = document.querySelector("#input");
let section = document.querySelector(".giphy-container");
let search = document.querySelector(".search-result");

let Apikey = "zqcngqfkfg5F7HBIlf5XqPKr3E2e8inm";
// input.addEventListener("keypress", (event) => {
//   if (event.key == "Enter") {
//     console.log("yes enter key is entered", input.value);
//     input = input.value;
//     let url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${Apikey}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((content) => {
//         let data = content.data;

//         data.map((element) => {
//           console.log("elements", element.url);
//           let div = document.createElement("div");
//           div.classList.add("datacontent");
//           let img = document.createElement("img");
//           img.classList.add("imageBox");
//           img.src = element.url;
//           div.appendChild(img);
//           section.appendChild(div);
//         });
//       })
//       .catch((e) => console.log(e));
//   }
// });

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
  if (!input.value) {
    //let url = `https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=${Apikey}`;
    let url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${Apikey}`;
    fetch(url)
      .then((response) => response.json())
      .then((dataContent) => {
        let data = dataContent.data;
        console.log("data", data);
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
    let val = input.value;
    //console.log("val", val);

    url = `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=${Apikey}`;
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
          section.style.display = "none";
          search.appendChild(div);
        });
      })
      .catch((e) => console.log(e));
  }
}
searchGifs();
