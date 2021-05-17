const nameform = document.querySelector('.name_form'),
     nameInput = nameform.querySelector('input'),
     greetings = document.querySelector('.greetings');
 
const USER_LS = 'USERNAME',
    SHOWING_CN = 'showing';


function saveName (name) {
    localStorage.setItem(USER_LS, name);
}

function handlesubmit (e) {
    e.preventDefault();
    const currentValue  = nameInput.value;
    showGreeting(currentValue);
    // nameInput.value = ''; 
    saveName(currentValue);
    

}

function askForName () {
    nameform.classList.add(SHOWING_CN);
    nameform.addEventListener('submit', handlesubmit)
};

function showGreeting (name) {
    nameform.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello, ${name}!!`;
}


function loadName () {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser !== null) {
        // 유저가 있을 때
        showGreeting(currentUser);
    } else {
        // 유저가 없을 때
        askForName();
    }

}

(function init(){
    loadName();
})();