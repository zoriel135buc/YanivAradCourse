import React from "react";

const Ex2_1Child = (props) => {
  return (
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <th>product name</th>
            <th>product price</th>
            <th>product color</th>
          </tr>
          {props.products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Ex2_1Child;
