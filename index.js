// This code should set up all the basic variables which will be called later.
const notYetStartedColumn = document.getElementById('not-yet-started');
const inProgressColumn = document.getElementById('in-progress');
const completedColumn = document.getElementById('completed');
const modal = document.getElementById('modal');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const deadlineInput = document.getElementById('deadline');
const saveButton = document.querySelector('#modal button:first-of-type');
const cancelButton = document.querySelector('#modal button:last-of-type');
const addTaskButton = document.querySelector('#add-task');
const inProgressButton = document.querySelector('#in-progress-button');
const completedButton = document.querySelector('#completed-button');
// Creates the function to open the modal.
function openModal() {
    modal.style.display = 'block';
}

// Creates the function to close the modal...will be called upon below
function closeModal() {
    modal.style.display = 'none';
}

// Function to save the task
function saveTask() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const deadline = deadlineInput.value;

    // Create a new task section
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>${deadline}</p>
    `;

    // Add the new entry into the "Not Yet Started" column
    notYetStartedColumn.appendChild(taskElement);

    // This Code will clear the input areas after the task has been saved
    titleInput.value = '';
    descriptionInput.value = '';
    deadlineInput.value = '';

    // Closes the modal
    closeModal();
}

function moveTask() {
    //move the task listed in the not yet started column to the in progress column
    inProgressColumn.appendChild(notYetStartedColumn.lastElementChild);
}

function finishTask() {
    //move the task listed in the in progress column to the completed column
    completedColumn.appendChild(inProgressColumn.lastElementChild);
}
// Event listeners handling the click events for the buttons
addTaskButton.addEventListener('click', openModal);
cancelButton.addEventListener('click', closeModal);
saveButton.addEventListener('click', saveTask);
inProgressButton.addEventListener('click', moveTask);
completedButton.addEventListener('click', finishTask);

