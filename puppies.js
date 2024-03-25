function get_random_puppy() {

    url = "https://dog.ceo/api/breeds/image/random"

    fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        display_image(data.message)
    })
    .catch(function(error){
        console.log("Error:" + error)
    })

    function display_image(image_url) {
        
        document.getElementById("image").src = image_url

    }

    const button = document.querySelector(".button");

    button.addEventListener("click", (e) => {
        e.preventDefault();
        button.classList.add("animate");

        setTimeout(() => {
            button.classList.remove("animate");
        }, 600) // 1s = 1000ms
    });

}