import "./App.css";
import About from "./components/About";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="">
      <Nav />
      <Head />
      <Categories />
      <About />
      <Footer />
    </div>
  );
}

export default App;
