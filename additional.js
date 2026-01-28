document.getElementById("membershipForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const idProof = document.getElementById("idProof").files.length;
    const terms = document.getElementById("terms").checked;
    const message = document.getElementById("message");

    if (!idProof) {
        message.style.color = "red";
        message.textContent = "Please upload your ID verification document.";
        return;
    }

    if (!terms) {
        message.style.color = "red";
        message.textContent = "You must agree to the terms & conditions.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration completed successfully!";

    this.reset();
});
