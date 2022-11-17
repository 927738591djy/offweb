var part1 = document.querySelector('.part1');
var part2 = document.querySelector('.part2');
var part3 = document.querySelector('.part3');
var part4 = document.querySelector('.part4');

window.addEventListener('scroll', function (e) {
    part1.style.cssText = `transform: translate3d(0px, ${window.scrollY}px, 0px)`
    part2.style.cssText = `transform: translate3d(0px, ${-window.scrollY / 10}px, 0px)`
    part3.style.cssText = `transform: translate3d(0px, ${window.scrollY}px, 0px)`
    part4.style.cssText = `transform: translate3d(0px, ${-window.scrollY / 10}px, 0px)`
})