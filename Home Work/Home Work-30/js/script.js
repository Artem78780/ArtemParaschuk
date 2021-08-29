let button = document.querySelector('.button');

function showAudit(){
    let phone = document.querySelector('.phone').value;
    let button = document.querySelector('.button');
    let out = document.querySelector('.out')
    out.innerHTML = '';

       
        try{
            if(isNaN(phone) ) throw 'Введіть число';
            if(phone == '') throw 'Поле пусте';
            if(phone.length < 13) throw 'Короткий номер';
            if(phone.length > 13) throw 'Довгий номер';
        }
        catch(err){
            out.innerHTML = err;
        }
}
button.onclick = showAudit;