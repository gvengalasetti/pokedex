
const absel=document.getElementById('butt');
const urlp = "https://pokeapi.co/api/v2/pokemon/dragonite";
fetch(urlp)
.then(res => res.json())
.then(resJsn => {
    const pokemon = {};
    pokemon['name']=resJsn.name;
    console.log(pokemon);
    for(let{fact} of resJsn.abilities){
    const abs = document.createElement('p');
    console.log(fact);
    abs.innerText = fact;
    absel.append(fact);
    }

})


/*
$('#butt').click(function(){
    alert("clicked");
});


document.getElementById("butt").onclick = function(){
    alert("clicked")
}
*/