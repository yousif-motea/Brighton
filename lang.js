
// URL'den dil parametresini al
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang');

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

// Dil parametresine göre içeriği güncelle
if (lang) {
    // Dil parametresine göre içeriği değiştir
    if (lang === 'tr') {
        document.documentElement.lang = 'tr';
        // Türkçe içerikleri yükle
        
    } else if (lang === 'fr') {
        document.documentElement.lang = 'fr';
        // Fransızca içerikleri yükle
    } else {
        document.documentElement.lang = 'en';
        // İngilizce içerikleri yükle (varsayılan)
    }
}