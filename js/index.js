
window.onload = function () {
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        // 当left值小于2080时，因为没有第6张图片就出现空白，所以这里我们需要对偏移量做一个判断
        if (newLeft < -2080) {
            list.style.left = -520 + 'px';
        }
        if (newLeft > -520) {
            list.style.left = -2080 + 'px';
        }
    }

    prev.onclick = function () {
        animate(520);
    }
    next.onclick = function () {
        animate(-520);
    }
}
var timer;//设置定时器
function autoplay() {
    /*setInterval返回的是定时器的ID*/
    timer = setInterval(function () {
        next.onclick()
    }, 2200);
}
autoplay();

// 当鼠标移入图片范围时，清除定时器
var container = document.getElementById('container');
function stopplay() {
    clearInterval(timer);
}

container.onmouseover = stopplay;
container.onmouseout = autoplay;

// 点击按钮即会切换到相应位置的图片
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var clickIndex = parseInt(this.getAttribute('index'));
        var offset = 520 * (index - clickIndex);
        animate(offset);
        index = clickIndex;
        showButton();
    }
}



