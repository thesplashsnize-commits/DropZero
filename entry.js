const ts = document.getElementById('timestamp');
function updateTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  ts.textContent = `${h}:${m}:${s}`;
}
updateTime();
setInterval(updateTime, 1000);
