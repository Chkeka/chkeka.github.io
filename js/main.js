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
    
    if ($(window).width() < 1000) {
        $('.search-container').addClass('collapsed');
        $('.search-container.collapsed').html('<button class="btn btn-default" type="submit"><img src="../img/search.png"></button>');
        $('.search-container.collapsed button').on('click', function() {
            if ($('.menu-container').hasClass('opened')) {
                $('.menu-container').removeClass('opened');
                $('body').css('overflow-y', 'scroll');
            }
            if (!$('.search-container').next().hasClass('search-toggle')) {
               $('.search-container').after('<div class="search-toggle"></div>');
               $('.search-toggle').html('<form class="search-expanded"></form>');
               $('.search-expanded').html('<div class="search-expanded-wrapper"></div>');
               $('.search-expanded-wrapper').html('<input type="search" placeholder="Search Microsoft.com" max-length="200" tabindex="30"></input>');
               $('.search-expanded-wrapper input').after('<button type="submit" tabindex="40"></button>');
            }
            else {
                $('.search-toggle').remove();
            }
        });
    }
    
    if ($(window).width() < 899) {
        $('.dropdown-submenu').off("mouseover");
        $('.menu-container').addClass('collapsed');
        $('.sign-cart>.btn-group>.btn-group:first-of-type').after('<div class="btn-group" role="group" id="nav-toggle"></div>');
        $('#nav-toggle').html('<button type="button" class="btn btn-default"></button>');
        $('#nav-toggle button').html('<span id="trigger"></span>');
        $('#nav-toggle button').on('click', function() {
            if ($('.search-container').next().hasClass('search-toggle')) {
                $('.search-toggle').remove();
            }
            if (!$('.menu-container').hasClass('opened')) {
                $('body').css('overflow-y', 'hidden');
                $('.menu-container').addClass('opened');
                //$('#header .menu-container.collapsed.opened .dropdown-submenu a').attr('data-toggle', 'dropdown');
                $('#header .menu-container.collapsed.opened .dropdown-submenu a span').removeClass('glyphicon glyphicon-menu-right')
                .addClass('glyphicon glyphicon-menu-down');
                $('#header .menu-container.collapsed.opened .dropdown-submenu').removeClass('dropdown-submenu').addClass('dropdown');
                $('#header .menu-container.collapsed.opened .dropdown button').removeAttr('data-toggle');
                $('#header .menu-container.collapsed.opened .dropdown button').on('click', function (event) {
                    $(this).parent().toggleClass('open');
                });
                /*$('#header .menu-container.collapsed.opened .dropdown.open .dropdown-menu .dropdown>a').on('click', function (e) {
                    if (!$('#header .menu-container.collapsed.opened .dropdown').is(e.target) 
                        && $('#header .menu-container.collapsed.opened .dropdown').has(e.target).length === 0 
                        && $('.open').has(e.target).length === 0
                    ) {
                        $('#header .menu-container.collapsed.opened .dropdown').removeClass('open');
                    }
                });*/
                var dropdown = document.querySelectorAll('.menu-container.collapsed.opened .dropdown');
                var dropdownArray = Array.prototype.slice.call(dropdown, 0);
                dropdownArray.forEach(function(el) {
                    var button = el.querySelector('a'),
                        menu = el.querySelector('.dropdown-menu');
                    
                    button.onclick = function(event) {
                        if (!menu.hasClass('show')) {
                            menu.classList.add('show');
                            menu.classList.remove('hide');
                            $('.show').closest('.dropdown').next().css('z-index', '-1');
                            event.preventDefault();
                        } else {
                            $('.show').closest('.dropdown').next().css('z-index', '3');
                            menu.classList.remove('show');
                            menu.classList.add('hide');
                            event.preventDefault();
                        }
                    };
                })
                    
                Element.prototype.hasClass = function(className) {
                    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
                };
            }
            else {
                $('.menu-container').removeClass('opened');
                $('body').css('overflow-y', 'scroll');
            }
        });
    }
    
    $('.column-section').on('click', function() {
        if (!$(this).hasClass('expanded')) {
            $(this).addClass('expanded');
        }
        else {
            $(this).removeClass('expanded');
        }
    });
});