fetch('XXX')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Обрабатываем полученные данные
    console.log(data);
    // Возможно, здесь вы хотите отобразить данные на странице
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
