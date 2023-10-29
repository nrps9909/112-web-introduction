document.addEventListener("DOMContentLoaded", function() {
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
  
      const clockElement = document.getElementById('clock');
      clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
  
    // 更新一次時間以避免延遲
    updateClock();
  
    // 每秒更新一次時間
    setInterval(updateClock, 1000);
  });
  