## TUGAS 2 SOFTDEV 


Untuk mengambil data dengan GET
http://localhost:3000/

response :
```
{
    activitas: [
        {
            id:1,
            activity:"belajar html"
        }
    ]
}
```

untuk menambah data dengan POST
http://localhost:3000/tambah

key yang diperlukan :
```
activity : value
```

response :
```
{
    message: "Data berhasil ditambahkan"
}
```

untuk menambah data dengan PUT
http://localhost:3000/edit/:id

key :
```
activity : value
```

response :
```
{
    message: "Data berhasil diperbarui"
}
```

untuk menghapus data dengan DELETE
http://localhost:3000/delete/:id

response :
```
{
    message: "Data berhasil dihapus"
}
```
