const form = document.querySelector('form');
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			const name = document.querySelector('#name').value;
			const email = document.querySelector('#email').value;
			const subject = document.querySelector('#subject').value;
			const message = document.querySelector('#message').value;
			// Aqui você pode enviar os dados para o servidor de sua escolha
			console.log(`Nome: ${name}, E-mail: ${email}, Assunto: ${subject}, Mensagem: ${message}`);
		});