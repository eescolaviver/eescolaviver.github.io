document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Aqui você pode adicionar uma chamada para a API de login
    alert(`Login com sucesso! \nEmail: ${email}`);
  } else {
    alert('Por favor, preencha os campos!');
  }
});
