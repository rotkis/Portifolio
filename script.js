// Função para copiar o email
document.getElementById('email').addEventListener('click', function (e) {
	e.preventDefault();
	const email = 'rotkisarthur@gmail.com';
	const tempInput = document.createElement('input');
	document.body.appendChild(tempInput);
	tempInput.value = email;
	tempInput.select();
	document.execCommand('copy');
	document.body.removeChild(tempInput);

	// Exibir a mensagem de email copiado
	const message = document.getElementById('message');
	message.textContent = 'Email copiado!';
	setTimeout(() => message.textContent = '', 2000); // Mensagem some após 2 segundos
    });
    window.addEventListener('scroll', function () {
const aboutMeSection = document.getElementById('about-me');
const sectionPosition = aboutMeSection.getBoundingClientRect().top;
const viewportHeight = window.innerHeight;

if (sectionPosition < viewportHeight * 0.8) {
    document.body.classList.add('new-background');
} else {
    document.body.classList.remove('new-background');
}
});