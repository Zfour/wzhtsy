$(function(){
  $(".userMenu").on("click", "li", function(){
    var sId = $(this).data("id"); //��ȡdata-id��ֵ
    window.location.hash = sId; //����ê��
    loadInner(sId);
  });
  function loadInner(sId){
    var sId = window.location.hash;
    var pathn, i;
    switch(sId){
      case "#center": pathn = "blank1.html"; i = 0; break;
��������������case "#account": pathn = "user_account.html"; i = 1; break;
      case "#trade": pathn = "user_trade.html"; i = 2; break;
      case "#info": pathn = "user_info.html"; i = 3; break;
������������ default: pathn = "user_center.html"; i = 0; break;
    }
    $("#content").load(pathn); //�������Ӧ������
    $(".userMenu li").eq(i).addClass("current").siblings().removeClass("current"); //��ǰ�б����
  }
  var sId = window.location.hash;
  loadInner(sId);
});