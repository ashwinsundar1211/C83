var LastX, LastY;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
color = "lightblue";
width = 1;

var Screen_width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;

if (width < 992)
{
  document.getElementById("myCanvas").width = newWidth;
  document.getElementById("myCanvas").height = newHeight;
  document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e)
{
  color = document.getElementById("color").value;
  width = document.getElementById("width").value;
  LastX = e.touches[0].clientX - canvas.offsetLeft;
  LastY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e)
{
  currenttouchx = e.touches[0].clientX - canvas.offsetLeft;
  currenttouchy = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    console.log("last position of x = " + LastX + " and y = " + LastY);
    ctx.moveTo(LastX, LastY);
    console.log("current position of x = " + currenttouchx + " and y = " + currenttouchy);
    ctx.lineTo(currenttouchx, currenttouchy);
    ctx.stroke();
    LastX = currenttouchx;
    LastY = currenttouchy;
}

function ClearArea()
{
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}