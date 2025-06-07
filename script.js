
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  
  form.addEventListener("submit", function (event) {
    
    event.preventDefault();

  
    const namaLengkap = document.getElementById("nama").value;
    const email = document.getElementById("email").value;

    
    const topikWebinar = document.querySelector(
      'input[name="topik"]:checked'
    ).value;

    const pesan = document.getElementById("pesan").value;

   
    const tanggalPendaftaran = new Date();
    const tahun = tanggalPendaftaran.getFullYear();
    const bulan = (tanggalPendaftaran.getMonth() + 1)
      .toString()
      .padStart(2, "0"); // Bulan dimulai dari 0
    const hari = tanggalPendaftaran.getDate().toString().padStart(2, "0");
    const tanggalFormatted = `${tahun}-${bulan}-${hari}`;

   
    let message = "Data Pendaftaran Webinar Anda:\n\n";
    message += `Nama Lengkap : ${namaLengkap}\n`;
    message += `Email        : ${email}\n`;
    message += `Topik Webinar: ${topikWebinar}\n`;
    if (pesan) {
      
      message += `Pesan        : ${pesan}\n`;
    }
    message += `Tanggal      : ${tanggalFormatted}`;

    
    alert(message);

   
  });
});
