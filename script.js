function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString(); // 获取本地时间字符串
    const timeElement = document.getElementById('time');
    timeElement.innerText = timeString; // 显示时间

    // 为时间元素添加可见类以显示弹出效果
    setTimeout(() => {
        timeElement.classList.add("visible"); // 添加可见类以显示时间
    }, 500); // 0.5秒后显示
}

// DOM 内容加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.getElementById("avatar");
    const name = document.getElementById("name");
    const quoteDiv = document.getElementById("quote");
    const timeElement = document.getElementById('time');
    const infoElement = document.getElementById('date-time');

    // 动态显示头像和名字
    setTimeout(() => {
        avatar.classList.add("visible"); // 添加可见类以显示头像
        name.classList.add("visible"); // 添加可见类以显示名字
    }, 500); // 0.5秒后显示

    // 获取名言
    fetch('https://v1.hitokoto.cn?c=d') // 一言 API
        .then(response => response.json())
        .then(data => {
            quoteDiv.innerHTML = `${data.hitokoto} <br><span style="font-size: 18px; color: rgba(255, 255, 255, 0.7);">—— ${data.from || '未知来源'}</span>`;
            quoteDiv.classList.add("visible"); // 添加可见类以显示名言
        })
        .catch(error => {
            console.error('获取名言失败:', error); // 处理错误
            quoteDiv.innerHTML = "名言加载失败，请稍后再试。"; // 提示加载失败
        });

    // 初始化显示时间
    updateTime(); // 在页面加载时初始化时间显示

    // 显示时间的可见效果
    setTimeout(() => {
        infoElement.classList.add("visible"); // 添加可见类以显示时间信息
    }, 500); // 0.5秒后显示
});
