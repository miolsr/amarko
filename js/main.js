window.addEventListener('DOMContentLoaded', () => {

    // Hero Animation (fade + scale)
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroTitle && heroSubtitle) {
        heroTitle.style.opacity = 0;
        heroSubtitle.style.opacity = 0;
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s ease';
            heroTitle.style.opacity = 1;
        }, 200);
        setTimeout(() => {
            heroSubtitle.style.transition = 'all 1s ease';
            heroSubtitle.style.opacity = 1;
        }, 600);
    }

    // Property Cards Animation
    const cards = document.querySelectorAll('.property-card');
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, i * 150);
    });

    // Comment Button Click
    const commentBtns = document.querySelectorAll('.comment-btn');
    commentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const note = prompt("أضف ملاحظتك للعقار:");
            if (note && note.trim() !== "") {
                alert("تم إضافة الملاحظة: " + note);
            }
        });
    });

});