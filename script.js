document.addEventListener('DOMContentLoaded', function() {

    // --- Contact Button ---
    const contactButton = document.getElementById('contact-button');
    const contactFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe1n6FEDv_iYR5NZh51tdE0SwK7Z9fLDcG6ASF8F3pkLHspKg/viewform?usp=header';

    contactButton.addEventListener('click', () => {
        window.open(contactFormUrl, '_blank');
    });


    // --- Modal Logic ---
    // Get modals
    const termsModal = document.getElementById('terms-modal');
    const privacyModal = document.getElementById('privacy-modal');

    // Get links that open the modals
    const termsLink = document.getElementById('terms-link');
    const privacyLink = document.getElementById('privacy-link');

    // Get all close buttons
    const closeButtons = document.getElementsByClassName('close-button');

    // Function to open a modal
    const openModal = (modal) => {
        modal.style.display = 'block';
    };

    // Function to close a modal
    const closeModal = (modal) => {
        modal.style.display = 'none';
    };

    // Event listeners for links
    termsLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents link from navigating
        openModal(termsModal);
    });

    privacyLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents link from navigating
        openModal(privacyModal);
    });

    // Event listeners for close buttons
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function() {
            closeModal(this.closest('.modal'));
        });
    }

    // Close modal if user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target == termsModal) {
            closeModal(termsModal);
        }
        if (event.target == privacyModal) {
            closeModal(privacyModal);
        }
    });
});
