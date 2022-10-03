let clearBtn = document.getElementById('clear');
let addBtn = document.getElementById('add');
let ul = document.querySelector('ul');
let text = document.getElementById('text');

clearBtn.addEventListener('click', ()=>{
 ul.innerHTML = '';
});

addBtn.addEventListener('click', ()=>{
    console.log(text.value);
 if (text.value) {
    let li = document.createElement('li');
    li.textContent = text.value;

    let btn = document.createElement('button');
    btn.textContent = 'x';
    btn.addEventListener('click', ()=>{
        ul.removeChild(li);
    });
    li.appendChild(btn);

    ul.appendChild(li);
    text.value = '';
 }
});