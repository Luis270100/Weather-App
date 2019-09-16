

class tempManager {

    constructor() {

        this.cityData = []
    }

    async getDatafromDb() {
        let data = await $.get('/cities')
        this.cityData = data
    }

    async getCityData(cityData) {
        let dataCity = await $.get(`/city/${cityData}`)
        this.cityData.push(dataCity)
        return dataCity
    }

    saveCity(cityName) {
        let data = this.cityData.find(d => d.name === cityName)
        $.post('/city', data, () => console.log(`${cityName} is working`))
    }

    removeCity(cityName) {
        $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: () => { console.log("Deleted") }
        })
    }
}

