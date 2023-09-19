let next=document.getElementById("next");
let prev=document.getElementById("prev");
let step=document.querySelectorAll('.step');

let current_checked=1
next.addEventListener('click',()=>{
    current_checked++;
    if(current_checked>step.length){
        current_checked=step.length;
    }
    updateProgress();  
})


prev.addEventListener("click",()=>{
current_checked--;
if(current_checked<1){
    current_checked=1;
}
updateProgress();
})

function updateProgress(){
        let i;
        for(i=0;i<step.length;i++){
            if(i<current_checked){
                step[i].classList.add("check");
            }
            else{
                step[i].classList.remove('check')
            }
        }
        let check=document.querySelectorAll(".check");
        let  progress_from=document.querySelector(".progress-front")

         progress_from.style.width=((check.length-1)/(step.length-1))*100 +'%';
    }



