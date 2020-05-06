$(function (){
    //鼠标移入登录按钮之后，按钮内容发生变化
    let btn = $('button');
    btn.hover(
        function (){
            $(this).html('登录<i class="layui-icon">&#xe602;</i>');
        },
        function (){
            $(this).html('登录');
        }
    )
})