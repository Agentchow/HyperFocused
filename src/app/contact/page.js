import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { VisionSvg, VentureSvg } from "../../../helpers/icons";
import TitleCard from "@/components/TitleCard";

export const metadata = {
  title: "Contact | Hyperfocused Holdings",
  description: "Get in touch with HyperFocused Holdings to discuss partnerships, investments, and opportunities.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      title: "General Inquiries",
      email: "hello@hyperfocusedholdings.com",
      description: "For general questions and information",
    },
    {
      title: "Partnership Opportunities",
      email: "partnerships@hyperfocusedholdings.com",
      description: "Discuss strategic partnerships and collaborations",
    },
    {
      title: "Investment Inquiries",
      email: "invest@hyperfocusedholdings.com",
      description: "For investment opportunities and capital allocation",
    },
    {
      title: "Media & Press",
      email: "media@hyperfocusedholdings.com",
      description: "Press inquiries and media relations",
    },
  ];

  const faqs = [
    {
      question: "What types of businesses do you acquire?",
      answer: "We focus on high-margin digital and physical businesses across software, services, automotive, real estate, and media sectors where AI can create significant efficiency gains.",
    },
    {
      question: "How can I partner with HyperFocused Holdings?",
      answer: "Reach out to partnerships@hyperfocusedholdings.com to discuss strategic partnership opportunities. We're always interested in connecting with aligned businesses and entrepreneurs.",
    },
    {
      question: "Do you accept investment inquiries?",
      answer: "Yes, we welcome inquiries from qualified investors. Contact invest@hyperfocusedholdings.com to learn more about investment opportunities.",
    },
    {
      question: "What is your typical response time?",
      answer: "We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your subject line.",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "YouTube", url: "#" },
    { name: "Instagram", url: "#" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-32">
        <div className="grid-system">
          <div className="col-span-full md:col-start-2 md:col-end-6">
            <h1 className="2xl:text-[64px] text-4xl md:text-6xl lg:text-8xl font-semibold text-c-black">
              Get in Touch
            </h1>
            <p className="mt-6 md:text-xl lg:text-2xl 2xl:text-3xl text-c-black/60 max-w-[40ch]">
              Let's discuss how we can work together to build something extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-[#f8f8f8] py-16 md:py-32">
        <TitleCard
          title="Contact Us"
          description="Choose the best way to reach us based on your inquiry."
          tagline="GET IN TOUCH"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 grid gap-6 lg:grid-cols-2">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 border-t-2 border-c-orange">
                <h3 className="text-2xl lg:text-3xl font-semibold text-c-black mb-3">
                  {method.title}
                </h3>
                <p className="text-base lg:text-lg text-c-black/60 mb-4">
                  {method.description}
                </p>
                <a 
                  href={`mailto:${method.email}`}
                  className="text-lg lg:text-xl font-medium text-c-orange hover:underline"
                >
                  {method.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16 md:py-32">
        <TitleCard
          title="Send Us a Message"
          description="Fill out the form below and we'll get back to you as soon as possible."
          tagline="CONTACT FORM"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6">
            <form className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-base lg:text-lg font-medium text-c-black mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border-2 border-c-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-c-orange focus:border-transparent text-base lg:text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-base lg:text-lg font-medium text-c-black mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border-2 border-c-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-c-orange focus:border-transparent text-base lg:text-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-base lg:text-lg font-medium text-c-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-c-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-c-orange focus:border-transparent text-base lg:text-lg"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-base lg:text-lg font-medium text-c-black mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border-2 border-c-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-c-orange focus:border-transparent text-base lg:text-lg"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-base lg:text-lg font-medium text-c-black mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-c-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-c-orange focus:border-transparent text-base lg:text-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base lg:text-lg font-medium text-c-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 border-2 border-c-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-c-orange focus:border-transparent resize-none text-base lg:text-lg"
                ></textarea>
              </div>

              <div className="flex justify-center mt-8">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f8f8f8] py-16 md:py-32">
        <TitleCard
          title="Quick Answers"
          description="Common questions about working with HyperFocused Holdings."
          tagline="FAQ"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 space-y-8 lg:space-y-12">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-c-black/10 pb-8">
                <h4 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-c-black mb-4">
                  {faq.question}
                </h4>
                <p className="text-lg lg:text-xl 2xl:text-2xl text-c-black/60 max-w-[60ch]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Community Section */}
      <section className="bg-c-black text-white rounded-t-3xl py-16 md:py-32">
        <TitleCard
          title="Join Our Community"
          titleClassName="text-white/60"
          description="Connect with entrepreneurs, investors, and innovators building the future."
          descriptionClassName="text-white/40"
          tagline="COMMUNITY"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 grid gap-12 lg:grid-cols-2">
            {/* Social Media */}
            <div>
              <div className="flex gap-2 items-center mb-6">
                <VentureSvg className="w-auto h-3" />
                <p className="text-xs text-c-orange text-nowrap">
                  Follow Us
                </p>
              </div>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block text-2xl lg:text-3xl text-white/80 hover:text-c-orange transition-colors"
                  >
                    {link.name} →
                  </a>
                ))}
              </div>
            </div>

            {/* Community CTA */}
            <div>
              <div className="flex gap-2 items-center mb-6">
                <VentureSvg className="w-auto h-3" />
                <p className="text-xs text-c-orange text-nowrap">
                  Join Community
                </p>
              </div>
              <p className="text-xl lg:text-2xl 2xl:text-3xl text-white/80 mb-8 max-w-[50ch]">
                Join our Skool community to connect with like-minded entrepreneurs and get exclusive insights.
              </p>
              <Button>Join Skool Community</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
