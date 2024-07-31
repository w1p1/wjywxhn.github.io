// script.js  
document.addEventListener('DOMContentLoaded', function() {  
    const container = document.getElementById('fireworks-container');  
    const particleImage = "html\images\烟花.png"; // 粒子图片路径  
    let particles = [];  
    
    function createParticle() {  
      const particle = document.createElement('img');  
      particle.src = particleImage;  
      particle.className = 'particle';  
      particle.style.left = `${Math.random() * container.offsetWidth}px`;  
      particle.style.top = `${Math.random() * container.offsetHeight}px`;  
      particle.style.transform = `scale(${Math.random() * 2 + 0.5})`; // 随机缩放  
      particle.style.opacity = `${Math.random() * 0.5 + 0.3}`; // 随机透明度  
    
      // 动画效果，这里只是简单模拟，实际可能需要更复杂的动画  
      setTimeout(() => {  
        particle.style.opacity = 0;  
        setTimeout(() => {  
          container.removeChild(particle);  
        }, 500);  
      }, 3000); // 粒子存在时间  
    
      container.appendChild(particle);  
      particles.push(particle);  
    }  
    
    // 每隔一定时间创建一个粒子  
    setInterval(createParticle, 100);  
  });