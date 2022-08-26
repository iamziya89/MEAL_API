var q=""
var inputClass = document.querySelector('.inputClass');
var buttonClass = document.querySelector('.buttonClass');
var container = document.querySelector('.container');
inputClass.addEventListener("change",()=>{
    q=inputClass.value
    console.log(q)

 })
 buttonClass.addEventListener('click',function(event){
    container.innerHTML =""

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
    .then(result=>result.json())
    .then(data=>{
        let articles = data["articles"]
            
        for(let i=0;i<10;i++){
            let article = articles[i]
            let html = `<div>
                <img src=${article["urlToImage"]}>
                <h1>${article["title"]} </h1>
                <p>${article["author"]}</p>
                <p>${article["description"]} <a href=${article["url"]}>Read more</a> </p>
                </div>`
                container.innerHTML+=html
            }
        }).catch(err=>alert("error"))
    })