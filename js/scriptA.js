
'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const taskDB = {
        tasks: [
            
        ]
    };

    const 
        taskList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input');
        //checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newTask = addInput.value;
        //const favorite = checkbox.checked;

        if (newTask) {

            if (newTask.length > 21) {
                newTask = `${newTask.substring(0, 22)}...`;
            }


            taskDB.tasks.push(newTask);
            //sortArr(taskDB.tasks);
    
            createTaskList(taskDB.tasks, taskList);
        }

        event.target.reset();

    });


    const sortArr = (arr) => {
        arr.sort();
    };

    function createTaskList(tasks, parent) {
        parent.innerHTML = "";
        //sortArr(tasks);
    
        tasks.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                taskDB.tasks.splice(i, 1);

                createTaskList(tasks, parent);
            });
        });
    }

    createTaskList(taskDB.tasks, taskList);

});