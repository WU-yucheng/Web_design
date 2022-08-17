const gameStyle = ['#game_style_1', '#game_style_2', '#game_style_3', '#game_style_4', '#game_style_5']
$(function () {
    let i = 0
    gameStyle.forEach(function (step, j) {
        $(step).click(function () {
            i++
            if (i % 2 == 1) {
                $(step).css({
                    'flex': '6'
                });
            } else {
                $(step).css({
                    'flex': '1'
                });
            }
        });
    });
});