var dem = 0;
var page = document.getElementById("Total_checkbox");
document.getElementById("checkbox").onclick = function (e) {
  if (this.checked) {
    page.innerHTML = "Tổng thanh toán(${dem + 1} sản phẩm)";
    console.log(page);
  } else {
    page.innerHTML = "Tổng thanh toán(${dem} sản phẩm)";
    console.log(page);
  }
};
