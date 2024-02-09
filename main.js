$(document).ready(function () {
    // Mendapatkan nilai dari URL setelah tanda '#' (hash)
    var m3u8ValueFromURL = window.location.hash.substring(1);

    // Mengatur nilai #m3u8-placeholder berdasarkan nilai dari URL atau dari localStorage
    $('#m3u8-placeholder')[0].value = m3u8ValueFromURL || localStorage.getItem('m3u8-link') || '';

    $('#play-btn').on('click', function () {
        // Menyimpan nilai #m3u8-placeholder ke localStorage
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);

        // Mengarahkan ke halaman pemutar dengan menambahkan hash (#) dan nilai dari #m3u8-placeholder
        window.location.href = './player' + '#' + $('#m3u8-placeholder')[0].value;
    });
});

// Memanggil fungsi saat halaman selesai dimuat
$(window).on('load', function () {
    // Jika Anda ingin langsung memainkan video setelah halaman dimuat, Anda dapat menambahkan logika pemutaran di sini.
});
