let styleButton = document.querySelector(".style-Button");
let stylemessage = document.querySelector(".style-message");
let pastelmessage = document.querySelector(".pastel-message");
let result = document.querySelector(".result");


styleButton.onclick = function() {
    let userComment1 = document.querySelector(".pastel").value;
    let userComment2 = document.querySelector(".style").value;
   
    console.log(userComment1);
    pastelmessage.innerHTML = userComment1 + " is what you chose and";
    console.log(userComment2);
    stylemessage.innerHTML = userComment2 + " is your style, so ";
   
  
    if (userComment1 === "4-5" && userComment2 === "stylish") {
        result.innerHTML = ("you are pink");  }
  
    else if(userComment1 === "1-3" && userComment2 === "stylish") {
        result.innerHTML = ("you are blue");
    }
    
    else if(userComment1 === "1-3" && userComment2 === "casual") {
        result.innerHTML = ("your color is black");
    }
    
    else if(userComment1 === "4-5" && userComment2 === "casual") {
        result.innerHTML = ("your color is purple");
    }
};