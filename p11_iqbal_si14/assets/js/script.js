// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
// jika di klik akan menjalankan fungsi computerChoice
a.addEventListener("click",(element) =>{
    computerChoice(element);
})

);

function computerChoice(element){
    //tangkap pilihan user
    let pilihanUser = element.target.innerText;
    // menangkap element result dengan menyelektor untuk menampung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");
    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    //pilihan random untuk komputer
    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random()* choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer sama dengan pilihan user (draw)
    if (pilihanUser == pilihanComputer){
        alert("DRAW");
    }

    // jika pilih user yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("You Won");
    } else if(pilihanUser == "Paper" && pilihanComputer == "Rock"){
        alert("You Won");
    } else if(pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("You Won")
    }

      // jika pilih computer yang menang
      if(pilihanUser == "Rock" && pilihanComputer == "Paper"){
        alert("You Won");
    } else if(pilihanUser == "Paper" && pilihanComputer == "Scissors"){
        alert("You Won");
    } else if(pilihanUser == "Scissors" && pilihanComputer == "Rock"){
        alert("You Won")
    }
}