function showCategory(categoryId) {
  // Hapus kelas 'active' dari semua kategori
  document.querySelectorAll(".category-list li").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".category-content").forEach(el => el.classList.remove("active"));
  
  // Tambahkan kelas 'active' ke kategori yang dipilih
  document.querySelector(`.category-list li[onclick="showCategory('${categoryId}')"]`).classList.add("active");
  
  if (categoryId === 'all') {
    document.getElementById('all').classList.add("active");
    // Tampilkan semua kategori
    document.querySelectorAll('.category-content').forEach(cat => cat.style.display = 'none');
    document.getElementById('all').style.display = 'grid'; // Tampilkan grid
  } else {
    document.getElementById(categoryId).classList.add("active");
    // Sembunyikan semua kategori lain
    document.querySelectorAll('.category-content').forEach(cat => {
      cat.style.display = 'none'; // Menyembunyikan semua konten
    });
    document.getElementById(categoryId).style.display = 'grid'; // Tampilkan kategori yang aktif
  }
}

function toggleCollapse(id) {
  const content = document.getElementById(id);
  if (content.style.display === "block") {
    content.style.display = "none"; // Sembunyikan jika sudah terlihat
  } else {
    content.style.display = "block"; // Tampilkan jika tersembunyi
  }
}

// Set default category to show all projects on page load
document.addEventListener("DOMContentLoaded", function() {
  showCategory('all');
});
