$(function() {
    $('#splash').fadeOut(2000);


    $('.buy_btn').each(function() {
        $(this).on('click', function () {
            $('#buy_modal').fadeIn();
        });
    });

    $('#buy_modal_esc').on('click', function () {
        $('#buy_modal').fadeOut();
    });

    


    const num = 100;
    for (let i = 0; i < num; i++) {
        let elem = '<option value="'+i+'">'+i+'</option>';
        $('#num_slct').append(elem);
    }


    $('.human').each(function() {
        $(this).on('click', function () {
            alert("なんらかのシェア方法")
        });
    });


    $('#ar_share').on('click', function () {
        $('#ar_modal').fadeIn();
    });
    $('#ar_modal_esc').on('click', function () {
        $('#ar_modal').fadeOut();
    });
});