import { get } from "./api_calls.js";

function create_product(param) {
  const item = `
  <th scope="row"><span>${param.id}</span></th>
  <td><span>${param.name}</span></td>
  <td><span>${param.description}</span></td>
  <td><span>${param.price}</span></td>
  <td><span><a href="/deleteproduct/${param.id}" >Delete</a></span></td>
  
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
