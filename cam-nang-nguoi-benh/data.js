/* =====================================================
   CÂY DỮ LIỆU — THƯ VIỆN ĐIỆN TỬ GIÁO DỤC SỨC KHỎE
   Theo "Nguyên tắc tổ chức Cây dữ liệu" — Phòng CNTT & Phòng Điều dưỡng BVPSTW.
   Mỗi item: { title, img?, video? } — img/video trỏ tới file trong cùng thư mục.
   Item không có img/video => hiển thị trạng thái "Sắp cập nhật".
   Thêm nội dung mới: chỉ cần sửa file này (không cần sửa index.html).
===================================================== */
const TREE = [
  {
    id: '1', icon: '🤰', title: 'Thời kỳ mang thai và sau sinh',
    subs: [
      { id: '1.1', title: 'Chăm sóc Thai kỳ', items: [
        { title: 'Chế độ dinh dưỡng & Vận động' },
        { title: 'Lịch khám thai & Các mốc xét nghiệm, siêu âm quan trọng' },
        { title: 'Dấu hiệu nguy hiểm cần đến viện ngay (Dọa sảy, Tiền sản giật...)' },
      ]},
      { id: '1.2', title: 'Chuyển dạ & Sinh nở', items: [
        { title: 'Dấu hiệu chuyển dạ & Đi viện cần chuẩn bị gì?' },
        { title: 'Hướng dẫn thở & Rặn sinh thường' },
        { title: 'Quy trình sinh mổ & Chăm sóc vết mổ' },
      ]},
      { id: '1.3', title: 'Chăm sóc Hậu sản (Sau sinh)', items: [
        { title: 'Chăm sóc tầng sinh môn / Vết mổ' },
        { title: 'Chế độ dinh dưỡng & Vận động sau sinh' },
      ]},
    ],
  },
  {
    id: '2', icon: '👶', title: 'Chăm sóc Trẻ sơ sinh',
    subs: [
      { id: '2.1', title: 'Nuôi con bằng sữa mẹ', items: [
        { title: 'Tư thế cho bú & Cách ngậm bắt khớp bú đúng' },
        { title: 'Hướng dẫn vắt, bảo quản & Hâm sữa mẹ' },
      ]},
      { id: '2.2', title: 'Chăm sóc Bé', items: [
        { title: 'Hướng dẫn tắm bé' },
        { title: 'Massage sơ sinh & Phương pháp Kangaroo (KMC)' },
      ]},
      { id: '2.3', title: 'Theo dõi phát hiện Bệnh lý thường gặp', items: [
        { title: 'Nhận biết Vàng da sinh lý và Vàng da bệnh lý' },
        { title: 'Dấu hiệu suy hô hấp, sốt ở trẻ sơ sinh' },
      ]},
    ],
  },
  {
    id: '3', icon: '🌸', title: 'Phụ khoa',
    subs: [
      { id: '3.1', title: 'Bệnh lý Phụ khoa Thường gặp và chăm sóc', items: [
        { title: 'Viêm nhiễm phụ khoa (Viêm âm đạo, cổ tử cung...)' },
        { title: 'U xơ tử cung & U nang buồng trứng' },
        { title: 'Lộ tuyến cổ tử cung' },
      ]},
      { id: '3.2', title: 'Ung thư Phụ khoa và chăm sóc', items: [
        { title: 'Sàng lọc Ung thư cổ tử cung (HPV, Pap smear)' },
        { title: 'Tầm soát Ung thư vú (Tự khám vú & Siêu âm/X-quang)' },
      ]},
      { id: '3.3', title: 'Sức khỏe Tiền mãn kinh & Mãn kinh', items: [] },
      { id: '3.4', title: 'Nam học và Y học giới tính', items: [] },
    ],
  },
  {
    id: '4', icon: '👨‍👩‍👧', title: 'Kế hoạch hóa gia đình',
    subs: [
      { id: '4.1', title: 'Các biện pháp Tránh thai Hiện đại', items: [
        { title: 'Thuốc tránh thai hàng ngày / Khẩn cấp', img: 'thuoc-hang-ngay.jpg' },
        { title: 'Đặt vòng tránh thai (Dụng cụ tử cung)' },
        { title: 'Cấy que tránh thai & Bao cao su', img: 'que-cay.jpg' },
      ]},
      { id: '4.2', title: 'Tư vấn & Chăm sóc Sau đình chỉ thai', items: [
        { title: 'Những điều cần biết sau phá thai', img: 'sau-pha-thai.jpg' },
      ]},
    ],
  },
  {
    id: '5', icon: '🧬', title: 'Y học bào thai',
    subs: [
      { id: '5.1', title: 'Các biện pháp can thiệp bào thai hiện đại', items: [] },
      { id: '5.2', title: 'Tư vấn & Chăm sóc Sau can thiệp bào thai', items: [] },
    ],
  },
  {
    id: '6', icon: '🤝', title: 'Hỗ trợ sinh sản',
    subs: [
      { id: '6.1', title: 'Khám & Chẩn đoán Hiếm muộn', items: [
        { title: 'Quy trình khám Nam khoa / Phụ khoa hiếm muộn' },
        { title: 'Các xét nghiệm chuyên sâu' },
      ]},
      { id: '6.2', title: 'Các kỹ thuật bơm IUI & Làm IVF', items: [
        { title: 'Quy trình bơm tinh trùng vào tử cung (IUI)' },
        { title: 'Quy trình Thụ tinh trong ống nghiệm (IVF)' },
        { title: 'Hướng dẫn tự tiêm thuốc kích trứng tại nhà' },
      ]},
      { id: '6.3', title: 'Tâm lý & Dinh dưỡng trong điều trị IVF', items: [] },
    ],
  },
  {
    id: '7', icon: '📋', title: 'Hướng dẫn các thủ tục khám và điều trị',
    subs: [
      { id: '7.1', title: 'Các thủ tục liên quan khám bệnh', items: [
        { title: 'Hướng dẫn người bệnh chuẩn bị siêu âm', video: 'video-chuan-bi-sieu-am.mp4' },
      ]},
      { id: '7.2', title: 'Các thủ tục trong quá trình điều trị', items: [
        { title: 'Hướng dẫn người bệnh làm hồ sơ sinh', video: 'video-ho-so-sinh.mp4' },
      ]},
      { id: '7.3', title: 'Thủ tục ra viện', items: [] },
    ],
  },
];

/* Mục NỔI BẬT ở trang đích (banner phía trên 7 nhánh).
   Muốn đổi/gỡ: sửa hoặc đặt FEATURED = []. href là đường dẫn hash trong cây dữ liệu. */
const FEATURED = [
  { icon: '🩻', badge: 'Video mới', title: 'Hướng dẫn người bệnh chuẩn bị siêu âm', desc: 'Xem clip hướng dẫn cần chuẩn bị gì trước khi siêu âm', href: '/7/7.1' },
  { icon: '🎬', badge: 'Video mới', title: 'Hướng dẫn người bệnh làm hồ sơ sinh', desc: 'Xem clip hướng dẫn từng bước thủ tục làm hồ sơ sinh', href: '/7/7.2' },
];
