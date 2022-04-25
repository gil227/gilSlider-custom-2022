//기본셋팅변수
var gilSlides = document.querySelector('.gil-slides'),
    gilItem = document.querySelectorAll('.gil-item'),
    currentIdx = 0,
    itemCount = gilItem.length,
    itemWidth = gilItem[0].offsetWidth,
    itemMargin = getComputedStyle(gilItem[0]).getPropertyValue('margin-right'),
    itemAllWidth = itemWidth + parseInt(itemMargin),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    itemActive = true;

//클론변수
var firstSlide = gilItem[0],
    lastSlide = gilItem[gilItem.length -1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true);

//드래그변수
var dragPosX1,
    dragPosX2,
    dragInitialPos,
    dragFinalPos;

//아이템 클론
function makeClone(){
    cloneFirst.classList.add('imClone');
    gilSlides.appendChild(cloneFirst);
    cloneLast.classList.add('imClone');
    gilSlides.prepend(cloneLast);
    updateWidht();
    setPos();
    
}

//총길이
function updateWidht(){
    var currentSlides = document.querySelectorAll('.gil-item'),
        newCurrentSlides = currentSlides.length,
        totalWidht = itemAllWidth*newCurrentSlides - parseInt(itemMargin);
    
    gilSlides.style.width = totalWidht + 'px';
}

//초기위치값(클론아닌것)
function setPos(){
    var initialPosValue = -(itemWidth + parseInt(itemMargin));
    gilSlides.style.left = initialPosValue +'px';
}

nextBtn.addEventListener('click',function(){atSlide('next')});
prevBtn.addEventListener('click',function(){atSlide('prev')});


//드래그
gilSlides.addEventListener('mousedown',dragStart);
gilSlides.addEventListener('touchstart',dragStart);
gilSlides.addEventListener('touchmove',dragMove);
gilSlides.addEventListener('touchend',dragEnd);

function dragStart(e){
    e.preventDefault();
    dragInitialPos = gilSlides.offsetLeft;
    console.log('dragStart!!');
    if(e.type === 'touchstart'){
        dragPosX1 = e.touches[0].clientX;
    }else{
        dragPosX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragMove;
    }
}
function dragMove(e){
    console.log('dragMove!!');
    if(e.type === 'touchmove'){
        dragPosX2 = dragPosX1 - e.touches[0].clientX;
        dragPosX1 = e.touches[0].clientX;
    }else{
        dragPosX2 = dragPosX1 - e.clientX;
        dragPosX1 = e.clientX;
    }
    gilSlides.style.left = (gilSlides.offsetLeft - dragPosX2) + 'px';
}
function dragEnd(){
    console.log('dragEnd!!');
    dragFinalPos = gilSlides.offsetLeft;
    if(dragFinalPos - dragInitialPos < -(itemAllWidth/2)){
        atSlide('next','dragging');
    }else if(dragFinalPos - dragInitialPos > (itemAllWidth/2)){
        atSlide('prev','dragging');
    }else{
        gilSlides.style.left = dragInitialPos+'px';
    }
    document.onmouseup = null;
    document.onmousemove = null;
}

//슬라이드 이동함수
function atSlide(active1, active2){
    gilSlides.classList.add('active');
    if(itemActive){
        if(!active2){
            dragInitialPos = gilSlides.offsetLeft;
        }
        if(active1 === 'next'){
            gilSlides.style.left = (dragInitialPos - itemAllWidth) + 'px';
            currentIdx++;
        }else{
            gilSlides.style.left = (dragInitialPos + itemAllWidth) + 'px';
            currentIdx--;
        }
    }
    itemActive = false;
}

//트랜지션 addEventLisner
gilSlides.addEventListener('transitionend',endSlide);
function endSlide(){
    gilSlides.classList.remove('active');
    if(currentIdx === -1){
        gilSlides.style.left = -(itemCount*itemAllWidth) +'px';
        currentIdx = itemCount-1;
    }else if(currentIdx === itemCount){
        gilSlides.style.left = -(1*itemAllWidth) +'px';
        currentIdx = 0;
    }
    itemActive = true;
}

makeClone();