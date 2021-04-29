const todoForm=document.querySelector('#addTodo');
const todoInput=document.querySelector('#todos');
const list=document.querySelector('ul');
const addButton=document.querySelector('#submit');

const delForm=document.querySelector('#delTodo');
const delInput=document.querySelector('#deleteItem');
const delButton=document.querySelector('#delete');

const editForm=document.querySelector('#editTodo');
const editInput=document.querySelector('#editItem');
const editIndex=document.querySelector('#index');

editForm.addEventListener('submit',function(e){

    e.preventDefault();
    let n=parseInt(editIndex.value);
    if(!n){
        alert('Please give a valid index of Todo list!!');
        editIndex.value='';
    }
    else{
        editTodo(editInput.value,parseInt(editIndex.value));
        editIndex.value='';
        editInput.value='';
    }
})

const resetList=document.querySelector('#reset');

delForm.addEventListener('submit',function(e){

    e.preventDefault();
    let n=parseInt(delInput.value);
    if(!n){
        alert('Please give a valid index of Todo list!!');
        delInput.value='';
    }
    else{
        delTodo(parseInt(delInput.value));
        delInput.value='';
    }

})

todoForm.addEventListener('submit',function(e){
    
    e.preventDefault();
    addTodo(todoInput.value);
    todoInput.value='';
})

resetList.addEventListener('click', function(){

    reset();
    todoInput.value='';
    delInput.value='';
})

function addTodo(todo){

    const listItem=document.createElement('li');
    listItem.append(todoInput.value);
    list.append(listItem);
}

function delTodo(value){

        const lists=document.querySelectorAll('li');
        lists[value-1].remove();
}

function editTodo(text,index){

    const lists=document.querySelectorAll('li');
    lists[index-1].innerText=text;
}

function reset(){

    const lists=document.querySelectorAll('li');
    for(let item of lists){

        item.remove();
    }
}