

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


/* $('div.menu-cel').on('click', function(){
    $('.navegacao').toggle('.nav-cel');
})
$('div.menu-cel').each(function(){
    console.log($(window).width());
})

console.log(window.screen.width)
 */

document.body.onresize = function() {
    if (document.body.clientWidth < 600) {
        /* $('.nav-cel').attr('style', 'display: block') */
        /* $('.navegacao').addClass('nav-cel') */
    }
    
};

/* 
$('.menu-cel').on('click', function(){
    if($(this).hasClass('nav-cel')) {
        console.log('aa')
        $('.navegacao').removeClass('nav-cel')
    } else {
        console.log('bb')
        $('.navegacao').addClass('nav-cel')
    }
}) */

$('.menu-cel').on('click', function(){
    if($('.nav-cel').parent().hasClass('active')) {
        $('.nav-cel').parent().removeClass('active')
    } else {
        $('.nav-cel').parent().addClass('active')
    }
})

console.log($(window).scrollTop())

$('[data-anime="scroll"]').each(function(){
    console.log($(this).offset().top);
    
})


$(window).on('scroll', function(){
    $('[data-anime="scroll"]').each(function(){
        var baixo_item = $(this).offset().top;
        var altura_scroll_cima =  $(window).scrollTop()

        console.log(baixo_item)
        console.log(altura_scroll_cima)
        

        if(altura_scroll_cima < baixo_item){
            $(this).addClass('anime')
        } else {
            $(this).removeClass('anime')
        }
    })

})