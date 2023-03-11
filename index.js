let input = document.querySelector("#input");

let Apikey = "zqcngqfkfg5F7HBIlf5XqPKr3E2e8inm";
let url = `https://api.giphy.com/v1/gifs/trending?api_key=${Apikey}&limit=50`;
let gifContent = document.querySelector(".giphy-container");

function searchGifs() {
  let div, content;
  if (!input.value) {
    //console.log("val", val);
    fetch(url)
      .then((response) => response.json())
      .then((dataContent) => {
        let data = dataContent.data;
        // console.log("data", data[0].images.looping);
        data.map((element) => {
          //console.log(element.url);
          div = document.createElement("div");
          div.classList.add("dataContent");

          let video = document.createElement("video");
          video.setAttribute("src", element.images.looping.mp4);
          video.type = "video/mp4";
          video.controls = true;
          video.autoplay = true;
          //video.muted = false;
          video.classList.add("imageBox");
          div.appendChild(video);
          content = gifContent.appendChild(div);

          // let img = document.createElement("img");
          // img.classList.add("imageBox");
          // img.src = element.images.downsized.url;
          // // console.log("img", img);
          // div.appendChild(img);
          // content = gifContent.appendChild(div);
        });
      })
      .catch((e) => console.log(e));
  } else if (input.value) {
    let val = input.value;
    console.log(val);
    url = `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=${Apikey}&limit=15`;
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        let data = content.data;
        data.map((e) => {
          let div = document.createElement("div");
          div.classList.add("dataContent");

          let video = document.createElement("video");
          video.type = "video/mp4";
          video.controls = true;
          video.autoplay = true;
          video.muted = false;
          video.classList.add("imageBox");
          video.setAttribute("src", e.images.original.mp4);
          div.appendChild(video);
          content = gifContent.appendChild(div);

          // let img = document.createElement("img");
          // img.classList.add("imageBox");
          // img.setAttribute("src", e.images.downsized.url);
          // console.log("img", img);
          // div.appendChild(img);
          //content = gifContent.appendChild(div);
        });
      })
      .catch((e) => console.log(e));
  }
  return content;
}

searchGifs();
