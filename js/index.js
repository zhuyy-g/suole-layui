$(function(){
	//点击左侧菜单栏之后出现新的tab页
	var $tabs = $('.index-left-bottom dd>a');
	//找到标签栏
	var $tabTitles = $('.layui-tab-title');
	var $tabContents = $('.layui-tab-content');
	let title;
	let content;
	$tabs.each(function (){
		$(this).on('click',function (){
			title = this.name;//gsgg
			content = $(this).html();//公司公告
			$tabTitles.find('.layui-this').removeClass('layui-this');
			$tabContents.find('.layui-show').removeClass('layui-show');
			$tabTitles.append('<li class="layui-this">'+ content + '</li>');
			$tabContents.append('<div class="layui-tab-item layui-show"><iframe src="'+ title +'.html" frameborder="0" style="width: 100%;"></iframe></div>')
		})
	})
})