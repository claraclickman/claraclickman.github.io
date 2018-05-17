function randombg() {
    var random = Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('https://raw.githubusercontent.com/claraclickman/claraclickman.github.io/master/Images/Kitchen2_1.jpg')",
        "url('https://raw.githubusercontent.com/claraclickman/claraclickman.github.io/master/Images/alhambra_ceiling.jpg')",
        "url('https://raw.githubusercontent.com/claraclickman/claraclickman.github.io/master/Images/cloudcity.png')",
        "url('https://raw.githubusercontent.com/claraclickman/claraclickman.github.io/master/Images/josh_kline_full.jpg')",
        "url('http://placehold.it/300&text=banner5')",
        "url('http://placehold.it/300&text=banner6')"
    ];
    document.getElementsByClassName("intro").style.backgroundImage = bigSize[random];
}