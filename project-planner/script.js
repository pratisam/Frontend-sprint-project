// mainArticleJs.insertAdjacentHTML('beforeend',articleEach.outerHTML )
//forEach using Values
    // Object.values(taskJs).forEach(val => {
    //     console.log(val);
    //   });
//forEach using key
    // Object.keys(taskJs).forEach(key =>
// Allow users to sort their tasks by remainining time, with the most urgent first, or by name.

// BONUS: Save tasks in LocalStorage, so that they persist even when the page is refreshed.

    let createTaskJs = document.getElementById('taskCreate');
// get the element to display the task
    let tableJs = document.getElementById('display-table');
    let totalTask =[];
//onClick function
const createTaskFunction = () =>{
    tableJs.innerHTML ="";
// Display the tasks, with their remaining time. For instance, if today is the 15th of March and the task is due for the 20th of March, display in 5 days.
    let dateEnd = new Date( `${document.getElementById('taskDate').value}`)
    let due =  Math.ceil((dateEnd.getTime()-new Date().getTime())/(1000*60*60*24))
//get the element from the task
    var taskJs= {
            Name         : document.getElementById('taskName').value,
            Description  : document.getElementById('taskDescription').value,
            Status       : document.getElementById('taskStatus').value,
            Date         : document.getElementById('taskDate').value,
            DueDays      : due,
        }
    totalTask.push(taskJs)
    totalTask.sort((a,b) =>a.DueDays- b.DueDays)

//create the element to display the task

    // let articleEach = document.createElement('article');
    // articleEach.classList.add('articleEach')
    totalTask.forEach((taskJs)=>{
    let row = document.createElement('tr')
        for(var propt in taskJs){
            let column = document.createElement('td')
            column.innerHTML = taskJs[propt];
            row.appendChild(column)
        }
    tableJs.appendChild(row)
       
    })
   
}
createTaskJs.addEventListener('click',createTaskFunction)

// Filter tasks (ex: only show "to do" tasks)

