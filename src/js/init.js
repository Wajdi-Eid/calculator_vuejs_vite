import { validate } from "./validat";
 export const init =(element)=>{
    element.addEventListener('input',function(event){
    let spanReq=document.querySelector('.required');
    spanReq.style.display='block';
    if(validate(event.target.value)){
        spanReq.style.display='none'
        
    }
    

    
  
    
})
}
