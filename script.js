document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
  
    if (productName && productPrice) {
      const productList = document.getElementById('productList');
  
      // Membuat container untuk produk
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
  
      // Membuat elemen nama produk
      const productTitle = document.createElement('h2');
      productTitle.textContent = productName;
  
      // Membuat elemen harga produk dengan format ribuan
      const productPriceEl = document.createElement('p');
      // Menggunakan parseFloat untuk menangani angka desimal
      productPriceEl.textContent = `Harga: Rp ${parseFloat(productPrice).toLocaleString('id-ID')}`;
  
      // Membuat tombol hapus
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Hapus';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', function () {
        productList.removeChild(productContainer);
      });
  
      // Menyusun elemen ke dalam container
      productContainer.appendChild(productTitle);
      productContainer.appendChild(productPriceEl);
      productContainer.appendChild(deleteButton);
  
      // Menambahkan container ke daftar produk
      productList.appendChild(productContainer);
  
      // Reset form setelah produk ditambahkan
      document.getElementById('productForm').reset();
    }
  });
  