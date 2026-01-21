import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Building a Smart Home Hub with ESP32 and MQTT",
    excerpt: "Learn how to create a centralized IoT hub that connects all your smart devices using ESP32, MQTT protocol, and a custom dashboard.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60",
    category: "IoT",
    author: "Alex Chen",
    date: "Jan 15, 2026",
    readTime: "12 min read",
    slug: "smart-home-hub-esp32-mqtt",
  },
  {
    title: "STM32 vs Arduino: Choosing the Right MCU for Your Project",
    excerpt: "A comprehensive comparison of STM32 and Arduino platforms to help you make informed decisions for your embedded projects.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    category: "Embedded Systems",
    author: "Sarah Miller",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    slug: "stm32-vs-arduino-comparison",
  },
  {
    title: "Designing a 4-Layer PCB for High-Speed Applications",
    excerpt: "Master the art of multi-layer PCB design with this step-by-step guide covering impedance matching, via placement, and ground planes.",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=60",
    category: "PCB Design",
    author: "Mike Johnson",
    date: "Jan 10, 2026",
    readTime: "15 min read",
    slug: "4-layer-pcb-high-speed-design",
  },
  {
    title: "Getting Started with LoRa: Long Range IoT Communication",
    excerpt: "Explore the fundamentals of LoRa technology and build your first long-range sensor network with minimal power consumption.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    category: "IoT",
    author: "Emma Wilson",
    date: "Jan 8, 2026",
    readTime: "10 min read",
    slug: "getting-started-lora-iot",
  },
  {
    title: "Building a Line-Following Robot with PID Control",
    excerpt: "Implement smooth and accurate line following using PID control algorithms on an Arduino-based robot platform.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
    category: "Robotics",
    author: "David Park",
    date: "Jan 5, 2026",
    readTime: "14 min read",
    slug: "line-following-robot-pid",
  },
];

const LatestPosts = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Fresh insights from the world of hardware engineering
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex items-center gap-2">
            <Link to="/tutorials" className="flex items-center gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Featured Post */}
        <div className="mb-8 animate-fade-up">
          <BlogCard {...posts[0]} featured />
        </div>

        {/* Regular Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.slice(1).map((post, index) => (
            <div
              key={post.slug}
              className="animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" className="w-full">
            <Link to="/tutorials" className="flex items-center justify-center gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
