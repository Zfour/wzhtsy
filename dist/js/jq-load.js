$('nav ul li ul li ul li a').on('click', function(e) {                 
  e.preventDefault();  // 阻止链接跳转
   var url1 = this.href;  // 保存点击的地址

  $('nav  a.active').removeClass('active');    
  $(this).addClass('active');                       
 
   $('#container').remove();                          
 //$('#content').load(url1 + ' #container').fadeIn('slow');


  // 加载新内�?url地址与该地址下的选择器之间要有空�?表示该url下的#container
  $.ajax({  
        cache : false,   
        url: url1,  
        success: function(html) {  
            $('#content').html(html);  
        }  
    });  



  
 });
 
$('nav ul li ul li  a.jq-load ').on('click', function(e) {                 
  e.preventDefault();  // 阻止链接跳转
   var url1 = this.href;  // 保存点击的地址

  $('nav  a.active').removeClass('active');    
  $(this).addClass('active');                       
 
 $('#container').remove();                          
  //$('#content').load(url1 + ' #container').fadeIn('slow'); // 加载新内宿url地址与该地址下的选择器之间要有空栿表示该url下的#container

	  $.ajax({  
        cache : false,   
        url: url1,  
        success: function(html) {  
            $('#content').html(html);  
        }  
    });  
	
	 
	
 });
