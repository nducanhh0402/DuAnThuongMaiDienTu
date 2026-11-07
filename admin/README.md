# Hệ Thống Quản Trị Thương Mại Điện Tử (Ecommerce Admin Portal)
> Được thiết kế chuẩn hóa 100% dựa trên Design System của file Figma: **Ecommerce Templates & UI Kit (Community)**

---

## 📁 Cấu Trúc Dự Án
```
c:\Dự Án Ma\
├── frontend\                  # Giao diện người dùng Admin
│   ├── index.html             # Cấu trúc HTML chính của Dashboard
│   ├── style.css              # Design tokens, CSS variables, thanh cuộn, hiệu ứng
│   └── script.js              # Khởi tạo biểu đồ, icons, logic modal & lọc bảng
│
├── backend\                   # Dịch vụ API và xử lý dữ liệu (Node.js/Python/...)
│   └── README.md              # Đặc tả các endpoint API cần thiết
│
└── README.md                  # Hướng dẫn tổng thể
```

---

## 1. Bản Đồ Quy Chuẩn Thiết Kế (Design System Mapping)

Dựa trên việc đọc và phân tích cấu trúc trực tiếp từ file Figma qua API (các frame `2:2495 Colors`, `2:2614 Typescale`, `8006:1847 Components` và `4063:3341 Pages`):

### 🎨 Bảng màu (Color Tokens)
| Tên Token | Mã Hex | Ứng dụng trong Admin |
| :--- | :--- | :--- |
| **Primary 500** | `#0D6EFD` | Nút hành động chính, active menu, link, icon thương hiệu |
| **Primary 50** | `#F0F7FF` | Nền menu đang chọn, badge nổi bật, hover state |
| **Neutral 900** | `#14181F` | Màu tiêu đề, chữ chính (Heading, Table text) |
| **Neutral 600** | `#6F7C8E` | Chữ phụ, placeholder, nhãn phụ (Muted text) |
| **Neutral 200** | `#DCE0E5` | Viền khung (Card border, Table border, Input border) |
| **Neutral 50** | `#F6F7F9` | Nền trang tổng thể (Page Background) |
| **Success 500** | `#00B517` | Trạng thái "Đã thanh toán", "Hoàn thành", tăng trưởng dương |
| **Warning 500** | `#FF9017` | Trạng thái "Chờ xử lý", "Cảnh báo tồn kho" |
| **Danger 500** | `#FA3434` | Trạng thái "Đã hủy đơn", "Lỗi", cảnh báo xóa |

---

## 2. Cách Xem Và Khởi Chạy Frontend
Bạn có thể mở trực tiếp file `frontend/index.html` bằng cách nhấp đúp chuột để xem trên bất kỳ trình duyệt nào.
Hoặc dùng local server:
```powershell
cd frontend
python -m http.server 3000
```
Truy cập: `http://localhost:3000`
