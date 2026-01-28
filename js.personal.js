document.getElementById("membershipForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!name || !dob || !address || !gender) {
        alert("Please fill all fields");
        return;
    }

    alert("Registration Successful!\n\nName: " + name + "\nGender: " + gender.value);
    this.reset();
});