import React from "react";
import Navbar from "../Nav/Navbar";
import FooterA from "../Footer/FooterA";
const ContactPage = () => {
  return (
    <>
    <div className="w-full">
      <Navbar />
      <div className="min-h-screen w-full mt-18 bg-gray-100 flex items-center justify-center">
        <div className=" rounded-lg shadow-lg p-8  w-full">
          <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-center text-gray-700 mb-6">
            We'd love to hear from you! Learn more about us below.
          </p>

          {/* About Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
            <p className="text-gray-700">
              Pick My Junk is a platform for efficient e-waste collection and
              recycling, promoting sustainability through technology and
              community engagement.
            </p>
          </section>

          {/* Work Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Our Work</h2>
            <p className="text-gray-700">We connect users with recyclers for safe e-waste disposal, raising awareness and fostering a greener future. ♻</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>educate individual and businesses about e-waste</li>
              <li>encourage resposible disposal</li>
              <li>integrate e-waste awareness</li>
            </ul>
          </section>

          {/* Key Points Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Key Points</h2>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Customer satisfaction is our top priority.</li>
              <li>We provide 24/7 support to ensure you’re never stuck.</li>
              <li>
                Our solutions are innovative, scalable, and cost-effective.
              </li>
              <li>
                We value collaboration and transparency in all our projects.
              </li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us through the following channels:
            </p>
            <ul className="list-none">
              <li className="text-gray-700">
                📧 Email:{" "}
                <span className="font-semibold">pickmyjunk@admin.com</span>
              </li>
              <li className="text-gray-700">
                📞 Phone: <span className="font-semibold">+91 88888 66666</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <FooterA />
      </div>
    </>
  );
};

export default ContactPage;
