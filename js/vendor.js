import { get,post } from "./api_calls.js";

function create_product(param) {
  const item = `
  <th scope="row"><span>${param.id}</span></th>
  <td><span>${param.name}</span></td>
  <td><span>${param.description}</span></td>
  <td><span>${param.price}</span></td>
  <td><span><a href="http://estanfa3.com:8443/deleteproduct/${param.id}" >Delete</a></span></td>
  `
  return item;
}
function add_product(product) {
  const products = document.getElementById("loadProuct");
  
  const new_product = document.createElement("tr");

  new_product.innerHTML = create_product(product);
  products.appendChild(new_product);
}

const products = await get({ endpoint: "getuserproduct" });
console.log(products)
console.log(products, `here at products Line: 5`);
products.forEach((product) => {
  add_product(product);
});


async function load(){
  let user = await post({endpoint: 'api/auth/getusername'});
  console.log(user.username)
}


function create_offers(offer) {
  item = ` <th scope="row"><span>${offer.id}</span></th>
  <td><span>${offer.buyerID}</span></td>
  <td><span>${offer.tradedProductId}</span></td>
  <td><span>${offer.offeredPrice}</span></td>
  <td><span><button >Accept</button></span></td>
  <td><span><button onclick="deleteprouduct(id)">Decline</button></span></td>
`
  const offers = document.getElementById("load_offer");
    
  const new_offer = document.createElement("tr");

  new_offer.innerHTML = item;
  offers.appendChild(new_offer);
  
}

const offers = await get({ endpoint: "getoffers" });
console.log(offers)
console.log(offers, `here at offers Line: 5`);
offers.forEach((offer) => {
  create_offers(offer);
});
