document.getElementById("whole").addEventListener('click', whole);

function whole(){
    alert("전체")
    var menu = document.getElementById("whole");

    for(var i = 0; i<menu.length; i++){
        menu[i].style.visible = "visible"; 
    }
}

document.getElementById("classic").addEventListener('click', classic);

function classic(){
    alert("ㅋㄽ")
    var menu = document.getElementById("classic");

    for(var i = 0; i<menu.length; i++){
        if( menu[i].id =="classic"){
            menu[i].style.visible = "visible"; 
        }
    }
}

document.getElementById("fresh").addEventListener('click', fresh);

function fresh(){
    var menu = document.getElementById("fresh");

    for(var i = 0; i<menu.length; i++){
        if( menu[i].id =="fresh"){
            menu[i].style.visible = "visible"; 
        }
    }
}

document.getElementById("premium").addEventListener('click', premium);

function premium(){
    var menu = document.getElementById("premium");

    for(var i = 0; i<menu.length; i++){
        if( menu[i].id =="premium"){
            menu[i].style.visible = "visible"; 
        }
    }
}