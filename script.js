const output = document.getElementById("placeholder");
var input = document.querySelector("input");
const submit = document.getElementById("submit");
submit.addEventListener("click",()=>{



    if(input.value.length < 3){
        output.textContent = 'name length must be 3+ char';
        
        
            }else
                output.textContent= "welcome to our site "+input.value;
            
                
            
       
        })