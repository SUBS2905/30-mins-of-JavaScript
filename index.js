document.getElementById("name").addEventListener("keyup", () => {
  var x = "";
  let name = document.getElementById("name").value;
  x += name;
  x = x.toUpperCase();
  document.querySelector(".display-input").innerHTML = x;

  if (x == "MONSTER") {
    document.querySelector("#main-img").setAttribute("src", "img/k2.png");
    swal("This outfit suits you the most ❤").then((value) => {
      swal(`By the way KRATIKA looks good in all the outfits.`);
    });
} else if (x == "ADEEBA") {
    document.querySelector("#main-img").setAttribute("src", "img/adeeba.png");
    document.querySelector("#main-img").style.width = "40%";
    swal("This outfit suits you the most ❤").then((value) => {
      swal(`By the way ${x} looks good in all the outfits.`);
    });
} else if (x == "ANANT") {
    document.querySelector("#main-img").setAttribute("src", "img/anant.png");
    document.querySelector("#main-img").style.height = "100%";
    document.querySelector("#main-img").style.width = "100%";
    swal("This outfit suits you the most ❤").then((value) => {
      swal(`By the way ${x} looks good in all the outfits.`);
    });
} else if (x == "SUBS") {
    document.querySelector("#main-img").setAttribute("src", "img/subs.png");
    document.querySelector("#main-img").style.height = "100%";
    document.querySelector("#main-img").style.width = "100%";
    swal("This outfit suits you the most ❤").then((value) => {
      swal(`By the way ${x} looks good in all the outfits.`);
    });
} else if (x == "DUA") {
    document.querySelector("#main-img").setAttribute("src", "img/duaLipa.png");
    document.querySelector("#main-img").style.height = "100%";
    document.querySelector("#main-img").style.width = "100%";
    swal("This outfit suits you the most ❤").then((value) => {
      swal(`By the way ${x} is the sexiest of all 🥺👉🏻👈🏻.`);
    });
} else {
    let num = parseInt(Math.random() * 10);
    num = num.toString();
    console.log(num);
    let add = "img/" + num + ".png";
    document.querySelector("#main-img").setAttribute("src", add);
    document.querySelector("#main-img").style.width = "60%";
  }
});
