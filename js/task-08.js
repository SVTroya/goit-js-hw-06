const refs = {
    form: document.querySelector('form.login-form')
}

refs.form.addEventListener('submit', validateForm)

function validateForm(ev) {
    ev.preventDefault()
    const formFields = ev.target.elements
    const email = formFields.email.value
    const password = formFields.password.value
    if (!email || !password) {
        showAlert()
        return
    }
    const formData = {}
    formData[formFields.email.name] = email
    formData[formFields.password.name] = password
    submitForm.bind(this)(formData)
}

function showAlert() {
    alert("All fields should be filed")
}

function submitForm(formData) {
    console.log(formData)
    this.reset()
}
