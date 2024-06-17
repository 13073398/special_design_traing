
//******************************* setting code**************************************************************************** */
// close&&open setting Box
let gear_sitting_box=document.querySelector(".gear_box i");
let setting_Box=document.querySelector(".setting_Box");

gear_sitting_box.onclick=function(){
    if(setting_Box.classList.contains("open")){
        setting_Box.classList.remove("open")
        gear_sitting_box.classList.remove("fa-spin")
    }else{
        setting_Box.classList.add("open")
        gear_sitting_box.classList.add("fa-spin")
    }
   
}
//Box_color_code
let option_Box=document.querySelectorAll(".color_setting_box span");
if(window.localStorage.getItem("color")!==null){
    document.body.style.setProperty("--mainColor",window.localStorage.getItem("color"))
    option_Box.forEach((ele)=>{
        ele.classList.remove("active")
    })
    document.querySelector(`[data-color='${window.localStorage.getItem("color")}']`).classList.add("active")
    
}
option_Box.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        option_Box.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        document.body.style.setProperty("--mainColor",e.currentTarget.dataset.color)
        window.localStorage.setItem("color",e.currentTarget.dataset.color)

    })
})

//Randomize_box_code
let Randomize_button=document.querySelectorAll(".Randomize_box button");
Randomize_button.forEach((ele)=>{
    ele.classList.remove("active")
})
if(window.localStorage.getItem("randomize")!==null){
   
    
    Randomize_button.forEach((ele)=>{
        ele.classList.remove("active")
       
    })
   
    document.querySelector(`[data-show='${window.localStorage.getItem("randomize")}']`).classList.add("active")
  
    
    
}
Randomize_button.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        Randomize_button.forEach((ele)=>{
            ele.classList.remove("active")
        })
        location.reload()
        e.currentTarget.classList.add("active")
       mohamed= window.localStorage.setItem("randomize",e.currentTarget.dataset.show);
     
    
     
        
    })
})


//Navigator_code

let Button_navigator=document.querySelectorAll(".setting_Box .Navigator_box button");
let nav_circle=document.querySelector(".navigation");
Button_navigator.forEach((ele)=>{
    ele.classList.remove("active")
})
if(window.localStorage.getItem("nav_circle")==='yes'){
    document.querySelector(`[data-circ="yes"]`).classList.add("active")
    nav_circle.classList.add("show")
   
}else{
    document.querySelector(`[data-circ="no"]`).classList.add("active")
}


Button_navigator.forEach((nav)=>{
    nav.addEventListener("click",(e)=>{
        Button_navigator.forEach((nav)=>{
            nav.classList.remove("active")
        })
        e.target.classList.add("active")
        window.localStorage.setItem("nav_circle",e.target.dataset.circ);
      
            if(window.localStorage.getItem("nav_circle")==='yes'){
                nav_circle.classList.add("show")
            }else{
                nav_circle.classList.remove("show")
            }
        
        
        
    })
})
 
//******************************* landPage images code**************************************************************************** */
let image_arry=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];
let landing_page_image=document.querySelector(".landing_page .container");
let counter=1

function RandoMize(){
    for(let i=counter;i<=image_arry.length;i++){
        landing_page_image.style.backgroundImage='url("..//imgs//'+image_arry[i] +'")';
       
        counter+=1;
        if(counter===5){
            counter=0;
        }
        break;

    }
} 

if(document.querySelector(`[data-show='yes']`).classList.contains("active")){
  
    setInterval(RandoMize,10000);
    
}else{
    clearInterval(setInterval(RandoMize,10000))
   
}

//******************************* Our Skills code**************************************************************************** */
let our_skills_section=document.querySelector(".our_Skills");

let prog_Bar=document.querySelectorAll(".our_Skills .container .bars .bar .static .percentage");


window.onscroll=function(){
    
let our_skills_section_offset=our_skills_section.offsetTop;
let our_skills_section_height=our_skills_section.offsetHeight;
let windowscrollheight=this.innerHeight;
let windowscrollheightY=this.pageYOffset

    if(windowscrollheightY>(our_skills_section_offset+our_skills_section_height-windowscrollheightY)){
        
        prog_Bar.forEach((ele)=>{
            ele.style.width=ele.dataset.prog
           
        })
       
       
    }
}

//******************************* Gallery code**************************************************************************** */
let image=document.querySelectorAll(".gallery img");
let gallary_area=document.querySelector(".gallery");
let image_cover=document.querySelector(".image_cover")
let image_box=document.createElement("div")
let image_exit=document.createElement("h2");
image_exit.textContent=("X");
image_box.append(image_exit)
image_box.className="box";
let image_box_content=document.createElement("img")
image_box_content.className="content"

image.forEach((img)=>{
    img.addEventListener("click",(e)=>{
    if(e.target){
       image_cover.classList.add("show")
       image_box_content.src=e.target.src;
       image_box.appendChild(image_box_content);
       image_cover.append(image_box)
    }
    })
})
image_exit.addEventListener("click",(exit)=>{
   image_box.remove()
   image_cover.classList.remove("show")
})
//******************************* Navigator code**************************************************************************** */
let nav_option=document.querySelectorAll(".navigation span");
nav_option.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
       
      document.querySelector(`.${e.currentTarget.dataset.section}`).scrollIntoView({
        behavior:"smooth"
    });
    console.log( typeof e.target.dataset.section)
   
   
    })
})
//******************************* Resrt Button**************************************************************************** */
let reset_button=document.querySelector(".reset");
reset_button.onclick=function(){
    localStorage.clear();
    window.location.reload()
}


