1.  Pada setiap fungsi di Appointment.js, parameter pertama pasti memiliki prefix
    “${cors}” yang merefer pada variable cors. Mengapa hal tersebut perlu dilakukan?
    Apa yang terjadi jika prefix tersebut dihilangkan?

        karena alasan security, browser membatasi cross-origin HTTP request dari origin (domain) yang berbeda yang diinisiasi dari dalam scripts.
        prefix ${cors} perlu ditambahkan agar browser memperbolehkan cross-origin HTTP request

        apabila prefix ${cors} dihilangkan, maka akan muncul error:
        Access to fetch at 'http://si-appointment.herokuapp.com/api/1/getAllPasien' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

2.  Pada fungsi handleFormSubmit(e) di UpdatePasien.jsx terdapat klausa:
        *insert code dari soal*
    Apa yang dilakukan pada code tersebut? Jika klausa tersebut diganti dengan“dataJson[key] = val”, apa yang terjadi dengan isi variable dataJson?

        pada form updatePasien, terdapat sebuah input yang mempunyai attribute name="statusPasien.id"
        input tersebut kemudian akan dijadikan json untuk dikirim ke si appoinment.
        fungsi diatas mengubah data yang akan dikirim, 
        
        semula berbentuk:
                "statusPasien.id": "id_pasien"

        menjadi:
                "statusPasien": {
                        "id" : "id_pasien"
                }

3.  Penjelasan latihan Nomor 1:

        1. menambahkan url "/daftar-staf-farmasi" dan menu navigasi Daftar Staf Farmasi pada App.js
        2. menambahkan fungsi getAllStaffFarmasi() pada Appointment.js
        3. membuat komponen DaftarStafFarmasiRow.jsx (mirip dengan DaftarPasienRow, tetapi method pada constructor diganti dari getAllPasien() menjadi getAllStaffFarmasi())

4. Penjelasan latihan nomor 2:

        1. menambahkan url "/tambah-hasil-lab/:id" pada App.js
        2. menambahkan fungsi tambahHasilLab pada Appointment.js
        3. menambahkan tombol Tambah Hasil Lab pada halaman Daftar Pasien 
        4. membuat komponen screen TambahHasilLab.jsx dan FormTambahHasilLab.jsx
