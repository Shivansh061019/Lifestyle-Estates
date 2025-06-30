document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Dropdown toggle for desktop - click only
    const dropdownParents = document.querySelectorAll('.relative.group');

    dropdownParents.forEach(parent => {
        const trigger = parent.querySelector('a');
        const dropdown = parent.querySelector('div.absolute');

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = dropdown.classList.contains('hidden');
            // Hide all dropdowns
            document.querySelectorAll('.relative.group div.absolute').forEach(d => d.classList.add('hidden'));
            if (isHidden) {
                dropdown.classList.remove('hidden');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.relative.group')) {
            document.querySelectorAll('.relative.group div.absolute').forEach(d => d.classList.add('hidden'));
        }
    });
});
