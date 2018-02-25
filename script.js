var sidebar = document.getElementById('sidebar'),
burgerShow = document.getElementById('burgerShow'),
burgerHide = document.getElementById('burgerHide'),
colSidebar = document.getElementById('col-sidebar'),
colContent = document.getElementById('col-content');

function sidebarShow() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
          sidebar.classList.remove('none');
        burgerShow.classList.add('none');
        burgerHide.classList.remove('none');
        colSidebar.classList.remove('col-sm-1');
        colSidebar.classList.add('col-sm-2');
        colContent.classList.remove('col-sm-11');
        colContent.classList.add('col-sm-10');
    
           // document.querySelector('#userLog').innerHTML = 'Hallo  ' + email;
        } else {
          // User is signed out.
          // ...
          document.querySelector('#userLog').innerHTML = 'Not login, please login';
        }
      });



    
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
        alert('Введите значение от 8 до 24')
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
function hideForm() {
    var btn = document.getElementById('formLogUp');
    var btnOff = document.getElementById('formLogIn');
    btn.setAttribute('class', 'none');
    btnOff.setAttribute('class', 'none');
}




window.onload = function() {
    document.querySelector('#chnglogIn').onclick = function() {
        var btn = document.getElementById('formLogIn');
        var btnOff = document.getElementById('formLogUp');
        btn.removeAttribute('class');
        btnOff.setAttribute('class', 'none');
    }
    document.querySelector('#chnglogUp').onclick = function() {
        var btn = document.getElementById('formLogUp');
        var btnOff = document.getElementById('formLogIn');
        btn.removeAttribute('class');
        btnOff.setAttribute('class', 'none');
    }
    document.querySelector('#hideAll').onclick = function() {hideForm();}
    document.querySelector('#logIn').onclick = function() {
            console.log('LogIn');
            var inpEmail = document.querySelector('input[name=email]').value;
            var inpPassword = document.querySelector('input[name=password]').value;
            console.log(inpEmail);
            console.log(inpPassword);
            logIn(inpEmail, inpPassword);
            hideForm();
    }
    document.querySelector('#logUp').onclick = function() {
        console.log('LogUp');
        var inpEmail = document.querySelector('input[name=emailLogUp]').value;
        var inpPassword1 = document.querySelector('#password1').value;
        var inpPassword2 = document.querySelector('#password2').value;
        console.log(inpEmail);
        console.log(inpPassword1);
        //logUp(inpEmail, inpPassword1);
        //hideForm();
        if (inpPassword1 = inpPassword2) {
            console.log('pass true');
            logUp(inpEmail, inpPassword1);
            hideForm();
        } else {
            console.log('NOT pass');
        }

    }
    document.querySelector('#chnglogOut').onclick = function() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            document.querySelector('#userLog').innerHTML = 'You not log in. ';
          }).catch(function(error) {
            // An error happened.
          });
    }
}

function logUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
    });
}


function logIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
    });
    
}



  

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      

        document.querySelector('#userLog').innerHTML = 'Hallo  ' + email;
    } else {
      // User is signed out.
      // ...
      document.querySelector('#userLog').innerHTML = 'You not log in. ';
    }
  });
  