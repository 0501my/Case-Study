var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    let li = document.createElement("li"); // tạo các phần tử  "li"
    li.appendChild(document.createTextNode(input.value)); //chuyển các dữ liệu nhập vào các dòng li
    ul.appendChild(li); //thêm li vào ul
    input.value = ""; //đặt lại dữ liệu


    // BẮT ĐẦU NGUỒN
    // vì nó nằm trong hàm nên nó chỉ thêm nó cho các mục mới
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);


    // Thêm nút xóa
    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);


// THÊM XÓA LỚP (HIỂN THỊ: KHÔNG CÓ)
    function deleteListItem() {
        li.classList.add("delete")
    }
}


function addListAfterClick() {
    if (inputLength() > 0) {  // đảm bảo rằng trường nhập trống không tạo ra thêm dòng
        createListElement();
    }
}
// cái này bây giờ xem bạn có nhấn "enter" / "return" không. Số 13 là mã khóa của khóa enter
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}


enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

