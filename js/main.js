// تحقق مما إذا كان المتصفح يدعم ميزة الموقع الجغرافي
if (navigator.geolocation) {
    // استدعاء الدالة للحصول على الموقع الحالي للمستخدم
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    // إذا لم يتم دعم ميزة الموقع الجغرافي في المتصفح
    alert("متصفحك لا يدعم ميزة الموقع الجغرافي.");
  }
  
  // دالة لعرض الموقع على الخريطة
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // إنشاء رابط لخريطة الموقع
    var mapLink = "https://www.google.com/maps?q=" + latitude + "," + longitude;
    
    // تحديد المحتوى النصي لعنصر العرض على الصفحة
    document.getElementById("map").innerHTML = "<a href='" + mapLink + "' target='_blank'>عرض الموقع على الخريطة</a>";
  }