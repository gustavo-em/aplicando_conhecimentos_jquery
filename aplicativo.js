

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


$('.botao_ativar').wrap("<div class='acima' data-seila='a'></div>")


$('.botao_ativar').on('click', function(){

    if( $(this).is('.animar') ){
        $(this).removeClass('animar')
    } else {
        $(this).addClass('animar')
    }

})

$('.botao_ativar').on('mouseenter', function(){
    if( $(this).is('.animar_scale') ){

    } else {
        $(this).addClass('animar_scale')
    }
})

