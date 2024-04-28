const form = document.querySelector('.feedback-form')
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea[name="message"]');


let formData = {
  email: "",
  message: ""
};

form.addEventListener('input', (event) => {
    event.preventDefault();

    formData.email = emailInput.value.trim()
    formData.message = messageInput.value.trim()

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else if (!formData.email && !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
        formData = { email: "", message: "", };
    }
})

const isSavedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (isSavedData) {
    emailInput.value = isSavedData.email;
    messageInput.value = isSavedData.message;
    formData = isSavedData;
}