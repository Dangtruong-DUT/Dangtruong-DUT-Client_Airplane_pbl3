function kiemtradauvaoThemChuyenBay(giaChuyen,ngaybaychuyenbay) {

    var check=true;

    if (!required(ngaybaychuyenbay))
    {
         check= false
    }
    if (!required(giaChuyen)){
        check= false
    } else if (!kiemTraTatCaLaSo(giaChuyen)){
        check = false;
    } 

    return check
}