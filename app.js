const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    //Change page on scroll
    onwheel = (e) => {    
        let sect = "";
        let btn = ""; 
    
        sections.forEach((section) =>{
            if(section.classList.contains('active')){                                        
                section.classList.replace('active', 'remove');
                section.addEventListener('animationend', function(){
                    section.classList.remove('remove');
                })
                
                
                for(let i = 1; i <= 5; i++){
                    let str = 'sec';
                    let ctr = 'control-'

                    if(section.classList.contains(str + i)){
                        if(e.deltaY > 0){
                            let j = i !== 5 ? (i+1) : 1;
                            sect = str + j;
                            btn = ctr + j;
                        }else if(e.deltaY < 0){
                            let j = i !== 1 ? (i-1) : 5;
                            sect = str + j;
                            btn = ctr + j;
                        }
                    }

                }
                
                // Niet mooi maar functioneel voor nu, later vervangen door for loop
                /*if(e.deltaY > 0){    
                    if(section.classList.contains('sec1')){
                        sect = "sec2";
                        btn = "control-2"                
                    }else if(section.classList.contains('sec2')) {
                        sect = "sec3";
                        btn = "control-3"
                    }else if(section.classList.contains('sec3')) {
                        sect = "sec4";
                        btn = "control-4"
                    }else if(section.classList.contains('sec4')) {
                        sect = "sec5";
                        btn = "control-5"
                    }else if(section.classList.contains('sec5')) {
                        sect = "sec1";
                        btn = "control-1"
                    }
                }else if(e.deltaY < 0){    
                    if(section.classList.contains('sec1')){
                        sect = "sec5";
                        btn = "control-5"                
                    }else if(section.classList.contains('sec2')) {
                        sect = "sec1";
                        btn = "control-1"
                    }else if(section.classList.contains('sec3')) {
                        sect = "sec2";
                        btn = "control-2"
                    }else if(section.classList.contains('sec4')) {
                        sect = "sec3";
                        btn = "control-3"
                    }else if(section.classList.contains('sec5')) {
                        sect = "sec4";
                        btn = "control-5"
                    }
                }*/
            }
        })   
        
        let currentBtn = document.getElementsByClassName('active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        let nextBtn = document.getElementsByClassName(btn);
        nextBtn[0].classList.add('active-btn');

        let elem = document.getElementsByClassName(sect);
        elem[0].classList.add('active');
    };

    //Sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;

        if(id){
            //hide other sections
            sections.forEach((section) =>{
                if(section.classList.contains('active')){                                        
                    section.classList.replace('active', 'remove');
                    section.addEventListener('animationend', function(){
                        section.classList.remove('remove');
                    })
                }
            })
            
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });    
}

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', (e)=>{
        let element = document.body;

        element.classList.toggle('light-mode');
});

function activateInfo(id){
    let infoPane = document.getElementById(id);

    infoPane.classList.add('active-pane');

    infoPane.addEventListener('click', function(){
        infoPane.classList.replace('active-pane', 'remove-pane');
        infoPane.addEventListener('animationend', function(){
            console.log("end");
            infoPane.classList.remove('remove-pane');
        });
        console.log('end of function');
    });
}

pageTransitions();