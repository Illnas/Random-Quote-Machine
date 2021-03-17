

 /* free API from this url: https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373    */
fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let button = document.getElementById("new-button");
    let author = document.getElementById("author");
    let quote = document.getElementById("quote");

    button.onclick = () => {
      let rng = Math.floor(Math.random() * 1643);
      author.innerHTML = data[rng].author;
      quote.innerHTML = `"${data[rng].text}"`;
      /* console.log(rng); */
    };
  });
