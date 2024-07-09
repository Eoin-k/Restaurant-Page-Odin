function mainContent(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.innerHTML += `
    <div class="home-intro">
    <h1>Welcome to Epicurian Delights</h1>
    <div class="home-images-wrapper">
    <img class="intro-image" src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <img class="intro-image" src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <img class="intro-image" src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600">
    </div>
    <p class="home-body">Here culinary tradition meets contemporary innovation. Our restaurant offers a unique dining experience, seamlessly blending classic recipes with modern techniques to create dishes that are both familiar and delightfully unexpected. 
    Every meal is a journey through time-honored flavors, artfully reimagined for today's discerning palate. 
    With a commitment to quality ingredients and impeccable service, we invite you to savor the extraordinary and discover why Epicurean Delights is the perfect destination for those who appreciate the art of fine dining.</p>
    </div>
    <div class="awards-wrapper">
    <img class="award-image" src="https://www.luxuryrestaurantawards.com/wp-content/uploads/sites/9/2023/03/Restaurant-logo-white.png">
    </div>
    `;
}

export default mainContent