import random
import string

def tao_ma_ngau_nhien(do_dai=8):
    ky_tu = string.ascii_letters + string.digits
    return ''.join(random.choice(ky_tu) for _ in range(do_dai))

# Tạo một mã ngẫu nhiên có độ dài 10 ký tự
print(tao_ma_ngau_nhien(10))