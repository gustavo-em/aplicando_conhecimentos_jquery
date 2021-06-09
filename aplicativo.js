
/* //Carregar primeiro elemento
$('.tab-menu1 a').eq(0).addClass('active')
$('section.animais div.item').eq(0).addClass('active')
$('section.animais div.item').each(function(){ $(this).css('padding-top', '10px') })

$('.tab-menu1 a').on('click', function(e){
    e.preventDefault();
    var text = 'Titulo editavel';

    var remover_active = function(){
        $(this).removeClass('active');
    }
    $(this).parents().eq(1).find('a').each(remover_active)
    $('section.animais div.item').each(remover_active)

    //Classe no próprio item
    $(this).addClass('active');

    //No conteudo
    var item = $(this).data('item');
    $(item).addClass('active');

    //Mudar titulo conteudo
    $(item+' h3').eq(0).text(text)
}) */
$('[data-conteudo]').each( function(){
    /* $(this).css({
        "position": "absolute",
        "top": "0px",
        "opacity": "0",
	    "visibility": "hidden"

    }) */

    
})

$('[data-grupo]').each(function(){

    var tags_a = $(this).find('[data-item]');
    var tags_conteudo = $(this).find('[data-conteudo]');
    
   
    var section_da_vez = $(this);
    var section_da_vez_attr = section_da_vez.attr('data-grupo')

    
    

    tags_a.on('click', function(e){
        e.preventDefault();
        

        if( section_da_vez_attr == 'animais'){
            var conteudo_anterior_outra_section = $('[data-grupo="florestas"]').find('[data-conteudo].active');
            var item_anterior = $('[data-grupo="florestas"]').find('[data-item].active');
        }

        $('[data-conteudo]').removeClass('active')
        var conteudo = $(this).data('item')
        $('[data-conteudo="'+conteudo+'"]').addClass('active');

        if( section_da_vez_attr == 'animais'){
            conteudo_anterior_outra_section.addClass('active')
        }

        $('[data-item]').removeClass('active');
        $(item_anterior).addClass('active')
        $(this).addClass('active')
        

        /* if(section_da_vez.attr('data-grupo') == 'animais'){
            $('[data-grupo="florestas"]').find('[data-conteudo="'+conteudo1+'"]').addClass('active')
        } */

    })

    

})

$('.acima_tudo').each( function(){
    console.log($(this).find('[data-conteudo]'));
})

$('.botao_ativar').wrap("<div class='acima'></div>")
$('.acima').css({
    "display": "flex",
    "align-items": "center",
    "justify-content": "center"
})

$('.acima p').css({
    "margin": "auto",
    "padding": "auto"
})