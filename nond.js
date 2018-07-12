/**
 * Created by kaizi on 2018/7/10.
 */
$(function(){
   $("ul li a").mouseover(function(){
     $(this).css("color"," #a66d00");
   }) ;
     $("ul li a").mouseout(function(){
         $(this).css("color"," white");
     }) ;
 });

/*
function upDown(){
var index = 0 ;//定义显示的是第几个视频
// 找到所有的视频盒子
var video_boxs = document.querySelectorAll('.APP > div');


function upDown(event){
    video_boxs[index].querySelector('video').pause();

    if (event.key != 'ArrowDown') {
        if ('ArrowUp' == event.key) {
            // 往上的时候
            --index;

        }
    } else {
        // 往下的时候
        ++index;
    }
    var y = -780*index;
    document.querySelector('.APP').style.transform = 'translate(0,'+y+'px)';

    video_boxs[index].querySelector('video').play();


}window.addEventListener('keydown',upDown,true);
}
window.addEventListener('keydown',upDown,true);

*/

