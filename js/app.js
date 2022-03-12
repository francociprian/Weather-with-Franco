  // ba8865f37b122620faa7acdc436cbf69

  let btn = document.querySelector("#btnObtenerClima");

  btn.addEventListener("click", () => {
    let city = document.querySelector("#cityname").value;

    let key = "ba8865f37b122620faa7acdc436cbf69";
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      key;
    //console.log(url);
    if (city != "") {
      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((clima) => {
          console.log(clima);
          let temperatura = clima.main.temp;
          console.log(temperatura);
          let tempC = temperatura - 273.15;
          console.log(tempC);

          let p = document.querySelector("#temperatura");
          p.innerHTML = tempC.toFixed(0) + "C /";

          if (tempC < 10) {
            p.className = "cold";
          } else {
            p.className = "hot";
          }
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Completar Ciudad'
      })
    }
  });