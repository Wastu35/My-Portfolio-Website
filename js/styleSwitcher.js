const bodySkin=document.querySelectorAll(".body-skin"),
      totalBodySkin=bodySkin.length;
   
const links=document.querySelectorAll(".alternate-style"),
      totalLinks=links.length;

if(localStorage.getItem('mode')==null){
    localStorage.setItem('mode',0);
}else{
    if(localStorage.getItem('mode')==1){
            document.getElementById('dark').checked = true;
                document.body.className="dark";
    } 
}

if(localStorage.getItem('color')==null){
    localStorage.setItem('color',1);
}else{
    if(localStorage.getItem('color')==2){
            setActiveStyle1("yellow");
           
    }else if(localStorage.getItem('color')==3){
            setActiveStyle1("orange");
           
    }else if(localStorage.getItem('color')==4){
            setActiveStyle1("blue");
    }else if(localStorage.getItem('color')==5){
            setActiveStyle1("red");
    }
}



function setActiveStyle(color){
    
    if(color=="green"){
        localStorage.setItem('color',1);
        
    }else if(color=="yellow"){
        localStorage.setItem('color',2);
    }else if(color=="orange"){
        localStorage.setItem('color',3);
    }else if(color=="blue"){
        localStorage.setItem('color',4);
    }else if(color=="red"){
        localStorage.setItem('color',5);
    }
    
    for(let i=0; i<totalLinks; i++){
        if(color === links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}



function setActiveStyle1(color){
    for(let i=0; i<totalLinks; i++){
        if(color === links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}


//body skin
//const bodySkin=document.querySelectorAll(".body-skin"),
//      totalBodySkin=bodySkin.length;
    for (let i=0; i<totalBodySkin; i++){
        bodySkin[i].addEventListener("change", function(){
            if(this.value === "dark"){
                document.body.className="dark";
                localStorage.setItem('mode',1);  
            }
            else{
                document.body.className="";
                localStorage.setItem('mode',0);
            }

        })
    }




document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})