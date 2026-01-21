import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full circuit-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-wide relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-6">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-background mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Get weekly updates on new projects, tutorials, and engineering insights delivered straight to your inbox.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 text-primary animate-fade-in">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-slate-800 border-slate-700 text-background placeholder:text-slate-500 focus:border-primary"
                required
              />
              <Button type="submit" size="lg" className="font-semibold px-6">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}

          <p className="text-sm text-slate-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
