import About from "../components/about/About";
import Product from "../components/shop/product/Product";
import Might from "../components/shop/product/you-might/Might";

const MainProduct = () => {
  return (
    <section>
      <Product />
      <About />
      <Might />
    </section>
  );
};

export default MainProduct;
