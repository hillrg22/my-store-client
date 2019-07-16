import React, {Component} from 'react'

import ProductCard from './ProductCard'

class Products extends Component {
  state= {
    products: []
  }


  componentDidMount() {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.products
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render(){
    return(
      <div className='App'>
        <header>
          <h1>Welcome to Products List!</h1>
        </header>
        {this.state.products.map(product => {
          return <ProductCard />
        })}
      </div>
    )
  }
}


export default Products
