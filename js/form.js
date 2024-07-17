function senmail() {
    var par = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };
    const serviceID = "service_9xb82ye";
    const templateID = "template_wllpopg";

    emailjs
        .send(serviceID, templateID, par)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log(res);
        })
        .catch(err => console.log(err));
        alert("You message send successfully");
}
