const Counter = {
    data() {
        return {
            counter: 0,
            saveCount: [],
            zeroData: "Anda tidak bisa memasukkan data kosong!"
        }
    },
    methods: {
        incrementBtn() {
            this.counter++
        },
        saveBtn() {
            if (this.counter !== 0) {
                this.saveCount.push(this.counter)
                this.counter = 0
                localStorage.setItem("dataKunjungan", this.saveCount)
            } else {
                alert(this.zeroData)
            }
            
        },
        deleteData() {
            let answer = window.confirm("Anda yakin untuk menghapus data ini ?")
            if (answer && localStorage.getItem("dataKunjungan") !== null) {
                this.saveCount = []
                localStorage.removeItem("dataKunjungan")
            } else {
                alert("Tidak ada data untuk dihapus!")
            }
        }
    },
    created() {
        try {
            if (typeof (Storage) !== undefined) {
                this.saveCount = localStorage.getItem("dataKunjungan").split(",").map(Number);
            } else {
                console.log("Tidak ada fitur localStorage")
            }
        } catch (err) {
            console.log("dataKunjungan telah dibuat")
        }
    }
}

const app = Vue.createApp(Counter)
app.mount('#app')