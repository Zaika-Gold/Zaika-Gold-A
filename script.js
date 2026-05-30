
<script> // Particle Background logic
        const container = document.getElementById('particle-canvas');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 4 + 2 + 'px';
            particle.style.width = size;
            particle.style.height = size;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.opacity = Math.random() * 0.3;
            particle.style.animation = `floating ${Math.random() * 5 + 5}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(particle);
        }

        // Navbar Scroll Effect
        const nav = document.getElementById('main-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                nav.classList.add('bg-surface/90', 'backdrop-blur-xl', 'py-3', 'border-primary/10');
                nav.classList.remove('py-4', 'border-transparent');
            } else {
                nav.classList.remove('bg-surface/90', 'backdrop-blur-xl', 'py-3', 'border-primary/10');
                nav.classList.add('py-4', 'border-transparent');
            }
        });
    </script>
