let menu  = ["rau xào", "thịt luộc" , "gà rán"]
localStorage.setItem(1,menu)
input = prompt("nhap vo C R U D")

if (input === 'C'){
    menu.push(
        food1 = prompt('nhap do an muon push')
    )
localStorage.setItem(1,menu + food1)
}
else if(input === 'R'){
    alert('Danh sach mon an' + menu);
}
else if(input === 'U'){
    let vitriMonAnThayThe = menu.indexOf(
        food2 = prompt('moi nguoi dung nhap vao ten mon an muon thay the')
    )
localStorage.removeItem(food2)
    if (vitriMonAnThayThe < 0){
        alert('ko co')
    }
    menu[vitriMonAnThayThe] = prompt('thay the food')
localStorage.setItem(1,menu[vitriMonAnThayThe])
}
else if(input === 'D'){
    let remove = menu.indexOf(
        prompt('delete fod')
    );
    if (remove < 0){
        alert('KO ton Tai')
    }
    localStorage.setItem(1, menu - remove )
}
else {
    alert('ok')
}