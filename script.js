
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interação do botão de Impacto Tecnológico
    const btnAlerta = document.getElementById('btn-alerta');
    if (btnAlerta) {
        btnAlerta.addEventListener('click', () => {
            alert('Sabia que a agricultura de precisão pode reduzir o uso de defensivos agrícolas em até 40%? A tecnologia é a maior aliada da sustentabilidade!');
        });
    }

    // 2. Envio simulado do Formulário de Contato
    const formulario = document.getElementById('contact-form');
    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede a página de recarregar
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;

            // Feedback na tela para o usuário
            alert(`Obrigado pelo contato, ${nome}! Suas sugestões foram enviadas com sucesso para o e-mail: ${email}. Juntos pelo agro sustentável!`);
            
            formulario.reset(); // Limpa os campos do formulário após o envio
        });
    }

    // 3. Efeito Visual: Mudar o tom do menu ao rolar a página
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#0b251a'; // Verde mais escuro ao rolar
            header.style.padding = '15px 10px'; // Encolhe o menu de leve
            header.style.transition = 'all 0.4s ease';
        } else {
            header.style.backgroundColor = '#1b4332'; // Volta ao verde padrão
            header.style.padding = '20px 10px';
        }
    });
});
