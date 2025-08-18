// Smooth scrolling para links internos
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para o botão "Agendar horário"
    const scheduleBtn = document.querySelector('.btn-primary');
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar a lógica para abrir um modal de agendamento
            alert('Funcionalidade de agendamento será implementada em breve!');
        });
    }

    // Animação de scroll suave para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animação aos cards de especialidades
    const specialtyCards = document.querySelectorAll('.specialty-card');
    specialtyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Aplicar animação aos cards dos advogados
    const lawyerCards = document.querySelectorAll('.lawyer-card');
    lawyerCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Aplicar animação ao texto sobre a empresa
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(30px)';
        aboutText.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(aboutText);
    }

    // Header com efeito de transparência no scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(5, 48, 1, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #053001 0%, #1a3d0a 100%)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Efeito hover nos cards de especialidades
    specialtyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efeito hover nos cards dos advogados
    lawyerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Animação do WhatsApp float button
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        // Pulsar o botão do WhatsApp
        setInterval(() => {
            whatsappFloat.style.transform = 'scale(1.1)';
            setTimeout(() => {
                whatsappFloat.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Preloader (opcional)
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // Validação de formulário (se houver)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar a lógica de validação e envio
            alert('Formulário enviado com sucesso!');
        });
    });

    // Contador de números (para estatísticas, se necessário)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Exemplo de uso do contador (descomente se necessário)
    // const counters = document.querySelectorAll('.counter');
    // counters.forEach(counter => {
    //     const target = parseInt(counter.getAttribute('data-target'));
    //     animateCounter(counter, target);
    // });
});

// Função para abrir modal de agendamento
function openScheduleModal() {
    // Aqui você pode implementar a lógica para abrir um modal
    // Por exemplo, usando uma biblioteca como SweetAlert2 ou criando um modal customizado
    console.log('Abrindo modal de agendamento...');
}

// Função para enviar mensagem no WhatsApp
function sendWhatsAppMessage() {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    const phone = '5567999999999'; // Substitua pelo número correto
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Função para scroll suave
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
