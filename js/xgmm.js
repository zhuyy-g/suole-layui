$(function (){
    //鼠标移入登录按钮之后，按钮内容发生变化
    $('#confirm').hover(
        function (){
            $(this).html('修改密码<i class="layui-icon">&#xe602;</i>');
        },
        function (){
            $(this).html('修改密码');
        }
    )
    $('#back').hover(
        function (){
            $(this).html('返回<i class="layui-icon">&#xe602;</i>');
        },
        function (){
            $(this).html('返回');
        }
    )
})