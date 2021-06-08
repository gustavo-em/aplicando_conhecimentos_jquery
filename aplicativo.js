$('.tab-menu1 a').on('click', function(e){
    e.preventDefault();
    var text = 'Titulo editavel';

    var a = $(this).parents().eq(1).find('a')

    console.log(a)

    //Classe no próprio item
    $(this).addClass('active');

    //No conteudo
    var item = $(this).data('item');
    $(item).addClass('active');

    //Mudar titulo conteudo
    $(item+' h3').eq(0).text(text)
})

