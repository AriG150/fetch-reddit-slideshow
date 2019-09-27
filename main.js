console.log("hello")
// create AJAX request -DONE
//create an array of image URL -DONE
//make form/title/description hide
//cycle through images
    //set interval
    // either add images, or change the src of a single image tag
    // button to stop the animation
        //clearInterval

//To Do 
//line 32- all url in ajax'ed page
// event listener for id "searchInput" -DONE
    //create clobal function calling searchInput  
    //insert result into ajax fetch-ing
//feed urlimage into html div 
//interval
//global variable to save all thumbnails 

//DOM references
var form = document.getElementById("form");
var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
// var inputText = form.searchInput.value;
var inputText = document.getElementById("searchInput").value;


function settingImage(){
    submitButton.addEventListener("submit", function(e){ 
        e.preventDefault();
        // inputText = form.searchInput.value;
        // inputText = document.getElementById("searchInput").value;
        console.log(inputText);
        fetch(`http://www.reddit.com/search.json?q=cats+url:.jpg+nsfw:no`)
            .then(function(randomData){
                return randomData.json()
            })
            .then(function(jsonImage){
                var thumbnails = jsonImage.data.children.map(function(picture){
                    if(picture.data.url.inclues('jpg') || picture.data.url.inclues('png')) {
                        console.log(thumbnails)
                        return picture.data.url
                    }
                    
                })  
                thumbnails = thumbnails.filter(function(item){
                    return typeof item !== 'undefined';
                })
                show.src = thumbnails[0];
                handle = setInterval(function(){
                    if(imageIndex >= thumbnails.length){
                        imageIndex = -1;
                    }
                    imageIndex++;
                    SHOW.src = thumbnails[IMAGEINDEX]; //SHOW and IMAGEINDEX are Steve's variables. Adjust for our own code
                },1200)
            })
})
}


// (`http://www.reddit.com/search.json?q=${inputText}+url:.jpg+nsfw:no`)