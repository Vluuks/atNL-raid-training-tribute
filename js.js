const playerData = [
    {
        character: "Saybia Wolfspirit",
        player: "Githa",
        image: "todo.jpg",
        base_profession: "guardian",
    },
	{
        character: "Gorrik Scruff",
        player: "Thomas",
        image: "gorrik_atnl.png",
        base_profession: "engineer",
    },
    {
        character: "Plantanebula",
        player: "David",
        image: "planta_nl.png",
        base_profession: "revenant",
    },
	{
        character: "Kayleigh Snow",
        player: "Fran",
        image: "fran_nl.png",
        base_profession: "engineer",
    },
    {
        character: "Cedy B",
        player: "Cedy",
        image: "cedy_atnl.png",
        base_profession: "guardian",
    },
	{
        character: "Test met een hele lange naam",
        player: "Test 1234 blablablsfabflsabasf",
        image: "tihim_atnl.png",
        base_profession: "engineer",
    },    
    {
        character: "Válór",
        player: "Dennis",
        image: "valor_atnl.png",
        base_profession: "elementalist",
    },
    {
        character: "Siah Jade",
        player: "Siah",
        image: "siah_atnl.png",
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
        character: "Seraph Phoenix",
        player: "Stefan",
        image: "seraph_atnl.png",
        base_profession: "engineer",
    },
    {
        character: "Grumpyinsom",
        player: "Patrick",
        image: "grumpy_nl.png",
        base_profession: "ranger",
    },
    {
        character: "Trust Me Imma Mani",
        player: "Dennis",
        image: "mani_nl.png",
        base_profession: "engineer",
    },
    {
        character: "Silly Dilli",
        player: "Dimitri",
        image: "todo.jpg",
        base_profession: "necromancer",
    },
	{
        character: "Cephalid",
        player: "Mark",
        image: "todo.jpg",
        base_profession: "engineer",
    },
];

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
	
	// prime frontend development
	slideTrack.innerHTML += `<div class="slide intro-slide"></div> <div class="slide intro-slide"></div>`

}