import { useState } from "react";
import { useProduct } from "./useProduct";
const PRODUCT_API_URL = "/database/products.json";

const Product = () => {
  const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     //AJAX call to fetch data from backend REST API
  //     fetch(PRODUCT_API_URL, {
  //       method: "GET",
  //       headers: {
  //         Accept: "appliation/json",
  //       },
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         } else if (response.status === "404") {
  //           return response.json();
  //         } else {
  //           throw Error(`Server error ${response.status}`);
  //         }
  //       })
  //       .then((data) => setProducts(data))
  //       .catch((err) => console.log(err));
  //   }, [products]);
  useProduct(PRODUCT_API_URL, products, setProducts);

  return (
    <div className="container">
      <table className="table table-primary table-stripped">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Band</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
