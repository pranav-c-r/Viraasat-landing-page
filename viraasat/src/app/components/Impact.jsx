export default function Impact() {
  const stats = [
    {
      number: "1000+",
      label: "Monuments Under Threat",
      description: "Historical sites facing deterioration worldwide"
    },
    {
      number: "50M+",
      label: "Students Reached",
      description: "Educational impact through digital preservation"
    },
    {
      number: "25+",
      label: "Languages Supported",
      description: "Making heritage accessible globally"
    },
    {
      number: "95%",
      label: "User Engagement",
      description: "Students show increased interest in history"
    }
  ];

  const testimonials = [
    {
      quote: "Viraasat has revolutionized how we teach history. Students are more engaged than ever.",
      author: "Dr. Sarah Johnson",
      role: "History Professor, Oxford University"
    },
    {
      quote: "The AR experience brought our heritage tour to life. Visitors love the interactive elements.",
      author: "Raj Patel",
      role: "Tourism Director, Archaeological Survey"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Why It Matters
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Cultural preservation for future generations through innovative technology
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-text-primary mb-1">{stat.label}</div>
              <div className="text-text-secondary text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
        
        {/* Mission Statement */}
        <div className="bg-surface p-8 rounded-2xl mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Our Impact</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              Viraasat bridges the gap between ancient heritage and modern technology, ensuring that 
              cultural treasures remain accessible to students, tourists, researchers, and future 
              generations. By preserving these sites digitally, we're safeguarding human history 
              against time, weather, and other threats.
            </p>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-surface p-6 rounded-xl">
              <p className="text-text-secondary italic mb-4">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-text-primary">{testimonial.author}</div>
                <div className="text-primary text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}