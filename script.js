const header = document.getElementById('taskHeader');
const currentDateElement = document.getElementById('currentDate');

const currentDate = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);

currentDateElement.textContent = formattedDate;


function handleSubmit(event) {
    event.preventDefault();
    const task = document.getElementById("task").value;
    console.log(task);
    const toDo = document.getElementById("todo");
    // creating a div for each task
    const newTaskDiv = document.createElement("div");
    //Styling the div
    newTaskDiv.style.display = "flex";
    newTaskDiv.style.justifyContent = "center";
    newTaskDiv.style.alignItems = "center";
    newTaskDiv.style.paddingTop = "10px";
    newTaskDiv.style.paddingBottom = "10px";
    //creating a checkbox for each task
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'selectCheckbox';
    checkbox.id = 'checkbox';
    

    //creating a p for each task
    const paragraph = document.createElement('p');
    paragraph.style.marginRight = '10px';
    paragraph.style.marginLeft = '10px';
    paragraph.style.paddingTop = "10px";
    paragraph.style.paddingBottom = "10px";
    paragraph.innerText = task;
    newTaskDiv.appendChild(checkbox);
    newTaskDiv.appendChild(paragraph);
    toDo.appendChild(newTaskDiv);

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // Checkbox is checked
            console.log('Checkbox checked for:', task);
            const complete = document.getElementById('complete');
            paragraph.style.textDecoration = "line-through";
            complete.appendChild(paragraph)
            toDo.removeChild(newTaskDiv);
            if (toDo.innerHTML.trim() === '') {
                window.alert('Congratulations! You have successfully completed');
            } else {
                console.log('myDiv is not empty');
            }
            

            // You can add further actions here when the checkbox is checked
        } else {
            // Checkbox is unchecked
            console.log('Checkbox unchecked for:', task);
            // You can add further actions here when the checkbox is unchecked
        }
    });
    

        


    form.reset()
  

}
