
var slider = $('.slider');
M.Slider.init(slider, {
   indicators: false,
   height: 500,
   transition: 500,
   interval: 6000
 });

 document.getElementById("B5").addEventListener("mousedown", reditalic);
    document.getElementById("B5").addEventListener("mouseup", blacknormal);

    function reditalic() {
        document.getElementById('B5').style.fontStyle='italic'; document.getElementById('BBB').style.color='red';
    }
    function blacknormal() {
        document.getElementById('B5').style.fontStyle=''; document.getElementById('BBB').style.color='black';
    }
