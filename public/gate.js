(function () {
  var gate = document.getElementById('entry-gate');
  if (!gate) return;

  var form = gate.querySelector('form');
  var error = gate.querySelector('.entry-error');

  function readUsers() {
    try {
      return JSON.parse(localStorage.getItem('az-users') || '{}');
    } catch (err) {
      return {};
    }
  }

  if (sessionStorage.getItem('az-auth')) {
    gate.remove();
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = form.username.value.trim();
    var password = form.password.value;
    var users = readUsers();

    if (!username || !password) {
      error.hidden = false;
      error.textContent = 'Введите имя и пароль';
      return;
    }

    if (Object.prototype.hasOwnProperty.call(users, username) && users[username] !== password) {
      error.hidden = false;
      error.textContent = 'Пароль не верный';
      return;
    }

    users[username] = password;
    localStorage.setItem('az-users', JSON.stringify(users));
    sessionStorage.setItem('az-auth', username);
    gate.remove();
  });
})();
