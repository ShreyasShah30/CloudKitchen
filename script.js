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

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Only collapse if it's expanded
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
});

window.addEventListener('pageshow', function (event) {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    }
});

