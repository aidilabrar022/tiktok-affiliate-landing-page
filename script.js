document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    // Kita buat menu mobile sederhana langsung di JS kalau tidak ada di HTML
    // Tapi untuk simplicity, kita fokus ke toggle icon saja
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Cek apakah elemen nav-links-mobile ada, jika tidak buat dinamis atau alert
            // Untuk kode ini, kita asumsikan user bisa menambahkan <ul class="nav-links-mobile"> di HTML jika mau
            // Atau sekadar toggle icon saja sebagai feedback
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                // Optional: Alert atau logic menu lain
                alert("Menu diklik! (Silakan tambahkan <ul class='nav-links-mobile'> di HTML untuk isi menu)");
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- 2. Scroll Animation (Fade In) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // --- 3. Countdown Timer (Urgency) ---
    // Set waktu mundur 4 jam dari sekarang
    let timeInSeconds = 4 * 60 * 60; 
    const timerElement = document.getElementById('timer');

    if (timerElement) {
        const countdown = setInterval(() => {
            const hours = Math.floor(timeInSeconds / 3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);
            const seconds = timeInSeconds % 60;

            // Format angka jadi 00
            const h = hours < 10 ? '0' + hours : hours;
            const m = minutes < 10 ? '0' + minutes : minutes;
            const s = seconds < 10 ? '0' + seconds : seconds;

            timerElement.innerHTML = `${h}:${m}:${s}`;

            if (timeInSeconds > 0) {
                timeInSeconds--;
            } else {
                clearInterval(countdown);
                timerElement.innerHTML = "PROMO HABIS!";
                timerElement.style.color = "#fff";
            }
        }, 1000);
    }

    console.log("Landing Page Affiliate Siap Bro! 🚀");
});