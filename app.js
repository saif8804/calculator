const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
let output = "";


buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{

   if(e.target.innerHTML == "="){
         output = eval(output);
       display.value = output;
    }
    else if(e.target.innerHTML == 'C'){
        output = ""
        display.value = output;
      }
      else{ 
       output = output + e.target.innerHTML;
        display.value = output;
      }
})
})
