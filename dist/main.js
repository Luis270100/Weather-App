const temp = new tempManager()
const render = new Renderer()


const loadPage = async function () {
    await temp.getDatafromDb()
    let cityData = temp.cityData
    render.renderData(cityData)
}

const handleSearch = async function () {
    let input = $(".getCity").val()
    let city = await temp.getCityData(input)
    city = [city]
    console.log(city)
    render.renderData(city)
    $(".getCity").val("")

}


$('body').on("click", ".save", async function () {
    let cityName = $(this).siblings('.name').text()
    console.log(cityName)
    let data = await temp.saveCity(cityName)
})


$('body').on("click", ".delete", async function () {
    let cityName = $(this).siblings('.name').text()
    console.log(cityName)
    let data = await temp.removeCity(cityName)
    $(this).parent('.city').empty()
    console.log(data)
})



