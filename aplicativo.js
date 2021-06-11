
// Evento de deixar opção ativada no menu da outra section
$('[data-grupo]').each(function(){

    var tags_a = $(this).find('[data-item]');
    var tags_conteudo = $(this).find('[data-conteudo]');
    
    tags_a.eq(0).addClass('active');
    tags_conteudo.eq(0).addClass('active');
   
    var section_da_vez = $(this);
    var section_da_vez_attr = section_da_vez.attr('data-grupo')

    tags_a.on('click', function(e){
        e.preventDefault();

        if( section_da_vez_attr == 'animais'){
            var conteudo_anterior_outra_section = $('[data-grupo="florestas"]').find('[data-conteudo].active');
            var item_anterior = $('[data-grupo="florestas"]').find('[data-item].active');
        } else {
            var conteudo_anterior_outra_section = $('[data-grupo="animais"]').find('[data-conteudo].active');
            var item_anterior = $('[data-grupo="animais"]').find('[data-item].active');
        }

        $('[data-conteudo]').removeClass('active')
        var conteudo = $(this).data('item')
        $('[data-conteudo="'+conteudo+'"]').addClass('active');
        conteudo_anterior_outra_section.addClass('active')

        $('[data-item]').removeClass('active');
        $(this).addClass('active')
        $(item_anterior).addClass('active')

    })
})

// Adicionar div no botão ativar
$('.botao_ativar').wrap("<div class='acima' data-seila='a'></div>")

// Adicionar ou remover classe animar no botão ativar
$('.botao_ativar').on('click', function(){
    if($(this).is('.animar') ){
        $(this).removeClass('animar')
    } else {
        $(this).addClass('animar')
    }
})

// Ao passar mouse por cima faz efeito de basquete
$('.botao_ativar').on('mouseenter', function(){
    if( $(this).is('.animar_scale') ){

    } else {
        $(this).addClass('animar_scale')
    }
})

// Media querie por JS não utilizada
document.body.onresize = function() {
    if (document.body.clientWidth < 600) {
    }
};

// Esconder Menu Mobile com a classe activee com media querie
$('.menu-cel').on('click', function(){
    if($('.nav-cel').parent().hasClass('activee')) {
        $('.nav-cel').parent().removeClass('activee')
    } else {
        $('.nav-cel').parent().addClass('activee')
    }
})

// Animação no scroll para efeito de transform com opaciti da classe anime
$(window).on('scroll', function(){
    // Elementos com data-anime
    $('[data-anime="scroll"]').each(function(){
        // Pegar posições da tela
        var baixo_item = $(this).offset().top;
        var altura_scroll_cima =  $(window).scrollTop()+1000

        if(altura_scroll_cima > baixo_item) $(this).addClass('anime')
               
        $(this).removeClass('anime')
    })
})