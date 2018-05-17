/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function () {

    var li = document.querySelector('li')
    var ol = document.querySelector('ol');

    var opacity = document.querySelectorAll('.opacity');

    var prev = document.querySelector('.arrowLeft');
    var next = document.querySelector('.arrowRight');

    var blackChair = document.querySelector('.black');
    var orangeChair = document.querySelector('.orange');

    li.addEventListener('mouseover', function () {
        ol.style.display = 'block';
    });

    li.addEventListener('mouseout', function () {
        ol.style.display = 'none';
    });


    opacity.forEach(function (element, key) {
        var clair = document.querySelector('.chairClair');
        var margarita = document.querySelector('.chairMargarita');

        clair.addEventListener('mouseover', function () {
            opacity[0].style.display = 'none';
        });

        clair.addEventListener('mouseout', function () {
            opacity[0].style.display = 'block';
        });

        margarita.addEventListener('mouseover', function () {
            opacity[1].style.display = 'none';
        });

        margarita.addEventListener('mouseout', function () {
            opacity[1].style.display = 'block';
        });
    });
    
    next.addEventListener('click', function() {
        if (blackChair.classList.contains('hide')) {
            blackChair.classList.remove('hide');
            orangeChair.classList.add('hide');
        } else {
            blackChair.classList.add('hide');
            orangeChair.classList.remove('hide');
        }
    });
    
    prev.addEventListener('click', function() {
        if (blackChair.classList.contains('hide')) {
            blackChair.classList.remove('hide');
            orangeChair.classList.add('hide');
        } else {
            blackChair.classList.add('hide');
            orangeChair.classList.remove('hide');
        }
    });
});
