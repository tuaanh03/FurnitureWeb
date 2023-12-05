
const arrSP = [
    { ma: "SP0001", ten: "Bàn ăn mặt kính cao cấp", hinh: ["item8.jpg", "item8.1.jpg"], gia: "9000000", phanloai: "ban" },
    { ma: "SP0002", ten: "Bàn inox mạ vàng đá cao cấp", hinh: ["item2.jpg", "item3.jpg"], gia: "9300000", phanloai: "ban" },
    { ma: "SP0003", ten: "Bộ bàn ăn tròn đơn giản", hinh: ["item4.jpg"], gia: "20000000", phanloai: "ban" },
    { ma: "SP0004", ten: "Ghế Doris", hinh: ["chair1.png"], gia: "1500000", phanloai: "ghe" },
    { ma: "SP0005", ten: "Ghế Nosh", hinh: ["chair3.png"], gia: "1500000", phanloai: "ghe" },
    { ma: "SP0006", ten: "Ghế Giraf", hinh: ["chair4.png"], gia: "1500000", phanloai: "ghe" },
    { ma: "SP0007", ten: "Ghế Bành", hinh: ["chair5.png"], gia: "1500000", phanloai: "ghe" },
    { ma: "SP0008", ten: "Ghế Bành tạo hình thú", hinh: ["chair6.png", "item5.jpg", "item6.jpg"], gia: "1500000", phanloai: "ban" },
    { ma: "SP0010", ten: "Bộ bàn ăn mặt đá Ceramic", hinh: ["item10.jpg", "item5.jpg", "item6.jpg"], gia: "25000000", phanloai: "ban" },
    { ma: "SP0011", ten: "Bàn học chất liệu gỗ sồi cao cấp", hinh: ["item11.jpg"], gia: "5500000", phanloai: "ban" },
    { ma: "SP0012", ten: "Bàn học gỗ thông có ngăn kéo", hinh: ["item12.jpg"], gia: "6500000", phanloai: "ban" },
    { ma: "SP0013", ten: "Bàn học gỗ thông", hinh: ["item13.jpg"], gia: "4300000", phanloai: "ban" },
    { ma: "SP0014", ten: "Bàn giám đốc VIP", hinh: ["item22.jpg", "item22.1.jpg", "item22.2.jpg"], gia: "8500000", phanloai: "ban" }, //Bàn làm việc hiện đại chân sắt 2 ngăn kéo Pula BLV08
    { ma: "SP0015", ten: "Bàn làm việc giám đốc VAT BLV05", hinh: ["item23.jpg", "item23.1.jpg", "item23.2.jpg"], gia: "19900000", phanloai: "ban" }, //Bàn làm việc giám đốc Pula BLV05
    { ma: "SP0016", ten: "Bàn làm việc cao cấp VAT BLV02", hinh: ["item24.jpg", "item24.1.jpg", "item24.2.jpg"], gia: "8500000", phanloai: "ban" }, //Bàn làm việc cao cấp thiết kế tối giản Pula BLV02
    { ma: "SP0017", ten: "Bàn học gỗ thông đơn giản", hinh: ["item17.jpg", "item5.jpg", "item6.jpg"], gia: "1500000", phanloai: "ban" },
    { ma: "SP0018", ten: "Bàn giám đốc hiện đại VAT BLV03", hinh: ["item25.jpg", "item25.1.jpg", "item25.2.jpg"], gia: "25500000", phanloai: "ban" }, //Bàn làm việc giám đốc hiện đại Pula BLV03
    { ma: "SP0019", ten: "Bàn làm việc Haven", hinh: ["item26.jpg", "item26.1.jpg", "item26.2.jpg"], gia: "1800000", phanloai: "ban" }, //Bàn làm việc Haven
    { ma: "SP0020", ten: "Bàn học gỗ thông mini", hinh: ["item20.jpg", "item5.jpg", "item6.jpg"], gia: "1500000", phanloai: "ban" },
    { ma: "SP0021", ten: "Bàn làm việc mặt đá VAT BLV10", hinh: ["item21.jpg", "item21.1.jpg", "item21.2.jpg"], gia: "8500000", phanloai: "ban" },  // Bàn làm việc mặt đá thiết kế hiện đại Pula BLV10
    { ma: "SP0022", ten: "Giường ngủ hiện đại VAT PB02", hinh: ["item27.jpg", "item27.1.jpg", "item27.2.jpg"], gia: "9500000", phanloai: "giuongngu" },
    { ma: "SP0023", ten: "Giường ngủ đẹp đệm da VAT PB10", hinh: ["item28.jpg", "item28.1.jpg", "item28.2.jpg"], gia: "20500000", phanloai: "giuongngu" },
    { ma: "SP0024", ten: "Đèn cây VAT DC05", hinh: ["item29.1.jpg", "item29.jpg", "item29.2.jpg"], gia: "1150000", phanloai: "denngu" }
];

