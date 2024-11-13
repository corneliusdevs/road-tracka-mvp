import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

export const RoadTracka = () => {
  return (
    <div className="relative font-sans">
      {/* NAVBAR */}
      <div className="bg-white sticky top-0 z-20 p-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold text-neutral-800">
            Road-tracka
          </div>
          <div className="text-slate-700">
            <AlignJustify strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/tracker44.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-500 to-teal-600 opacity-80"></div>

        <section className="absolute top-1/2 transform -translate-y-1/2 w-full text-center text-white px-6 sm:px-12 md:px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Road-tracka</h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto font-bold">
            {`Stay ahead of the traffic, get real-time updates on your route and explore more transportation options.`}
          </p>
          <Button className="bg-white text-black px-6 py-3 rounded-lg text-xl hover:bg-teal-200 transition duration-300 transform hover:scale-95 hover:text-white py-8">
            Get Started
          </Button>
        </section>
      </div>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-white px-3">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-teal-600">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100/30 p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Live Traffic Updates
              </h3>
              <p>
                {`Get real-time updates on traffic conditions and avoid
                congestion.`}
              </p>
            </div>
            <div className="bg-gray-100/30 p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Navigation
              </h3>
              <p>{`Navigate any part of Lagos like a local and save time.`}</p>
            </div>
            <div className="bg-gray-100/30 p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                User Reports
              </h3>
              <p>
                {`Contribute and receive reports from other users for more
                accurate updates.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="py-16 px-6 sm:px-12 bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-teal-600">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Live Traffic Updates",
                subtitle: "You don't have to be stuck in traffic! Move smart by making informed decisions.",
              },
              {
                title: "Route Optimization",
                subtitle:
                  "Suggestions on the fastest routes based on live traffic data.",
              },
              {
                title: "Public Transport Info",
                subtitle: "Live updates on fares Bus, BRT, Trains and Ferries and availability.",
              },
              {
                title: "Incidents Reports",
                subtitle:
                  "Get updates on accidents, breakdowns, and road closures.",
              },
              {
                title: "Health & Safety Alerts",
                subtitle: "Get reports on criminal activity and hotspots.",
              },
              {
                title: "Batch Delivery Services",
                subtitle: "Reduce costs with our batch delivery system.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold text-xl mb-2 text-teal-600">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 bg-gray-100 px-3">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-teal-600">
            How Road-tracka Works
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-700">
            {`Road-tracka uses real-time traffic data and user-reported conditions
            to guide you through the best routes. Stay informed and make better
            decisions on the road.`}
          </p>
          <div className="w-full flex justify-center">
            <div className="flex justify-center overflow-hidden max-w-[400px] max-h-[600px]">
              <Image
                src="/tracker33.jpg"
                alt="How It Works"
                className="w-full max-w-lg rounded-lg shadow-lg"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* APP PREVIEW SECTION */}
      <section className="py-16 bg-white mx-3">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-teal-600">App Preview</h2>
          <div className="w-full flex justify-center overflow-hidden">
            <div className="flex justify-center overflow-hidden max-w-[400px] max-h-[600px]">
              <Image
                src="/tracker55.jpg"
                alt="How It Works"
                className="w-full max-w-lg rounded-lg shadow-lg"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 bg-gray-100 px-3">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-teal-600">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                text: "Road-tracka saved me so much time! I avoid the worst traffic jams and find alternate routes easily.",
                name: "John Doe",
                role: "Frequent commuter",
              },
              {
                text: "The live traffic updates are super helpful! I can make more trips and make more money. In fact, I save fuel and time. Thank you Road-tracka.",
                name: "Jane Smith",
                role: "Urban driver",
              },
              {
                text: "Road-tracka saved me a lot of money. I now use trains, BRTs and Ferries to commute to work. Thank you, Road-tracka!",
                name: "Sarah L.",
                role: "Employee",
              },
              {
                text: "This is the only travel companion you need in Lagos. Do not go out without Road-tracka!",
                name: "Trump L.",
                role: "Tourist",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-lg"
              >
                <p className="italic text-lg mb-4 text-gray-600">
                  {`"${testimonial.text}"`}
                </p>
                <p className="font-semibold text-teal-600">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA SECTION */}
      <section className="py-16 bg-teal-600 text-white text-center px-3">
        <h2 className="text-3xl font-bold mb-4">{`Ready to Get Started?`}</h2>
        <p className="text-xl mb-6">
          {`Download Road-tracka and start moving smarter today.`}
        </p>
        <div className="md:space-x-4 flex flex-col items-center justify-center md:flex">
        <Button className="bg-white text-black px-6 py-3 rounded-lg md:text-xl sm:text-[14px] sm:px hover:bg-teal-200 transition duration-300 transform hover:scale-95 hover:text-black py-8 mb-4">
            {`Download on Google  play`}
          </Button>
          <Button className="bg-black text-white px-6 py-3 rounded-lg sm:text-[14px] md:text-xl sm:text-base hover:bg-teal-200 transition duration-300 transform hover:scale-95 hover:bg-teal-200 py-8">
            {`Get it on the App store`}
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-700 text-white py-8 px-3">
        <div className="container mx-auto text-center">
          <p>&copy; {`2024 Road-tracka. All rights reserved.`}</p>
          <div className="flex justify-center space-x-8 mt-4">
            <a href="#" className="hover:text-teal-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-teal-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
