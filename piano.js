"use strict";

var count = 2;
var key = '';
var meter = 0;
var dur = 0;
var sum = 0;
var selkey = '';
var audios = [];
var durs = [];
var total = [];
var mixerTrack;
var record;
var empty = true;

function PianoApp()
{
    var version = " 1.1",
        audioManager = new AudioManager("audio");
    
    /*function loadAudio()
    {
        var count = 0,
            loaded = 0,
            error = false;
        
        $(".keyboard .piano-key").each(function()
        {
            count++;
            var noteName = escape($(this).data("note"));
            audioManager.getAudio(noteName,
                function(audio)
                {
                    error = true;
                }
            );
        });
    }*/
    
    function initKeyboard()
    {
        var $keys = $(".keyboard .piano-key");
        if ($.isTouchSupported)
        {
            $keys.touchstart(function(e) {
                e.stopPropagation();
                e.preventDefault();
                keyDown($(this));
            })
            .touchend(function() { keyUp($(this)); })
        }
        else
        {
            $keys.mousedown(function() {
                keyDown($(this));
                
                return false;
            })
            .mouseup(function() { keyUp($(this)); })
            .mouseleave(function() { keyUp($(this)); });
        }
    }
    
    function keyDown($key)
    {
        if (!$key.hasClass("down"))
        {
            var x = null;
            $key.addClass("down");
            var noteName = $key.data("note");
            var audio = audioManager.getAudio(escape(noteName));
            audios.push(audio);
            audio.currentTime = 0;
            audio.play();

            write(noteName);
            empty = false;
            if (sum == meter) {
                $('.stave:last-child').append('<div class="bar_line symbol">' + '<img src="img/signs/bar_line.jpg">' + '</div>');
                sum = 0;
            }
            x = $('.stave:last-child .symbol:last-child').position();
            if ((x.left + 2 * 40) >= ($('.stave').width() - 80)) {
                $('#sheet').append('<div class="stave" id="' + count + '">' + '</div>');
                $('.stave:last-child').html('<div class="key_note ' +  key + '_key">' + '<img src="img/signs/' + key + '_key.jpg">' + '</div>');
                $('.key_note').css('margin-left', '60px');
                $('.stave:last-child').append('<div class="key_sign">' + '<img src="img/signs/' + selkey + '_' + key + '.jpg">' + '</div>');
                if (sum == 0) {
                    $('.bar_line:last-child').remove();
                }
                else {
                    for (var i = 0; i < 16; i++) {
                        if ($('.current .symbol:last-child').hasClass('bar_line')) {
                            $('.bar_line:last-child').remove();
                            break;
                        }
                        else {
                            debugger;
                            $('.stave:last-child .key_sign').after('.current .symbol:last-child');
                            $('.current .symbol:last-child').remove();
                        }
                    }
                }
                count++;
                $('.current').removeClass('current');
                $('.stave:last-child').addClass('current');
            }
        }
    }
    
    function keyUp($key)
    {
        $key.removeClass("down");
    }
    
    this.start = function()
    {
        /*loadAudio();*/
        initKeyboard();
        initTools();
    };
    
    function initTools()
    {
        var $buttons = $(".tools button");
        if ($.isTouchSupported)
        {
            $buttons.touchstart(function(e) {
                e.stopPropagation();
                e.preventDefault();
                toolDown($(this));
            })
        }
        else
        {
            $buttons.mousedown(function() {
                toolDown($(this));
                
                return false;
            })
        }
    }
    
    function toolDown($button)
    {
        if (!$button.hasClass("down"))
        {
            $('.tools button').each(function() {
                $(this).removeClass('down');
            });
            $button.addClass("down");
        }
    }
    
}


