function renderBox() {
  var image = "../src/images/Rectangle_6.4.jpg",
    imageClose = "../src/images/adxlogo-2.jpg",
    title = "Kỳ nghỉ 5 sao tại thiên đường nghỉ dưỡng Vinpearl",
    description =
      "Tận hưởng ưu đãi đặc biệt dành cho thành viên mới, trọn gói 3N2Đ chỉ từ 1,250,000/khách. Tận hưởng ưu đãi đặc biệt dành cho thành viên mới",
    domain = "wowholiday.vn/",
    brand = "Vinpearl";

  let css = `%%css%%`;
  let html = `%%html%%`;
  // document.write(`<style>${css}</style>${html}`);
  // document.write(`<style>${css}</style><div style="width:600px; margin:0 auto;">
  // ${html}
  //    </div>`);
  var result = document.getElementById("test");
  result.innerHTML = "";
  result.innerHTML = `<style>${css}</style>${html}`;
}

export default renderBox;
