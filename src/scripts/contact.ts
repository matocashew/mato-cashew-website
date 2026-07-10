console.log("Contact form script loaded");
const form = document.getElementById("contact-form") as HTMLFormElement | null;

if (form) {

    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;

    const successBox = document.getElementById("successMessage") as HTMLDivElement;

    const errorBox = document.getElementById("formError") as HTMLDivElement;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        successBox.hidden = true;
        errorBox.hidden = true;

        let valid = true;

        const requiredFields = form.querySelectorAll("[required]");

        requiredFields.forEach((field) => {

            const input = field as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

            const error = input.parentElement?.querySelector(".error-message") as HTMLElement;

            input.classList.remove("input-error");

            if (error) {
                error.textContent = "";
            }

            if (!input.value.trim()) {

                valid = false;

                input.classList.add("input-error");

                if (error) {
                    error.textContent = "This field is required.";
                }

            }

        });

        if (!valid) return;

        submitBtn.disabled = true;

        submitBtn.textContent = "Sending...";

        setTimeout(() => {

            submitBtn.disabled = false;

            submitBtn.textContent = "Send Inquiry";

            successBox.hidden = false;

            form.reset();

        }, 1200);

    });

}