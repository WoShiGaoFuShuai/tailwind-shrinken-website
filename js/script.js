const hamburger = document.getElementById('menu-btn');
const mobMenu = document.getElementById('mob-menu');

hamburger.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  hamburger.classList.toggle('open');
  mobMenu.classList.toggle('hidden');
}

// LINKS VALIDATION

const linkValue = document.getElementById('linkValue');
const form = document.getElementById('form');
const error = document.getElementById('error');

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const result = linkValue.value;
  if (result.trim() === '') {
    showErrorMsg('Please enter something');

    linkValue.value = '';
  } else if (!validURL(linkValue.value)) {
    showErrorMsg('Please enter a valid URL');
  } else {
    error.classList.remove('open');
    error.classList.add('hidden');
    linkValue.classList.remove('border-4', 'border-red');
    alert('Success');
  }
}

function showErrorMsg(str) {
  error.textContent = str;
  error.classList.remove('hidden');
  error.classList.add('open');
  linkValue.classList.add('border-4', 'border-red');
  linkValue.focus();
}
