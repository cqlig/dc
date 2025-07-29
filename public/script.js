// Funcionalidad para el cursor parpadeante
document.addEventListener('DOMContentLoaded', function() {
    // Audio setup
    const audio = new Audio('God Like - Summrs.mp3');
    audio.loop = true;

    // Start screen
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');
    const container = document.querySelector('.container');

    startButton.addEventListener('click', function() {
        startScreen.style.display = 'none';
        container.style.display = 'flex';
        audio.play();
    });

    // Controles de música
    const playBtn = document.querySelector('.play-btn');
    const progressFill = document.querySelector('.progress-fill');
    const currentTime = document.querySelector('.current-time');
    let isPlaying = true;

    if (playBtn) {
        playBtn.addEventListener('click', function() {
            if (isPlaying) {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                audio.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });
    }

    // Actualizar progreso de música
    audio.addEventListener('timeupdate', function() {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = `${progress}%`;
        
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60);
        currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });

    // Controles de navegación
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            audio.currentTime = Math.max(0, audio.currentTime - 10);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        });
    }

    // Efectos de hover para badges
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Efectos para los enlaces sociales
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))';
        });
    });

    // Alternating text logic
    const textElement = document.getElementById('alternating-text');
    const alternatingTexts = ['archivos.lol', 'venta de paneles & archivos'];
    let currentIndex = 0;

    function toggleText() {
        textElement.classList.add('fade-out');
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % alternatingTexts.length;
            textElement.textContent = alternatingTexts[currentIndex];
            textElement.classList.remove('fade-out');
        }, 500);
    }

    setInterval(toggleText, 3500);

    // Contador de visitas usando localStorage
    let visits = parseInt(localStorage.getItem('visits') || '0');
    visits++;
    localStorage.setItem('visits', visits.toString());
    document.getElementById('visit-counter').textContent = visits.toString();
});

// Función para crear partículas de fondo
function createParticles() {
    const particleCount = 50;
    const container = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: float ${5 + Math.random() * 10}s linear infinite;
        `;
        
        container.appendChild(particle);
    }
}

// Agregar estilos CSS para las partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 