const gifBoard = $("#gif-board");
const input = $('#search');

$("#searchform").on("submit", async function(e) {
    e.preventDefault();
    let search = input.val();
    input.val("");
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: search,
      api_key: "nmDKh2f01kx5oGSGatxjbqXP9ImkzZaD"
    }
  });
  makeGiph(response.data);
});


function makeGiph(res){
    let numRes = res.data.length;
    if (numRes) {
        let randIdx = Math.floor(Math.random() * numRes);
        let newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let newGif = $("<img>", {
          src: res.data[randIdx].images.original.url,
          class: "w-100"
        });
        newCol.append(newGif);
        gifBoard.append(newCol);
    }
}


$("#remove").on("click", function() {
    gifBoard.empty();
});

