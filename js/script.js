const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const sampleEmail = document.querySelector(".sample-email")

let statusInputError = {}

function CheckForm() {        
    let rgx = /\S+@\S+\.\S+/;
    let resRgx = rgx.test(email.value) 
    if (!firstName.value) {
        statusInputError.firstName = {
            msg: '*First Name cannot be empty'
        }
    }
    if (!lastName.value) {
        statusInputError.lastName = {
            msg: '*Last Name cannot be empty'
        }        
    }
    if(!resRgx){
        statusInputError.email = {
            msg: '*Looks like this is not an email'
        } 
    }
    if (!password.value) {
        statusInputError.password = {
            msg: '*Password cannot be empty'
        }        
    }
}

function ShowingError(itemForm, itemElem) {
    let elemParentInput = itemElem.parentElement;
    let elemShowError = itemElem.nextElementSibling;
    let iconError = elemParentInput.children[2]
    console.log(itemForm);
    if (statusInputError.hasOwnProperty(itemForm)) {
        itemElem.classList.remove('border-normal')
        itemElem.classList.add('border-error')
        elemShowError.classList.add('show-error-msg')
        elemShowError.innerText = statusInputError[itemForm].msg
        elemParentInput.classList.add('mb-25')
        iconError.classList.add('icon-error-show')
        if(itemForm == 'email'){
            itemElem.value = ''
            itemElem.placeholder = 'email@example.com'
            itemElem.classList.add('sample-email')
            
        }
    } else{
        itemElem.classList.add('border-normal')
        itemElem.classList.remove('border-error')
        elemShowError.classList.remove('show-error-msg')
        elemParentInput.classList.remove('mb-25')
        iconError.classList.remove('icon-error-show')
        if(itemForm == 'email'){
            itemElem.placeholder = 'Email Address'
            itemElem.classList.remove('sample-email')
        }
    }
}

function Submit(e) {
    e.preventDefault()
    statusInputError = {}
    CheckForm()
    ShowingError('firstName', firstName)
    ShowingError('lastName', lastName)
    ShowingError('email', email)
    ShowingError('password', password)
}