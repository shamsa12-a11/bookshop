
import Footer from "../component/footer"
import Headar from "../component/headar"
import imagee from "../assets/book.jpg"

function About() {
  return (
    <div>
      <Headar />
      <section className="bg-white py-16 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Welcome to <span className="text-blue-600 font-semibold">YourBookShop</span>, your go-to destination for books you love.
              We offer a wide variety of genres, from academic to adventure, with a passion to inspire every reader.
              Discover, learn, and enjoy with us.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={imagee}
              alt="About us books"
              className="rounded-2xl shadow-xl w-full sm:w-[300px] max-w-full"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
