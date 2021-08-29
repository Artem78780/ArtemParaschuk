function openMessage(){
    let display = document.querySelector('.text_click');
    let button = document.querySelector('.button').innerHTML;
        if(display == 'none'){
            document.querySelector('.text_click') = 'block';
            document.querySelector('.button').innerHTML = 'Закрити'
        } else{
            document.querySelector('.text_click') = 'none';
            document.querySelector('.button').innerHTML = 'Більше'
        }
}

