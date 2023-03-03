// Obtener el formulario y los elementos de entrada
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const startTimeSelect = document.getElementById("init");
const endTimeSelect = document.getElementById("finish");

// Obtener la lista de tareas
const taskList = document.querySelector("#tasks ul");

// Agregar una tarea a la lista
function addTask(name, startTime, endTime) {
  const li = document.createElement("li");
  const task = document.createTextNode(`${name} (${startTime} - ${endTime})`);
  li.appendChild(task);
  taskList.appendChild(li);
}

// Escuchar el envío del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const startTime = startTimeSelect.value
  const endTime = endTimeSelect.value
  if (startTime >= endTime) {
    alert("La hora de finalización debe ser posterior a la hora de inicio.");
  } else {
    addTask(name, startTime, endTime);
    nameInput.value = "";
    startTimeSelect.selectedIndex = 0;
    endTimeSelect.selectedIndex = 0;
  }
});
