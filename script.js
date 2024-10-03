let todos;


let listContainer = document.getElementById('list-container');

if(localStorage.getItem('todos')) {
  todos = JSON.parse(localStorage.getItem('todos'));
  displayTodos();
}
else todos=[];




function getTodo(event){
    let todo = document.getElementById('input').value;
     
    if(todo == '') {alert('enter your todo')
        return false

    };
    todos.push(todo);
    displayTodos();
    
    document.getElementById('input').value = '';
    event.preventDefault();

}
function removeTodo(index){
    todos.splice(index, 1);
    displayTodos();


}


function displayTodos(){
    listContainer.innerHTML ='';
    todos.map((todo, index)=>{
        let listItem = document.createElement('div');
        listItem.className = 'list-item';
        let item = document.createElement('p');
        item.textContent = todo
        
        let removeButton =document.createElement('button')
        removeButton.className='remove-button';
        removeButton.textContent='❌';
        removeButton.onclick=function(){
            removeTodo(index)
            
        }
        listItem.appendChild(item);
        listItem.appendChild(removeButton);
        listContainer.appendChild(listItem);
    
    })

    localStorage.setItem('todos',JSON.stringify(todos));

}

   

