var peopleChose=document.querySelector(".people-choose")
peopleChose.addEventListener('click',acountMoney)
function acountMoney(e){
    e.preventDefault();
    var count=e.target.dataset.count
    var basic=e.target.dataset.basic
    var standard=e.target.dataset.standard
    var people=document.querySelectorAll(".people")
    var money=document.querySelectorAll(".money")
    if(e.target.nodeName !=="INPUT"){return}
   for(i=0; i<2 ;i++){
       people[i].textContent=count
   }
   money[0].textContent=basic
   money[1].textContent=standard
  
}