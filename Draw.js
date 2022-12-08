function draw()
  {
    for (let i =0; i <= 70; i++)
    {
      
        var canvas = document.getElementById('circle');
        var ctx = canvas.getContext('2d'); 
        var X = 50+(i*Math.random()*100);
        var Y = 50+(i*Math.random()*100);
        var R = 45;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = Math.random();
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = randomColor;
        ctx.size = 30;
        ctx.stroke();
            
        
    } 
    
  }
  function drawRed()
  {
    for (let i =0; i <= 70; i++)
    {
      
        var canvas = document.getElementById('circle');
        var ctx = canvas.getContext('2d'); 
        var X = 50+(i*Math.random()*100);
        var Y = 50+(i*Math.random()*100);
        var R = 45;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = Math.random();
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = "#B14040";
        ctx.stroke();
            
        
    } 
    
  }

function Scroll(){
  var window_width = $(window).width() - $('#object').width();
  var document_height = $(document).height() - $(window).height();
(function () {
    (window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height);
        $('#object').css({
            'left': object_position_left
        });
    });
});
  }

function DoAnimation() {
  var targetElement = document.getElementById("target");
  targetElement.className = "animate";
}
