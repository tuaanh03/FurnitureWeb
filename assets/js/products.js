
const arrSP = [
    { ma: "SP0001", ten: "Bàn ăn mặt kính cao cấp", hinh: ["item8.jpg", "item1.jpg"], gia: "9000000" },
    { ma: "SP0002", ten: "Bàn inox mạ vàng đá cao cấp", hinh: ["item2.jpg", "item3.jpg"], gia: "9300000" },
    { ma: "SP0003", ten: "Bộ bàn ăn tròn đơn giản", hinh: ["item4.jpg", "item5.jpg", "item6.jpg"], gia: "1500000" },
    { ma: "SP0004", ten: "Bộ bàn ăn tròn đơn giản", hinh: ["chair1.png", "item5.jpg", "item6.jpg"], gia: "1500000" },
    { ma: "SP0005", ten: "Bộ bàn ăn tròn đơn giản", hinh: ["chair3.png", "item5.jpg", "item6.jpg"], gia: "1500000" },
    { ma: "SP0006", ten: "Bộ bàn ăn tròn đơn giản", hinh: ["chair4.png", "item5.jpg", "item6.jpg"], gia: "1500000" },
    { ma: "SP0007", ten: "Bộ bàn ăn tròn đơn giản", hinh: ["chair5.png", "item5.jpg", "item6.jpg"], gia: "1500000" }
];

//paging

let perpage = 6;
let currentpage = 1;
let start = 0;
let end = perpage;
const totalPages = Math.ceil(arrSP.length / perpage);
console.log(totalPages);


const btnNext = document.querySelector('.btn-next');
const btnPrivous = document.querySelector('.btn-privous');

function getCurrentPage(currentPage)
{
    start = (currentpage - 1) * perpage;
    end = currentpage * perpage;
}
//end paging

function renderProduct() {
    var str = "";
    for (let i = start; i < end && i < arrSP.length; i++) {
        var obj = JSON.stringify(arrSP[i]);
        str += `
    
        <div class="col-md-4">
            <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                    <img class="card-img rounded-0 img-fluid" src="assets/img/itemlist/${arrSP[i].hinh[0]}" >
                    <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul class="list-unstyled">
                            <li><a class="btn btn-success text-white mt-2" href="#" onclick=\'showDetail(\`${obj}\`)\' style = "width: 100%;"><i class="fas fa-info"></i></a></li>
                            <li><a class="btn btn-success text-white mt-2" href="#" onclick="addCart('${arrSP[i].ma}')"><i class="fas fa-cart-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <a class="h3 text-decoration-none" onclick=\'showDetail(\`${obj}\`)\' style = "cursor: pointer;">${arrSP[i].ten}</a>
                    <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <!-- <li>M/L/X/XL</li> -->
                        <li class="pt-2">
                            <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                    
                    <p class="text-center mb-0">${arrSP[i].gia} <sup>đ</sup></p>
                </div>
            </div>         
        </div>                 
    
    `;
    }
    document.querySelector("#product-list").innerHTML = str;
}
renderProduct();

function renderListPage()
{
    let html = '';
    for (let i =1; i <= totalPages;i++)
    {
        html += 
        `
        <li class="page-item">
            <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">${i}</a>
        </li>
        `
        document.getElementById('number-page').innerHTML = html;
    }
}
renderListPage();

function changePage()
{
    const currentPage = document.querySelectorAll('.number-page li');
    console.log(currentpage);
    for (let i = 0; i < currentPage.length; i++)
    {
        currentPage[i].addEventListener('click', () =>{
            let value = i + 1;
            console.log(i);
            currentpage = value;
            getCurrentPage(currentpage);
            renderProduct();
        })
    }
}
changePage();
// renderPage
btnNext.addEventListener('click', () => {
    currentpage++;
    if(currentpage > totalPages)
    {
        currentpage = totalPages;
    }
    getCurrentPage(currentpage);
    renderProduct();
})

btnPrivous.addEventListener('click', () => {
    currentpage--;
    if(currentpage > totalPages)
    {
        currentpage = totalPages;
    }
    getCurrentPage(currentpage);
    renderProduct();
})
//end renderPage


let quantityItem = 0;
let quantity = localStorage.getItem("TotalQuantity");
if (quantity == null) {
    quantity = 0;
}
document.querySelector("#cartNo").innerText = quantity;
console.log(quantity);
let arrCart = localStorage.getItem("myCart");
if (arrCart == null) {
    arrCart = [];
}
else {
    arrCart = JSON.parse(localStorage.getItem("myCart"));
}
console.log(arrCart);

// new function , not compulsory

function calculateTotalQuantity() {
    let totalQuantity = 0;
    for (let i = 0; i < arrCart.length; i++) {
        totalQuantity += arrCart[i].soluong;
    }
    return totalQuantity;
}

//

function addCart(maSP) {
    var item;

    var flag = false;

    for (let i = 0; i < arrSP.length; i++) {
        if (arrSP[i].ma == maSP) {
            item = arrSP[i];
            quantity = 1;
            break;
        }
    }

    for (let i = 0; i < arrCart.length; i++) {
        if (arrCart[i].sp.ma == maSP) {
            arrCart[i].soluong++;
            flag = true;
            break;
        }
    }

    if (flag == false) {
        let cartItem = { sp: item, soluong: quantity };
        arrCart.push(cartItem);
    }

    quantityItem = calculateTotalQuantity();
    document.querySelector("#cartNo").innerText = quantityItem;
    localStorage.setItem("TotalQuantity", quantityItem + "");
    localStorage.setItem("myCart", JSON.stringify(arrCart));
    console.log(arrCart);
}

function showDetail(objSP) {
    console.log(objSP);
    window.localStorage.setItem("sanpham", objSP);
    location.href = "shop-single.html";
}



