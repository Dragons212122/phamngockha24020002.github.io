/* 1. Nạp các thành phần cốt lõi của Tailwind CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 2. Tùy chỉnh bổ sung cho trải nghiệm người dùng */
@layer base {
  html {
    /* Giúp khi nhấn vào link #about-me thì trang web trượt xuống từ từ, không bị giật bộp một cái */
    scroll-behavior: smooth;
  }

  body {
    /* Đảm bảo font chữ hiển thị đẹp trên mọi trình duyệt */
    @apply text-gray-800 antialiased;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
}

/* 3. Bạn có thể thêm các class tùy chỉnh ở đây nếu cần trong tương lai */
.btn-custom {
  @apply transition-all duration-300 ease-in-out;
}