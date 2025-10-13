// --- Đăng ký tài khoản ---
function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;

  if (!name || !email || !password) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  // Kiểm tra trùng email
  if (localStorage.getItem(email)) {
    alert("Email này đã được đăng ký!");
    return;
  }

  // Lưu thông tin vào localStorage
  const user = { name, email, password };
  localStorage.setItem(email, JSON.stringify(user));

  alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
  document.getElementById("register-form").reset();
}

// --- Đăng nhập ---
function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  const storedUser = localStorage.getItem(email);

  if (!storedUser) {
    alert("Email chưa được đăng ký!");
    return;
  }

  const user = JSON.parse(storedUser);

  if (user.password === password) {
    alert("Đăng nhập thành công! Xin chào " + user.name);
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "index.html"; // chuyển về trang chính
  } else {
    alert("Sai mật khẩu!");
  }
}

// --- Đăng xuất ---
function logoutUser() {
  localStorage.removeItem("currentUser");
  alert("Đã đăng xuất!");
  window.location.href = "index.html";
}
