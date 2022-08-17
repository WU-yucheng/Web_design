// 控制首頁 section 展開

const gameStyle = ['#game_style_1', '#game_style_2', '#game_style_3', '#game_style_4', '#game_style_5']
$(function () {
    gameStyle.forEach(function (step, i) {
        $(step).click(function () {
            // 點擊後判斷，已展開的收回
            if ($(step).css('flex') == '6 1 0%') {
                $(step).css({
                    'flex': ''
                });
            // 點擊後判斷，未展開的打開，其他展開的收回
            } else if ($(step).css('flex')) {
                $('.init_expand').css({
                    'flex': ''
                });
                $(step).css({
                    'flex': '6'
                });
            }
        });
    });
});