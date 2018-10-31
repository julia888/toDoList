const Tasks = document.querySelector('ul');

Tasks.addEventListener('click', doneTask);

function doneTask(event) {
    const tar = event.target;
   // alert(tar.tagName);
    if (tar.tagName === 'LI') {
        // tar.classList.add('done');
        tar.classList.toggle('done');
    }
}

function addField() {
    let getText =  document.getElementById('textField').value;
    let errorMessage =  document.getElementById('error');

    let li = document.createElement('li');
    let text = document.createTextNode( getText);
    let ul = document.getElementById('tasks');

    if (getText === ''){
        errorMessage.innerHTML = 'Something is wrong';
    } else{
        errorMessage.innerHTML = '';
        li.appendChild(text);
        ul.appendChild(li);
        document.getElementById('textField').value = '';

        let btn = document.createElement('BUTTON');
        let t = document.createTextNode('\u00D7');
        btn.appendChild(t);
        li.appendChild(btn);
        btn.className = 'shutBtn';
        let popup = document.getElementById('popUp');
        popup.style.display = 'none';
    }
}

const btn = document.querySelector('ul');
btn.addEventListener('click', deleteField);
function deleteField(event) {
    const tar = event.target;
    if (tar.tagName === 'BUTTON') {
        const tarLi = tar.parentNode;
        tarLi.classList.toggle('hideField');
    }
}

function callPopUp() {
    let popup = document.getElementById('popUp');
    popup.style.display = 'block';
}





