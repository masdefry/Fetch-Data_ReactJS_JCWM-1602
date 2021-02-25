// Install Bootstrap :
//      - Menggunakan CDN : 1. Copy link : <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
//                          2. Paste : public/index.html

// Synchronous & Asynchronous :
//      - Sync : Dia menjalankan baris per-baris secara berurutan
//        Ex. console.log('...')
//      - Async : Dia menjalankan baris per-baris secara berurutan TAPI
//                Dia nggak nunggu baris sebelumnya selesai
//        Ex. Axios ---> Dia menghasilkan promise yg belum diketahui responsenya apa

// Lifecycle Method
//      - Fase Mounting : Fase ketika component pertama kali di render oleh DOM. componentDidMount()
//      - Fase Updating : Fase ketika suatu component di render ulang. componentDidUpdate()
//      - Fase Unmounting : Fase ketika component bakalan dihapus dari layar. componentWillUnmount()