const inputField = document.getElementById('input');
const addButton = document.getElementById('add');
const clearAllButton = document.getElementById('clearAll');
const list = document.getElementById('list');

const addItem = () => {
	const li = document.createElement('li');
	const doneButton = document.createElement('button');
	const deleteButton = document.createElement('button');

	const createElements = () => {
		doneButton.textContent = 'Done';
		deleteButton.textContent = 'Delete';
		doneButton.setAttribute('class', 'doneButtonStyle');
		deleteButton.setAttribute('class', 'doneButtonStyle')
		li.appendChild(doneButton);
		li.appendChild(deleteButton);
		list.appendChild(li);
		deleteButton.addEventListener('click', () => {
			list.removeChild(li)
		});
	}

	if (inputField.value === undefined || inputField.value === '') {
		inputField.value = '';
	} else {
		li.innerText = inputField.value;
		createElements();
		inputField.value = '';
	}

	doneButton.addEventListener('click', () => {
		li.classList.toggle("done");
	});
}
addButton.addEventListener('click', addItem);