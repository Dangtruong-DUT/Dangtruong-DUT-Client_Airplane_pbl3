
var tenHK = [
    "Nguyễn Văn Be",
    "Nguyễn Văn A",
];
var soHK=2;
var loaicb='KH';

$(document).ready(function(){
    $(".ghethuonggiachuyendi, .ghethuonggiachuyenve,.ghephothongchuyenve,.ghephothongchuyendi").click( function chonChoNgoi() {
        
        if (!$(this).hasClass('gheBiChon')) {
            $(this).addClass("gheBiChon");
            var idThe= $(this).attr('id');
            var idchuyendiHK;
            var idchuyenveHK;
            for (var i=1 ;i<=soHK;i++) {
                idchuyendiHK='#chuyendiHK'+i;
                idchuyenveHK='#chuyenveHK'+i;
                if (!$(idchuyendiHK).hasClass('hidden')) 
                {
                    $('#MaSoGhechuyendiHK'+i).text(idThe);
                    var idghehuychon= $('#maSoGhe--chuyendiHK'+i).val();
                    if (idghehuychon!="") {
                        $('#'+idghehuychon).removeClass('gheBiChon');
                    }
                    $('#maSoGhe--chuyendiHK'+i).val(idThe);
                    break;
                } else
                if (!$(idchuyenveHK).hasClass('hidden'))  {
                    $('#MaSoGhechuyenveHK'+i).text(idThe);
                    var idghehuychon= $('#maSoGhe--chuyenveHK'+i).val();
                    if (idghehuychon!="") {
                        $('#'+idghehuychon).removeClass('gheBiChon');
                    }
                    $('#maSoGhe--chuyenveHK'+i).val(idThe);
                    break;
                }
            }
        }
    })
})
var index=1;
function chuyenTiepChonChoNgoi() {
    var check = true;
    for (var i = 1; i <= soHK; i++) {
        if (($('#maSoGhe--chuyenveHK' + i).val() == "") && loaicb == 'KH') {
            check = false;
        }
        if (($('#maSoGhe--chuyendiHK' + i).val() == "")) {
            check = false;
        }
    }
    for (var i = 1; i <= soHK; i++) {
        var j = i + 1;
        var idchuyendiHK = 'chuyendiHK' + i;
        var idchuyenveHK = 'chuyenveHK' + i;
        if (!document.getElementById(idchuyenveHK).classList.contains('hidden') &&  loaicb == 'KH' && i != soHK) {
            document.getElementById(idchuyenveHK).classList.add('hidden');
            document.getElementById('chuyendiHK' + j).classList.remove('hidden');
            document.getElementById('chuyenbaydi--tieude').classList.add('chuyenbaydangchon');
            document.getElementById('chuyenbayve--tieude').classList.remove('chuyenbaydangchon');
            document.getElementById('maybay__chuyenve').classList.add('hidden');
            document.getElementById('maybay__chuyendi').classList.remove('hidden');
            index=i+1;
            break;
        } else if (!document.getElementById(idchuyendiHK).classList.contains('hidden') && loaicb == 'KH') {
            document.getElementById(idchuyendiHK).classList.add('hidden');
            document.getElementById(idchuyenveHK).classList.remove('hidden');
            document.getElementById('chuyenbaydi--tieude').classList.remove('chuyenbaydangchon');
            document.getElementById('chuyenbayve--tieude').classList.add('chuyenbaydangchon');
            document.getElementById('maybay__chuyenve').classList.remove('hidden');
            document.getElementById('maybay__chuyendi').classList.add('hidden');
            index=i;
            break;
        } else if (!document.getElementById(idchuyendiHK).classList.contains('hidden') && loaicb == 'MC' && i != soHK) {
            document.getElementById('chuyendiHK' + j).classList.remove('hidden');
            document.getElementById(idchuyendiHK).classList.add('hidden');
            index=i+1;
            break;
        }
    }
    if (index != soHK) {
        check = false;
    }

    return check;
}


function quayLaiChonChoNgoi() {

    for (var i=1 ;i<=soHK;i++) {
        var idchuyendiHK='#chuyendiHK'+i;
        var idchuyenveHK='#chuyenveHK'+i;
        if (!$(idchuyendiHK).hasClass('hidden') && loaicb=='KH' && (i!=1)) {
            $(idchuyendiHK).addClass('hidden');
            var j=i-1;
            $('#chuyenveHK'+j).removeClass('hidden');
            $('#chuyenbayve--tieude').addClass('chuyenbaydangchon');
            $('#chuyenbaydi--tieude').removeClass('chuyenbaydangchon');
            document.getElementById('maybay__chuyenve').classList.remove('hidden');
            document.getElementById('maybay__chuyendi').classList.add('hidden');
            index=i-1;
            break;
        }else

        if (!$(idchuyenveHK).hasClass('hidden') && loaicb=='KH') {
            $(idchuyendiHK).removeClass('hidden');
            $(idchuyenveHK).addClass('hidden');
            $('#chuyenbaydi--tieude').addClass('chuyenbaydangchon');
            $('#chuyenbayve--tieude').removeClass('chuyenbaydangchon');
            document.getElementById('maybay__chuyendi').classList.remove('hidden');
            document.getElementById('maybay__chuyenve').classList.add('hidden');
            index=i;
            break;
        } else
        if (!$(idchuyendiHK).hasClass('hidden') && loaicb=='MC' && (i!=1)) {
            var j=i-1;
            $('#chuyendiHK'+j).removeClass('hidden');
            index=i-1;
            break;
        }
    }
   
    return true;
}