import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { VentureSvg, VisionSvg } from "../../../helpers/icons";
import TitleCard from "@/components/TitleCard";

export const metadata = {
  title: "Services | Hyperfocused Holdings",
  description: "Discover our comprehensive suite of business acquisition, development, and scaling services.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Business Acquisition",
      description: "We identify and acquire high-potential businesses across digital and physical sectors with proven track records and growth opportunities.",
      features: [
        "Comprehensive due diligence",
        "Valuation & deal structuring",
        "Strategic integration planning",
        "Post-acquisition support",
      ],
    },
    {
      title: "AI-Driven Optimization",
      description: "Transform traditional business operations with cutting-edge AI and automation systems to maximize efficiency and profitability.",
      features: [
        "Process automation",
        "AI implementation strategy",
        "Performance analytics",
        "Continuous optimization",
      ],
    },
    {
      title: "Portfolio Management",
      description: "Professional management and strategic guidance for portfolio companies to achieve sustainable growth and market leadership.",
      features: [
        "Strategic planning",
        "Operational excellence",
        "Performance monitoring",
        "Resource allocation",
      ],
    },
    {
      title: "Brand Development",
      description: "Build powerful brands that resonate with target audiences and create lasting market presence across all channels.",
      features: [
        "Brand strategy",
        "Digital presence",
        "Marketing campaigns",
        "Community building",
      ],
    },
    {
      title: "Capital Allocation",
      description: "Strategic capital deployment across portfolio companies to maximize returns and fuel sustainable expansion.",
      features: [
        "Investment analysis",
        "Risk management",
        "Capital efficiency",
        "ROI optimization",
      ],
    },
    {
      title: "Scaling Solutions",
      description: "Comprehensive scaling strategies to help businesses grow from regional operations to national and global presence.",
      features: [
        "Growth strategy",
        "Market expansion",
        "Infrastructure development",
        "Team building",
      ],
    },
  ];

  const divisions = [
    {
      name: "HyperFocused Ventures",
      focus: "Digital & Tech Businesses",
      description: "Acquiring and scaling high-margin SaaS, e-commerce, and digital service businesses.",
    },
    {
      name: "HyperFocused Media",
      focus: "Content & Branding",
      description: "Building powerful media brands and content platforms that drive engagement and revenue.",
    },
    {
      name: "HyperFocused Capital",
      focus: "Investment & Advisory",
      description: "Strategic investment and advisory services for emerging businesses and entrepreneurs.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-32">
        <div className="grid-system">
          <div className="col-span-full md:col-start-2 md:col-end-6">
            <h1 className="2xl:text-[64px] text-4xl md:text-6xl lg:text-8xl font-semibold text-c-black">
              Our Services
            </h1>
            <p className="mt-6 md:text-xl lg:text-2xl 2xl:text-3xl text-c-black/60 max-w-[40ch]">
              Comprehensive solutions for acquiring, building, and scaling high-margin businesses.
            </p>
            <Button className="mt-12">Schedule a Consultation</Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#f8f8f8] py-16 md:py-32">
        <TitleCard
          title="What We Offer"
          description="End-to-end solutions for business acquisition, optimization, and growth."
          tagline="OUR EXPERTISE"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 border-t-2 border-c-orange">
                <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-c-black mb-4">
                  {service.title}
                </h3>
                <p className="2xl:text-2xl xl:text-xl lg:text-lg text-c-black/60 mb-6 max-w-[50ch]">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-c-black flex-shrink-0" />
                      <span className="text-base md:text-lg text-c-black">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="bg-c-black text-white rounded-t-3xl py-16 md:py-32">
        <TitleCard
          title="Three Core Divisions"
          titleClassName="text-white/60"
          description="Each division operates independently but synergizes through shared infrastructure."
          descriptionClassName="text-white/40"
          tagline="MULTI-VERTICAL STRUCTURE"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 space-y-12 lg:space-y-16">
            {divisions.map((division, index) => (
              <div key={index} className="border-t border-white/20 pt-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-white/90">
                    {division.name}
                  </h3>
                  <div className="flex gap-2 items-center">
                    <VentureSvg className="w-auto h-3" />
                    <span className="text-xs text-c-orange font-medium">
                      {division.focus}
                    </span>
                  </div>
                </div>
                <p className="text-xl lg:text-2xl 2xl:text-3xl text-white/80 max-w-[55ch]">
                  {division.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 md:py-32">
        <TitleCard
          title="Our Process"
          description="A proven framework for transforming businesses through systematic execution."
          tagline="HOW WE WORK"
        />
        
        <div className="grid-system mt-12 md:mt-16">
          <div className="col-span-full md:col-start-2 md:col-end-6 grid gap-8 md:gap-12 lg:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business and goals" },
              { step: "02", title: "Strategy", desc: "Developing a comprehensive plan" },
              { step: "03", title: "Execution", desc: "Implementing solutions with precision" },
              { step: "04", title: "Optimization", desc: "Continuous improvement and scaling" },
            ].map((item, index) => (
              <div key={index} className="border-t-2 border-c-orange pt-6">
                <div className="text-5xl lg:text-6xl font-bold text-c-orange mb-4">{item.step}</div>
                <h4 className="text-xl lg:text-2xl font-semibold text-c-black mb-2">{item.title}</h4>
                <p className="text-base lg:text-lg text-c-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f8f8f8] py-16 md:py-32">
        <div className="grid-system">
          <div className="col-span-full md:col-start-2 md:col-end-6">
            <div className="bg-c-black text-white rounded-3xl p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-semibold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl md:text-2xl 2xl:text-3xl text-white/80 max-w-[50ch] mx-auto mb-8 md:mb-12">
                Let's discuss how we can help you achieve your business goals.
              </p>
              <Button className="mx-auto">Contact Us Today</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
