document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enquiryForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
    
            const name = document.getElementById("name").value.trim();
            const landmark = document.getElementById("landmark").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const location = document.getElementById("location").value.trim();
            const mealType = document.getElementById("mealType").value;
            const mealPreference = document.getElementById("mealPreference").value;

            if (!name || !landmark || !phone || !location || !mealType || !mealPreference) {
                alert("Please fill in all fields.");
                return;
            }
    
            const message = encodeURIComponent(
            `New Enquiry:\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Location: ${location}\n` +
            `Landmark: ${landmark}\n` +
            `Meal Type: ${mealType}\n` +
            `Meal Preference: ${mealPreference}`
            );
            const whatsappNumber = "919821936866";
            const url = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            const confirmSubmit = confirm("Are you sure you want to submit the enquiry?");
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

document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-btn");
    const mealNameInput = document.getElementById("mealName");
    const mealPriceInput = document.getElementById("mealPrice");
    const mealNameDisplay = document.getElementById("mealNameDisplay");
    const mealPriceDisplay = document.getElementById("priceDisplay");

    let selectedMeal = "";
    let selectedPrice = "";

    orderButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedMeal = btn.getAttribute("data-meal");
            selectedPrice = btn.getAttribute("data-price");
        });
    });

    const modal = document.getElementById("orderModal");
    modal.addEventListener("shown.bs.modal", () => {
        mealNameInput.value = selectedMeal;
        mealPriceInput.value = selectedPrice;
        mealNameDisplay.value = selectedMeal;
        mealPriceDisplay.value = `Rs.${selectedPrice}`;
    });

    const mealTypeGroup = document.getElementById("mealTypeGroup");
    const mealTypeWarning = document.getElementById("mealTypeWarning");

    // Listen for any change in the checkbox group
    mealTypeGroup.addEventListener("change", () => {
        const mealTypeCheckboxes = document.querySelectorAll("#mealTypeGroup input[type='checkbox']");
        const isAnyChecked = Array.from(mealTypeCheckboxes).some(cb => cb.checked);

        if (isAnyChecked) {
            mealTypeWarning.classList.add("d-none");
        }
    });

    const orderForm = document.getElementById("mealOrderForm");
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const mealName = mealNameInput.value;
        const mealPrice = mealPriceInput.value;
        const location = document.getElementById("clientLocation").value;
        const landmark = document.getElementById("landmark").value;
        // const mealType = document.getElementById("mealType").value;
        const mealPreference = document.getElementById("mealPreference").value;
        const mealTypeCheckboxes = document.querySelectorAll("#mealTypeGroup input[type='checkbox']");
        const selectedMealTypes = Array.from(mealTypeCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const mealType = selectedMealTypes.join(", ");

        const mealTypeWarning = document.getElementById("mealTypeWarning");
        mealTypeWarning.classList.add("d-none");

        // Required field validation
        if (!location || !landmark || selectedMealTypes.length === 0 || !mealPreference) {
            if (selectedMealTypes.length === 0) {
                mealTypeWarning.classList.remove("d-none");
            }
            alert("Please fill all the required fields before submitting.");
            return;
        }

        // Confirmation prompt
        const confirmOrder = confirm("Do you want to place this order?");
        if (!confirmOrder) return;

        const message = 
        `Hello Dhunkee Food & Catering,\n` +
        `I want to order: ${mealName}\n` +
        `Price: Rs.${mealPrice}\n` +
        `Meal Type: ${mealType}\n` +
        `Meal Preference: ${mealPreference}\n` +
        `Location: ${location}\n` +
        `Landmark: ${landmark}\n` +
        `Can you provide me with further details?`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappNumber = "919821936866"; // Change if needed
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");

        orderForm.reset();
        const modal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
        modal.hide();
    });
});
