document.addEventListener("DOMContentLoaded", function () {
    const linkCalculoDose = document.getElementById("dose");
    const secaoCalculoDose = document.getElementById("calculo-dose-section");

    const pesoInput = document.getElementById("pesoInput");
    const dosagemTratamento = document.getElementById("dosagem-tratamento");
    const dosagemProfilaxia = document.getElementById("dosagem-profilaxia");
    const botaoTratamento1 = document.getElementById("botao-tratamento-1");
    const botaoTratamento2 = document.getElementById("botao-tratamento-2");
    const botaoTratamento3 = document.getElementById("botao-tratamento-3");
    const insuficienciaTexto = document.getElementById("insuficiencia-texto")
    const insuficienciaTexto2 = document.getElementById("insuficiencia-texto2")

    // Definir o primeiro botão como ativado por padrão
    botaoTratamento1.classList.add("botao-ativo");
    linkCalculoDose.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que o link execute sua ação padrão de navegação
    
        // Verifique se a seção está atualmente visível
        if (secaoCalculoDose.style.display === "block") {
          // Se estiver visível, oculte-a
          secaoCalculoDose.style.display = "none";
        } else {
          // Se estiver oculta, mostre-a
          secaoCalculoDose.style.display = "block";
        }
      });
    // Adicionar um ouvinte de evento ao primeiro botão para alternar a multiplicação
    botaoTratamento1.addEventListener("click", function () {
      botaoTratamento1.classList.add("botao-ativo");
      botaoTratamento2.classList.remove("botao-ativo");
      calcularDosagem();
    });

    // Adicionar um ouvinte de evento ao segundo botão para alternar a multiplicação
    botaoTratamento2.addEventListener("click", function () {
      botaoTratamento2.classList.add("botao-ativo");
      botaoTratamento1.classList.remove("botao-ativo");
      calcularDosagem();
    });

    botaoTratamento3.addEventListener("click", function () {
        botaoTratamento2.classList.remove("botao-ativo");
        botaoTratamento1.classList.remove("botao-ativo");
        botaoTratamento3.classList.add("botao-ativo")
        calcularDosagem();
      });
    pesoInput.addEventListener("input", function () {
      calcularDosagem();
    });

    // Função para calcular a dosagem com base no botão ativo
    function calcularDosagem() {
      const peso = parseFloat(pesoInput.value);

      if (!isNaN(peso)) {
        let multiplicador = 1;

        if (botaoTratamento1.classList.contains("botao-ativo")) {
          multiplicador = 1.5;
        }

        const dosagem = Math.ceil(peso * multiplicador);

        dosagemTratamento.textContent = dosagem + " mg";
      } else {
        dosagemTratamento.textContent = "Peso inválido";
      }
    }


// Adicione um ouvinte de eventos para o clique no botão de tratamento 3
botaoTratamento3.addEventListener('click', function() {
  // Quando o botão é clicado, atualize o texto no elemento <p>
  insuficienciaTexto.textContent = ' Insuficiencia renal grave: 1mg/kg/24h';
  dosagemProfilaxia.textContent = "20 mg";
  insuficienciaTexto2.textContent = 'Insuficiencia renal grave';
});
botaoTratamento1.addEventListener('click', function() {
    // Quando o botão 1 é clicado, atualize o texto no elemento <p>
    insuficienciaTexto.textContent = '';
    insuficienciaTexto2.textContent = '';
    dosagemProfilaxia.textContent = "40 mg";
  });
  
  botaoTratamento2.addEventListener('click', function() {
    // Quando o botão 2 é clicado, atualize o texto no elemento <p>
    insuficienciaTexto.textContent = '';
    insuficienciaTexto2.textContent = '';
    dosagemProfilaxia.textContent = "40 mg";
  });
  

    // Inicialmente, calcular a dosagem com o botão 1 ativado por padrão
    calcularDosagem();
  });