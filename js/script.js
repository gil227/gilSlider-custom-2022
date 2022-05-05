var gilSlider = function(){
    console.log('gilSlider!!');

    //공통 사용변수
    var gilSlides = document.querySelector('.gil-slides');
    var gilItem = document.querySelectorAll('.gil-item');
    var itemLength = gilItem.length;
    var itemViewCount = 3; //슬라이더 뷰 갯수
    var itemMargin = 20; //슬라이더 마진값
    var currentIdx = 0;


    function activeEvent(){
        //초기 슬라이더 넓이값
        for(var i = 0; i < itemLength; i++){
            gilItem[i].style.width = gilSlides.offsetWidth/itemViewCount-itemMargin + 'px';
        }
        window.addEventListener('resize',onResizeHandler);

        setIndex();
        getIndex();
        setUlX();
        onPrevClickHandler();
        onNextClickHandler();
        onDragStartHandler();
        onDragMoveHandler();
        onDragEndHandler();
    }
    //전체 내부함수호출
    activeEvent();
    
    //무한루프
    function gilLoop(){
    
    }

    //index 셋팅
    function setIndex() {
        // for(var i =0; i < itemLength; i++){
        //     gilItem[i].setAttribute('gilslider-index',i);
        // }
        var idxDivision= parseInt(gilItem[0].style.width) + itemMargin;
        var idx = Math.abs(gilSlides.offsetLeft/idxDivision);
        console.log('idx->'+idx);
        return currentIdx = idx;
    }
    console.log(currentIdx);
    //index 잡아내는 함수
    function getIndex() {
        //console.log(gilSlides.style.left);
    }

    //prev btn
    function onPrevClickHandler(e) {
        var prevBtnTarget = document.querySelector('.prev');
        prevBtnTarget.addEventListener('click',function(e){
            
        });
    }
    //next btn
    function onNextClickHandler() {
        var nextBtnTarget = document.querySelector('.next');
    }

    //x,y 좌표 슬라이드 움직임
    function setUlX(x, isAnimation) {
        
    }

    //드래그 Start
    function onDragStartHandler(e) {

    }
    //드래그 Move
    function onDragMoveHandler(e) {

    }

    //드래그 End
    function onDragEndHandler(e) {

    }
    
    //리사이징
    function onResizeHandler(){
        //item  의 넓이값
        for(var i = 0; i < itemLength; i++){
            gilItem[i].style.width = gilSlides.offsetWidth/itemViewCount-itemMargin + 'px';
        }
    }
};

gilSlider();


// window.addEventListener('resize',function(){
//     resizeWidth = gilSlides.parentNode.offsetWidth;
//     console.log(resizeWidth);
// });

// //기본셋팅변수
// var gilSlides = document.querySelector('.gil-slides'),
//     gilItem = document.querySelectorAll('.gil-item'),
//     gilWrapWidth = gilSlides.parentNode.offsetWidth,
//     itemMargin = getComputedStyle(gilItem[0]).getPropertyValue('margin-right'),
//     prevBtn = document.querySelector('.prev'),
//     nextBtn = document.querySelector('.next'),
//     itemCount = gilItem.length,
//     currentIdx = 0,
//     viewLength = 2,
//     itemWidth = gilWrapWidth/viewLength - (parseInt(itemMargin)*(viewLength-1)/viewLength),
//     itemAllWidth = itemWidth + parseInt(itemMargin),
//     itemActive = true;
//     console.log('itemWidth ->'+itemWidth);
//     console.log('itemAllWidth ->'+itemAllWidth);
//     console.log('itemAllWidth ->'+gilWrapWidth);

// //드래그변수
// var dragPosX1,
//     dragPosX2,
//     dragInitialPos,
//     dragFinalPos;

// //아이템 넓이값 지정
// console.log(itemCount+2);
// for(var i=0; i<itemCount; i++){
//     gilItem[i].style.width = itemWidth +'px';
// }

