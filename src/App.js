
import './main.css';
import data from './data'
import Product from './components/Product'

function App() {
  return (
    <div className="grid-container">
      
        <header className="row">
          <div>
              <a className="brand" href="/">ShopNow</a>
          </div>
          <div className='options'>
              <a href="/cart">Carrinho</a>
              <a href="/signin">SignIn</a>
          </div>
        </header>
       
        <main>
        <div className="row center">

          {
            data.products.map(product =>(
              <Product key={product._id} product={product} />
            ))
          }
            
            {/* */}
           
         </div>
       
        </main>
       
        <footer className="row center">
        All rights reserved
        </footer>
    </div>
    
  );
}

export default App;
