
//Carregar primeiro elemento
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
})

