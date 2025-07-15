import image from "../assets/img.png"
import imag1 from "../assets/img1.png"
import imag2 from "../assets/img2.jpg"
import imag3 from "../assets/img3.jpg"
import imag4 from "../assets/img4.jpg"
import imag5 from "../assets/img5.jpg"
import imag6 from "../assets/img6.jpg"
import Footer from "../component/footer"
import Headar from "../component/headar"

function Home() {
  return (
    <>
      <Headar />
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 lg:px-20 mt-10">
        <div className="sm:w-1/2 mt-10">
          <h2 className="text-orange-500 font-semibold text-2xl sm:text-3xl mb-4">Choose Best Book</h2>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Your next favorite <br />
            book is just a <span className="text-orange-500">click away</span>
          </h1>
          <p className="text-gray-500 mt-4 mb-6 text-sm sm:text-base">
            Sit at an angle with elegant movement. Focus on balance and efficient positioning. <br />
            Aim for stability with confident and graceful control. <br />
            Seek alignment like a professional. Smooth movements create harmony and flow.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-300 py-2 px-4 rounded-xl">Shop Now</button>
            <button className="text-white bg-orange-500 py-2 px-4 rounded-xl">View All Books</button>
          </div>
        </div>
        <div className="sm:w-1/2 mt-10 sm:mt-0 flex justify-center">
          <img src={image} alt="Main Visual" className="w-[250px] sm:w-[350px] lg:w-[400px]" />
        </div>
      </div>

      {/* Top Books Section */}
      <section className="py-16 px-4 sm:px-10 lg:px-20 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800">Top Books</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[{ img: imag1, user: imag4, name: "albert", title: "sample book you to save your book", price: "$19.50", rate: "★★★★☆" },
            { img: imag2, user: imag5, name: "alexandaro", title: "how to deal every bad book", price: "$29.00", rate: "★★★★★" },
            { img: imag3, user: imag6, name: "willem", title: "the hidden mystery behind books", price: "$29.00", rate: "★★★★☆" }
          ].map((book, index) => (
            <div key={index} className="bg-pink-100 p-5 rounded-lg w-full sm:w-[280px] shadow hover:scale-105 transition-transform">
              <img src={book.img} alt="Book" className="w-full h-[200px] object-cover rounded" />
              <p className="text-sm text-gray-600 mt-2">design law book</p>
              <h3 className="font-semibold mt-1 text-lg">{book.title}</h3>
              <p className="text-sm font-bold mt-1">{book.price}</p>
              <div className="flex items-center gap-2 mt-3">
                <img src={book.user} alt="Author" className="w-6 h-6 rounded-full" />
                <span className="text-sm">{book.name}</span>
                <span className="ml-auto text-yellow-500 text-sm">{book.rate}</span>
              </div>
              <button className="w-full mt-4 bg-pink-200 text-sm py-1 rounded hover:bg-pink-300">
                Add View
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
