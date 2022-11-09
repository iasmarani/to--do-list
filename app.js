let taskItem = document.querySelector('#task');
let addBtn = document.querySelector('.add-button');
let taskList = document.querySelector('.tasks-list')
let deleteBtn = document.querySelectorAll('.delete');
let filter = document.querySelector('#filter');

//Add task
addBtn.addEventListener('click', addItem);
function addItem(e){
    e.preventDefault();
// create list
let addedItem = document.createElement('li');

// store input
let taskValue = taskItem.value;

// append input value to the list
addedItem.textContent = taskValue;

// create delete button
const deleteBtn = document.createElement('span');
deleteBtn.textContent = 'X';
deleteBtn.className = 'delete';


//append delete button to the list
addedItem.appendChild(deleteBtn);

//append list item to the ul
taskList.appendChild(addedItem);
taskItem.value = '';
}

//Delete task item
taskList.addEventListener('click',function(e){
   if(e.target.classList.contains('delete')){
    if(confirm('Do you want to delete it?')){
        let selectedTask = e.target.parentElement;
        taskList.removeChild(selectedTask)
    }
   }
})

// filter items
filter.addEventListener('keyup', function(e){
    //get search input value
 let inputText = e.target.value.toLowerCase();

 //get items from ul
let items = taskList.getElementsByTagName('li');

//convert items to array
Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
     if(itemName.toLowerCase().indexOf(inputText) != -1 ){
        item.style.display = 'block';
     }else{
        item.style.display = 'none';
     }
})
})