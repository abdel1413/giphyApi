let input = document.querySelector("#input");

let Apikey = "zqcngqfkfg5F7HBIlf5XqPKr3E2e8inm";
let url = `https://api.giphy.com/v1/gifs/trending?api_key=${Apikey}&limit=50`;
let gifContent = document.querySelector(".giphy-container");

function searchGifs() {
  let div, content;
  if (!input.value) {
    console.log("noooo value!!");
    fetch(url)
      .then((response) => response.json())
      .then((dataContent) => {
        let data = dataContent.data;
        // console.log("data", data[0].images.looping);
        gifContent.innerHTML = "";
        data.map((element) => {
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
        });
      })
      .catch((e) => console.log(e));
  } else if (input.value) {
    let val = input.value;
    console.log(val);

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=${Apikey}&limit=15`
    )
      .then((response) => response.json())
      .then((content) => {
        let data = content.data;
        gifContent.innerHTML = "";
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
        });
      })
      .catch((e) => console.log(e));
  }

  return content;
}

searchGifs();
