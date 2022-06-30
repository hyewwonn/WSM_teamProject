document.getElementById("btnreset").addEventListener('click', uncheck);

function uncheck(){
    document.getElementById("checkbox").checked = false;
}

document.getElementById("btnsave").addEventListener('click', save);

function save(){
    if(frm.bread.value == ""){
        alert("빵을 선택해 주세요.")
        return false;
    }
    else {
        alert("저장되었습니다.");
        return true;
    }
}