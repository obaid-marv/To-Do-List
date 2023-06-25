const todoitem = document.getElementsByClassName("todo-item")[0];
const input = document.getElementById("input");



input.addEventListener("keydown", function(event){
    
    if (event.key === "Enter"){
        addTask(input.value);
    }
})


function addTask(value){
    
    if(value==""){
        showAlert();
    }
    else{
        var divparent = document.createElement("div");
        var divchild = document.createElement("div");
        var check = document.createElement("i");
        var binicon = document.createElement("i");
        var editicon = document.createElement("i");
        var editok = document.createElement("i");
        

        divparent.className = "item"  ;
        divparent.innerHTML = '<div>'+value+'</div>';

        
        editok.className = "fas fa-check-double";
        editok.id = "newic";
        editok.style.color = "darkgray";
        
        editok.addEventListener('click',function(){
            var editable = divparent.querySelector('div:first-child');
            editable.setAttribute("contenteditable",false);
            var editokk = document.getElementById("newic");
            divchild.removeChild(editokk);
        })
        
        
        editicon.className = "fas fa-edit";
        editicon.style.color = "lightgrey";
        editicon.addEventListener("click", function(){
            var editable = divparent.querySelector('div:first-child')
            editable.setAttribute("contenteditable",true);
            editable.focus();
            divchild.append(editok);
            
        })
        
        divchild.append(editicon);
        check.className = "fas fa-check-circle";
        let isclicked = false;
        check.style.color = "lightgrey";
        check.addEventListener("click",function(){
            if(isclicked){            
                check.style.color = "lightgray";
            }
            else{
                check.style.color = "limegreen";
            }

            isclicked = !isclicked; 
        
        })
        divchild.appendChild(check);
        
        binicon.className = "fas fa-trash-alt";
        binicon.style.color = "darkgray";
        binicon.addEventListener("click", function(){
            divparent.remove();
        })

        divchild.appendChild(binicon);
        divparent.appendChild(divchild);
        todoitem.appendChild(divparent);
        input.value ='';

    }    
}
 
function showAlert() {
    var overlay = document.getElementById("overlay");
    var buttoncon = document.getElementById("buttoncontainer");
    var alertMessage = document.getElementById("message");
    alertMessage.textContent = "Task cannot be empty!.";
  
    overlay.style.display = "block";
    buttoncon.style.display = "block";
}

function hideAlert() {
    var overlay = document.getElementById("overlay");
    var buttoncon = document.getElementById("buttoncontainer");
    overlay.style.display = "none";
    buttoncon.style.display = "none";
}
  
