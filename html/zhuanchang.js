// zhuanchang.js  
let globalStatus = 0;  
  
// 函数来根据globalStatus的值控制音频播放  
function manageAudioPlayback() {  
    const audio = document.getElementById('myAudio');  
    if (globalStatus === 1) {  
        // 如果globalStatus为1，则播放音频  
        audio.play()  
            .then(() => {  
                // 播放成功  
                console.log('Audio is playing.');  
            })  
            .catch((error) => {  
                // 播放失败，可能是用户阻止了自动播放  
                console.error('Error playing audio:', error);  
            });  
    } else if (!audio.paused) {  
        // 如果globalStatus不为1且音频正在播放，则暂停  
        audio.pause();  
        console.log('Audio has been paused.');  
    }  
}  
  
// 函数来更新globalStatus并控制音频播放  
function updateGlobalStatus(newStatus) {  
    globalStatus = newStatus;  
    manageAudioPlayback(); // 更新后调用函数来控制音频播放  
}  
  
// 导出updateGlobalStatus函数以便在其他文件中使用  
export { updateGlobalStatus };  
  
// 在这里模拟globalStatus的更新，但在实际应用中，这通常会在某个事件触发时发生  
// updateGlobalStatus(1); // 注释掉这行代码，因为它在模块加载时立即执行，可能不是您想要的行为