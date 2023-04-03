console.log('Funguju')
const kameny = document.querySelectorAll(".kamen");

const hrajTon = (event) =>{
    let nadpis = document.querySelector("h1");
    let jmenoKamene = event.textContent;
    nadpis.textContent = jmenoKamene;
    const zvuk = new Audio("tony/"+jmenoKamene+".mp3")
    zvuk.play() 

}
const stiskKlavesy =(udalost)=>{
    hrajTon(udalost.target);
}

for (let index = 0; index < kameny.length; index++) {
    kameny[index].addEventListener("click",stiskKlavesy);    
}