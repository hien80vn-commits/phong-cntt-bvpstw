/* =====================================================
   CÂY DỮ LIỆU — THƯ VIỆN ĐIỆN TỬ GIÁO DỤC SỨC KHỎE
   FILE TỰ SINH từ content.json bởi trang quản trị (quan-tri.html). KHÔNG sửa tay.
   Mỗi mục: { id, title, img? | video? | article? } — đường dẫn tính từ thư mục này.
===================================================== */
const TREE = [
  {
    "id": "1",
    "icon": "🤰",
    "title": "Thời kỳ mang thai và sau sinh",
    "subs": [
      {
        "id": "1.1",
        "title": "Chăm sóc Thai kỳ",
        "items": [
          {
            "id": "1_1-1_0",
            "title": "Chế độ dinh dưỡng & Vận động"
          },
          {
            "id": "1_1-1_1",
            "title": "Lịch khám thai & Các mốc xét nghiệm, siêu âm quan trọng"
          },
          {
            "id": "1_1-1_2",
            "title": "Dấu hiệu nguy hiểm cần đến viện ngay (Dọa sảy, Tiền sản giật...)"
          },
          {
            "id": "1_1-1_3",
            "title": "Nghiệm pháp dung nạp đường huyết (OGTT)",
            "video": "video-nghiem-phap-duong-huyet.mp4"
          }
        ]
      },
      {
        "id": "1.2",
        "title": "Chuyển dạ & Sinh nở",
        "items": [
          {
            "id": "1_1-2_0",
            "title": "Dấu hiệu chuyển dạ & Đi viện cần chuẩn bị gì?"
          },
          {
            "id": "1_1-2_1",
            "title": "Hướng dẫn thở & Rặn sinh thường"
          },
          {
            "id": "1_1-2_2",
            "title": "Quy trình sinh mổ & Chăm sóc vết mổ"
          }
        ]
      },
      {
        "id": "1.3",
        "title": "Chăm sóc Hậu sản (Sau sinh)",
        "items": [
          {
            "id": "1_1-3_0",
            "title": "Chăm sóc tầng sinh môn / Vết mổ"
          },
          {
            "id": "1_1-3_1",
            "title": "Chế độ dinh dưỡng & Vận động sau sinh"
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "icon": "👶",
    "title": "Chăm sóc Trẻ sơ sinh",
    "subs": [
      {
        "id": "2.1",
        "title": "Nuôi con bằng sữa mẹ",
        "items": [
          {
            "id": "2_2-1_0",
            "title": "Tư thế cho bú & Cách ngậm bắt khớp bú đúng"
          },
          {
            "id": "2_2-1_1",
            "title": "Hướng dẫn vắt, bảo quản & Hâm sữa mẹ"
          }
        ]
      },
      {
        "id": "2.2",
        "title": "Chăm sóc Bé",
        "items": [
          {
            "id": "2_2-2_0",
            "title": "Hướng dẫn tắm bé"
          },
          {
            "id": "2_2-2_1",
            "title": "Massage sơ sinh & Phương pháp Kangaroo (KMC)"
          }
        ]
      },
      {
        "id": "2.3",
        "title": "Theo dõi phát hiện Bệnh lý thường gặp",
        "items": [
          {
            "id": "2_2-3_0",
            "title": "Nhận biết Vàng da sinh lý và Vàng da bệnh lý"
          },
          {
            "id": "2_2-3_1",
            "title": "Dấu hiệu suy hô hấp, sốt ở trẻ sơ sinh"
          }
        ]
      }
    ]
  },
  {
    "id": "3",
    "icon": "🌸",
    "title": "Phụ khoa",
    "subs": [
      {
        "id": "3.1",
        "title": "Bệnh lý Phụ khoa Thường gặp và chăm sóc",
        "items": [
          {
            "id": "3_3-1_0",
            "title": "Viêm nhiễm phụ khoa (Viêm âm đạo, cổ tử cung...)"
          },
          {
            "id": "3_3-1_1",
            "title": "U xơ tử cung & U nang buồng trứng"
          },
          {
            "id": "3_3-1_2",
            "title": "Lộ tuyến cổ tử cung"
          }
        ]
      },
      {
        "id": "3.2",
        "title": "Ung thư Phụ khoa và chăm sóc",
        "items": [
          {
            "id": "3_3-2_0",
            "title": "Sàng lọc Ung thư cổ tử cung (HPV, Pap smear)"
          },
          {
            "id": "3_3-2_1",
            "title": "Tầm soát Ung thư vú (Tự khám vú & Siêu âm/X-quang)"
          }
        ]
      },
      {
        "id": "3.3",
        "title": "Sức khỏe Tiền mãn kinh & Mãn kinh",
        "items": []
      },
      {
        "id": "3.4",
        "title": "Nam học và Y học giới tính",
        "items": []
      }
    ]
  },
  {
    "id": "4",
    "icon": "👨‍👩‍👧",
    "title": "Kế hoạch hóa gia đình",
    "subs": [
      {
        "id": "4.1",
        "title": "Các biện pháp Tránh thai Hiện đại",
        "items": [
          {
            "id": "4_4-1_0",
            "title": "Thuốc tránh thai hàng ngày / Khẩn cấp",
            "img": "thuoc-hang-ngay.jpg"
          },
          {
            "id": "4_4-1_1",
            "title": "Đặt vòng tránh thai (Dụng cụ tử cung)"
          },
          {
            "id": "4_4-1_2",
            "title": "Cấy que tránh thai & Bao cao su",
            "img": "que-cay.jpg"
          }
        ]
      },
      {
        "id": "4.2",
        "title": "Tư vấn & Chăm sóc Sau đình chỉ thai",
        "items": [
          {
            "id": "4_4-2_0",
            "title": "Những điều cần biết sau phá thai",
            "img": "sau-pha-thai.jpg"
          }
        ]
      }
    ]
  },
  {
    "id": "5",
    "icon": "🧬",
    "title": "Y học bào thai",
    "subs": [
      {
        "id": "5.1",
        "title": "Các biện pháp can thiệp bào thai hiện đại",
        "items": []
      },
      {
        "id": "5.2",
        "title": "Tư vấn & Chăm sóc Sau can thiệp bào thai",
        "items": []
      }
    ]
  },
  {
    "id": "6",
    "icon": "🤝",
    "title": "Hỗ trợ sinh sản",
    "subs": [
      {
        "id": "6.1",
        "title": "Khám & Chẩn đoán Hiếm muộn",
        "items": [
          {
            "id": "6_6-1_0",
            "title": "Quy trình khám Nam khoa / Phụ khoa hiếm muộn"
          },
          {
            "id": "6_6-1_1",
            "title": "Các xét nghiệm chuyên sâu"
          }
        ]
      },
      {
        "id": "6.2",
        "title": "Các kỹ thuật bơm IUI & Làm IVF",
        "items": [
          {
            "id": "6_6-2_0",
            "title": "Quy trình bơm tinh trùng vào tử cung (IUI)"
          },
          {
            "id": "6_6-2_1",
            "title": "Quy trình Thụ tinh trong ống nghiệm (IVF)"
          },
          {
            "id": "6_6-2_2",
            "title": "Hướng dẫn tự tiêm thuốc kích trứng tại nhà"
          }
        ]
      },
      {
        "id": "6.3",
        "title": "Tâm lý & Dinh dưỡng trong điều trị IVF",
        "items": []
      }
    ]
  },
  {
    "id": "7",
    "icon": "📋",
    "title": "Hướng dẫn các thủ tục khám và điều trị",
    "subs": [
      {
        "id": "7.1",
        "title": "Các thủ tục liên quan khám bệnh",
        "items": [
          {
            "id": "7_7-1_0",
            "title": "Hướng dẫn người bệnh chuẩn bị siêu âm",
            "video": "video-chuan-bi-sieu-am.mp4"
          }
        ]
      },
      {
        "id": "7.2",
        "title": "Các thủ tục trong quá trình điều trị",
        "items": [
          {
            "id": "7_7-2_0",
            "title": "Hướng dẫn người bệnh làm hồ sơ sinh",
            "video": "video-ho-so-sinh.mp4"
          }
        ]
      },
      {
        "id": "7.3",
        "title": "Thủ tục ra viện",
        "items": []
      }
    ]
  },
  {
    "id": "8",
    "icon": "📁",
    "title": "Chỉ dẫn địa điểm trong tòa nhà",
    "subs": [
      {
        "id": "8.1",
        "title": "Khu vực nhà A",
        "items": []
      },
      {
        "id": "8.2",
        "title": "Khu vực nhà H",
        "items": []
      },
      {
        "id": "8.3",
        "title": "Khu vực nhà G",
        "items": []
      }
    ]
  }
];

const FEATURED = [
  {
    "icon": "🩸",
    "badge": "Video mới",
    "title": "Nghiệm pháp dung nạp đường huyết",
    "desc": "Xem clip hướng dẫn thực hiện nghiệm pháp dung nạp đường huyết khi mang thai",
    "href": "/1/1.1"
  },
  {
    "icon": "🩻",
    "badge": "Video mới",
    "title": "Hướng dẫn người bệnh chuẩn bị siêu âm",
    "desc": "Xem clip hướng dẫn cần chuẩn bị gì trước khi siêu âm",
    "href": "/7/7.1"
  },
  {
    "icon": "🎬",
    "badge": "Video mới",
    "title": "Hướng dẫn người bệnh làm hồ sơ sinh",
    "desc": "Xem clip hướng dẫn từng bước thủ tục làm hồ sơ sinh",
    "href": "/7/7.2"
  }
];
