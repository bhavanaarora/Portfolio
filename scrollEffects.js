const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElement=document.querySelectorAll('.hidden');
hiddenElement.forEach((el)=>observer.observe(el));

















// $(document).ready(function(){
//     var e = new ScrollMagic.Controller;
//     new ScrollMagic
//         .Scene({
//             triggerElement:".about-text"
//         })
//         .setClassToggle(".about-text",".show","fade-in")
//         .addTo(e);
// })      