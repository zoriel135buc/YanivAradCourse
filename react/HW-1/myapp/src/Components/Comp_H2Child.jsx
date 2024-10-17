import React from "react";

export default function Comp_H2Child(props) {
  return (
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <th>product Name</th>
            <th>product price </th>
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
}
