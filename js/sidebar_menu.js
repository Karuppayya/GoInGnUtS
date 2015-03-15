$(function() {

    var $menuObjs = $('.menu .items-category');
    $.each($menuObjs, function(index, menuObj) {
        var $menuObj = $(menuObj);
        $menuObj.on('click', function(event) {
            var expandedItem = $('.menu .items-category.expanded').get(0);
            var targetItem = $(event.target).closest('.menu .items-category').get(0);
            $('.menu .items-category.expanded').find('.items').slideToggle(300);
            $('.menu .items-category.expanded').removeClass('expanded');
            if (targetItem != expandedItem) {

                $menuObj.find('.items').slideToggle(300);
                $menuObj.addClass('expanded');
            }
        });
    });

    var $innerList = $('li.menu');
    $innerList.on('click', function(event) {
        event.stopPropagation();
    })
});
