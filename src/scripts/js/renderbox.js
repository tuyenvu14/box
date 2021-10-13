function renderBox() {
  var image = "../src/images/Rectangle_6.4.jpg",
    imageClose = "../src/images/adxlogo-2.jpg",
    title = "Kỳ nghỉ 5 sao tại thiên đường nghỉ dưỡng Vinpearl",
    description =
      "Tận hưởng ưu đãi đặc biệt dành cho thành viên mới, trọn gói 3N2Đ chỉ từ 1,250,000/khách. Tận hưởng ưu đãi đặc biệt dành cho thành viên mới",
    domain = "wowholiday.vn/",
    brand = "Vinpearl";

  let css = `html {
  font-size: 62.5%;
  background-color: gray;
  font-family: "Roboto";
  line-height: 18px;
}

.container {
  position: relative;
  display: flex;
  width: 40%;
  margin: auto;
  min-width: 420px;
  height: 189px;
  background-color: white;
}
.container-image {
  padding: 20px 0 23px 0;
}
.container-description {
  padding: 17px 5px 8px 20px;
}
.container-description-close {
  position: absolute;
  top: 0;
  right: 0;
}
.container-description-next {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.container-description-next i {
  color: #1C8DDC;
}
.container-description-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #454545;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container-description-link {
  font-style: italic;
  font-weight: 300;
  font-size: 12px;
  color: #A5A5A5;
  display: flex;
  align-items: center;
}
.container-description-content {
  font-size: 13px;
  color: #868686;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container-description-logo {
  margin-top: 22px;
  font-size: 14px;
}
.container-description-logo span:first-child {
  font-weight: bold;
  color: #1C8DDC;
  margin-right: 4px;
}
.container-description-logo span:last-child {
  color: #A5A5A5;
}`;
  let html = `<div class="container">
    <div class="container-image">
        <img src="${image}" />
    </div>

    <div class="container-description">
        <div class="container-description-close">
            <img src="${imageClose}" />
        </div>
        <div class="container-description-next">
            <i class="fas fa-arrow-circle-right fa-2x"></i>
        </div>
        <div class="container-description-title">${title}</div>
        <div class="container-description-link">${domain}</div>
        <div class="container-description-content">${description}</div>
        <div class="container-description-logo">
            <span>${brand}</span>
            <span>tài trợ</span>
        </div>

    </div>
</div>`;
  // document.write(`<style>${css}</style>${html}`);
  // document.write(`<style>${css}</style><div style="width:600px; margin:0 auto;">
  // ${html}
  //    </div>`);
  var result = document.getElementById("test");
  result.innerHTML = "";
  result.innerHTML = `<style>${css}</style>${html}`;
}

export default renderBox;
