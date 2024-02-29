(function(){
    const sliders           = [...document.querySelectorAll('.slider_body')];
    const arrowAdelante     = document.querySelector('#adelante');
    const arrowAtras        = document.querySelector('#atras');
    let value;

    arrowAdelante.addEventListener('click', ()=>changePosition(+1));
    arrowAtras.addEventListener('click', ()=>changePosition(-1));

    //-----------------------------------------------------------------------
    function changePosition(change){
        const currentEelement = Number (document.querySelector('.slider_body_show').dataset.id);

        value = currentEelement;
        value+= change;

        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length: 1;
        }
        sliders[currentEelement-1].classList.toggle('slider_body_show');
        sliders[value-1].classList.toggle('slider_body_show');
    }
})();
