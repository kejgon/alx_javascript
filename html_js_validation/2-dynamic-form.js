document.getElementById('dynamicForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form before submission
    if (!validateForm()) {
        return;
    }

    // Form submission logic here (e.g., AJAX request)
    console.log('Form submitted successfully!');
});

document.getElementById('numFields').addEventListener('change', function () {
    var numFields = parseInt(this.value);
    generateInputFields(numFields);
});

function generateInputFields(numFields) {
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear previous fields

    for (var i = 1; i <= numFields; i++) {
        var inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputField.placeholder = 'Field ' + i;
        inputContainer.appendChild(inputField);
    }
}

function validateForm() {
    var inputs = document.querySelectorAll('#inputContainer input');
    var errorElement = document.getElementById('error');

    // Reset error message
    errorElement.textContent = '';

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            errorElement.textContent = 'Please fill in all fields.';
            return false;
        }
    }

    return true;
}
