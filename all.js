const flow =document.querySelector('.flow')
const ab = document.querySelectorAll('.flow A')
flow.addEventListener('click',(e)=>{
 let num =e.target.dataset.ab;
    if(e.target.nodeName ==='A'){
        for(let i=0;i<4;i++){
        ab[i].classList.remove('point')
        }
        ab[num].classList.add('point')
    }    
})
