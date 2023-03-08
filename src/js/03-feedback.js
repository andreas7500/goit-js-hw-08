import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const VALUE_KEY = 'feedback-form-state';
const textInput = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
popularMessage();

function onFormData(e) {
  e.preventDefault();
  // const formData = form.elements;
  // const email = formData.email.value;
  // const message = formData.message.value;
  // const toSave = { email, message };
  const { email, message } = form.elements;
  dataForm = { email: email.value, message: message.value };

  localStorage.setItem(VALUE_KEY, JSON.stringify(dataForm));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem(VALUE_KEY)));
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill the fields!');
  }
  e.currentTarget.reset();
  localStorage.removeItem(VALUE_KEY);
}

function popularMessage() {
  const saveMessage = JSON.parse(localStorage.getItem(VALUE_KEY));

  if (saveMessage) {
    console.log(saveMessage);
    textInput.value = saveMessage.message;
    emailInput.value = saveMessage.email;
  }
}
