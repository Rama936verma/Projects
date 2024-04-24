document.getElementById('add-todo').addEventListener('click', function() {
	var newTodo = document.getElementById('new-todo').value;
	var newDueDate = document.getElementById('new-due-date').value;
	var newNotes = document.getElementById('new-notes').value;
	if (newTodo!== '') {
		var li = document.createElement('li');
		li.innerHTML = `
			<input type="checkbox">
			<label>${newTodo}</label>
			<input type="date" class="due-date" value="${newDueDate}">
			<textarea class="notes">${newNotes}</textarea>
		`;
		document.getElementById('todo-list').appendChild(li);
		document.getElementById('new-todo').value = '';
		document.getElementById('new-due-date').value = '';
		document.getElementById('new-notes').value = '';
	}
});