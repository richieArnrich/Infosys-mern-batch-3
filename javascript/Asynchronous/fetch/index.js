let itemsDiv = document.getElementById("items"); // div for all items

function fetchData() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => displayItems(res))
    .catch((err) => console.log(err));
}

function displayItems(items) {
  items.map((item) => {
    console.log(item);
    // creating single item div
    let itemDiv = document.createElement("div"); // div for single items
    let imgdiv = document.createElement("div"); // image div for image
    let img = document.createElement("img");
    imgdiv.classList.add("imgDiv");
    img.src = item.image;
    imgdiv.appendChild(img);
    itemDiv.appendChild(imgdiv);
    /* image div comeplete */
    /* details div start */
    let detailsDiv = document.createElement("div");
    // title start
    let title = document.createElement("h3");
    title.textContent = item.title;
    detailsDiv.appendChild(title);
    // title end

    // price start
    let price = document.createElement("p");
    price.textContent = `MRP: $${item.price}`;
    detailsDiv.appendChild(price);
    // price end

    //descript start
    let descript = document.createElement("p");
    descript.textContent = item.description;
    detailsDiv.appendChild(descript);
    //descript end
    // category start
    let category = document.createElement("p");
    category.innerHTML = `<b>Category:</b> ${item.category}`;
    detailsDiv.appendChild(category);
    // category end

    // rating start
    let rating = document.createElement("p");
    rating.innerHTML = `<b>Rating:</b> ${item.rating.rate} / 5 | <b>Reviews</b>: ${item.rating.count}`;
    detailsDiv.appendChild(rating);
    // rating end

    // buttons div
    let buttonsDiv = document.createElement("div");
    let buyButton = document.createElement("button");
    buyButton.textContent = "Buy Now";
    buyButton.classList.add("btn");
    buyButton.classList.add("btn-warning");
    buyButton.classList.add("p-2");
    buyButton.classList.add("m-2");
    buttonsDiv.appendChild(buyButton);

    let cartButton = document.createElement("button");
    cartButton.textContent = "Add To Cart";
    cartButton.classList.add("btn");
    cartButton.classList.add("btn-secondary");
    cartButton.classList.add("p-2");
    cartButton.classList.add("m-2");
    buttonsDiv.appendChild(cartButton);
    detailsDiv.appendChild(buttonsDiv);
    // button div end

    itemDiv.appendChild(detailsDiv);
    detailsDiv.classList.add("details");
    itemDiv.classList.add("item");
    itemsDiv.appendChild(itemDiv);
  });
}

fetchData();
