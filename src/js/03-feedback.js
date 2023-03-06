import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const VALUE_KEY = 'feedback-form-state';
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
popularMessage();
const formData = {};
function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(VALUE_KEY, JSON.stringify(formData));
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
  const message = document.querySelector('.feedback-form textarea');
  const email = document.querySelector('.feedback-form input');
  if (saveMessage) {
    console.log(saveMessage);
    message.value = saveMessage.message;
    email.value = saveMessage.email;
  }
}
