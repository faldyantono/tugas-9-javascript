function datakampus() {
  var mahasiswa = {
    nama: "Harits Fadillah",
    ipk: {
      semester1: 2.45,
      semester2: 2.44,
      semester3: 2.21,
      semester4: 1.93,
    },
    fakultas: "geologi",
    jurusan: "geodesi",
    obat: "gaada obat",
  }
  for (var x in mahasiswa)
    console.log(mahasiswa[x]);
}
datakampus()