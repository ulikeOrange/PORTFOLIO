// 添加按钮点击事件
document.getElementById("contact-button1").addEventListener("click", function() {
    alert("感谢您的兴趣！请发送邮件至 xiaofeng_xiaojuan@163.com。");
});
document.getElementById("contact-button2").addEventListener("click", function() {
    alert("感谢您的兴趣！请添加微信 for9850");
});
document.getElementById("contact-button3").addEventListener("click", function() {
    alert("感谢您的兴趣！请拨打电话 18858004818");
});
// 添加一个简单的动画效果
const container = document.querySelector('.container');

setTimeout(() => {
    container.classList.add('show');
}, 500);

// 添加更多动画效果，例如滚动动画、按钮点击动画等
