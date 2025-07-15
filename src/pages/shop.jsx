import Footer from "../component/footer"
import Headar from "../component/headar"
import imag1 from "../assets/img1.png"
import imag2 from "../assets/img2.jpg"
import imag3 from "../assets/img3.jpg"
import imag4 from "../assets/img4.jpg"
import imag5 from "../assets/img5.jpg"
import imag6 from "../assets/img6.jpg"

function Shop() {
  return (
    <div>
      <Headar />
      <section className="py-16 px-4 sm:px-10 lg:px-20 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800">Top Books</h2>

        <div className="flex flex-wrap justify-center gap-8">
      
          <div className="bg-pink-100 p-5 rounded-lg w-full sm:w-[250px] shadow hover:scale-105 transition-transform">
            <img src={imag1} alt="Book" className="w-full h-[200px] object-cover rounded" />
            <p className="text-sm text-gray-600 mt-2">Design Law Book</p>
            <h3 className="font-semibold mt-1 text-lg">Sample book you to save your book</h3>
            <p className="text-sm font-bold mt-1">$19.50</p>
            <div className="flex items-center gap-2 mt-3">
              <img src={imag4} alt="Author" className="w-6 h-6 rounded-full" />
              <span className="text-sm">Albert</span>
              <span className="ml-auto text-yellow-500 text-sm">★★★★☆</span>
            </div>
            <button className="w-full mt-4 bg-pink-200 text-sm py-1 rounded hover:bg-pink-300">
              Add View
            </button>
          </div>

        
          <div className="bg-pink-100 p-5 rounded-lg w-full sm:w-[250px] shadow hover:scale-105 transition-transform">
            <img src={imag2} alt="Book" className="w-full h-[200px] object-cover rounded" />
            <p className="text-sm text-gray-600 mt-2">Design Law Book</p>
            <h3 className="font-semibold mt-1 text-lg">How to deal every bad book in the world</h3>
            <p className="text-sm font-bold mt-1">$29.00</p>
            <div className="flex items-center gap-2 mt-3">
              <img src={imag5} alt="Author" className="w-6 h-6 rounded-full" />
              <span className="text-sm">Alexandaro</span>
              <span className="ml-auto text-yellow-500 text-sm">★★★★★</span>
            </div>
            <button className="w-full mt-4 bg-pink-200 text-sm py-1 rounded hover:bg-pink-300">
              Add View
            </button>
          </div>

          
          <div className="bg-pink-100 p-5 rounded-lg w-full sm:w-[250px] shadow hover:scale-105 transition-transform">
            <img src={imag3} alt="Book" className="w-full h-[200px] object-cover rounded" />
            <p className="text-sm text-gray-600 mt-2">Design Law Book</p>
            <h3 className="font-semibold mt-1 text-lg">The hidden mystery behind books</h3>
            <p className="text-sm font-bold mt-1">$29.00</p>
            <div className="flex items-center gap-2 mt-3">
              <img src={imag6} alt="Author" className="w-6 h-6 rounded-full" />
              <span className="text-sm">Willem</span>
              <span className="ml-auto text-yellow-500 text-sm">★★★★☆</span>
            </div>
            <button className="w-full mt-4 bg-pink-200 text-sm py-1 rounded hover:bg-pink-300">
              Add View
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Shop;
