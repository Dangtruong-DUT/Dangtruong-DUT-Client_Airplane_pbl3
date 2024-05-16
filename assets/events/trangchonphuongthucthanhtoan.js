$(document).ready(function() {
    // Khi thẻ <li> được click
    $('ul.phuongthucthanhtoan li').click(function() {
        // Xóa class 'select_box' khỏi tất cả các thẻ <li>
        $('ul.phuongthucthanhtoan').find("li").removeClass('select__phuongthuc');
        // Thêm class 'select_box' vào thẻ <li> được click
        $(this).addClass('select__phuongthuc');
        var _value = $(this).val();
        $('#input_phuongthuc').val(_value);
    });
});

$(document).ready(function(){
    $("#sudungmaquatang").change(function(){
        $(".magiamgia").toggle();
    });
});
$(document).ready(function(){
    $('.btnSubmit__magiamgia').click(function() {
       var tongtien= parseFloat($('#tongtientamtinh').text()) - parseFloat($('#tongtienmakhuyenmai').text()) + parseFloat($('#tongtienphidichvu').text())
       $('#tongtien').text(tongtien)
    });;
}); 