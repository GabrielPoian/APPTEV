document.addEventListener("DOMContentLoaded", function () {
  const linkCalculoDose = document.getElementById("dose");
  const textoScore = document.getElementById("recomendacaoScore");
  const secaoCalculoDose = document.getElementById("conteudo-calculo");
  const pesoInput = document.getElementById("pesoInput");
  const dosagemTratamento = document.getElementById("dosagem-tratamento");
  const dosagemProfilaxia = document.getElementById("dosagem-profilaxia");
  const botaoTratamento1 = document.getElementById("botao-tratamento-1");
  const botaoTratamento2 = document.getElementById("botao-tratamento-2");
  const botaoTratamento3 = document.getElementById("botao-tratamento-3");
  const insuficienciaTexto = document.getElementById("insuficiencia-texto");
  const insuficienciaTexto2 = document.getElementById("insuficiencia-texto2");
  const checkboxesLeve = document.querySelectorAll('.inputLeve');
  const checkboxesMedio = document.querySelectorAll('.inputMedio');
  const checkboxesGrave = document.querySelectorAll('.inputGrave');
  const recomendacaoScore = document.getElementById("recomendacaoScore");

  function mostrarOcultarConteudo(linkId, conteudoId) {
    const link = document.getElementById(linkId);
    const conteudo = document.getElementById(conteudoId);

    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Oculta todos os conteúdos exceto o conteúdo clicado
      const todosConteudos = document.querySelectorAll("[id^='conteudo-']");
      todosConteudos.forEach(function (item) {
        if (item.id === conteudoId) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  // Associar a função a cada link
  mostrarOcultarConteudo("dose", "conteudo-calculo");
  mostrarOcultarConteudo("cirurgicos-link", "conteudo-cirurgicos");
  mostrarOcultarConteudo("scorePadua-link", "conteudo-scorePadua");
  mostrarOcultarConteudo("clinicos-link", "conteudo-clinicos");
  mostrarOcultarConteudo("avaliacao-link", "conteudo-avaliacao");
  mostrarOcultarConteudo("especiais-link", "conteudo-especiais");
  mostrarOcultarConteudo("tratamento-link", "conteudo-tratamento");
  mostrarOcultarConteudo("oncologia-link", "conteudo-oncologia");
  mostrarOcultarConteudo("cardiologia-link", "conteudo-cardiologia");
  mostrarOcultarConteudo("recursos-link", "conteudo-recursos");

  linkCalculoDose.addEventListener("click", function (event) {
    event.preventDefault();
    // Esconder o conteúdo de avaliação e mostrar o conteúdo de cálculo
    secaoCalculoDose.style.display = "block";
  });

  // Definir o primeiro botão como ativado por padrão
  botaoTratamento1.classList.add("botao-ativo");

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
    botaoTratamento3.classList.add("botao-ativo");
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
  botaoTratamento3.addEventListener("click", function () {
    // Quando o botão é clicado, atualize o texto no elemento <p>
    insuficienciaTexto.textContent = " Insuficiencia renal grave: 1mg/kg/24h";
    dosagemProfilaxia.textContent = "20 mg";
    insuficienciaTexto2.textContent = "Insuficiencia renal grave";
  });

  botaoTratamento1.addEventListener("click", function () {
    // Quando o botão 1 é clicado, atualize o texto no elemento <p>
    insuficienciaTexto.textContent = "";
    insuficienciaTexto2.textContent = "";
    dosagemProfilaxia.textContent = "40 mg";
  });

  botaoTratamento2.addEventListener("click", function () {
    // Quando o botão 2 é clicado, atualize o texto no elemento <p>
    insuficienciaTexto.textContent = "";
    insuficienciaTexto2.textContent = "";
    dosagemProfilaxia.textContent = "40 mg";
  });

  // Inicialmente, calcular a dosagem com o botão 1 ativado por padrão
  calcularDosagem();

  checkboxesLeve.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacao);
  });

  // Adicionar ouvinte de evento para checkboxes Médio
  checkboxesMedio.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacao);
  });

  // Adicionar ouvinte de evento para checkboxes Grave
  checkboxesGrave.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacao);
  });

  function calcularPontuacao() {
    let pontuacao = 0;

    // Calcular pontuação com base nas checkboxes marcadas
    checkboxesLeve.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacao += 1;
      }
    });

    checkboxesMedio.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacao += 2;
      }
    });

    checkboxesGrave.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacao += 3;
      }
    });

    // Atualizar o texto do span com base na pontuação
    if (pontuacao < 4) {
      recomendacaoScore.innerHTML = `>=${pontuacao}<br>Risco Baixo<br>Para pacientes enfermos e hospitalizados
      com alto risco de TEV, recomenda-se
      tromboproflaxia farmacologica com
      HBPM, HNF (de 12-12h ou 8-8h) ou
      fondaparina.`;
      document.getElementById("fundoScore").style.backgroundColor = "rgb(16, 69, 216)";
    } else {
      recomendacaoScore.innerHTML = `>=${pontuacao}<br>Risco Alto<br>Para pacientes adudamente enfermos e
      hospitalizados com baixo risco de TEV,recomenda-se contra o uso detromboproflaxia farmacologica ou mecânica.`;
      document.getElementById("fundoScore").style.backgroundColor = "red";
    }


    
  }
});