//paging

let perpage = 9;
let currentpage = 1;
let start = 0;
let end = perpage;
const totalPages = Math.ceil(arrSP.length / perpage);
console.log(totalPages);

function calculateTotalPages(data) {
    return Math.ceil(data.length / perpage);
}

const btnNext = document.querySelector('.btn-next');
const btnPrivous = document.querySelector('.btn-privous');
function vnd(price) {
    if (price == null || isNaN(price)) {
        return 'Giá không hợp lệ';
    }

    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

    return formattedPrice;
}
function getCurrentPage(currentPage) {
    start = (currentpage - 1) * perpage;
    end = currentpage * perpage;
    console.log(start, end);
}
//end paging


function renderProduct() {

    document.getElementById("product-list").innerText = "";

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
                    
                    <p class="text-center mb-0">${vnd(arrSP[i].gia)} </p>
                </div>
            </div>         
        </div>                 
    
    `;
    }
    document.querySelector("#product-list").innerHTML = str;
}
renderProduct();

function renderListPage() {
    let firsthtml =
        `
    <li class="page-item">
        <a class="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">${1}</a>
    </li>
    `
    let html = '';
    for (let i = 2; i <= totalPages; i++) {
        html +=
            `
        <li class="page-item">
            <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">${i}</a>
        </li>
        `
        
    }
    document.getElementById('number-page').innerHTML = firsthtml + html;
}
renderListPage();

function changePage() {
    const currentPage = document.querySelectorAll('.number-page li a');
    console.log(currentPage);
    for (let i = 0; i < currentPage.length; i++) {
        currentPage[i].addEventListener('click', () => {
            let value = i + 1;
            // console.log(value);
            currentpage = value;
            $('.number-page li a').removeClass('active');
            currentPage[i].classList.add('active');
            if (currentpage > 1 && currentpage < totalPages) {
                $('.btns-privous').removeClass('disable');
                $('.btns-next').removeClass('disable');
            }
            if (currentpage === 1) {
                $('.btns-privous').addClass('disable');
                $('.btns-next').removeClass('disable');
            }
            if (currentpage === totalPages) {
                $('.btns-next').addClass('disable');
                $('.btns-privous').removeClass('disable');
            }
            getCurrentPage(currentpage);
            renderProduct();
        })
    }
}
changePage();

// renderPage
btnNext.addEventListener('click', () => {
    currentpage++;
    if (currentpage > totalPages) {
        currentpage = totalPages;
    }
    if (currentpage === totalPages) {
        $('.btns-next').addClass('disable');
    }
    $('.btns-privous').removeClass('disable');
    $('.number-page li a').removeClass('active');
    $(`.number-page li a:eq(${currentpage - 1})`).addClass('active');
    getCurrentPage(currentpage);
    renderProduct();
})

btnPrivous.addEventListener('click', () => {
    currentpage--;
    if (currentpage <= 1) {
        currentpage = 1;
    }
    if (currentpage === 1) {
        $('.btns-privous').addClass('disable');
    }
    $('.btns-next').removeClass('disable');
    $('.number-page li a').removeClass('active');
    $(`.number-page li a:eq(${currentpage - 1})`).addClass('active');
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

// search item
let filterarray = [];
document.getElementById("inputMobileSearch").addEventListener("keyup", function () {
    let text = document.getElementById("inputMobileSearch").value;
    filterarray = arrSP.filter(function (a) {
        if (a.ten.toLowerCase().includes(text.toLowerCase())) {
            return a.ten;
        }
    });
    if (this.value == "") {
        renderFilteredProducts();
    }
    else {
        if (filterarray == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("product-list").innerHTML = "";
        }
        else {
            renderFilteredProducts();
            document.getElementById("para").style.display = 'none';
        }
    }
})

function renderFilteredProducts() {
    var str = "";
    for (let i = start; i < end && i < filterarray.length; i++) {
        var obj = JSON.stringify(filterarray[i]);
        str += `
            <div class="col-md-4">
                <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                <img class="card-img rounded-0 img-fluid" src="assets/img/itemlist/${filterarray[i].hinh[0]}" >
                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul class="list-unstyled">
                        <li><a class="btn btn-success text-white mt-2" href="#" onclick=\'showDetail(\`${obj}\`)\' style = "width: 100%;"><i class="fas fa-info"></i></a></li>
                        <li><a class="btn btn-success text-white mt-2" href="#" onclick="addCart('${filterarray[i].ma}')"><i class="fas fa-cart-plus"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <a class="h3 text-decoration-none" onclick=\'showDetail(\`${obj}\`)\' style = "cursor: pointer;">${filterarray[i].ten}</a>
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
                
                <p class="text-center mb-0">${vnd(filterarray[i].gia)}</p>
            </div>
                </div>
            </div>
        `;
    }
    document.querySelector("#product-list").innerHTML = str;
    displayCategoryCount(selectedCategory);
}


// start filter products
let filteredproducts = [];
let selectedCategory = 'all'; 

function filterProducts() {
    selectedCategory = document.getElementById('categoryFilter').value;
    start = 0;
    end = perpage;
    renderProducts();
}

function renderProducts() {
    document.getElementById("product-list").innerText = "";
    filteredproducts = (selectedCategory === 'all') ? arrSP : arrSP.filter(product => product.phanloai === selectedCategory);

    var str = "";
    for (let i = start; i < end && i < filteredproducts.length; i++) {
        var obj = JSON.stringify(filteredproducts[i]);
        str += `
        <div class="col-md-4">
        <div class="card mb-4 product-wap rounded-0">
            <div class="card rounded-0">
                <img class="card-img rounded-0 img-fluid" src="assets/img/itemlist/${filteredproducts[i].hinh[0]}" >
                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul class="list-unstyled">
                        <li><a class="btn btn-success text-white mt-2" href="#" onclick=\'showDetail(\`${obj}\`)\' style = "width: 100%;"><i class="fas fa-info"></i></a></li>
                        <li><a class="btn btn-success text-white mt-2" href="#" onclick="addCart('${filteredproducts[i].ma}')"><i class="fas fa-cart-plus"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <a class="h3 text-decoration-none" onclick=\'showDetail(\`${obj}\`)\' style = "cursor: pointer;">${filteredproducts[i].ten}</a>
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
                
                <p class="text-center mb-0">${vnd(filteredproducts[i].gia)} </p>
            </div>
        </div>         
    </div>           
        `;
    }

    document.querySelector("#product-list").innerHTML = str;

    
    displayCategoryCount(selectedCategory);
}



filterProducts();

function filterProductsByCategory() {
    selectedCategory = document.getElementById('categoryFilter').value;
    start = 0;
    end = perpage;
    renderProducts();
    displayCategoryCount(selectedCategory);
}


document.querySelectorAll('.phanloai').forEach(item => {
    item.addEventListener('click', function () {
        selectedCategory = this.getAttribute('data-value');
        start = 0;
        end = perpage;
        renderProducts();
    });
});

// end filter products

// count sp

function calculateCategoryCount(category) {
    return arrSP.filter(product => product.phanloai === category).length;
}

function displayCategoryCount(category) {
    const totalProductCount = calculateTotalProductCount();
    const categoryCount = (category === 'all') ? totalProductCount : calculateCategoryCount(category);

    document.getElementById('categoryCount').innerText = `(${categoryCount} sản phẩm)`;
}

function calculateTotalProductCount() {
    return arrSP.length;
}
//end count sp



// price filter

function calculatePriceRangeCount(minPrice, maxPrice) {
    return arrSP.filter(product => product.gia >= minPrice && product.gia <= maxPrice).length;
}

function displayPriceRangeCount(minPrice, maxPrice) {
    const totalProductCount = calculateTotalProductCount();
    const priceRangeCount = (minPrice === 0 && maxPrice === 100000000) ? totalProductCount : calculatePriceRangeCount(minPrice, maxPrice);

    document.getElementById('categoryCount').innerText = `(${priceRangeCount} sản phẩm)`;
}

document.getElementById('priceRange').addEventListener('change', updatePriceLabel);
function applyPriceFilter() {
    const priceRange = document.getElementById('priceRange');
    const selectedPrice = document.getElementById('selectedPrice');
    const minPrice = 0; // You can change these values based on your actual price range
    const maxPrice = 100000000;

    const selectedValue = parseFloat(priceRange.value);

    let filteredArray;

    if (selectedValue < 10000000) {
        // If the selected price is below 10 million, display all products under 10 million
        selectedPrice.innerText = 'Dưới 10 triệu VND';
        filteredArray = arrSP.filter(product => product.gia < 10000000);
    } else {
        // Display products within the selected price range
        selectedPrice.innerText = formatCurrency(selectedValue) + " - " + formatCurrency(maxPrice);
        filteredArray = arrSP.filter(product => product.gia >= selectedValue && product.gia <= maxPrice);
    }

    displayPriceRangeCount(selectedValue, maxPrice);

    var str = "";
    for (let i = start; i < end && i < filteredArray.length; i++) {
        var obj = JSON.stringify(filteredArray[i]);

        str += `
            <div class="col-md-4">
                <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                <img class="card-img rounded-0 img-fluid" src="assets/img/itemlist/${filteredArray[i].hinh[0]}" >
                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul class="list-unstyled">
                        <li><a class="btn btn-success text-white mt-2" href="#" onclick=\'showDetail(\`${obj}\`)\' style = "width: 100%;"><i class="fas fa-info"></i></a></li>
                        <li><a class="btn btn-success text-white mt-2" href="#" onclick="addCart('${filteredArray[i].ma}')"><i class="fas fa-cart-plus"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <a class="h3 text-decoration-none" onclick=\'showDetail(\`${obj}\`)\' style = "cursor: pointer;">${filteredArray[i].ten}</a>
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
                
                <p class="text-center mb-0">${vnd(filteredArray[i].gia)}</p>
            </div>
                </div>
            </div>
        `;
    }

    document.querySelector("#product-list").innerHTML = str;
    console.log(filteredArray);
}

document.getElementById('filterButton').addEventListener('click', applyPriceFilter);

function updatePriceLabel() {
    const priceRange = document.getElementById('priceRange');
    const selectedPrice = document.getElementById('selectedPrice');
    const selectedValue = parseFloat(priceRange.value);

    if (selectedValue < 10000000) {
        selectedPrice.innerText = 'Dưới 10 triệu VND';
    } else {
        selectedPrice.innerText = formatCurrency(selectedValue) + " - " + formatCurrency(100000000);
    }
}


function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

