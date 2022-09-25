let bildindex=1;
visaBild(bildindex)

//tillbaka/nästa knappar
function visaBildPlus(n){
    visaBild(bildindex += n)
}

function aktuellBild(n){
    visaBild(bildindex = n)
}

function visaBild(n){
    const bild = document.getElementsByClassName("bildspel")
    const punkter = document.getElementsByClassName("punkt")
    if(n > bild.length){
        bildindex = 1
    }
    if (n < 1){
       bildindex = bild.length
    }
    for(let i = 0; i< bild.length; i++){
        bild[i].style.display = "none"
    }
    for(let i = 0; i < punkter.length; i++ ){
        punkter[i].className = punkter[i].className.replace("active","")
    }
    bild[bildindex-1].style.display = "block"
    punkter[bildindex-1].classList.add("active")
}