$(function () {

    const model = [
        'koala.glb', 'gahana.glb', 'pie.glb'
    ];

    let model_idx = 0;

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
        $('#ar_model').attr('gltf-model', './obj/' + model[model_idx]);
        $('#v_model').attr('src', './obj/' + model[model_idx]);
    });
    $('#right_btn').on('click', function () {
        console.log(model_idx);
        if (model_idx > 0) {
            model_idx--;
        } else if (model_idx <= 0) {
            model_idx = model.length - 1;
        }
        $('#ar_model').attr('gltf-model', './obj/' + model[model_idx]);
        $('#v_model').attr('src', './obj/' + model[model_idx]);
    });
});