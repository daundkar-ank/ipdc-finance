import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-pink-50 py-16 px-4">
      <div className="container mx-auto text-center max-w-lg">
        <p className="text-3xl md:text-4xl font-bold text-gray-900">
          Newsletter
        </p>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis
          aliquam arcu lacus.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full md:w-64 px-4 py-2 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-md"
          />
          <button
            className="bg-pink-500 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-600 transition w-full md:w-auto"
            style={{ borderRadius: "4px" }}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
