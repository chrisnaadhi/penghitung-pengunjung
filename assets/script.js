const Counter = {
    data() {
        return {
            counter: 0,
            saveCount: []
        }
    },
    methods: {
        incrementBtn() {
            this.counter++
        },
        saveBtn() {
            this.saveCount.push(this.counter)
            this.counter = 0
            localStorage.setItem("dataKunjungan", this.saveCount)
        },
        deleteData() {
            this.saveCount = []
            localStorage.removeItem("dataKunjungan")
        }
    },
    created() {
        try {
            if (this.getData !== null) {
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