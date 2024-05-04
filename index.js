// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {if (!taskId){ taskID = 0 ;}

}
$(task).sample('id', taskID);
taskID++;
localStorage.setItem('taskID', JSON.stringify(taskID));

// Todo: create a function to create a task card
function createTaskCard(taskID) {}
    function createTaskCard(taskID) {
     
    let checkclass = function(task) {
        let checkclass;
        const Time = dayjs(task.dueDate).diff(dayjs(), 'day') + 1;
        if (task.todoStatus == 'done-cards') {
           
            return;
        } else if (Time > 3) {
            checkclass= "text-black bg-primary"
        } else if (Time > 0) {
           checkclass = "text-white bg-warning"
        } else {
           checkclass = "text-white bg-danger"
        }
        return checkclass;
    }
    
    // Render the task list
 
        $('.form-control').val('');
        generateTaskId(task);
        createTaskCard(task);
        if (!taskList) {
            taskList = [];
        }
        $( ".todo-card" ).draggable({
            revert: "invalid",
            connectToSortable: "#todo-cards, #in-progress-cards, #done-cards"
        });
        taskList.push(task);
        localStorage.setItem("tasks", JSON.stringify(taskList));
    }
    
    //!!! Todo: create a function to handle deleting a task
    function handleDeleteTask(event){
    
        const delId = $(this).parent().parent().attr('id');
        $(`#${delId}`).remove();
        taskList = taskList.filter((task) => task.id != delId);
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }
    
    //!!! Todo: create a function to handle dropping a task into a new status lane
    function handleDrop(event, ui) {}
    
        const currentStatus = this.id;
        const cardTask = ui.draggable[0];
        for (task of taskList) {
            if (task.id == cardTask.id) {
                task.todoStatus = currentStatus;
                urgencyClasses = checkclass(task);
                $(cardTask).removeClass('text-black bg-danger bg-warning bg-primary');
                $(cardTask).addClass(checkclassClasses);
            }
        }
        localStorage.setItem('tasks', JSON.stringify(taskList));
   