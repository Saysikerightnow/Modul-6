window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    du sætter en varibel = i < 0, derefter pluser du 1 hver gang du kører funktionen.add

    ligeså snart i > reveal lengt så kører den, og det samme modsat

    for er et loop, den iterere ind til statement er sandt 

    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;

    revealtop som bliver til = reveals [i] array med getBoundingClientRect.add

    man sætter i virkeligheden revealTop til toppen af getBoundingClientRect i reveals array. da I bliver til et array i linjen ovenover

    find ud af hvad getBoundingClientRect gør.

    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}