$(function()
{
    introJs().start();
    
    window.app = new PianoApp();
    window.app.start();
    
    $('.stave:last-child').addClass('current');
    
    document.getElementById('key_control').addEventListener('change', function() {
        var keyslist = document.getElementById('key_control');
        selkey = keyslist.options[keyslist.selectedIndex].value;
        if (document.getElementsByClassName('key_sign') != null) {
            $('.key_sign').remove();
        }
        $('.key_note').after('<div class="key_sign">' + '<img src="img/signs/' + selkey + '_' + key + '.jpg">' + '</div>');
    });
    
    document.getElementById('meter').addEventListener('change', function() {
        var meterlist = document.getElementById('meter');
        var selmeter = meterlist.options[meterlist.selectedIndex].value;
        if (document.getElementsByClassName('meter_sign') != null) {
            $('.meter_sign').remove();
        }
        switch (selmeter)
        {
            case "2/4":
                $('.key_sign').after('<div class="meter_sign">' + '<img src="img/signs/2_4.jpg">' + '</div>');
                meter = 2;
                break;
            case "3/4":
                $('.key_sign').after('<div class="meter_sign">' + '<img src="img/signs/3_4.jpg">' + '</div>');
                meter = 3;
                break;
            case "4/4":
                $('.key_sign').after('<div class="meter_sign">' + '<img src="img/signs/4_4.jpg">' + '</div>');
                meter = 4;
                break;
        }
        // introJs().exit();
    });
    
    $('#g_key').click(function() {
        debugger;
        if (document.getElementsByClassName('key_note') != null) {
            if (empty == true) {
                $('.key_note').remove();
                $('.stave').html('<div class="key_note g_key">' + '<img src="img/signs/g_key.jpg">' + '</div>');
                $('.key_note').css('margin-left', '60px');
                key = 'g';
            }
            else {
                 $('.stave:last-child').append('<div class="key_note g_key">' + '<img src="img/signs/g_key.jpg">' + '</div>');
                 key = 'g';
                 $('.stave:last-child').append('<div class="key_sign">' + '<img src="img/signs/' + selkey + '_' + key + '.jpg">' + '</div>');
            }
        }
        else {
            $('.stave').html('<div class="key_note g_key">' + '<img src="img/signs/g_key.jpg">' + '</div>');
            $('.key_note').css('margin-left', '60px');
            key = 'g';
        }
    });
    
    $('#f_key').click(function() {
        debugger;
        if (document.getElementsByClassName('key_note') != null) {
            if (empty == true) {
                $('.key_note').remove();
                $('.stave').html('<div class="key_note f_key">' + '<img src="img/signs/f_key.jpg">' + '</div>');
                $('.key_note').css('margin-left', '60px');
                key = 'f';
            }
            else {
                 $('.stave:last-child').append('<div class="key_note f_key">' + '<img src="img/signs/f_key.jpg">' + '</div>');
                 key = 'f';
                 $('.stave:last-child').append('<div class="key_sign">' + '<img src="img/signs/' + selkey + '_' + key + '.jpg">' + '</div>');
            }
        }
        else {
            $('.stave').html('<div class="key_note f_key">' + '<img src="img/signs/f_key.jpg">' + '</div>');
            $('.key_note').css('margin-left', '60px');
            key = 'f';
        }
    });
    
    document.getElementById('undo').addEventListener('click', function() {
       $('.stave:last-child .symbol:last-child').remove(); 
    });
    
    document.getElementById('whole_pause').addEventListener('click', function() {
        $('.stave:last-child').append('<div class="pause_note symbol">' + '<img src="img/signs/whole_pause.jpg">' + '</div>');
        sum += 4;
        total[total.length] += 4;
        if (sum == meter) {
            $('.stave:last-child').append('<div class="bar_line symbol">' + '<img src="img/signs/bar_line.jpg">' + '</div>');
            sum = 0;
        }
    });
    document.getElementById('half_pause').addEventListener('click', function() {
        $('.stave:last-child').append('<div class="pause_note symbol">' + '<img src="img/signs/half_pause.jpg">' + '</div>');
        sum += 2;
        total[total.length] += 2;
        if (sum == meter) {
            $('.stave:last-child').append('<div class="bar_line symbol">' + '<img src="img/signs/bar_line.jpg">' + '</div>');
            sum = 0;
        }
    });
    document.getElementById('quarter_pause').addEventListener('click', function() {
        $('.stave:last-child').append('<div class="pause_note symbol">' + '<img src="img/signs/quarter_pause.jpg">' + '</div>');
        sum += 1;
        total[total.length] += 1;
        if (sum == meter) {
            $('.stave:last-child').append('<div class="bar_line symbol">' + '<img src="img/signs/bar_line.jpg">' + '</div>');
            sum = 0;
        }
    });
    document.getElementById('eighth_pause').addEventListener('click', function() {
        $('.stave:last-child').append('<div class="pause_note symbol">' + '<img src="img/signs/eighth_pause.jpg">' + '</div>');
        sum += 0.5;
        total[total.length] += 0.5;
        if (sum == meter) {
            $('.stave:last-child').append('<div class="bar_line symbol">' + '<img src="img/signs/bar_line.jpg">' + '</div>');
            sum = 0;
        }
    });
    document.getElementById('sixteenth_pause').addEventListener('click', function() {
        $('.stave:last-child').append('<div class="pause_note symbol">' + '<img src="img/signs/sixteenth_pause.jpg">' + '</div>');
        sum += 0.25;
        total[total.length] += 0.25;
        if (sum == meter) {
            $('.stave:last-child').append('<div class="bar_line symbol">' + '<img src="img/signs/bar_line.jpg">' + '</div>');
            sum = 0;
        }
    });
    
    document.getElementById('play').addEventListener('click', function() {
        debugger;
        html2canvas($("#sheet"), {
            onrendered: function(canvas) {
                var blob = canvas.toBlob(function(blob) {
                download(blob, "sheet.jpg", "image/jpg");});
            }
        });
    });
});