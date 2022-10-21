// create programatically because 16ish is a bit much for by hand


const playerData = [
    {
        character: "Test met een hele lange naam",
        player: "Renske",
        image: "tihim_holosmith.jpg",
        base_profession: "engineer",
    },
    {
        character: "Saybia Wolfspirit",
        player: "Githa",
        image: "test_norn.jpg",
        base_profession: "guardian",
    },
    {
        character: "Plantanebula",
        player: "David",
        image: "todo.jpg",
        base_profession: "revenant",
    },
    {
        character: "Cedy B",
        player: "Cedy",
        image: "todo.jpg",
        base_profession: "guardian",
    },
    {
        character: "Gorrik Scruff",
        player: "Thomas",
        image: "todo.jpg",
        base_profession: "engineer",
    },
    {
        character: "Valor",
        player: "Dennis",
        image: "todo.jpg",
        base_profession: "elementalist",
    },
    {
        character: "Siah Ranger",
        player: "Siah",
        image: "todo.jpg",
        base_profession: "ranger",
    },
    {
        character: "Kayleigh Snow",
        player: "Fran",
        image: "todo.jpg",
        base_profession: "engineer",
    },
    {
        character: "Feels Salad Man",
        player: "Kevin",
        image: "todo.jpg",
        base_profession: "ranger",
    },
    {
        character: "Softreset",
        player: "Ole",
        image: "todo.jpg",
        base_profession: "engineer",
    },
    {
        character: "Amoryn",
        player: "Ayla",
        image: "todo.jpg",
        base_profession: "guardian",
    },
    {
        character: "Trust Me Imma Mani",
        player: "Dennis2",
        image: "todo.jpg",
        base_profession: "engineer",
    },
    {
        character: "Grumpyinsom",
        player: "Mark",
        image: "todo.jpg",
        base_profession: "ranger",
    },
    {
        character: "Cephalid",
        player: "Mark",
        image: "todo.jpg",
        base_profession: "engineer",
    },
    {
        character: "Seraph Phoenix",
        player: "Stefan",
        image: "todo.jpg",
        base_profession: "engineer",
    },
    {
        character: "Silly Dilli",
        player: "Dimitri",
        image: "todo.jpg",
        base_profession: "necromancer",
    }
]


const colorMap = {
    "engineer": "#c75416",
    "guardian": "#18a1c7",
    "ranger": "#71a811",
    "mesmer": "#b11bc4",
    "revenant": "#91101d",
    "elementalist": "#ed1544",
    "warrior": "#d18c02",
    "thief": "#574644",
    "necromancer": "#116332"
};

window.onload = function() {
    const slideTrack = document.getElementsByClassName("slide-track")[0];
    console.log(playerData.length);

    playerData.forEach(function(p) {
        console.log(p);

        const color = colorMap[p.base_profession];
        slideTrack.innerHTML += `
            <div class="slide" style="background-image: url('players/${p.image}')">
               <div class="text-background" style="background-color: ${color};">
                    <div class="text-container" style="text-shadow: 3px 2px ${color};">
                        <p class="character-name">${p.character}</p>
                        <p class="player-name">${p.player}</p>
                    </div>
                </div>
            </div>
        `
    });

}