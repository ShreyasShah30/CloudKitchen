document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enquiryForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
    
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const location = document.getElementById("location").value.trim();
            const date = document.getElementById("date").value;

            if (!name || !email || !phone || !location || !date) {
                alert("Please fill in all fields.");
                return;
            }
    
            const message = `New Enquiry:%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ALocation: ${location}%0AStart Date: ${date}`;
            const whatsappNumber = "919821936866";
            const url = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            const confirmSubmit = confirm("Are you sure you want to submit the form?");
            if (!confirmSubmit) {
                return;
            }
            window.open(url, "_blank");
            form.reset();
        });
    }
});