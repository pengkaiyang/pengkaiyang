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
var index = 0 ;//������ʾ���ǵڼ�����Ƶ
// �ҵ����е���Ƶ����
var video_boxs = document.querySelectorAll('.APP > div');


function upDown(event){
    video_boxs[index].querySelector('video').pause();

    if (event.key != 'ArrowDown') {
        if ('ArrowUp' == event.key) {
            // ���ϵ�ʱ��
            --index;

        }
    } else {
        // ���µ�ʱ��
        ++index;
    }
    var y = -780*index;
    document.querySelector('.APP').style.transform = 'translate(0,'+y+'px)';

    video_boxs[index].querySelector('video').play();


}window.addEventListener('keydown',upDown,true);
}
window.addEventListener('keydown',upDown,true);

*/

