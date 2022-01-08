const inputTaskText = document.getElementById("inputTaskText");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
var cnt = 0;


var setNewTaskLabel = (newTaskElement)=>{
    const taskDetails = inputTaskText.value;
    const newTaskLabel = document.createElement("label");
    newTaskLabel.innerText = taskDetails;
    newTaskLabel.className = "taskLabel";
    newTaskElement.appendChild(newTaskLabel);
}


var setNewTaskButton = (newTaskElement)=>{
    const doneButton = document.createElement("button");
    doneButton.innerText = "Mark as Done";
    doneButton.className = "doneButton";
    newTaskElement.appendChild(doneButton);
}



function markAsDoneHandler(){
    const taskElement = this.parentElement;
    const taskList = taskElement.parentNode;
    taskList.removeChild(taskElement);
    cnt--;
    
    for(let i=0;i<cnt;i++){
        let val = i+1;
        taskList.childNodes[i].querySelector('.numCount').innerText = `> ${val}`;
    }
    
}

var setDoneButtonOnClick = (newTaskElement)=>{
    const doneButton = newTaskElement.querySelector(".doneButton");
    doneButton.onclick = markAsDoneHandler;
}

var resetNewTaskInput = ()=>{
    inputTaskText.value = "";
}


function setNumLabel(newTaskElement){
    const numNode = document.createElement("label");
    numNode.className = "numCount";
   
    cnt++;
    numNode.innerText = `>${cnt}`;
    newTaskElement.appendChild(numNode);
}

var populateNewTaskElement = (newTaskElement)=>{
    setNumLabel(newTaskElement);
    setNewTaskLabel(newTaskElement);
    setNewTaskButton(newTaskElement);
    setDoneButtonOnClick(newTaskElement);
}

var createNewTaskHandler = ()=>{
    if(inputTaskText.value==="") return;
    const newTaskElement = document.createElement("li");
    populateNewTaskElement(newTaskElement);

    taskList.appendChild(newTaskElement);
    resetNewTaskInput();
}

addTaskButton.addEventListener("click",createNewTaskHandler);

document.addEventListener("keypress", (event)=>{
    if(event.code!=="Enter") return;
    createNewTaskHandler();
});
















