document.addEventListener("DOMContentLoaded", function () {
  const linkCalculoDose = document.getElementById("doseLink");
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
  const checkboxesLeveCaprini = document.querySelectorAll('.inputLeveCaprini');
  const checkboxesMedioCaprini = document.querySelectorAll('.inputMedioCaprini');
  const checkboxesGraveCaprini = document.querySelectorAll('.inputGraveCaprini');
  const checkboxesForteCaprini = document.querySelectorAll('.inputForteCaprini')
  const recomendacaoScoreCaprini = document.getElementById("recomendacaoScoreCaprini");
  const checkboxesLeveObstetricas = document.querySelectorAll('.inputLeveObstetricas');
  const checkboxesMedioObstetricas = document.querySelectorAll('.inputMedioObstetricas');
  const checkboxesGraveObstetricas = document.querySelectorAll('.inputGraveObstetricas');
  const recomendacaoScoreObstetricas = document.getElementById("recomendacaoScoreObstetricas");
  



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
  mostrarOcultarConteudo("doseLink", "conteudo-calculo");
  mostrarOcultarConteudo("prontuario-link", "conteudo-prontuario");
  mostrarOcultarConteudo("avaliacaoCaprini-link", "conteudo-avaliacaoCaprini");
  mostrarOcultarConteudo("scorePadua-link", "conteudo-scorePadua");
  mostrarOcultarConteudo("recomendacao-link", "conteudo-recomendacao");
  mostrarOcultarConteudo("algoritimoSafety-link", "conteudo-avaliacaoSafety");
  mostrarOcultarConteudo("posologiaCirurgico-link", "conteudo-posologiaCirurgico");
  mostrarOcultarConteudo("manejo-link", "conteudo-manejo");
  mostrarOcultarConteudo("algoritimoPacinetesClinicos-link", "conteudo-algoritimoPacinetesClinicos");
  mostrarOcultarConteudo("posologiaClinico-link", "conteudo-posologiaClinico");
  mostrarOcultarConteudo("pacientesObtetricas-link", "conteudo-pacientesObtetricas");
  mostrarOcultarConteudo("insufucienciaRenal-link", "conteudo-insuficienciaRenal");
  mostrarOcultarConteudo("pacientesObesos-link", "conteudo-pacientesObesos");
  mostrarOcultarConteudo("tratamento-link", "conteudo-tratamento");
  mostrarOcultarConteudo("oncologia-link", "conteudo-oncologia");
  mostrarOcultarConteudo("cardiologia-link", "conteudo-cardiologia");
  mostrarOcultarConteudo("recursos-link", "conteudo-recursos");




  var dataAtual = new Date();

  // Formate a data para exibição
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1; // Adicione 1 porque os meses são indexados a partir de 0
  var ano = dataAtual.getFullYear();

  // Construa a string da data no formato desejado (por exemplo, dd/mm/aaaa)
  var dataFormatada = dia + '/' + mes + '/' + ano;

  // Exiba a data no elemento HTML com o id "data"
  document.getElementById("data").innerHTML = dataFormatada;


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
      document.getElementById("prontuarioDosagem").innerHTML = `Dosagem para tratamento: ${dosagem}mg de Enoxaparina<br>Dosagem para Profilaxia: ${dosagemProfilaxia.textContent } de Enoxaparina`;
      
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
  document.getElementById("recomendacaoScore").innerHTML = `>=${pontuacao}<br>Risco Baixo<br>Para pacientes adudamente enfermos e hospitalizados com baixo risco de TEV,recomenda-se contra o uso detromboproflaxia farmacologica ou mecânica.`;
  document.getElementById("riscoPadua").innerHTML = `<strong>Escore de Padua: </strong>Risco Baixo `;
  document.getElementById("prontuarioPadua").innerHTML = `Não fazer o uso de etromboproflaxia farmacologica ou mecânica. `;
  
  document.getElementById("fundoScore").style.backgroundColor = "#0059A7";
  } else {
  document.getElementById("recomendacaoScore").innerHTML = `>=${pontuacao}<br>Risco Alto<br>Para pacientes enfermos e hospitalizados com alto risco de TEV, recomenda-se tromboproflaxia farmacologica com HBPM, HNF (de 12-12h ou 8-8h) ou fondaparina.`;
  document.getElementById("riscoPadua").innerHTML = `<strong>Escore de Padua: </strong>Risco Alto</strong> `;
  document.getElementById("prontuarioPadua").innerHTML = `Tromboproflaxia farmacologica com HBPM, HNF (de 12-12h ou 8-8h) ou fondaparina`;
  document.getElementById("fundoScore").style.backgroundColor = "#EF3D2F";
  }



    
  }
  checkboxesLeveCaprini.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacaoCaprini);
  });

  // Adicionar ouvinte de evento para checkboxes Médio
  checkboxesMedioCaprini.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacaoCaprini);
  });

  // Adicionar ouvinte de evento para checkboxes Grave
  checkboxesGraveCaprini.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacaoCaprini);
  });

  checkboxesForteCaprini.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacaoCaprini);
  });

  function calcularPontuacaoCaprini() {
    let pontuacaoCaprini = 0;

    // Calcular pontuação com base nas checkboxes marcadas
    checkboxesLeveCaprini.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacaoCaprini += 1;
      }
    });

    checkboxesMedioCaprini.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacaoCaprini += 2;
      }
    });

    checkboxesGraveCaprini.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacaoCaprini += 3;
      }
    });

    checkboxesForteCaprini.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacaoCaprini += 5;
      }
    });

    // Atualizar o texto do span com base na pontuação
    if (pontuacaoCaprini == 0) {
      recomendacaoScoreCaprini.innerHTML = `${pontuacaoCaprini}<br>Risco Muito Baixo<br>Deambulação precose`;
      document.getElementById("riscoCaprini").innerHTML = `<strong>Escore de Caprini: </strong>Risco Muito Baixo<br> `;
      document.getElementById("fundoScoreCaprini").style.backgroundColor = "#0059A7";
  } else if (pontuacaoCaprini >0 && pontuacaoCaprini < 3) {
      recomendacaoScoreCaprini.innerHTML = `${pontuacaoCaprini}<br>Risco Baixo<br>Profilaxia mecánico (CPI)*`;
      document.getElementById("riscoCaprini").innerHTML = `<strong>Escore de Caprini: </strong>Risco Baixo<br> `;
      document.getElementById("prontuarioCaprini").innerHTML = `Profilaxia mecánico (CPI)* `;
      document.getElementById("fundoScoreCaprini").style.backgroundColor = "#488BC0";
      
  } else if (pontuacaoCaprini >= 3 && pontuacaoCaprini < 5) {
      recomendacaoScoreCaprini.innerHTML = `${pontuacaoCaprini}<br>Risco Moderado<br>Profilaxia farmacólogica`;
      document.getElementById("riscoCaprini").innerHTML = `<strong>Escore de Caprini: </strong>Risco Moderado<br> `;
      document.getElementById("prontuarioCaprini").innerHTML = `Profilaxia farmacólogica `;
      document.getElementById("fundoScoreCaprini").style.backgroundColor = "#F47A75";
  } else {
      recomendacaoScoreCaprini.innerHTML = `${pontuacaoCaprini}<br>Alto Risco<br>Proflaxia farmacológica (HNF ou HBPM)
      profilaxia mecáncia (CPI ou meias
      antitrombo)<br>Pacientes de alto risco submetido à
      cirurgia oncológica abdominal e pélvica:
      estender a proflaxia por 4 semanas`;
      document.getElementById("riscoCaprini").innerHTML = `<strong>Escore de Caprini: </strong>Alto Risco<br> `;
      document.getElementById("prontuarioCaprini").innerHTML = `Proflaxia farmacológica (HNF ou HBPM)
      profilaxia mecáncia (CPI ou meias
      antitrombo)<br>Pacientes de alto risco submetido à
      cirurgia oncológica abdominal e pélvica:
      estender a proflaxia por 4 semanas `;
      document.getElementById("fundoScoreCaprini").style.backgroundColor = "#EF3D2F";
  }
  


    
  }


  checkboxesLeveObstetricas.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacaoObstetricas);
  });
  
  // Adicionar ouvinte de evento para checkboxes Médio
  checkboxesMedioObstetricas.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacaoObstetricas);
  });
  
  // Adicionar ouvinte de evento para checkboxes Grave
  checkboxesGraveObstetricas.forEach(function (checkbox) {
    checkbox.addEventListener('change', calcularPontuacaoObstetricas);
  });
  
  function calcularPontuacaoObstetricas() {
    let pontuacaoObstetricas = 0;
  
    // Calcular pontuação com base nas checkboxes marcadas
    checkboxesLeveObstetricas.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacaoObstetricas += 1;
      }
    });
  
    checkboxesMedioObstetricas.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacaoObstetricas += 3;
      }
    });
  
    checkboxesGraveObstetricas.forEach(function (checkbox) {
      if (checkbox.checked) {
        pontuacaoObstetricas += 4;
      }
    });
  
    // Atualizar o texto do span com base na pontuação
    if (pontuacaoObstetricas == 0) {
      recomendacaoScoreObstetricas.innerHTML = `${pontuacaoObstetricas}<br>Risco Muito Baixo<br>Deambulação precoce`;
      document.getElementById("riscoObstetricas").innerHTML = `<strong>Escore de Obstetrícia:</strong> Risco Muito Baixo<br>`;
      document.getElementById("fundoScoreObstetricas").style.backgroundColor = "#0059A7";
    } else if (pontuacaoObstetricas > 0 && pontuacaoObstetricas < 3) {
      recomendacaoScoreObstetricas.innerHTML = `${pontuacaoObstetricas}<br>Risco Baixo<br>Profilaxia mecânica (CPI)*`;
      document.getElementById("riscoObstetricas").innerHTML = `<strong>Escore de Obstetrícia:</strong> Risco Baixo<br>`;
      document.getElementById("prontuarioObstetricas").innerHTML = `Profilaxia mecânica (CPI)*`;
      document.getElementById("fundoScoreObstetricas").style.backgroundColor = "#488BC0";
    } else if (pontuacaoObstetricas >= 3 && pontuacaoObstetricas < 5) {
      recomendacaoScoreObstetricas.innerHTML = `${pontuacaoObstetricas}<br>Risco Moderado<br>Profilaxia farmacológica`;
      document.getElementById("riscoObstetricas").innerHTML = `<strong>Escore de Obstetrícia:</strong> Risco Moderado<br>`;
      document.getElementById("prontuarioObstetricas").innerHTML = `Profilaxia farmacológica`;
      document.getElementById("fundoScoreObstetricas").style.backgroundColor = "#F47A75";
    } else {
      recomendacaoScoreObstetricas.innerHTML = `${pontuacaoObstetricas}<br>Alto Risco<br>Profilaxia farmacológica (HNF ou HBPM)
      profilaxia mecânica (CPI ou meias antitrombo)<br>Pacientes de alto risco submetidos à cirurgia oncológica abdominal e pélvica:
      estender a profilaxia por 4 semanas`;
      document.getElementById("riscoObstetricas").innerHTML = `<strong>Escore de Obstetrícia:</strong> Alto Risco<br>`;
      document.getElementById("prontuarioObstetricas").innerHTML = `Profilaxia farmacológica (HNF ou HBPM)
      profilaxia mecânica (CPI ou meias antitrombo)<br>Pacientes de alto risco submetidos à cirurgia oncológica abdominal e pélvica:
      estender a profilaxia por 4 semanas`;
      document.getElementById("fundoScoreObstetricas").style.backgroundColor = "#EF3D2F";
    }
  }
  
  






})

  // Defina a função Export2Doc no escopo global
  function Export2Doc(element, filename = ''){
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html],{
        type: 'application/msword'
    });

    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html)

    filename = filename?filename+'.doc': 'document.doc';

    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        downloadLink.href = url;

        downloadLink.download = filename;

        downloadLink.click();
    }

    document.body.removeChild(downloadLink);


}
   
