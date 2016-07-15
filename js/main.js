$(document).ready(function() {
    
    $('.dropdown-submenu').on("mouseover", function() {
        var subMenu = $(this).find('ul:first'),
        menu = $(this).closest('.dropdown-menu');
        subMenu.height(subMenu.childElementCount * 54.8);
        var subHeight = subMenu.height();
        if(menu.is('#store')) menu.height(548)
        else if (menu.is('#products')) menu.height(274);
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
    
    
});