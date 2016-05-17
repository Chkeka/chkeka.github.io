

function write(note) {
    var value = '';
    var num = 0;
    if ($('#whole_note').hasClass('down')) {
        value = 'whole';
        dur = 4;
    }
    else if ($('#half_note').hasClass('down')) {
        value = 'half';
        dur = 2;
    }
    else if ($('#quarter_note').hasClass('down')) {
        value = 'quarter';
        dur = 1;
    }   
    else if ($('#eighth_note').hasClass('down')) {
        value = 'eighth';
        dur = 0.5;
    }   
    else if ($('#sixteenth_note').hasClass('down')) {
        value = 'sixteenth';
        dur = 0.25;
    }
    switch (note) {
        case "1C":
        case "2C":
        case "3C":
        case "4C":
        case "5C":
        case "6C":
        case "7C":
        case "8C":
            if ((selkey == 'C - a') || (selkey == 'G - e') || (selkey == 'F - d') || (selkey == 'B - g') || (selkey == 'E-flat - c') || (selkey == 'A-flat - f') || (selkey == 'D-flat - b')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else if ((selkey == 'D - h') || (selkey == 'A - f-sharp') || (selkey == 'E - c-sharp') || (selkey == 'H - g-sharp') || (selkey == 'F-sharp - d-sharp') || (selkey == 'G-flat - e-flat') || (selkey == 'C-flat - a-flat')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note + '_natural_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
            num = Number(note[0]) - 1;
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + num + 'H_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "1C#":
        case "2C#":
        case "3C#":
        case "4C#":
        case "5C#":
        case "6C#":
        case "7C#":
            if ((selkey == 'D - h') || (selkey == 'A - f-sharp') || (selkey == 'E - c-sharp') || (selkey == 'H - g-sharp') || (selkey == 'F-sharp - d-sharp') || (selkey == 'C-sharp - a-sharp')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'C' + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else if ((selkey == 'A-flat - f') || (selkey == 'D-flat - b') || (selkey == 'G-flat - e-flat') || (selkey == 'C-flat - a-flat')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'D_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note[0] + 'C_sharp_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'C_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "1D":
        case "2D":
        case "3D":
        case "4D":
        case "5D":
        case "6D":
        case "7D":
            if ((selkey == 'C - a') || (selkey == 'G - e') || (selkey == 'D - h') || (selkey == 'A - f-sharp') || (selkey == 'F - d') || (selkey == 'B - g') || (selkey == 'E-flat - c')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note + '_natural_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "1D#":
        case "2D#":
        case "3D#":
        case "4D#":
        case "5D#":
        case "6D#":
        case "7D#":
            if ((selkey == 'E - c-sharp') || (selkey == 'H - g-sharp') || (selkey == 'F-sharp - d-sharp') || (selkey == 'C-sharp - a-sharp')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'D_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else if ((selkey == 'B - g') || (selkey == 'E-flat - c') || (selkey == 'A-flat - f') || (selkey == 'D-flat - b') || (selkey == 'G-flat - e-flat') || (selkey == 'C-flat - a-flat')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'E_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note[0] + 'D_sharp_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'D_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "1E":
        case "2E":
        case "3E":
        case "4E":
        case "5E":
        case "6E":
        case "7E":
            if ((selkey == 'C - a') || (selkey == 'G - e') || (selkey == 'D - h') || (selkey == 'A - f-sharp') || (selkey == 'E - c-sharp') || (selkey == 'H - g-sharp') || (selkey == 'F - d')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else  if ((selkey == 'B - g') || (selkey == 'E-flat - c') || (selkey == 'A-flat - f') || (selkey == 'D-flat - b') || (selkey == 'G-flat - e-flat') || (selkey == 'F-sharp - d-sharp') || (selkey == 'C-sharp - a-sharp')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note + '_natural_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'F_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "1F":
        case "2F":
        case "3F":
        case "4F":
        case "5F":
        case "6F":
        case "7F":
            if ((selkey == 'C - a') || (selkey == 'F - d') || (selkey == 'B - g') || (selkey == 'E-flat - c') || (selkey == 'A-flat - f') || (selkey == 'D-flat - b') || (selkey == 'G-flat - e-flat')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else  if ((selkey == 'G - e') || (selkey == 'D - h') || (selkey == 'A - f-sharp') || (selkey == 'E - c-sharp') || (selkey == 'H - g-sharp') || (selkey == 'C-flat - a-flat')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note + '_natural_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'E_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "1F#":
        case "2F#":
        case "3F#":
        case "4F#":
        case "5F#":
        case "6F#":
        case "7F#":
            if ((selkey == 'G - e') || (selkey == 'D - h') || (selkey == 'A - f-sharp') || (selkey == 'E - c-sharp') || (selkey == 'H - g-sharp') || (selkey == 'F-sharp - d-sharp') || (selkey == 'C-sharp - a-sharp')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'F_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else if ((selkey == 'D-flat - b') || (selkey == 'G-flat - e-flat') || (selkey == 'C-flat - a-flat')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'G_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note[0] + 'F_sharp_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'F_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "1G":
        case "2G":
        case "3G":
        case "4G":
        case "5G":
        case "6G":
        case "7G":
            if ((selkey == 'C - a') || (selkey == 'G - e') || (selkey == 'D - h') || (selkey == 'F - d') || (selkey == 'B - g') || (selkey == 'E-flat - c') || (selkey == 'A-flat - f')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note + '_natural_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "1G#":
        case "2G#":
        case "3G#":
        case "4G#":
        case "5G#":
        case "6G#":
        case "7G#":
            if ((selkey == 'A - f-sharp') || (selkey == 'E - c-sharp') || (selkey == 'H - g-sharp') || (selkey == 'F-sharp - d-sharp') || (selkey == 'C-sharp - a-sharp')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'G_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else if ((selkey == 'E-flat - c') || (selkey == 'A-flat - f') || (selkey == 'D-flat - b') || (selkey == 'G-flat - e-flat') || (selkey == 'C-flat - a-flat')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'A_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note[0] + 'G_sharp_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'G_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "0A":
        case "1A":
        case "2A":
        case "3A":
        case "4A":
        case "5A":
        case "6A":
        case "7A":
            if ((selkey == 'C - a') || (selkey == 'G - e') || (selkey == 'D - h') || (selkey == 'A - f-sharp') || (selkey == 'E - c-sharp') || (selkey == 'F - d') || (selkey == 'B - g')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note + '_natural_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "0A#":
        case "1A#":
        case "2A#":
        case "3A#":
        case "4A#":
        case "5A#":
        case "6A#":
        case "7A#":
            if ((selkey == 'H - g-sharp') || (selkey == 'F-sharp - d-sharp') || (selkey == 'C-sharp - a-sharp')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'A_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else if ((selkey == 'F - d') || (selkey == 'B - g') || (selkey == 'E-flat - c') || (selkey == 'A-flat - f') || (selkey == 'D-flat - b') || (selkey == 'G-flat - e-flat') || (selkey == 'C-flat - a-flat')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'H_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note[0] + 'A_sharp_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note[0] + 'A_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
        case "0H":
        case "1H":
        case "2H":
        case "3H":
        case "4H":
        case "5H":
        case "6H":
        case "7H":
            if ((selkey == 'C - a') || (selkey == 'G - e') || (selkey == 'D - h') || (selkey == 'A - f-sharp') || (selkey == 'E - c-sharp') || (selkey == 'H - g-sharp') || (selkey == 'F-sharp - d-sharp') || (selkey == 'C-sharp - a-sharp')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
             else  if ((selkey == 'F - d') || (selkey == 'B - g') || (selkey == 'E-flat - c') || (selkey == 'A-flat - f') || (selkey == 'D-flat - b') || (selkey == 'C-sharp - a-sharp')) {
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/signs/' + note + '_natural_' + key + '.jpg">' + '</div>');
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + note + '_' + value + '_' + key + '.jpg">' + '</div>');
            }
            else {
                num = Number(note[0]) + 1;
                $('.stave:last-child').append('<div class="note symbol">' + '<img src="img/notes/' + num + 'C_' + value + '_' + key + '.jpg">' + '</div>');
            }
            break;
    }
    sum += dur;
    total.push(total[total.length] + dur);
    durs.push(dur);
}