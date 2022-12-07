let bildindex=1;
visaBild(bildindex)

//tillbaka/nästa knappar
function visaBildPlus(n){
    visaBild(bildindex += n)
}

function aktuellBild(n){
    visaBild(bildindex = n)
}

async function autobyt(){
    while (true) {
        bildindex += 1
        visaBild(bildindex)
        await sleepPromise(4000).then()
    }
}

function sleepPromise(time) {
    return new Promise(resolve => setTimeout(resolve, time))
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
        bild[i].classList.add("gömd")
    }
    for(let i = 0; i < punkter.length; i++ ){
        punkter[i].className = punkter[i].className.replace("active","")
    }
    bild[bildindex-1].classList.remove("gömd")
    punkter[bildindex-1].classList.add("active")

}

autobyt().then()