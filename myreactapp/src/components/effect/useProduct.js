import { useEffect } from "react";

//custom or user defined hook
export function useProduct(serverURL, products, setProducts) {
  useEffect(() => {
    //AJAX call to fetch back end REST API
    fetch(serverURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === "404") {
          return response.json();
        } else {
          throw Error(`Server error ${response.status}`);
        }
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [products, serverURL, setProducts]);
}
