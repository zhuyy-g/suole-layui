const setL = function () {
    l++;
    document.getElementById("divPic").scrollLeft = l;
    if (l >= 790 * 8) {
        l = 0;
    }
}
$(function($) {
    //以下是提醒栏的循环事件
    // let top = $('.index-remind-main>ul').css("top");
    setInterval(setL, 1);
});
