    window.onload = function () {

        var time = $('time');
        var height = 300;
        step = 2;

        var interval = function () {

            height -= step;
            time.style.height = height + 'px';

            if(height <= 10 || height >= 300){

                step *= -1;

            }


        }

        function $(id) {

            return document.getElementById(id);

        }

        var timer = setInterval(interval,20);

    }
