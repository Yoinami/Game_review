// Select the button and pre element to display JSON data
const loadDataButton = document.getElementById('loadDataButton');
const jsonDataElement = document.getElementById('jsonData');
// Event listener for the button click
function fet() {
    console.log('data requested')
    // Use the fetch function to request the JSON file
    fetch('../html_text_files.json')
        .then(response => {
            // Check if the response status is OK (200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON data from the response
            return response.json();
        })
        .then(data => {
            // Display the JSON data in the pre element
            json_data = data;
            console.log(json_data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
};
fet();
function addContent(dic, id, container_obj) {
    container_obj[0].innerHTML += `
    <div class="individual-content" onclick="saveTrailer(${id})">
        <img src="image/${dic["preview-img"]}" alt="${dic["name"]}">
        <div class="under-cap">
            <div class="cap-wrapper">
                <p>${dic["name"]}</p>
                <div>
                    
                    <img class="icon" src="editorial/small-star2.png">
                    <p>${dic["rating"]}/10</p>
                </div>
                <div class="type"><p>${dic["genre"][0]}</p></div>
            </div>
        </div>
    </div>
    `;
}

function Prepare(n) {
    let key_array = Object.keys(json_data);
    let x;
    let history = [];
    let container = document.getElementsByClassName("below-container-flex");
    let seemore = document.getElementsByClassName("seemore-container")
    for (let index = 0; index < n; index++) {
        x = Math.floor(Math.random() * key_array.length);
        key_index = key_array[x];
        while(history.includes(key_index)) {
            x = Math.floor(Math.random() * key_array.length);
            key_index = key_array[x];
        }
        history.push(key_index)
        console.log(json_data[key_index]);
        if(index < 8) {
            addContent(json_data[key_index], key_index, container);
        } else {
            addContent(json_data[key_index], key_index, seemore);
        }
        
    }
}
function saveTrailer(id) {
    localStorage.setItem("currentid", id);
    location.href = 'trailer.html';
}
function callTrailer() {
    currentgame = json_data[localStorage.getItem("currentid")];
    console.log(currentgame);
    var trailer =  document.getElementById("replaceable");
    trailer.innerHTML = `
    <div class="whole">
    <div class="background">
        <img src="extra/bg-dota2.jpeg">
    </div>
    
    <header class="header">
        <a href="#" class="logo">Lumi</a>
        <label for="check" class="icons">
            <i class='bx bx-menu' id="menu-icon"></i>
            <i class='bx bx-x' id="close-icon" ></i>
        </label>
        
        
        <nav class="navbar">
            <a href="home.html">Home</a>
            <a href="reviews.html" style="color: navy;">Reviews</a>
            <a href="aboutus.html">About Us</a>
            <a href="contact_us.html">Contact Us</a>
        </nav>
    </header>

    <div class="main-container">
        <h1 style="padding-left: 30px;">${currentgame["name"]}</h1>
        <div class="additional-video-container">
            <div class="the-video-part">
                <div class="slides">
                    <img src="image/${currentgame["preview-img"]}" alt="">
                </div>
                <div class="slides">
                    <img src="image/${currentgame["preview-img"]}" alt="">
                </div>
                <div class="slides">
                    <img src="image/${currentgame["preview-img"]}" alt="">
                </div>
                <div class="slides">
                    <img src="image/${currentgame["preview-img"]}" alt="">
                </div>
                <div class="pointer" style="position: relative;">
                    <div class="thumbnail" id="data">
                        <div class="thumbnail-i" onclick="changeSlide(1)"><img src="image/${currentgame["preview-img"]}" alt=""><div id="video-player"></div></div>
                        <div class="thumbnail-i" onclick="changeSlide(2)"><img src="image/${currentgame["preview-img"]}" alt=""></div>
                        <div class="thumbnail-i" onclick="changeSlide(3)"><img src="image/${currentgame["preview-img"]}" alt=""></div>
                        <div class="thumbnail-i" onclick="changeSlide(4)"><img src="image/${currentgame["preview-img"]}" alt=""></div>
                    </div>
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                
            </div>

            <div class="info-part">
                <div class="image-container">
                    <img src="image/${currentgame["preview-img"]}" alt="">
                </div>

                <div class="decsription-part">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                    voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                    necessitatibus ipsum perferendis similique nulla.
                </div>
                <table>
                    <tr class="release-date">
                        <th>Release Date: </th>
                        <td>99 Dec, 1999</td>
                    </tr>
                    <tr>
                        <th>Developer: </th>
                        <td>Somebody</td>
                    </tr>
                    <tr>
                        <th>Publisher: </th>
                        <td>Somebody</td>
                    </tr>
                </table>

                <div class="tags-div">
                    <span class="genre">Genre Tags:</span>
                    ${currentgame["genre"]?createTags(currentgame["genre"]):""}
                </div>
            </div>
        </div>
        
        <div id="aboutThisGame" class="game_page_autocollapse" style="max-height: none;">
            <div class="saleswrap">
                <div class="playthegame">
                
                    Play <i>${currentgame["name"]}</i>
                    <div class="available-platform" style="width: fit-content;">
                        <span class="av" style="font-size: 1rem;">Available Platforms:</span>
                        <div style="display: inline-block;">
                            <span class="window-plat platform"></span>
                            <span class="mac-plat platform"></span>
                            <span class="switch-plat platform"></span>
                            <span class="playstation-plat platform"></span>
                            <span class="xbox-plat platform"></span>
                        </div>
                        <button id="officialbutton">
                            Go to official page
                        </button>               
                    </div>
                    
                </div>
                <div class="community-wrapper">
                    <div style="background-color: #4386d8; padding: 10px 20px;">Game Socials</div>
                    <div class="community-content">
                        <a href="">Facebook</a>
                        <a href="">Reddit</a>
                        <a href="">Twitter</a>
                        <a href="">Steam page</a>
                    </div>
                </div>
            </div>
            <table class="table">
                <tr class="rating">
                    <td class="rate3">
                        <div>Lumination</div>
                        <div>${currentgame["rating"]}/10</div>
                    </td>
                    <td class="rate1">
                        <div>Google</div>
                        <div>4.2/5</div>
                    </td>
                    <td class="rate2">
                        <div>IGN</div>
                        <div>9/10</div>
                    </td>
                    <td class="rate3">
                        <div>Open Critics</div>
                        <div>80%</div>
                    </td>
                </tr>
            </table>
            <div id="game_area_description" class="game_area_description">
                <h2>About This Game</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                     voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                     necessitatibus ipsum perferendis similique nulla.
                <h2>Our Review <button onclick="seemoreFun()" id="moreBtn">v</button></h2>
                    <div id="seemore" style="display: none;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                    voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                    necessitatibus ipsum perferendis similique nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                    voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                    necessitatibus ipsum perferendis similique nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                    voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                    necessitatibus ipsum perferendis similique nulla.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                    voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                    necessitatibus ipsum perferendis similique nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                    voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                    necessitatibus ipsum perferendis similique nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                    voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                    necessitatibus ipsum perferendis similique nulla.
                </div>
                
                <h2>TLDR</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
    </div>

    <div class="container">
        <div class="post">
          <div class="text">Thanks you for the rating!</div>
          <div class="edit">EDIT</div>
        </div>
        <div class="star-widget"> 
          <input type="radio" name="rate" id="rate-5">
          <label for="rate-5" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-4">
          <label for="rate-4" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-3">
          <label for="rate-3" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-2">
          <label for="rate-2" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-1">
          <label for="rate-1" class="fas fa-star"></label>
          <form action="#">
            <header></header>
            <div class="textarea" style="border-radius: 10px;">
              <textarea cols="30" placeholder="Describe your experience.."></textarea>
            </div>
            <div class="btn">
              <button type="submit" style="border-radius: 10px;">Post</button>
            </div>
          </form>
        </div>
    </div>

    <div class="comment-section">
        <div class="comment-indiv-container">
            <div class="comment-head">
                Somebody
                <span>22 Nov, 1968</span>
                <div style="padding-top: 10px;">
                    <img src="editorial/small-star2.png" style="height: 1rem;">
                    <img src="editorial/small-star2.png" style="height: 1rem;">
                    <img src="editorial/small-star2.png" style="height: 1rem;">
                    <img src="editorial/small-star2.png" style="height: 1rem;">
                    <img src="editorial/small-star2.png" style="height: 1rem;">
                </div>
            </div>
            <div class="comment-text-area">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                necessitatibus ipsum perferendis similique nulla.
            </div>
            <div class="helpful-buttons">
                <div style="margin-left: 100px; margin-top: 10px;">
                    <img src="editorial/like-i.png" id="like" onclick="">
                    <img src="editorial/like-i.png" id="dislike" onclick="">
                </div>
            </div>
        </div>
        <div class="comment-indiv-container">
            <div class="comment-head">
                Someone
                <span>29 Feb, 2023</span>
                <div style="padding-top: 10px;">
                    <img src="editorial/small-star2.png" style="height: 1rem;">
                </div>
            </div>
            <div class="comment-text-area">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime beatae cupiditate dolorem saepe, harum tempora odio 
                voluptates! Aliquid, tenetur tempora at a quidem quas nihil, 
                necessitatibus ipsum perferendis similique nulla.
            </div>
            <div class="helpful-buttons">
                <div style="margin-left: 100px; margin-top: 10px;">
                    <img src="editorial/like-i.png" id="like" onclick="">
                    <img src="editorial/like-i.png" id="dislike" onclick="">
                </div>
            </div>
        </div>
    </div>


    <script>
        const x = document.getElementsByClassName("btn")[0];
        const btn = x.querySelector("button");
        const post = document.querySelector(".post");
        const widget = document.querySelector(".star-widget");
        const editBtn = document.querySelector(".edit");
        btn.onclick = ()=>{
          widget.style.display = "none";
          post.style.display = "block";
          editBtn.onclick = ()=>{
            widget.style.display = "block";
            post.style.display = "none";
          }
          return false;
        }
    </script>
</div>


<script src="js-lib/sub_nav.js"></script>
<script src="trailer.js"></script>
    
    `;
}
function createTags(ary) {
    let res = "";
    for (let index = 0; index < ary.length; index++) {
        res  += `<span class="tags">${ary[index]}</span>`;
    }
    return res;
}