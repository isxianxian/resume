$(function(){
    let myAudio = $("#audio")[0];
    setTimeout(function(){
        console.log('ll');
        myAudio.play();
    },150)

    $animate = $(
        `<div class="animate">
            <div class='cir1'></div>
            <div class="cir2"></div>
            <div class="cir3"></div>
            <div class="cir4"></div>
        </div>`);
    

    let move = function(sw){
        let index = sw.activeIndex,
            arr = sw.slides;

        arr.forEach((item,i)=>{
            let $nowEle = $(arr[i]);
            if(index == i){
                $nowEle.prepend($animate);
                setTimeout(function(){
                    $animate.remove();
                    $nowEle.children('div').attr('id' , `page${i+1}`);
                    $(`.page${i+1}`).fadeIn(100);
                } , 1200);
            }else{
                $nowEle.children('div').attr('id' , '');
                $(`.page${i+1}`).hide();
            }
        })

    }

    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        onInit:move,
        onTransitionEnd:move
      })
});
