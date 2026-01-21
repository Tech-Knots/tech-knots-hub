import { Users, Target, Heart, Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & Lead Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
    bio: "10+ years in embedded systems. Previously at Tesla and SpaceX.",
  },
  {
    name: "Sarah Miller",
    role: "IoT Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "Expert in connected devices and smart home technologies.",
  },
  {
    name: "Mike Johnson",
    role: "PCB Design Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    bio: "Designed boards for aerospace and medical applications.",
  },
  {
    name: "Emma Wilson",
    role: "Content Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    bio: "Making complex engineering concepts accessible to all.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-background py-20">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient">TechKnots</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're a community of engineers, makers, and innovators passionate about pushing the boundaries of hardware technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize hardware engineering knowledge and empower the next generation of innovators.
                </p>
              </div>
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Community</h3>
                <p className="text-muted-foreground">
                  10,000+ engineers, students, and hobbyists learning and building together worldwide.
                </p>
              </div>
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Open knowledge, practical learning, and engineering excellence drive everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Meet the Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry experts dedicated to creating the best hardware engineering content.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-card rounded-xl overflow-hidden border border-border card-hover animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20" id="contact">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions, suggestions, or want to collaborate? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">hello@techknots.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-muted-foreground">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8">
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
