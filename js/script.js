/*$.fn.responsiveTabs = function() {
    this.addClass('responsive-tabs');
    this.append($('<span class="glyphicon glyphicon glyphicon-menu-hamburger"></span>'));

    this.on('click', 'li.active > a, span.glyphicon', function() {
        this.toggleClass('open');
    }.bind(this));

    this.on('click', 'li:not(.active) > a', function() {
        this.removeClass('open');
    }.bind(this));
};

$('.nav.nav-tabs').responsiveTabs();

//если веб-страницы загружена
$(document).ready(function() {
    //нажата кнопка с id="findTable"
    $("#findTable").click(function(){
        //сохраняем в переменную текст, который нам необходимо найти в таблице
        //из id="searchText"
        var search = $('#searchText').val().toLowerCase();
        //перебираем всем строки таблицы
        $("table tbody tr").each(function (i) {
            //если не нахоим искомый текст
            if ($(this).text().toLowerCase().replace(/\s+/g, '').indexOf(search)==-1)
            //то скрываем
                $(this).hide();
            else
            //иначе показываем
                $(this).show();
        });
    });
}); */

/*$(function()
{
    $('#inputDate8')
        .datePicker({inline:true})
        .bind('dateSelected',function(e, selectedDate, $td)
    {
        alert(selectedDate.asString());
    }
);
});*/