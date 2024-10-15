
  document.getElementById('box').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o reload da página

    // Aqui você pode fazer qualquer lógica adicional antes de enviar o formulário

    // Envia o formulário manualmente
    fetch(this.action, {
      method: this.method,
      body: new FormData(this),
    }).then(response => {
      if (response.ok) {
        alert('Formulário enviado com sucesso!');
      } else {
        alert('Ocorreu um erro ao enviar o formulário.');
      }
    }).catch(error => {
      console.error('Erro:', error);
      alert('Erro ao enviar o formulário.');
    });
  });
