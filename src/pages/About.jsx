import React from "react";

const teamMembers = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    description:
      "With over 15 years in real estate, Rajesh leads our strategic vision and client relationships.",
  },
  {
    name: "Priya Patel",
    role: "Head of Sales",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    description:
      "Priya specializes in luxury residential properties and has helped hundreds of families find their dream homes.",
  },
  {
    name: "Amit Kumar",
    role: "Commercial Properties Expert",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    description:
      "Amit focuses on commercial real estate and investment opportunities across Pune's business districts.",
  },
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-900 pt-24">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-[Playfair Display] mb-4">
            About Us
          </h1>
          <p className="text-xl">Meet the Team Behind Lifestyle Estates</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-[Playfair Display] mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lifestyle Estates was founded with a vision to transform the real
              estate experience in Pune. As a premier property advisory and
              channel partner firm, we have established ourselves as trusted
              advisors in the luxury residential and commercial property
              markets.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team brings together decades of combined experience in real
              estate, finance, and customer service. We understand that buying
              or selling property is one of life's most significant decisions,
              and we're committed to making the process seamless, transparent,
              and rewarding for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-[Playfair Display] text-center mb-16">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-8 max-w-xs flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-900 shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-700 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
