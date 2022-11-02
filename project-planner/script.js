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
    let tableJs = document.querySelector('#display-table tbody');
    let totalTask =[];
const sortFnction =(e) =>{
    switch(e.target.id){ 
        case 'name-sort':
            totalTask.sort((a,b) =>a.Name.localeCompare(b.Name))
            arraySorting(totalTask)
            break;  
        
        case 'day-sort':
            totalTask.sort((a,b) =>a.DueDays- b.DueDays)
            arraySorting(totalTask)
            break;

        case 'status-sort-select':
            let statusSort = document.getElementById('status-sort-select');
            let statusValue = statusSort.value;
            let statusTask = totalTask.filter(function(ele){
                    if(ele.Status == statusValue) 
                            return ele.Status
                
                    else if(statusValue==""){
                        return ele
                    }
                });
            arraySorting(statusTask)
            break;
        
        case 'taskCreate':
            let dateEnd = new Date( `${document.getElementById('taskDate').value}`);
            let due =  Math.ceil((dateEnd.getTime()-new Date().getTime())/(1000*60*60*24));

            let taskJs= {
                    Name         : document.getElementById('taskName').value,
                    Description  : document.getElementById('taskDescription').value,
                    Status       : document.getElementById('taskStatus').value,
                    Date         : document.getElementById('taskDate').value,
                    DueDays      : due,
                }
            totalTask.push(taskJs);
            totalTask.sort((a,b) =>a.DueDays- b.DueDays);
            arraySorting(totalTask);
            break;

        default:
            break;  
    
    }
    
}

const arraySorting = (a)=> {
    tableJs.innerHTML ="";
    a.forEach((taskJs)=>{
        let row = document.createElement('tr')
            for(var propt in taskJs){
                let column = document.createElement('td')
                column.innerHTML = taskJs[propt];
                row.appendChild(column)
            }
        tableJs.appendChild(row)
    })
}

document.body.addEventListener('click',sortFnction)
