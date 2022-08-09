document.getElementById('nav-toggler').addEventListener('click', togglenav);



document.getElementById('copybtn').addEventListener('click', copyText);



function togglenav() {
    nav.classList.toggle('mobnav');
}

let ele = document.getElementById("element");
let result = document.getElementById("op");
let tweaks = document.querySelectorAll('.tweaks input');



tweaks.forEach(tweak => tweak.addEventListener('input', createShadow));



function createShadow() {
    let hShadow = document.getElementById('h-shadow').value;
    let vShadow = document.getElementById('v-shadow').value;
    let blurRad = document.getElementById('blur-rad').value;
    let spreadRad = document.getElementById('spread-rad').value;
    let hex = document.getElementById('color').value
    let opacity = document.getElementById('opacity').value;
    let inset = document.getElementById('inset').checked;

    //showing values of slider inputs
    let hVal = document.getElementById('h-val');
    let vVal = document.getElementById('v-val');
    let bVal = document.getElementById('b-val');
    let sVal = document.getElementById('s-val');
    let oVal = document.getElementById('o-val');

    hVal.innerText = hShadow;
    vVal.innerText = vShadow;
    bVal.innerText = blurRad;
    sVal.innerText = spreadRad;
    oVal.innerText = opacity;


    // checking if inset is on or off to create shadow
    let boxShadow = inset ? `inset ${hShadow}px ${vShadow}px ${blurRad}px ${spreadRad}px ${hexToRGBA(hex, opacity)}` : `${hShadow}px ${vShadow}px ${blurRad}px ${spreadRad}px ${hexToRGBA(hex, opacity)}`;
    ele.style.boxShadow = boxShadow;

    result.innerText = `box-shadow: ${boxShadow};`


}


function hexToRGBA(hex, opacity) {
    let r = parseInt(hex.substr(1, 2), 16);
    let g = parseInt(hex.substr(3, 2), 16);
    let b = parseInt(hex.substr(5, 2), 16);
    return `rgba(${r},${g},${b},${opacity})`
}


let copybtn = document.getElementById("copybtn")
function copyText() {
    
    setTimeout(function(){copybtn.innerText = 'Copied'}, 000);

    var txt = document.getElementById("op");

    txt.select();
    txt.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(txt.value);

    setTimeout(function () {
        copybtn.innerHTML = "Copy"
    }, 3000);


}