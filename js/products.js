import { get } from "./api_calls.js";
function create_product(params) {
  const item = `
                                    <div class="ec-product-inner">
                                        <div class="ec-pro-image-outer">
                                            <div class="ec-pro-image">
                                                <a href="product-left-sidebar.html" class="image">
                                                    <img class="main-image"
                                                        src="http://estanfa3.com:8443${
                                                          params.image_path
                                                        }" alt="Product" />
                                                   
                                                </a>
                                              
                                                <a href="#" class="quickview" data-link-action="quickview"
                                                    title="Quick view" data-bs-toggle="modal"
                                                    data-bs-target="#ec_quickview_modal"><i class="fi-rr-eye"></i></a>
                                                <div class="ec-pro-actions">
                                                    <a href="#" class="ec-btn-group compare"
                                                        title="Compare"><i class="fi fi-rr-arrows-repeat"></i></a>
                                                    <button title="Add To Cart" class="add-to-cart"><i
                                                            class="fi-rr-shopping-basket"></i> Add To Cart</button>
                                                    <a class="ec-btn-group wishlist" title="Wishlist"><i
                                                            class="fi-rr-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ec-pro-content">
                                            <h5 class="ec-pro-title"><a href="/make-offer.html?id=${params.id}">${
                                              params.name
                                            }</a></h5>
                                            
                                            <div class="ec-pro-list-desc">${params.description}</div>
                                            <span class="ec-price">
                                                <span class="new-price">E£${
                                                  params.price
                                                }</span>
                                            </span>
                                            
                                        </div>
                                    </div>
                                
`;
  return item;
}
function add_product(product) {
  const products = document.getElementById("products");
  
  const new_product = document.createElement("div");
  new_product.classList.add(
    "col-lg-4", "col-md-6", "col-sm-6","col-xs-6","mb-6","pro-gl-content"
  );
  new_product.innerHTML = create_product(product);
  products.appendChild(new_product);
}

const products = await get({ endpoint: "getproduct" });
console.log(products)
console.log(products, `here at products Line: 5`);
products.forEach((product) => {
  add_product(product);
});

document.getElementById("counter").innerText =  `Showing 1-1 of ${products.length} item(s)`;