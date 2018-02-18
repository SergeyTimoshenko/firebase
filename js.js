var sidebar = document.getElementById('sidebar'),
burgerShow = document.getElementById('burgerShow'),
burgerHide = document.getElementById('burgerHide'),
colSidebar = document.getElementById('col-sidebar'),
colContent = document.getElementById('col-content');

function sidebarShow() {
    sidebar.classList.remove('none');
    burgerShow.classList.add('none');
    burgerHide.classList.remove('none');
    colSidebar.classList.remove('col-sm-1');
    colSidebar.classList.add('col-sm-2');
    colContent.classList.remove('col-sm-11');
    colContent.classList.add('col-sm-10');
}
function sidebarHide() {
    sidebar.classList.add('none');
    burgerShow.classList.remove('none');
    burgerHide.classList.add('none');
    colSidebar.classList.remove('col-sm-2');
    colSidebar.classList.add('col-sm-1');
    colContent.classList.remove('col-sm-10');
    colContent.classList.add('col-sm-11');
}

function fontSize() {
    var pSize = document.getElementById('p-size').value, l;
    l = pSize + 'px';
    if (7 < pSize && pSize < 25) {
        var pElem = document.getElementsByTagName('p');
        for (var i = 0; i <= pElem.length; i++) {
           pElem[i].style.fontSize = l;
        }
    } else {
        alert('¬ведите значение от 8 до 24')
    }
}
function colorCard() {
    var inputColor = document.getElementsByTagName('article'),
    color = document.getElementById('color-input').value;
    for (var i = 0; i <= inputColor.length; i++){
        inputColor[i].style.backgroundColor = color;
    }
}
function fontDefault() {
    var fElem = document.getElementsByTagName('article'),
    defCheck =  document.getElementById('exampleRadios1');
    if (defCheck.checked) {
        for (var i = 0; i <= fElem.length; i++) {
            fElem[i].style.fontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
        }
    }
}
function fontComic() {
    
    var fElem = document.getElementsByTagName('article'),
    defCheck =  document.getElementById('font-comic');
    if (defCheck.checked) {
        for (var i = 0; i <= fElem.length; i++) {
            fElem[i].style.fontFamily = 'Comic Sans MS';
        }
    }
}
function fontImpact() {
    
    var fElem = document.getElementsByTagName('article'),
    defCheck =  document.getElementById('font-impact');
    if (defCheck.checked) {
        for (var i = 0; i <= fElem.length; i++) {
            fElem[i].style.fontFamily = 'Impact';
        }
    }
}
function deleteCard() {
    var cards = document.getElementsByClassName('col-sm-6'),
    lengthElem, el;
    lengthElem = cards.length - 1;
    el = cards[lengthElem];
    el.parentNode.removeChild(el);
}