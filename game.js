const taskGame = document.querySelector("#game-task");
const gamesSelection = document.querySelector("#games");
const listselection = document.querySelector("#list-items");
const games = {
  dota: ["Game finding", "Hero selection", "Farm", "Fight", "Win"],
  pubg: [
    "Make a squad",
    "Decide a place",
    "Get guns",
    "Safe in region",
    "Chicken dinner",
  ],
  cs: ["Select a team", "Attack", "Win"],
  tod: ["Chill", "Repeat"],
};

function selectgame(e) {
  const game = e.target.dataset.game;
  document.getElementById("dota").style.removeProperty("background-color");
  document.getElementById("pubg").style.removeProperty("background-color");
  document.getElementById("cs").style.removeProperty("background-color");
  document.getElementById("tod").style.removeProperty("background-color");
  document.getElementById(
    "choosen-game"
  ).innerHTML = `<button class="btn btn-outline-info">${game.toUpperCase()}</button>`;

  if (game) {
    document.getElementById(game).style.backgroundColor = "skyblue";
    console.log(game);
    const datas = games[game];
    const html = fillhtml(datas, game);
    taskGame.innerHTML = html;
  }
}

function selectlist(e) {
  const listvalue = e.target.dataset.item;
  document.getElementById(
    "choosen-item"
  ).innerHTML = `<button class="btn btn-outline-info">${listvalue.toUpperCase()}</button>`;
}

function fillhtml(datas, game) {
  return `
  <ol>
   ${datas.map((data, index) => {
     if (index === 0) {
       selectlist({ target: { dataset: { item: games[game][0] } } });
       return `<li><button class="btn btn-outline-info" data-item="${data}">${data}</button></li>`;
     } else {
       return `<li><button class="btn btn-outline-info" data-item="${data}">${data}</button></li>`;
     }
   })}
  </ol>
`;
}

gamesSelection.addEventListener("click", selectgame);
listselection.addEventListener("click", selectlist);

selectgame({ target: { dataset: { game: "dota" } } });
selectlist({ target: { dataset: { item: games[game][0] } } });
