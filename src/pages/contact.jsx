import Footer from "../component/footer"
import Headar from "../component/headar"

function Contact() {
  return( 
    <div>
      <Headar />
      <section className="bg-gray-100 py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <form className="space-y-5">
           
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

           
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
