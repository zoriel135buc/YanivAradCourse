const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const connectDB = require('./configs/db');
const productsBLL = require('./BLL/productsBLL');

const schema = buildSchema(`
  input ProductInput
  {
    name: String
		color: String
		price: Int
  }

  type Product {
		_id: String
		name: String
		color: String
		price: Int
	}

	type Query {
		getAllProducts: [Product]
		getProduct(id: String): Product
		getProductsExpensiveThan(price: Int): [Product]
	}

	type Mutation {
		addProduct(prod: ProductInput): String
		updateProduct(id: String, prod: ProductInput): String
		deleteProduct(id: String): String
	}
`);

const root = {
  getAllProducts: productsBLL.getAllProducts,
  getProduct: productsBLL.getProduct,
  addProduct: productsBLL.addProduct,
  updateProduct: productsBLL.updateProduct,
  deleteProduct: productsBLL.deleteProduct,
  getProductsExpensiveThan: productsBLL.getProductsExpensiveThan,
};

const app = express();
const port = 4000;

connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`products' API at: http://localhost:4000/graphql`);
});
