const sliderFunc = () => {
    const imgList = document.querySelector('.img-List');
    const preNextBtns = document.querySelectorAll('.preNextBtns');
    
    preNextBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            const direction = btn.id === 'previousBtn' ? -1 : 1;
            const scrollAmount = imgList.clientWidth * direction;
            imgList.scrollBy({left : scrollAmount, behavior: 'smooth'});
        })
    })
    
    const maxLeftScroll = imgList.scrollWidth - imgList.clientWidth;
    
    const sliderbtnsHideFunc = ()=> {
        preNextBtns[0].style.display = (imgList.scrollLeft <= 0) ? 'none' : 'block'; 
        preNextBtns[1].style.display = imgList.scrollLeft >= maxLeftScroll  ? 'none' : 'block'; 
    } 
    

    const scrollbarWrapper = document.querySelector('.scrollBar-Wrapper');
    const scrollbarThumb = scrollbarWrapper.querySelector('.scrollBar-Thumb');
    
    const scrollBarThumbFunc = () => {
        const imgScroll = imgList.scrollLeft;
        const thumbScrollingAmount = (imgList.scrollLeft / maxLeftScroll) * (scrollbarWrapper.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbScrollingAmount}px`
    }
    
    scrollbarThumb.addEventListener('mousedown', (e)=> {
        let startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPostion = scrollbarWrapper.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            
            const boundedThumbPosition = Math.max(0, Math.min(maxThumbPostion, newThumbPosition))
            const scrollPosition = (boundedThumbPosition / maxThumbPostion) * maxLeftScroll;

            imgList.scrollLeft = scrollPosition;
            scrollbarThumb.style.left = `${boundedThumbPosition}px`
        }
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    })

    imgList.addEventListener('scroll', ()=> {
        sliderbtnsHideFunc();   
        scrollBarThumbFunc();
    });
    
}
window.addEventListener('load', sliderFunc);

