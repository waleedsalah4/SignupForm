const email = document.getElementById('email');
const password = document.getElementById('password');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const gender = document.getElementById('gender');

const form = document.querySelector('#form');
const form_wrapper = document.querySelector('.form_wrapper');

function getValues () {
    const data = {
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        gender: gender.value,
    }

    fetchData(data)
}

const FIREBASE_DOMAIN = '';

 const fetchData = async(data) =>  {
    const response = await fetch(`${FIREBASE_DOMAIN}/formData.json`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await response.json();
  
    if (!response.ok) {
      throw new Error(res.message || 'Could not send data.');
    } else {
        form.reset();
        clearForm();
        renderItem();
    }
  
  }

  function clearForm () {
    form_wrapper.innerHTML = '';
  }

  function renderItem () {
    const markup = `
      <div class="centered__div">
        <h2>your data submitted successfully</h2>
        <button type="button" onClick="window.location.reload();" class="back__btn">Back</button>
      </div>
    `;
    form_wrapper.innerHTML = markup;
  }


form.addEventListener('submit' ,(e) => {
    e.preventDefault()
    getValues()
})
