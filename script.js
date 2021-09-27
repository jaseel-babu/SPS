function video(){
    document.getElementById("thumbnail").style.display="none";
    document.getElementById("video").style.display="block";

    
}
function video2(){
    document.getElementById("thambunail2").style.display="none";
    document.getElementById("video2").style.display="block";
    
}
function video3(){
    document.getElementById("thumbnail3").style.display="none"
    document.getElementById("video3").style.display="block"

}
function video4(){
    document.getElementById("thumbnail4").style.display="none";
    document.getElementById("video4").style.display="block"
}
function video5(){
    document.getElementById("thumbnail5").style.display="none";
    document.getElementById("video5").style.display="block"
}
const toTop= document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset >100){
        toTop.classList.add("active");

    }else{
        toTop.classList.remove("active");
    }

})