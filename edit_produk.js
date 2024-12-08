// Ketika halaman dimuat, kita cek apakah ada data produk yang disimpan di localStorage
document.addEventListener('DOMContentLoaded', function () {
    const productToEdit = JSON.parse(localStorage.getItem('productToEdit'));

    // Jika ada data produk untuk diedit
    if (productToEdit) {
        // Memuat data produk ke dalam form input
        document.getElementById('editProductName').value = productToEdit.name;
        document.getElementById('editProductPrice').value = productToEdit.price;

        // Menyimpan informasi produk yang akan diedit
        document.getElementById('editProductForm').addEventListener('submit', function (e) {
            e.preventDefault();
            
            const updatedName = document.getElementById('editProductName').value;
            const updatedPrice = document.getElementById('editProductPrice').value;

            // Memperbarui produk dalam daftar produk
            if (updatedName && updatedPrice) {
                const products = JSON.parse(localStorage.getItem('products'));
                products[productToEdit.index] = { name: updatedName, price: updatedPrice };

                // Simpan perubahan ke localStorage
                localStorage.setItem('products', JSON.stringify(products));

                // Hapus data produk yang lama dari localStorage
                localStorage.removeItem('productToEdit');

                // Arahkan kembali ke halaman utama
                window.location.href = 'index.html';
            }
        });
    }
});
