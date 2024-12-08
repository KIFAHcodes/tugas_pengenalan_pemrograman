let products = [];

// Mengambil data produk dari localStorage saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
        products = savedProducts;
        renderProducts();
    }
});

// Menambahkan produk baru
document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    if (productName && productPrice) {
        const newProduct = {
            name: productName,
            price: productPrice,
        };

        products.push(newProduct);
        saveProducts();
        renderProducts();

        // Reset form setelah produk ditambahkan
        document.getElementById('productForm').reset();
    }
});

// Menyimpan produk ke localStorage
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Menampilkan produk di halaman
function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product-container');

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.name;

        const productPriceEl = document.createElement('p');
        productPriceEl.textContent = `Harga: Rp ${parseFloat(product.price).toLocaleString('id-ID')}`;

        // Tombol Edit
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', function () {
            localStorage.setItem('productToEdit', JSON.stringify({ ...product, index }));
            window.location.href = 'edit_produk.html'; // Arahkan ke halaman edit produk
        });

        // Tombol Hapus
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            products.splice(index, 1);
            saveProducts();
            renderProducts();
        });

        // Menyusun elemen ke dalam container
        productContainer.appendChild(productTitle);
        productContainer.appendChild(productPriceEl);
        productContainer.appendChild(editButton);
        productContainer.appendChild(deleteButton);

        // Menambahkan container ke daftar produk
        productList.appendChild(productContainer);
    });
}
