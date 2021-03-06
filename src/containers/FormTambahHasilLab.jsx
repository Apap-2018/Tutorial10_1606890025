import React from 'react';

export const FormTambahHasilLab = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Tambah Hasil Lab Pasien</h2>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />

            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input disabled type="text" className="form-control" defaultValue={props.pasien.nama}/>
            </div>

            <div className="form-group">
                <label>Jenis<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis" required/>
            </div>
            
            <div className="form-group">
                <label>Hasil<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil" required/>
            </div>
            
            <div className="form-group">
                <label>Tanggal Pengajuan<span style={{ color: 'red' }}>*</span></label>
                <input type="date" className="form-control" name="tanggalPengajuan" required/>
            </div>
            <button className="btn btn-success" value="submit">Update</button>
        </form>
    )
}