const counter = document.querySelector("#counter")
const btns = document.querySelectorAll("button")
let count = 0
btns.forEach((button) => {
    button.addEventListener("click", (e) =>{
        const styles = e.currentTarget.classList
        if(styles.contains("increase")){
            count++
        } else  if(styles.contains("decrease")){
            count-- 
        } else  if(styles.contains("decrease_ten")){
            count -=10   
        } else  if(styles.contains("increase_ten")){
            count +=10 
        } else {
            count = 0
        };
        if(count < 0){
            counter.style.color = "red";
        } else {
            counter.style.color = "black";
        }
        counter.textContent = count;
    })
});