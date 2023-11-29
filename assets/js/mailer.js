const buttonSubscribe = document.querySelector(".Button-subscribe");
const inputSubscribe = document.querySelector(".Subscribe-input");
const formSubscribe = document.querySelector(".Subscribe-form");

formSubscribe.addEventListener("submit", function (event) {
  event.preventDefault();
  buttonSubscribe.textContent = "Sending...";
  const serviceID = "default_service";
  const templateID = "template_iqllkfb";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      buttonSubscribe.textContent = "Subscribe";
      inputSubscribe.value = "";
      alert("Subscription sucess");
    },
    (error) => {
      buttonSubscribe.textContent = "Subscribe";
      alert(JSON.stringify(error));
    }
  );
});
