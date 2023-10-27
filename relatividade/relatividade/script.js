function mudar(objeto, imagem) {//funcao que altera a imagem do index rincipal
    
    lampada.src = imagem;
  }


  function inclui_nome(){//funcao que atribui o nome do usuario no html
      var nome_variavel = prompt("qual o seu nome");//prompt que pede ao usuario o nome dele

      if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel; //aqui delimitase onde o nome vai aparecer
      }
      else{
        alert("coloque o seu nome");//aqui possui uma comfiguracao que cobra o usuario caso nao escreva o nome
        inclui_nome();
      }

  }

  function multiplo(){
    resultado.value = parseInt(n1.value) * parseInt(n2.value) //aqui onde o cauculo do tema e resolvido
}



  function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');//aqui possui as comfiguracoes dos exercicios 
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="text"]');
    var resp10 = document.querySelector('input[name="text"]');
    
    
    
    var contador = 0;
    
    
    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 ){//aqui onde comfigurançe as resostas que aparecem quando os eercicios sao corrigidos
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois o resultado do cauculo é 15 vezes menor!" //mensagem que aparece quando esta errada junto com a correcao
    
        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada,A Segunda lei de Newton mostra que, se não existir aceleração, não há aplicação de força resultante para os movimentos retilíneos. Como o corpo move-se com velocidade constante, podemos afirmar que a força resultante que atua sobre ele é nula."//mensagem que aparece quando esta errada junto com a correcao
    
        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, Como as forças que atuam sobre o corpo possuem sentidos opostos, podemos determinar a força resultante por meio de sua subtração. FR = 60 – 20 = 40 N"//mensagem que aparece quando esta errada junto com a correcao
    
        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, Como m.a corresponde a F, podemos escrever que: F' = 2F."//mensagem que aparece quando esta errada junto com a correcao
    
        }
    
        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada, Como após a aplicação da força a velocidade do corpo diminuiu, podemos concluir que a força é oposta ao movimento original do móvel."//mensagem que aparece quando esta errada junto com a correcao
    
        }
    
        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada, pois FR = 1800 N!"//mensagem que aparece quando esta errada junto com a correcao
    
        }
    
        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada,pois f=200N !"//mensagem que aparece quando esta errada junto com a correcao
    
        }
    
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, Depois de termos calculado a aceleração, aplicamos a segunda lei de Newton e descobrimos que a força resultante sobre o corpo teve um valor de aproximadamente 1,9 N!"//mensagem que aparece quando esta errada junto com a correcao
    
        }
    
        if(resp9.value == "200m"){ 
            document.getElementById("resp_correta_9").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada, De acordo com o cálculo, o deslocamento sofrido pelo corpo é de 200 m"//mensagem que aparece quando esta errada junto com a correcao
    
        }
    
        if(resp10.value == "30N"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"//resposta para mensagem correta
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada, pois Fr=30N "//mensagem que aparece quando esta errada junto com a correcao
    
        }
    
    
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";//comfiguracao que conta o numero de acertos
    }
    else{
        alert("não deixe questões em branco!") //alert que aparece quando o usuario nao responde uma questao
    }
    
    }