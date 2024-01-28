// Получаем переключатель и оба блока с информацией
const switchToggle = document.getElementById('switch');
const guildInfo = document.getElementById('guildNames');
const achievementInfo = document.getElementById('achievementProjects');

// Обработчик события изменения состояния переключателя
switchToggle.addEventListener('change', function() {
  // Если переключатель в положении "Гильдейцы", показать список гильдейцев и скрыть список проектов
  if (this.checked) {
    guildInfo.style.display = 'block';
    achievementInfo.style.display = 'none';
  } 
  // Если переключатель в положении "Достижения", показать список проектов и скрыть список гильдейцев
  else {
    achievementInfo.style.display = 'block';
    guildInfo.style.display = 'none';
  }
});