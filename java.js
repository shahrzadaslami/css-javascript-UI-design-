document.getElementById('butto0n').addEventListener("click", function() {
	document.querySelector('.bg-model').style.display = "flex";
});

document.getElementById("close").addEventListener('click',function(){
    document.querySelector(".bg-model").style.display = "none";
});

document.getElementById('join').addEventListener('click', function(){
    document.querySelector('.modeljoin').style.display = "flex";
});
document.getElementById("tabcloser").addEventListener('click',function(){
    document.querySelector(".modeljoin").style.display = "none";
});
const moonPath =
 "M16 28C16 43.464 28 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C28 0 16 12.536 16 28Z";
const sunPath =
 "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z" ;
const Darkmode = document.querySelector("#Darkmode");
let toggle = false;


Darkmode.addEventListener('click', () => {
       
    const timeline = anime.timeline({
        duration : 750,
        easing: "easeOutExpo"
    });
   
    timeline.add({
        targets : ".sun",
        d : [{ value: toggle ? sunPath : moonPath}]
    })
    .add({
        targets: "#Darkmode",
        rotate: toggle ? -320 : 320
    }, '-= 350'
    )
    .add({
        targets: "body",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color : toggle ? "rgb(22,22,22)" : "rgb(255,225,255)" 
    }, "-=700"
    );
    // click on the sun and the toggle will switch
    if(!toggle){
        toggle = true;
        text = document.querySelector(".darkon").style.display = "flex"
        text = document.querySelector(".lighton").style.display = "none"
    }else{
        toggle = false;
        text = document.querySelector(".darkon").style.display = "none"
        text = document.querySelector(".lighton").style.display = "flex"
        
    }
});