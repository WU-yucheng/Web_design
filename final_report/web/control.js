// 控制首頁 section 展開
const gamestyle_list = ['#game_style_1', '#game_style_2', '#game_style_3', '#game_style_4', '#game_style_5']
$(function () {
    gamestyle_list.forEach(function (step, i) {
        // section 裡的東西先全部隱藏起來
        $(step + ' *').hide();
        $(step).click(function () {
            // 點擊後判斷，已展開的收回並隱藏內容
            if ($(step).css('flex') == '6 1 0%') {
                $(step).css({
                    'flex': ''
                });
                $(step + ' *').hide();
                // 點擊後判斷，未展開的打開，其他展開的收回並隱藏內容
            } else if ($(step).css('flex')) {
                $('.init_expand').css({
                    'flex': ''
                });
                $('.init_expand *').hide();
                $(step).css({
                    'flex': '6'
                });
                $(step + '>*').show()
                $(step + ' h1').css({
                    'color': 'var(--color_font)',
                    'margin-top': '20px',
                });
            }
        });
    });
});

// 控制導覽列展開
$(function () {
    $('.bar').click(function () {
        $('.hidden_bar').toggleClass('shown_bar')
    });
});
