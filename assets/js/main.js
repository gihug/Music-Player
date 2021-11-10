const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  songs: [
    {
      name: "Always Remember Us This Way",
      singer: "Lady Gaga",
      path: "./assets/music/AlwaysRememberUsThisWay-LadyGaga-5693911.mp3",
      image: "./assets/img/1.jpg",
    },
    {
      name: "Shallow",
      singer: "Lady Gaga",
      path: "./assets/music/Shallow-Lady-Gaga_ Bradley-Cooper.mp3",
      image: "./assets/img/2.jpg",
    },
    {
      name: "I Never Love Again",
      singer: "Lady Gaga",
      path: "./assets/music/ILlNeverLoveExtendedVersionRadioEdit-LadyGaga-5693922.mp3",
      image: "./assets/img/3.jpg",
    },
    {
      name: "Heal Me",
      singer: "Lady Gaga",
      path: "./assets/music/healme.mp3",
      image: "./assets/img/4.jpg",
    },
    {
      name: "Before I Cry",
      singer: "Lady Gaga",
      path: "./assets/music/BeforeICry-LadyGaga-5693918.mp3",
      image: "./assets/img/5.png",
    },
    {
      name: "Too Far Gone",
      singer: "Bradley Cooper",
      path: "./assets/music/toofar.mp3",
      image: "./assets/img/6.jpg",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => ({}));
  },
  start: function () {
    this.render();
  },
};

app.start();
