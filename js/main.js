$(document).ready(function() {
    
    $('.dropdown-submenu').on("mouseover", function() {
        var subMenu = $(this).find('ul:first'),
        menu = $(this).closest('.dropdown-menu');
        subMenu.height(subMenu.childElementCount * 54.8);
        var subHeight = subMenu.height();
        if(menu.is('#store')) menu.height(548)
        else if (menu.is('#products')) menu.height(272);
        if(subHeight > menu.height()) {
            menu.height(subHeight);
        }
        else if(subHeight < menu.height()) {
            subMenu.height(menu.height());
        }
        
        var subOffset = new Object();
        subOffset.left = subMenu.offset().left;
        subOffset.top = menu.index() * 50;
        subMenu.offset(subOffset);
    });
    
    $('#subscribe .form-group input').on('click', function() {
        var inputField = $(this);
        inputField.closest('.form-group').find('label').css('opacity', '.5');
        inputField.on('input', function() {
            inputField.closest('.form-group').find('label').css('visibility', 'hidden');
        });
        $(document).click(function(event){
            if (!$(event.target).is(inputField)) {
                if (inputField.val() == "") {
                    $(inputField).closest('.form-group').find('label').css('visibility', 'visible');
                    $(inputField).closest('.form-group').find('label').css('opacity', '1');
                }
            }
        });
    });
});