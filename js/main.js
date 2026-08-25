(function () {
  var now = document.getElementById("now");
  var host = document.getElementById("host");
  var jsOk = document.getElementById("js-ok");
  var path = document.getElementById("path");
  var form = document.getElementById("demo-form");
  var msg = document.getElementById("form-msg");

  if (now) {
    now.textContent = new Date().toLocaleString("vi-VN");
  }
  if (host) {
    host.textContent = window.location.host || "file://";
  }
  if (jsOk) {
    jsOk.textContent = "OK";
  }
  if (path) {
    path.textContent = window.location.pathname;
  }

  if (form && msg) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      msg.hidden = false;
      msg.textContent = "Form demo đã nhận dữ liệu trên trình duyệt. Deploy static thành công.";
      form.reset();
    });
  }
})();
