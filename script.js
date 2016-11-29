    window.onload = function () {

        function fShow(){

            var divTime = document.getElementById('time');
            divTime.style.visibility = 'visible';

        }

        function fTick(){

            var date = new Date();

            var t = date.getHours() + ':' +
                    date.getMinutes() + ':' +
                    date.getSeconds();

            var divTime = document.getElementById('time');
            divTime.innerHTML = t;

        }

        setTimeout(fShow, 2000);
        var interval = setInterval(fTick, 1000);

        setTimeout(function(){

            clearInterval(interval);


        },10000)

    }