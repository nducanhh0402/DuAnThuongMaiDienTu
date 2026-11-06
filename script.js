// Đợi cho trang web tải xong giao diện rồi mới chạy code
document.addEventListener("DOMContentLoaded", function() {
    // Tìm tất cả các nút có class là 'btn-cart'
    const cartButtons = document.querySelectorAll('.btn-cart');

    // Gắn sự kiện click cho từng nút
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thành công! Đã thêm áo thun vào giỏ hàng của bạn.');
        });
    });
});