let panel= document.querySelectorAll(".panel");

panel.forEach((p)=>{
    p.addEventListener('click',(e)=>{
        panel.forEach((p)=>{
            p.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    });
});