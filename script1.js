window.onload = function () {

    var inpX = document.getElementById('inpX');
    var inpY = document.getElementById('inpY');

    var sum = function () {

        var x = inpX.value;
        var y = inpY.value;
        var res = parseFloat(x) + parseFloat(y);
        document.getElementById('spanResult').innerHTML = res;

    }


    inpX.onkeydown = sum;
    inpY.onkeydown = sum;


}



