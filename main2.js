//setInterval to cycle through 
//reset button

// var searchBox = document.getElementById("searchInput").value; // value of users search word
var submitButton = document.getElementById("submit");
var indexImage = 0; 
var handle = null;



submitButton.addEventListener('click', function(e){
    e.preventDefault();
    var searchBox = document.getElementById("searchInput").value; // value of users search word
    // var submitButton = document.getElementById("submit");
    fetch(`http://www.reddit.com/search.json?q=${searchBox}+url:.jpg+nsfw:no`)
        .then(function(randomData){
            return randomData.json()
        })
        .then(function(jsonImage){
            var thumbnails = jsonImage.data.children.map(function(picture){
                if (picture.data.url.includes('jpg') || picture.data.url.includes('png'))
                return picture.data.url
            })
            thumbnails = thumbnails.filter(function(item) {
                return typeof item !== 'undefined';
            })
            newImagePlace.src = thumbnails[0];
            handle = setInterval(function(){
                if (indexImage >= thumbnails.length){
                    indexImage = -1;
                }
                indexImage++;
                newImagePlace.src = thumbnails[indexImage];
            }, 1200)
        }) 
})


