function myFunction(x) {
    x.classList.toggle("change");
  }

  function myDarkMode() {
    
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var DarkLogo = document.getElementById("DarkLogo");
    var LightLogo = document.getElementById("LightLogo");
    var BlackImg = document.getElementsByClassName("light-back");
    var WhiteImg = document.getElementsByClassName("dark-back");
    var Sun = document.getElementById("mySun");
    var Moon = document.getElementById("myMoon");
 

    DarkLogo.style.display = "block";
    LightLogo.style.display = "none";


    document.getElementById("NavLink1").style.color = "#fafafa";
    document.getElementById("NavLink2").style.color = "#fafafa";
    document.getElementById("NavLink3").style.color = "#fafafa";
    document.getElementById("NavLink4").style.color = "#fafafa";



    if (Moon.style.display === "block") {
      Moon.style.display = "none";
      Sun.style.display = "block";

    } else {
      Moon.style.display = "none";
      Sun.style.display = "block";


    }
 }

 function myLightMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    DarkLogo.style.display = "none";
    LightLogo.style.display = "block";



    document.getElementById("NavLink1").style.color = "#141414";
    document.getElementById("NavLink2").style.color = "#141414";
    document.getElementById("NavLink3").style.color = "#141414";
    document.getElementById("NavLink4").style.color = "#141414";


    


    
    var Sun = document.getElementById("mySun");
    var Moon = document.getElementById("myMoon");
    if (Sun.style.display === "block") {
      Sun.style.display = "none";
      Moon.style.display = "block";

      
    } else {
      Sun.style.display = "none";
      Moon.style.display = "block";


    }
 }

function CalcAge(){
  const AgeNum = document.getElementById("age-num").value;
  const MarsNum = Math.round((AgeNum * 365) / 687);
  document.getElementById("answer").innerHTML = "You seem to be " + Math.round((AgeNum * 365) / 687) + " years old";
  if (MarsNum <= 18){
    document.getElementById("comment").innerHTML = "Hhhhhh you're under age there!"
  } else if (MarsNum < 60){
    document.getElementById("comment").innerHTML = "Not bad! Go there on the first trip."
  }
  
  else{
    document.getElementById("comment").innerHTML = " I think you'd like to stay as you're."
  }
}