// //클론변수
// var firstSlide = gilItem[0],
//     lastSlide = gilItem[gilItem.length -1],
//     cloneFirst = firstSlide.cloneNode(true),
//     cloneLast = lastSlide.cloneNode(true);

// //아이템 클론
// function makeClone(){
//     cloneFirst.classList.add('imClone');
//     gilSlides.appendChild(cloneFirst);
//     cloneLast.classList.add('imClone');
//     gilSlides.prepend(cloneLast);
//     updateWidht();
//     setPos();
    
// }

// //총길이
// function updateWidht(){
//     var currentSlides = document.querySelectorAll('.gil-item'),
//         newCurrentSlides = currentSlides.length,
//         totalWidht = itemAllWidth*newCurrentSlides - parseInt(itemMargin);
    
//     gilSlides.style.width = totalWidht + 'px';
// }

// //초기위치값(클론아닌것)
// function setPos(){
//     var initialPosValue = -(itemWidth + parseInt(itemMargin));
//     gilSlides.style.left = initialPosValue +'px';
// }

// nextBtn.addEventListener('click',function(){atSlide('next')});
// prevBtn.addEventListener('click',function(){atSlide('prev')});

// //드래그
// gilSlides.addEventListener('mousedown',dragStart);
// gilSlides.addEventListener('touchstart',dragStart);
// gilSlides.addEventListener('touchmove',dragMove);
// gilSlides.addEventListener('touchend',dragEnd);

// function dragStart(e){
//     e.preventDefault();
//     dragInitialPos = gilSlides.offsetLeft;
//     console.log('dragStart!!');
//     if(e.type === 'touchstart'){
//         dragPosX1 = e.touches[0].clientX;
//     }else{
//         dragPosX1 = e.clientX;
//         document.onmouseup = dragEnd;
//         document.onmousemove = dragMove;
//     }
// }
// function dragMove(e){
//     console.log('dragMove!!');
//     if(e.type === 'touchmove'){
//         dragPosX2 = dragPosX1 - e.touches[0].clientX;
//         dragPosX1 = e.touches[0].clientX;
//     }else{
//         dragPosX2 = dragPosX1 - e.clientX;
//         dragPosX1 = e.clientX;
//     }
//     gilSlides.style.left = (gilSlides.offsetLeft - dragPosX2) + 'px';
// }
// function dragEnd(){
//     console.log('dragEnd!!');
//     dragFinalPos = gilSlides.offsetLeft;
//     if(dragFinalPos - dragInitialPos < -(itemAllWidth/2)){
//         atSlide('next','dragging');
//     }else if(dragFinalPos - dragInitialPos > (itemAllWidth/2)){
//         atSlide('prev','dragging');
//     }else{
//         gilSlides.style.left = dragInitialPos+'px';
//     }
//     document.onmouseup = null;
//     document.onmousemove = null;
// }

// //슬라이드 이동함수
// function atSlide(active1, active2){
//     gilSlides.classList.add('active');
//     if(itemActive){
//         if(!active2){
//             dragInitialPos = gilSlides.offsetLeft;
//         }
//         if(active1 === 'next'){
//             gilSlides.style.left = (dragInitialPos - itemAllWidth) + 'px';
//             currentIdx++;
//         }else{
//             gilSlides.style.left = (dragInitialPos + itemAllWidth) + 'px';
//             currentIdx--;
//         }
//     }
//     itemActive = false;
// }

// //트랜지션 addEventLisner
// gilSlides.addEventListener('transitionend',endSlide);
// function endSlide(){
//     gilSlides.classList.remove('active');
//     if(currentIdx === -1){
//         gilSlides.style.left = -(itemCount*itemAllWidth) +'px';
//         currentIdx = itemCount-1;
//     }else if(currentIdx === itemCount){
//         gilSlides.style.left = -(1*itemAllWidth) +'px';
//         currentIdx = 0;
//     }
//     itemActive = true;
// }

// makeClone();