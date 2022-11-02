locationJs = document.getElementById('location-name');
let city
const locationFind = (e) =>{
    if(e.key=='Enter'){
        city = locationJs.value
        fetchFunction()
    }
}
function searchLocationFind(){
    city = locationJs.value
    fetchFunction()
}
function fetchFunction(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7584a6c968ef5512c04ae1156cf3f701&units=metric`)
    .then(response => response.json())
    .then(json =>{
        console.log(json)
    inputHtmlFunction(json)
    })
}
function inputHtmlFunction(weather){
    inputHtml = document.getElementById('input-section')

}
locationJs.addEventListener('keypress',locationFind)
