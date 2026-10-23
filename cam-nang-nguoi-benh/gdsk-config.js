/* =====================================================
   CẤU HÌNH MODULE THƯ VIỆN ĐIỆN TỬ GDSK
   Khi tích hợp sang website khác, CHỈ CẦN SỬA FILE NÀY.
===================================================== */
const GDSK_CONFIG = {
  /* --- Firebase Realtime Database (ghi lượt xem + khảo sát "Hữu ích?") ---
     Để trống FB_URL = '' để TẮT hoàn toàn việc ghi nhận (thư viện vẫn xem bình thường). */
  FB_URL: 'https://cntt-bvpstw-default-rtdb.asia-southeast1.firebasedatabase.app',
  FB_API_KEY: 'AIzaSyCyOHEBJihvzhHmK4FhKZe4NyCtbowHG-Q',

  /* --- Nút "quay về" trên thanh menu của thư viện --- */
  HOME_URL: '../index.html',
  HOME_LABEL: '← Trang chủ Phòng CNTT',

  /* --- Trang thống kê (thong-ke-gdsk.html) --- */
  /* Tên khóa sessionStorage mà website chủ lưu khi người dùng đăng nhập.
     Trang thống kê chỉ hiện khi khóa này có giá trị. Đặt null để KHÔNG kiểm tra
     đăng nhập (chỉ nên dùng khi trang đã được bảo vệ ở tầng khác). */
  STATS_SESSION_KEY: 'cntt_session',
  STATS_LOGIN_URL: 'index.html',           // nơi gửi người chưa đăng nhập đến
  STATS_TO_LIBRARY_URL: 'cam-nang-nguoi-benh/index.html',
  STATS_HOME_URL: 'index.html',
};

/* --- TRANG QUẢN TRỊ (quan-tri.html): nội dung được lưu thẳng vào kho GitHub --- */
Object.assign(GDSK_CONFIG, {
  GH_OWNER: 'hien80vn-commits',
  GH_REPO: 'phong-cntt-bvpstw',
  GH_BRANCH: 'main',
  GH_BASE: 'cam-nang-nguoi-benh',   // thư mục chứa thư viện trong kho
});

/* Khóa Firebase của một mục nội dung. Dùng id bất biến (không phụ thuộc vị trí) và
   loại ký tự Firebase không cho phép trong khóa (. $ # [ ] /). */
function gdskItemKey(branch, sub, it, idx){
  const raw = it.id || (branch.id + '_' + sub.id + '_' + idx);
  return String(raw).replace(/[.$#\[\]\/]/g, '-');
}
