$(function () {
    const numOfModel = [
        10, 5, 6
    ];
    const model = [
        'koala.glb', 'gahana.glb', 'pie.glb'
    ];
    const label = [
        'コアラのマーチ', 'ガーナ', 'パイの実'
    ]
    let model_idx = 0;

    $('#splash').fadeOut(2000);
    // initModel();
    // $('#v_model').activateAR();

    // console.log($('#v_model').attr("orientation"));
    // $('#v_model').attr("orientation", "90deg 10deg 10deg");
    // let rX = -90;
    // let rY = 0;
    // let rZ = 0;
    // $('#v_model').attr("orientation", rX+"deg "+rY+"deg "+rZ+"deg");


    $('.buy_btn').each(function () {
        $(this).on('click', function () {
            $('#buy_modal').fadeIn();
        });
    });

    $('#buy_modal_esc').on('click', function () {
        $('#buy_modal').fadeOut();
    });


    const num = 100;
    for (let i = 0; i < num; i++) {
        let elem = '<option value="' + i + '">' + i + '</option>';
        $('#num_slct').append(elem);
    }


    $('.human').each(function () {
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

    // initModel();

    // $('.ar_model').each( function(idx) {
    //     // if (idx === 0) {
    //     //     $(this).show();
    //     //     console.log(idx);
    //     // }
    // });
    $('#v_model').attr('src', '../app/obj/' + model[model_idx]);

    let isDown = false;
    let isHover = false;
    let _x = 0;
    let _y = 0;
    $('#v_model')
        .on('mousedown', function (e) {
            isDown = true;
            isHover = false;
            // _x = e.offsetX;
            // _y = e.offsetY;
            _x = e.pageX - this.offsetLeft;
            _y = e.pageY - this.offsetTop;
        })
        .on('mousemove', function (e) {
            if (isDown) {
                let dx = e.pageX - _x;
                let dy = e.pageY - _y;
                $('#v_model').css('top', dy + 'px');
                $('#v_model').css('left', dx + 'px');


                let share_btn_x = Number($('#share_btn').css('left').replace('px', '')) + 40;
                let share_btn_y = Number($('#share_btn').css('top').replace('px', '')) + 40;

                let dist = Math.sqrt(Math.pow(e.pageX - share_btn_x, 2) + Math.pow(e.pageY - share_btn_y, 2));
                if (dist < 80) {
                    isHover = true;
                    // console.log("hogehogeho");
                    $('#share_btn').css('opacity', 0.2);
                }
            }
        })
        .on('mouseup', function (e) {
            if (isHover) {
                $('#ar_modal').fadeIn();
                $(this).fadeOut();
            }
            isDown = false;
            _x = 0;
            _x = 0;
        })
        .on('touchstart', function (e) {
            isDown = true;
            isHover = false;
            // _x = e.offsetX;
            // _y = e.offsetY;
            _x = e.pageX - this.offsetLeft;
            _y = e.pageY - this.offsetTop;
        })
        .on('touchmove', function (e) {
            if (isDown) {
                let dx = e.pageX - _x;
                let dy = e.pageY - _y;
                $('#v_model').css('top', dy + 'px');
                $('#v_model').css('left', dx + 'px');


                let share_btn_x = Number($('#share_btn').css('left').replace('px', '')) + 40;
                let share_btn_y = Number($('#share_btn').css('top').replace('px', '')) + 40;

                let dist = Math.sqrt(Math.pow(e.pageX - share_btn_x, 2) + Math.pow(e.pageY - share_btn_y, 2));
                if (dist < 80) {
                    isHover = true;
                    // console.log("hogehogeho");
                    $('#share_btn').css('opacity', 0.2);
                }
            }
        })
        .on('touchend', function (e) {
            if (isHover) {
                $('#ar_modal').fadeIn();
                $(this).fadeOut();
            }
            isDown = false;
            _x = 0;
            _x = 0;
        });

    $('#left_btn').on('click', function () {
        console.log(model_idx);
        if (model_idx < model.length - 1) {
            model_idx++;
        } else if (model_idx >= model.length - 1) {
            model_idx = 0;
        }
        updateModel();
        // $('#v_model').attr('src', './obj/' + model[model_idx]);
    });
    $('#right_btn').on('click', function () {
        console.log(model_idx);
        if (model_idx > 0) {
            model_idx--;
        } else if (model_idx <= 0) {
            model_idx = model.length - 1;
        }
        updateModel();
    });

    function updateModel() {
        $('#v_model').attr('src', '../app/obj/' + model[model_idx]);
        $('#v_model').fadeIn();
        $('#v_model').css('top', '0px');
        $('#v_model').css('left', '0px');
        $('#model_label').text(label[model_idx]);
        // $('.v_model').each(function () {
        // });
    }


    $('#share_btn').on('click', function () {
        // $('#ar_modal').fadeIn();
    });
    $('#ar_modal_esc').on('click', function () {
        $('#ar_modal').fadeOut();
        $('#share_btn').css('opacity', 1.0);
    });



   

    DeviceOrientationEvent.requestPermission().then(function (response) {
        if (response === 'granted') {
            window.addEventListener("deviceorientation", function (e) {
                var absolute = e.absolute;
                var rZ = e.alpha;
                var rY = 90 -1 * e.beta;
                var rX = e.gamma;
        
                $('#model_label').text(rX+", "+rY+", "+rZ);
                // $('#v_model').attr("orientation", rX+"deg 0 0");
                // $('#v_model').attr("orientation", "0deg "+rY+"deg 0deg");
                // $('#v_model').attr("orientation", rX+"deg "+rY+"deg "+rZ+"deg");
            });
        }
    }).catch(function (e) {
        console.log(e);
    });

});