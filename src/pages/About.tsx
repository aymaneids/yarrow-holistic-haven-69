import React, { useEffect } from "react";
import { Leaf, Recycle, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const ValueCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-yarrow-taupe/20 hover-lift">
    <div className="bg-yarrow-sage/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-yarrow-sage">
      {icon}
    </div>
    <h3 className="text-xl font-display font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>;
const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="pt-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-yarrow-taupe/20 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
              About Us
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-gray-800 mb-6">
              Our Holistic Beauty Philosophy
            </h1>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Relaxation Station, we believe that true beauty stems from health—both yours and the planet's. Our commitment to holistic, sustainable beauty practices guides everything we do, from the products we choose to the services we provide.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="https://www.vagaro.com/yarrowholisticbeauty" target="_blank" rel="noopener noreferrer" className="bg-yarrow-sage hover:bg-yarrow-moss text-white px-6 py-3 rounded-md transition-all duration-300 font-medium hover:shadow-md inline-flex items-center">
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <Link to="/services" className="text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300 font-medium inline-flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div>
            <img alt="Nature and beauty" className="w-full h-[500px] object-cover rounded-lg shadow-md hover-lift" src="https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2020/03-march/blog-relax-l.jpg" />
          </div>
        </div>
      </section>
      
      {/* Meet Christina */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
              Meet Your Stylist
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-800 mb-6">
              Your Stylist Christina
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" alt="Christina, hair stylist and owner of Relaxation Station" className="w-full h-[600px] object-cover rounded-lg shadow-md hover-lift" />
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-gray-600 mb-6 leading-relaxed">Hi! I'm Christina (most of my clients call me Nikki) I've been doing hair for 6 years at the same fun salon in Shell Beach. [ Fringe by Jasi + Co ] I specialize in razor cutting &amp; have a passion for shags! I like to call myself an "edgier" stylist and am not afraid to bring your hair vision to life.</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed"> I'm always trying to stay in the know of what the newest hair trends are. I'm an old soul &amp; when I'm not making magic behind the chair, I also work at an incredible vintage store in Atascadero. [ Black Sheep Finds ] My passion is good style &amp; I believe a good hair style goes hand in hand with a good outfit.</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
            </p>
              
              <p className="text-gray-600 mb-10 leading-relaxed">My approach is personalized and educational—I love helping clients understand how to maintain their hair health naturally and make choices that align with their values. I'm excited to be part of your holistic beauty journey!</p>
              
              <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2048px-F_icon.svg.png" alt="Facebook logo" className="w-6 h-6 mr-3" />
                <a href="https://www.facebook.com/CMRelaxationStation" target="_blank" rel="noopener noreferrer" className="text-yarrow-sage hover:text-yarrow-moss transition-colors duration-300 font-medium">
                  Christina Nikki Martin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 px-6 md:px-10 bg-yarrow-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
              Our Values
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-gray-800 mb-6">
              What Sets Relaxation Station Apart
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our values guide every aspect of our practice, from the products we select to the experiences we create for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard icon={<Leaf className="h-6 w-6" />} title="Holistic Approach" description="We consider your overall wellbeing, not just your hair's appearance, in every service we provide." />
            <ValueCard icon={<Heart className="h-6 w-6" />} title="Clean Products" description="We exclusively use products free from harmful chemicals, prioritizing organic and natural ingredients." />
            <ValueCard icon={<Recycle className="h-6 w-6" />} title="Sustainability" description="Our practices minimize environmental impact, from water conservation to recyclable packaging." />
            <ValueCard icon={<ShieldCheck className="h-6 w-6" />} title="Ethical Standards" description="We support cruelty-free brands and fair trade practices in all our product selections." />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 md:px-10 bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-yarrow-moss/90"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Ready to Experience the Relaxation Station Difference?
          </h2>
          
          <p className="text-white/90 mb-10 leading-relaxed">
            Join us for a hair care experience that nurtures your beauty while respecting our planet. Book your appointment today and become part of our holistic beauty community.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://www.vagaro.com/yarrowholisticbeauty" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-yarrow-cream text-yarrow-moss px-8 py-3 rounded-md transition-all duration-300 text-lg font-medium hover:shadow-lg inline-flex items-center">
              Book an Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            
            <Link to="/contact" className="text-white hover:text-yarrow-cream transition-colors duration-300 text-lg font-medium inline-flex items-center">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default About;