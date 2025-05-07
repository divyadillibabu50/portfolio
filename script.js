function navigateTo(sectionId) {
    const sections = document.querySelectorAll('.section');
    const header = document.getElementById('main-header');

    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('fade-in');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('fade-in');
    }

    // Show header on all pages except landing
    if (sectionId === 'landing') {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
}