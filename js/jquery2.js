$(function(){
    /* Variavel contagem serve para eu acionar ou as div ou os buttons de modal*/
    var contagem = 0;

    /*Este código serve para rolar a pagina*/
    $('.navbar-nav a[href^="#"]').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
          
        $('html, body').animate({ 
          scrollTop: targetOffset - 70
        }, 500);
    });
   // alert($('.header').height())

    $('.alterar').click(function(){
        $('.layout-um').hide();
        $('.layout-dois').show();
    });
    
    function generico(){
        $('.objetivo p').remove();
        $('.tecnologias p').remove();
        $('.equipe li').remove();
        $('.documentacao p').remove();
        $('.funcionamento a').remove();
        $('.github a').remove();
    }
    $('#entrada').keypress(function(e){
        $('#um').hide();
    })
    $('.borda:first-child').click(function(){
        contagem = 1;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(1)').click(function(){
        contagem = 1;
        organizar();
    });

    $('.borda:nth-child(2)').click(function(){
        contagem = 2;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(2)').click(function(){
        contagem = 2;
        organizar();
    });

    $('.borda:nth-child(3)').click(function(){
        contagem = 3;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(3)').click(function(){
        contagem = 3;
        organizar();
    });

    $('.borda:nth-child(4)').click(function(){
        contagem = 4;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(4)').click(function(){
        contagem = 4;
        organizar();
    });

    $('.borda:nth-child(5)').click(function(){
        contagem = 5;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(5)').click(function(){
        contagem = 5;
        organizar();
    });

    $('.borda:nth-child(6)').click(function(){
        contagem = 6;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(6)').click(function(){
        contagem = 6;
        organizar();
    });

    $('.borda:nth-child(7)').click(function(){
        contagem = 7;
        organizar();
    });

    $('.controle .dropdown-item:nth-child(7)').click(function(){
        contagem = 7;
        organizar();
    });

    function organizar(){
        if (contagem == 1){
            aparecer();
            $('h4').text('Sistema de gerenciamento de atividades');
            $('.tipo p').text('Aplicativo desktop, projeto final de materia, ');
            generico();
            $('.equipe').append('<li class="col-12">Antonio Henrique</li>');
            $('.equipe').append('<li class="col-12">Antonio Hamilton</li>');
            $('.equipe').append('<li class="col-12">José Afonso</li>');
            $('.equipe').append('<li class="col-12">Roniel Dias</li>');
            $(".equipe li").css("display", 'block');
            $('.objetivo').append('<p class="col-12">Este software foi feito como projeto final da materia de Engenharia de Software I, no periodo 2019.2, tem como objetivo gerenciar atividades ao decorrer da disciplina.</p>');
            $('.tecnologias').append('<p class="col-12">Frontend - Tkinter <br> Backend - Python <br> Banco de dados - SQLite3</p>')     
            $('.github').append('<a href="" class="col-12"></a>')     
        
        }
        else if (contagem == 2){
            generico();
            $('h4').text('Sistema de controle interno - SCI');
            $('.tipo p').text('Aplicativo desktop');
            
            $('.equipe li').remove();
            $('.equipe').append('<li class="col-12">Antonio Henrique</li>');
            $('.equipe li').css("display", 'block');
            $('.objetivo').append('<p class="col-12">Este software foi feito com o intuito de controle de estoque</p>');
            $('.tecnologias').append('<p class="col-12">Frontend - Tkinter <br> Backend - Python <br> Banco de dados - SQLite3</p>');
            $('.github').append('<a href="https://github.com/ahdesenvolvimento/controlefinanceiro" class="col-12">https://github.com/ahdesenvolvimento/controlefinanceiro</a>')  
        }
        else if (contagem == 3){
            generico();
            $('h4').text('django1');
            $('.tipo p').text('Aplicação web');
            $('.equipe').append('<li class="col-12">Antonio Henrique</li>');
            $(".equipe li").css("display", 'block');
            $('.objetivo').append('<p class="col-12">Primeiro projeto do curso de desenvolvimento web que eu fiz, nivel iniciante.</p>');
            $('.tecnologias').append('<p class="col-12">Django, CSS, HTML e SQLite3</p>')
            $('.documentacao').append('<p class="col-12">Por ser um projeto simples, com o objetivo de colocar conhecimentos em prática, não possui documentação.</p>')
            $('.funcionamento').append('<a class="col-12" href="https://django1-ahdev.herokuapp.com/">Link do site</a>')
            $('.github').append('<a href="https://github.com/ahdesenvolvimento/primeirosite" class="col-12">https://github.com/ahdesenvolvimento/primeirosite</a>')   
        }
        else if (contagem == 4){
            generico();
            $('h4').text('django22');
            $('.tipo p').text('Aplicação web');
            $('.equipe').append('<li class="col-12">Antonio Henrique</li>');
            $(".equipe li").css("display", 'block');
            $('.objetivo').append('<p class="col-12">Segundo projeto do curso de desenvolvimento web que eu fiz, nivel médio.</p>');
            $('.tecnologias').append('<p class="col-12">Django, CSS, HTML e SQLite3</p>')
            $('.documentacao').append('<p class="col-12">Por ser um projeto simples, com o objetivo de colocar conhecimentos em prática, não possui documentação.</p>')
            $('.funcionamento').append('<a class="col-12" href="https://django22-ahdev.herokuapp.com/">Link do site</a>')
            $('.github').append('<a href="https://github.com/ahdesenvolvimento/segundosite" class="col-12">https://github.com/ahdesenvolvimento/segundosite</a>')   
        }
        else if (contagem == 5){
            generico();
            $('h4').text('AHDesenvolvimento - 1º Versão');
            $('.tipo p').text('Aplicação web');
            $('.equipe').append('<li class="col-12">Antonio Henrique</li>');
            $(".equipe li").css("display", 'block');
            $('.objetivo').append('<p class="col-12">Como desenvolvedor, nada melhor do que criar um site para ser utilizado como portfólio para demonstrar a todos uma visão sobre mim e meus projetos.</p>')
            $('.tecnologias').append('<p class="col-12">Django, HTML, CSS</p>');
            $('.documentacao').append('<p class="col-12">Este projeto não apresenta documentação.</p>')
            $('.funcionamento').append('<a class="col-12" href="https://ahdesenvolvimento.herokuapp.com/">Link do site</a>')
            $('.github').append('<a href=""class="col-12"></a>')   
        }
        else if (contagem == 6){
            generico();
            $('h4').text('AHDesenvolvimento - 2º Versão');
            $('.tipo p').text('Aplicação web');
            $('.equipe').append('<li class="col-12">Antonio Henrique</li>');
            $(".equipe li").css("display", 'block');
            $('.objetivo').append('<p class="col-12">Como desenvolvedor, nada melhor do que criar um site para ser utilizado como portfólio para demonstrar a todos uma visão sobre mim e meus projetos, porém este projeto foi desenvolvido inteiramente no frontend.</p>')
            $('.tecnologias').append('<p class="col-12">HTML, CSS, JavaScript, BootStrap4, JQuery</p>');
            $('.documentacao').append('<p class="col-12">Este projeto não apresenta documentação.</p>');
            $('.funcionamento').append('<a class="col-12" href="index.html">Link do site</a>');
            $('.github').append('<a href="https://github.com/ahdesenvolvimento/ahdesenvolvimento.github.io" class="col-12">https://github.com/ahdesenvolvimento/ahdesenvolvimento.github.io</a>')   
        }
        else if (contagem == 7){
            generico();
            $('h4').text('Delivery genérico');
            $('.tipo p').text('Aplicação web');
            $('.equipe').append('<li class="col-12">Antonio Henrique</li>');
            $(".equipe li").css("display", 'block');
            $('.objetivo').append('<p class="col-12">Principal objetivo foi treinar meus conhecimentos sobre Django, mas também tem o objetivo de servir como um sistema para pequenos negócios de delivery, OBS: Ainda está em desenvolvimento</p>');
            $('.tecnologias').append('<p class="col-12">HTML, CSS, JavaScript, BootStrap4, JQuery, Python(Django), SQLite (Por enquanto)</p>');
            $('.documentacao').append('<p class="col-12">Quando finalizar, irei disponibilizar.</p>')
            $('.funcionamento').append('<a class="col-12" href="https://projetodogueria.herokuapp.com/">Link do site (1º Versão)</a>');
            $('.github').append('<a href="https://github.com/ahdesenvolvimento/delivery_generico" class="col-12">https://github.com/ahdesenvolvimento/delivery_generico</a>')   
        }
    };


    /*
    $('.borda img').click(function(){
        $('#modalProjetos').on('shown.bs.modal', function(){
            $('body').css('background-color', 'blue');
        })
    })
    
    $('#modalProjetos').on('hide.bs.modal', function(){
        $('body').css('background-color', 'blue');
    });
    */
    $('div').click(function(){
        console.log($('div[class]'));
        if ($('div[class]') == ('.borda')){
            alert('meu ovo');
        }
    });
    
    /*
    $('button:nth-child(2)').click(function(){
        $('#meumodal').on('shown.bs.modal', function (e) {
            $('#meuovo').css('background-color', 'blue');
            $('p').text('eqwojeqwk');
          });
    });

    $('button:nth-child(3)').click(function(){
        $('#modalProjetos').on('shown.bs.modal', function (e) {
            $('#modalProjetos').css('background-color', 'blue');
            $('p').text('eqwoj512521eqwk');
          });
    });
    */
    $('.janela2').click(contar);
    function contar(){
        alert($('.dropdown-menu button').length);
    }

    function tamanho(){
        alert($('.header').height());
        alert($(document).width());
        alert($(window).width());

    }

    
    /*Funções referente ao segundo layout*/
    
    $('.hover:first-child').click(function(){
        alert('hnhnn to aqui')
        contagem = 1;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(1)').click(function(){
        contagem = 1;
        organizar();
    });

    $('img:nth-child(2)').click(function(){
        alert('ja to aqui')
        contagem = 2;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(2)').click(function(){
        contagem = 2;
        organizar();
    });

    $('.hover img:nth-child(3)').click(function(){
        contagem = 3;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(3)').click(function(){
        contagem = 3;
        organizar();
    });

    $('.borda img:nth-child(4)').click(function(){
        contagem = 4;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(4)').click(function(){
        contagem = 4;
        organizar();
    });

    $('.borda img:nth-child(5)').click(function(){
        contagem = 5;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(5)').click(function(){
        contagem = 5;
        organizar();
    });

    $('.borda img:nth-child(6)').click(function(){
        contagem = 6;
        organizar();
    });
    
    $('.controle .dropdown-item:nth-child(6)').click(function(){
        contagem = 6;
        organizar();
    });

    $('.borda img:nth-child(7)').click(function(){
        contagem = 7;
        organizar();
    });

    $('.controle .dropdown-item:nth-child(7)').click(function(){
        contagem = 7;
        organizar();
    });
    
});

function aparecer(){
    $('#modalProjetos').fadeIn(1500);
    $('#modalProjetos').delay(1500);
    $('#modalProjetos').fadeOut(1500);
    $('#modalProjetos').delay(1500);
    $('#modalProjetos').show(1500)

}

