$('nav ul li ul li ul li a').on('click', function(e) {                 
  e.preventDefault();  // 阻止链接跳转
   var url = this.href;  // 保存点击的地址

  $('nav  a.current').removeClass('current');    
  $(this).addClass('current');                       
 
 $('#container').remove();                          
  $('#content').load(url + ' #container').fadeIn('slow'); // 加载新内�?url地址与该地址下的选择器之间要有空�?表示该url下的#container
 });