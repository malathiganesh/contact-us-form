const form = document.getElementsByClassName("form");
const userName = document.getElementById("name");
const email = document.getElementById("mail");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const textarea = document.getElementById("textarea");
const btn = document.getElementById("btn");


const nameHandler = () => {
    const user = userName.value;
    let nameFilter = /^[A-Za-z0-9_\s]+$/;
    if (!(nameFilter.test(user) && user.length < 60)) {

        setError(userName, "Invalid name*")
         return false
    }
    else {
        setSuccess(userName)
       return true
    }
}

const mailHandler = () => {
    let mail = email.value;
    let emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;

    if (!(emailfilter.test(mail))) {
        setError(email, "Invalid mail id*")
       return false

    } else {
        setSuccess(email)
        return true
    }
}
const numHandler = () => {
    let number = phone.value;
    let numFilter = /^([0-9]{10})+$/;
    if (!(numFilter.test(number))) {
        setError(phone, "Invalid phone number*")
        return false;
    }
    else {
        setSuccess(phone)
        return true

    }
}
const subHandler = () => {
    const sub = subject.value;
    let subFilter = /^[A-Za-z0-9_\s]+$/;
    if (subFilter.test(sub) && sub.length < 40) {
        setSuccess(subject)
       return true
    }
    else {
        setError(subject, "Invalid subject*")
        return false
    }
}
const textHandler = () => {

    const text = textarea.value;
    const textFilter = /^[A-Za-z0-9_!@#$%^&*():""''?\s]+$/;
    if (textFilter.test(text)) {
        setSuccess(textarea)
        return true
    }
    else {
        setError(textarea, "Invalid message*")
        return false;
    }
}

const validation = () => {
    const msg = document.querySelector(".info");
    console.log(nameHandler());
    console.log(mailHandler());
    console.log(numHandler());
    console.log(subHandler());
    console.log(textHandler());
    if (nameHandler()==true && mailHandler()==true && numHandler()==true && subHandler()==true && textHandler()==true) {
        msg.className="info success";
        const child = msg.querySelector("h5");
        child.innerText= "Form Submitted Successfully";
    } else {
        msg.className= "info error";
    }
    

}

btn.addEventListener("click", (event) => {
    event.preventDefault();
    validation();
})

function setError(input, message) {
    
    const parent = input.parentElement;
    // const small = parent.querySelector("span");
    parent.className = "box error";
    // small.innerText = message;
    
}

function setSuccess(input) {

    const parent = input.parentElement;
    parent.className = "box success";
}
