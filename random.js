

function hello(){
  
        var number = document.getElementById("Number").value
        let random = Math.floor(Math.random()*10) 
        if(number==random){
            document.write("Win =" + random); 
            const done = document.createElement("button") 
            done.textContent="Reset"
            done.onclick=()=>{
                location.reload()
            }
            setInterval(done(),100000)
        }
        else{
            // document.write("You loose =" + random)
            document.write("<br>");
            alert("Your guess is wrong" + "Random number is" + random);
            setInterval(ree(),5000);
        } 
    }
    function ree(){
        location.reload()
    }




