$(function () {
    const numOfModel = [
        10, 5, 6
    ];
    const model = [
        'koala.glb', 'gahana.glb', 'pie.glb'
    ];

    let model_idx = 0;
    initModel();

    // $('.ar_model').each( function(idx) {
    //     // if (idx === 0) {
    //     //     $(this).show();
    //     //     console.log(idx);
    //     // }
    // });
    $('#ar_model').attr('gltf-model', './obj/' + model[model_idx]);
    $('#v_model').attr('src', './obj/' + model[model_idx]);

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

    $('.ar_model').each(function () {
        $(this).on('click', function () {
            console.log("grab!");
        });
    });

    AFRAME.registerComponent('cursor-listener', {
        init: function () {
            this.el.addEventListener('click', function (event) {
                //クリック時の処理
                console.log("grab!!");
            });
        }
    });



    function initModel() {
        for (let i = 0; i < numOfModel[model_idx]; i++) {
            let x = Math.random(-20, 20);
            let y = Math.random(-20, 20);
            let z = Math.random(-20, 20);
            let r = Math.round(Math.random(1)) * 90;
            let elem = '<a-entity class="ar_model" position="' + x + ' ' + y + ' 0" rotation="-90 ' + r + ' 0" scale="2 2 2" gltf-model="./obj/koala.glb"></a-entity>';
            // let elem = '<a-entity class="ar_model" position="' + x + ' 0 ' + z + '" rotation="0 '+r+' 0" scale="2 2 2" gltf-model="./obj/koala.glb"></a-entity>';
            $('#a-marker').append(elem);
        }
    }

    function updateModel() {
        // $('#ar_model').attr('gltf-model', './obj/' + model[model_idx]);
        $('.ar_model').each(function () {
            $(this).attr('gltf-model', './obj/' + model[model_idx]);
        });
    }


    let isDown = false;
    let _x = 0;
    let _y = 0;
    $(window)
        .on('mousedown', function (e) {
            isDown = true;
            _x = e.offsetX;
            _y = e.offsetY;
        })
        .on('mousemove', function (e) {
            if (isDown) {
                let x = Number($('#move').attr('position').x);
                let y = Number($('#move').attr('position').y);

                let dx = (e.offsetX - _x) / 1000;
                let dy = (e.offsetY - _y) / 1000;
                // console.log(dx, dy);

                let newPos = String(x + dx) + ' ' + String(y - dy) + ' 0';
                console.log(newPos);
                $('#move').attr('position', newPos);
            }
        })
        .on('mouseup', function (e) {
            isDown = false;
            _x = 0;
            _x = 0;
        });

});
