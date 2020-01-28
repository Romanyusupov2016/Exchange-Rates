
const app = new Vue({
    el: '#app',
    data: {
        isShown: false,
        errorInfo: '',
        jsObj: {
            date: '',
            timeStamp: ''
        },
        valutes: [],
        selectedValutes: []
    },

    methods: {
        makeRequest() {
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.jsObj.date = data.Date;
                this.jsObj.timeStamp = data.Timestamp;
                this.valutes = Object.entries(data.Valute);
                for (let arr of this.valutes) {
                    switch(arr[0]) {
                        case 'USD':
                            this.selectedValutes.push(arr[1]);
                            break;
                        case 'EUR':
                            this.selectedValutes.push(arr[1]);
                            break;
                    }
                }
            })
            .catch(err => {
                this.errorInfo = err;
                this.isShown = true;
            })
        },   
    }
})

app.makeRequest();


