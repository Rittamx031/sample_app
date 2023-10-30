import I18n from 'i18n-js';
I18n.translations || (I18n.translations = {});
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), {
  "Invalidaccountacitive": "Link kích hoạt bị lỗi",
  "account_not_actived": "Tài khoản chưa được kích hoạt",
  "accountacitive": "Tài khoản đã được kích hoạt!",
  "activerecord": {
    "errors": {
      "messages": {
        "record_invalid": "Không hợp lệ"
      }
    }
  },
  "add_new_user": "Thêm nguời dùng",
  "alert_limit_size": "file không vượt quá 5MB",
  "back_to_login": "Vui lòng đăng nhập",
  "back_to_users": "Danh sách Người dùng",
  "checkmail": "Vui lòng kiểm tra email!!!",
  "clicktoactive": "Nhân link bên dưới để  kích hoạt tài khoản của bạn",
  "confirm": "Bạn muốn tiếp tục chứ?",
  "datetime": {
    "distance_in_words": {
      "x_minutes": "cách đây %{count} phút"
    }
  },
  "delete_fail": "Xóa không thành công",
  "deleted_user": "Xóa",
  "detail_title": "Thông tin chi tiết",
  "email_activation": {
    "activation_instructions": "Bấm để kích hoạt tài khoản:",
    "activation_link": "Bấm để kích hoạt tài khoản",
    "activenow": "Kích hoạt",
    "intro": "Chào %{name}, Chào mừng tới App!",
    "subject": "Chào mừng tới App",
    "welcome_message": "Chào mừng tới App, %{name}!"
  },
  "email_field": "Địa chỉ Email",
  "en": null,
  "errors": {
    "messages": {
      "aspect_ratio_is_not": "phải có tỉ lệ ảnh %{aspect_ratio}",
      "aspect_ratio_not_landscape": "phải là ảnh ngang",
      "aspect_ratio_not_portrait": "phải là ảnh đứng",
      "aspect_ratio_not_square": "phải là ảnh hình vuông",
      "aspect_ratio_unknown": "tỉ lệ ảnh không xác định",
      "content_type_invalid": "tệp không hợp lệ",
      "dimension_height_equal_to": "chiều cao phải bằng %{length} pixel",
      "dimension_height_greater_than_or_equal_to": "chiều cao phải lớn hơn hoặc bằng %{length} pixel",
      "dimension_height_inclusion": "chiều cao không nằm trong %{min} và %{max} pixel",
      "dimension_height_less_than_or_equal_to": "chiều cao phải nhỏ hơn hoặc bằng %{length} pixel",
      "dimension_max_inclusion": "phải nhỏ hơn hoặc bằng %{width} x %{height} pixel",
      "dimension_min_inclusion": "phải lớn hơn hoặc bằng %{width} x %{height} pixel",
      "dimension_width_equal_to": "chiều rộng phải bằng %{length} pixel",
      "dimension_width_greater_than_or_equal_to": "chiều rộng phải lớn hơn hoặc bằng %{length} pixel",
      "dimension_width_inclusion": "chiều rộng không nằm trong %{min} và %{max} pixel",
      "dimension_width_less_than_or_equal_to": "chiều rộng phải nhỏ hơn hoặc bằng %{length} pixel",
      "file_size_out_of_range": "kích thước %{file_size} vượt giới hạn",
      "image_metadata_missing": "không phải là ảnh",
      "limit_out_of_range": "tổng số tệp vượt giới hạn"
    }
  },
  "faker": {
    "address": {
      "city": [
        "#{city_root}"
      ],
      "city_root": [
        "Bắc Giang",
        "Bắc Kạn",
        "Bắc Ninh",
        "Cao Bằng",
        "Điện Biên",
        "Hà Giang",
        "Hà Nam",
        "Hà Tây",
        "Hải Dương",
        "TP Hải Phòng",
        "Hòa Bình",
        "Hưng Yên",
        "Lai Châu",
        "Lào Cai",
        "Lạng Sơn",
        "Nam Định",
        "Ninh Bình",
        "Phú Thọ",
        "Quảng Ninh",
        "Sơn La",
        "Thái Bình",
        "Thái Nguyên",
        "Tuyên Quang",
        "Vĩnh Phúc",
        "Yên Bái",
        "TP Đà Nẵng",
        "Bình Định",
        "Đắk Lắk",
        "Đắk Nông",
        "Gia Lai",
        "Hà Tĩnh",
        "Khánh Hòa",
        "Kon Tum",
        "Nghệ An",
        "Phú Yên",
        "Quảng Bình",
        "Quảng Nam",
        "Quảng Ngãi",
        "Quảng Trị",
        "Thanh Hóa",
        "Thừa Thiên Huế",
        "TP TP. Hồ Chí Minh",
        "An Giang",
        "Bà Rịa Vũng Tàu",
        "Bạc Liêu",
        "Bến Tre",
        "Bình Dương",
        "Bình Phước",
        "Bình Thuận",
        "Cà Mau",
        "TP Cần Thơ",
        "Đồng Nai",
        "Đồng Tháp",
        "Hậu Giang",
        "Kiên Giang",
        "Lâm Đồng",
        "Long An",
        "Ninh Thuận",
        "Sóc Trăng",
        "Tây Ninh",
        "Tiền Giang",
        "Trà Vinh",
        "Vĩnh Long"
      ],
      "county": [
        "Avon",
        "Bedfordshire",
        "Berkshire",
        "Borders",
        "Buckinghamshire",
        "Cambridgeshire",
        "Central",
        "Cheshire",
        "Cleveland",
        "Clwyd",
        "Cornwall",
        "County Antrim",
        "County Armagh",
        "County Down",
        "County Fermanagh",
        "County Londonderry",
        "County Tyrone",
        "Cumbria",
        "Derbyshire",
        "Devon",
        "Dorset",
        "Dumfries and Galloway",
        "Durham",
        "Dyfed",
        "East Sussex",
        "Essex",
        "Fife",
        "Gloucestershire",
        "Grampian",
        "Greater Manchester",
        "Gwent",
        "Gwynedd County",
        "Hampshire",
        "Herefordshire",
        "Hertfordshire",
        "Highlands and Islands",
        "Humberside",
        "Isle of Wight",
        "Kent",
        "Lancashire",
        "Leicestershire",
        "Lincolnshire",
        "Lothian",
        "Merseyside",
        "Mid Glamorgan",
        "Norfolk",
        "North Yorkshire",
        "Northamptonshire",
        "Northumberland",
        "Nottinghamshire",
        "Oxfordshire",
        "Powys",
        "Rutland",
        "Shropshire",
        "Somerset",
        "South Glamorgan",
        "South Yorkshire",
        "Staffordshire",
        "Strathclyde",
        "Suffolk",
        "Surrey",
        "Tayside",
        "Tyne and Wear",
        "Việt Nam",
        "Warwickshire",
        "West Glamorgan",
        "West Midlands",
        "West Sussex",
        "West Yorkshire",
        "Wiltshire",
        "Worcestershire"
      ],
      "default_country": [
        "Việt Nam"
      ],
      "default_country_code": [
        "VN"
      ],
      "postcode": "/[A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}/"
    },
    "cell_phone": {
      "formats": [
        "012# ### ####",
        "0162 ### ####",
        "0163 ### ####",
        "0164 ### ####",
        "0165 ### ####",
        "0166 ### ####",
        "0167 ### ####",
        "0168 ### ####",
        "0169 ### ####",
        "0186 ### ####",
        "0188 ### ####",
        "0199 ### ####",
        "0866 ### ###",
        "0868 ### ###",
        "0869 ### ###",
        "088# ### ###",
        "09## ### ###"
      ]
    },
    "company": {
      "name": [
        "#{prefix} #{Name.last_name}"
      ],
      "prefix": [
        "Công ty",
        "Cty TNHH",
        "Cty",
        "Cửa hàng",
        "Trung tâm",
        "Chi nhánh"
      ]
    },
    "internet": {
      "domain_suffix": [
        "com",
        "net",
        "info",
        "vn",
        "com.vn"
      ]
    },
    "lorem": {
      "words": [
        "đã",
        "đang",
        "ừ",
        "ờ",
        "á",
        "không",
        "biết",
        "gì",
        "hết",
        "đâu",
        "nha",
        "thế",
        "thì",
        "là",
        "đánh",
        "đá",
        "đập",
        "phá",
        "viết",
        "vẽ",
        "tô",
        "thuê",
        "mướn",
        "mượn",
        "mua",
        "một",
        "hai",
        "ba",
        "bốn",
        "năm",
        "sáu",
        "bảy",
        "tám",
        "chín",
        "mười",
        "thôi",
        "việc",
        "nghỉ",
        "làm",
        "nhà",
        "cửa",
        "xe",
        "đạp",
        "ác",
        "độc",
        "khoảng",
        "khoan",
        "thuyền",
        "tàu",
        "bè",
        "lầu",
        "xanh",
        "đỏ",
        "tím",
        "vàng",
        "kim",
        "chỉ",
        "khâu",
        "may",
        "vá",
        "em",
        "anh",
        "yêu",
        "thương",
        "thích",
        "con",
        "cái",
        "bàn",
        "ghế",
        "tủ",
        "quần",
        "áo",
        "nón",
        "dép",
        "giày",
        "lỗi",
        "được",
        "ghét",
        "giết",
        "chết",
        "hết",
        "tôi",
        "bạn",
        "tui",
        "trời",
        "trăng",
        "mây",
        "gió",
        "máy",
        "hàng",
        "hóa",
        "leo",
        "núi",
        "bơi",
        "biển",
        "chìm",
        "xuồng",
        "nước",
        "ngọt",
        "ruộng",
        "đồng",
        "quê",
        "hương"
      ]
    },
    "name": {
      "first_name": [
        "Phạm",
        "Nguyễn",
        "Trần",
        "Lê",
        "Lý",
        "Hoàng",
        "Phan",
        "Vũ",
        "Tăng",
        "Đặng",
        "Bùi",
        "Đỗ",
        "Hồ",
        "Ngô",
        "Dương",
        "Đào",
        "Đoàn",
        "Vương",
        "Trịnh",
        "Đinh",
        "Lâm",
        "Phùng",
        "Mai",
        "Tô",
        "Trương",
        "Hà"
      ],
      "last_name": [
        "Nam",
        "Trung",
        "Thanh",
        "Thị",
        "Văn",
        "Dương",
        "Tăng",
        "Quốc",
        "Như",
        "Phạm",
        "Nguyễn",
        "Trần",
        "Lê",
        "Lý",
        "Hoàng",
        "Phan",
        "Vũ",
        "Tăng",
        "Đặng",
        "Bùi",
        "Đỗ",
        "Hồ",
        "Ngô",
        "Dương",
        "Đào",
        "Đoàn",
        "Vương",
        "Trịnh",
        "Đinh",
        "Lâm",
        "Phùng",
        "Mai",
        "Tô",
        "Trương",
        "Hà",
        "Vinh",
        "Nhung",
        "Hòa",
        "Tiến",
        "Tâm",
        "Bửu",
        "Loan",
        "Hiền",
        "Hải",
        "Vân",
        "Kha",
        "Minh",
        "Nhân",
        "Triệu",
        "Tuân",
        "Hữu",
        "Đức",
        "Phú",
        "Khoa",
        "Thắng",
        "Sơn",
        "Dung",
        "Tú",
        "Trinh",
        "Thảo",
        "Sa",
        "Kim",
        "Long",
        "Thi",
        "Cường",
        "Ngọc",
        "Sinh",
        "Khang",
        "Phong",
        "Thắm",
        "Thu",
        "Thủy",
        "Nhàn"
      ],
      "name": [
        "#{first_name} #{last_name}",
        "#{first_name} #{last_name} #{last_name}",
        "#{first_name} #{last_name} #{last_name} #{last_name}"
      ],
      "name_with_middle": [
        "#{first_name} #{last_name} #{last_name}"
      ]
    },
    "phone_number": {
      "formats": [
        "01#### #####",
        "01### ######",
        "01#1 ### ####",
        "011# ### ####",
        "02# #### ####",
        "03## ### ####",
        "055 #### ####",
        "056 #### ####",
        "0800 ### ####",
        "08## ### ####",
        "09## ### ####",
        "016977 ####",
        "01### #####",
        "0500 ######",
        "0800 ######"
      ]
    }
  },
  "hrefActive": "Kích hoạt tại đây",
  "invalid_email_password_combination": "Kiểm tra lại tài khoản mật khẩu ",
  "logged_out": "Đăng xuất",
  "loggouted": "Vui lòng đăng nhập",
  "login": "Đăng Nhập",
  "logout": "Đăng xuất",
  "micropost": {
    "created": "Đã post thành công!",
    "deleted": "Micropost đã xóa",
    "deleted_fail": "Xóa không thành công",
    "oversize": "Ảnh phải nhỏ hơn 5MB",
    "validimage": "Ảnh không đúng định dạng"
  },
  "micropost_feed": "Bài đăng",
  "name_field": "Tên",
  "navbar": {
    "help": "Trợ giúp",
    "home": "Trang chủ",
    "login": "Đăng Nhập"
  },
  "new_user": "Chưa có tài khoản",
  "not_correct_user": "Sử dụng tài đúng tài khoản để  tiếp tục",
  "not_found_user": "Tài khoản không tồn tại",
  "password": "Mật khẩu",
  "password_repeat": "Nhập lại mật khẩu",
  "password_reset": {
    "cannot_empty": "Mật khẩu không được trống",
    "email_not_found": "Không tìm thấy địa chỉ email",
    "email_sent": "Email đã được gửi với hướng dẫn đặt lại mật khẩu",
    "label_email": "Email",
    "submit_button": "Gửi",
    "title": "Quên mật khẩu"
  },
  "password_reset_expired": "Đặt lại mật khẩu đã hết hạn.",
  "password_reset_form": {
    "password_confirmation_label": "Xác nhận",
    "password_label": "Mật khẩu",
    "submit_button": "Cập nhật mật khẩu",
    "title": "Đặt lại mật khẩu"
  },
  "placeholder_post_message": "Viết thêm suy nghĩ của bạn...",
  "post": "Đăng",
  "posted_ago": "Đăng lên %{time_ago} trước.",
  "profile": "Thông tin cá nhân",
  "rememberme": "Lưu thông tin đăng nhập",
  "setting": "Cài Đặt",
  "show_this_user": "Xem",
  "sign_in": "Đăng Nhập",
  "sign_up": "Đăng Ký",
  "sign_up_now": "Đăng ký ngay!",
  "success_sign_in": "Đăng ký thành công",
  "success_sign_up": "Đăng ký thành công",
  "title": {
    "commontitle": "Hướng dẫn cơ bản với Rails",
    "header": "Ứng dụng đơn giản",
    "help": "Trợ giúp",
    "home": "Trang chủ"
  },
  "total_error": "lỗi khi bạn gửi form",
  "update_success": "Cập nhật người dùng thành công",
  "update_user": "Cập nhật thông tin người dùng",
  "user": {
    "help": {
      "gethelpform": "Lấy hướng dẫn tutorial tại",
      "getsplapp": "Lấy sách về ứng dụng rails đươn giản tại",
      "linkbook": "Sách Ruby on Rails Tutorial",
      "linkgethelp": "Trang hướng dẫn Rails"
    },
    "home": {
      "pagefor": "Đây là trang chủ của",
      "projectname": "Hướng dẫn Ruby on Rails",
      "simpleapp": "ứng dụng hướng dẫn",
      "singupnow": "Đăng ký ngay bây giờ !",
      "wellcomheader": "Chào mừng đến với App siu đơng giản"
    }
  },
  "user_deleted": "xóa thành công user",
  "user_inactive": "Người dùng không hoạt động!",
  "user_not_found": "Không tìm thấy người dùng!",
  "users": {
    "show": {
      "microposts": "Microposts",
      "user_profile": "Profile for %{name}",
      "view_profile": "View my profile"
    }
  },
  "view_if": "Xem tài khoản của bạn",
  "welcome": "Chào mừng bạn đế với app của thật",
  "you_sure": "Bạn chắc chứ",
  "your_controller_name": {
    "title": "Your Title Translation"
  }
});
