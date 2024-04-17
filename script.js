const jokesDiv = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJokes = async () => {
  // USING PROMISES
  //   fetch("https://icanhazdadjoke.com/", setHeader)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       jokesDiv.innerHTML = data.joke;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //USING ASYNC/AWAIT

  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await res.json();
    jokesDiv.innerHTML = data.joke;
  } catch (error) {
    console.log(error)
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
