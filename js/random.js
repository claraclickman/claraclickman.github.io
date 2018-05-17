function randombg() {
    var random = Math.floor(Math.random() * 6) + 0;
    var bigSize = ["radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.88)), url('https://raw.githubusercontent.com/claraclickman/claraclickman.github.io/master/Images/Kitchen2_1.jpg')",
        "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.88)), url('https://raw.githubusercontent.com/claraclickman/claraclickman.github.io/master/Images/alhambra_ceiling.jpg')",
        "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.88)), url('https://raw.githubusercontent.com/claraclickman/claraclickman.github.io/master/Images/cloudcity.png')",
        "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.88)), url('https://raw.githubusercontent.com/claraclickman/claraclickman.github.io/master/Images/josh_kline_full.jpg')",
        "url('http://placehold.it/300&text=banner5')",
        "url('http://placehold.it/300&text=banner6')"
    ];
    document.getElementsByClassName("row").style.backgroundImage = bigSize[random];
}