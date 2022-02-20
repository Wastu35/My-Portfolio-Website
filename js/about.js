window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})



var typed = new Typed(".typing", {
    strings: ["YouTuber", "Web Developer", "Blogger", "Web Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

    const nav=document.querySelector(".nav"),
          navList=nav.querySelectorAll("li"),
          totalNavList=navList.length,
          allSection=document.querySelectorAll(".section"),
          totalSection=allSection.length;


    const navTogglerBtn=document.querySelector(".nav-toggler"),
          aside=document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)
    
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
             allSection[i].classList.toggle("open");
         }
    }
