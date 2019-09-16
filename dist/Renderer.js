

class Renderer {

    renderData(allCityData){

        const source = $('#city-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({allCityData})
        $('#container').append(newHTML)
    
    }
}


