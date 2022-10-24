import { useState } from "react"
import ProductList from "./components/ProductList";
 
/*Props
Props merupakan salah satu cara untuk mengirimkan data dari komponen induk (Parent Components)
 ke komponen anak (Child Components).*/
function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);

      //membuat fuction deleteProduct
      //tangkap idnya kasih nama yang berbeda productId
      //buat variable baru const newProduct dan gunakan fungsi js yaitu filter untuk mengambil productnya
      //di dalam filter ambil item dari setiap listnya yaitu product.id !==(tidak sama dengan productId)
      //kemudian update useStatenta 
 
  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }

      // megirimkan products={products} , product (products = props dan {deleteProducts} = useState)
     //kita dapat menangkap products props di file ProductList.js yaitu menuliskan parameter props atau langsung product nya
 
  return (
    <div>
      <ProductList products={ products } deleteProduct={ deleteProduct } />
    </div>
  );
}

    //catatan apabilan dalam browser di hapus semua dan di reload akan muncul kembali arranya sepeti semula-
    //karena kita tidak menghapus datanya dari state ,melainkan kita hanya menampikan data yang tidak sesui dengan id productId
    //untuk kasus sebenarnya kita mungkin akan menghapus data dari database, contoh PROPS di atas hanya untuk mengirim data 
    //dari komponen induk ke komponen anak menggunakan PROPS sebagai function
 
export default App;