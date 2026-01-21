import { useState } from "react";
import { Search, Filter, BookOpen, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const tutorials = [
  {
    title: "Building a Smart Home Hub with ESP32 and MQTT",
    excerpt: "Learn how to create a centralized IoT hub that connects all your smart devices using ESP32, MQTT protocol, and a custom dashboard.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60",
    category: "IoT",
    author: "Alex Chen",
    date: "Jan 15, 2026",
    readTime: "12 min read",
    slug: "smart-home-hub-esp32-mqtt",
    level: "Intermediate",
  },
  {
    title: "STM32 vs Arduino: Choosing the Right MCU",
    excerpt: "A comprehensive comparison of STM32 and Arduino platforms to help you make informed decisions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    category: "Embedded Systems",
    author: "Sarah Miller",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    slug: "stm32-vs-arduino-comparison",
    level: "Beginner",
  },
  {
    title: "Designing a 4-Layer PCB for High-Speed Applications",
    excerpt: "Master the art of multi-layer PCB design with impedance matching and ground planes.",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=60",
    category: "PCB Design",
    author: "Mike Johnson",
    date: "Jan 10, 2026",
    readTime: "15 min read",
    slug: "4-layer-pcb-high-speed-design",
    level: "Advanced",
  },
  {
    title: "Getting Started with LoRa: Long Range IoT",
    excerpt: "Explore the fundamentals of LoRa technology and build your first long-range sensor network.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    category: "IoT",
    author: "Emma Wilson",
    date: "Jan 8, 2026",
    readTime: "10 min read",
    slug: "getting-started-lora-iot",
    level: "Beginner",
  },
  {
    title: "Building a Line-Following Robot with PID",
    excerpt: "Implement smooth line following using PID control algorithms on Arduino.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
    category: "Robotics",
    author: "David Park",
    date: "Jan 5, 2026",
    readTime: "14 min read",
    slug: "line-following-robot-pid",
    level: "Intermediate",
  },
  {
    title: "FreeRTOS Basics: Task Management",
    excerpt: "Learn the fundamentals of real-time operating systems and task scheduling.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
    category: "Embedded Systems",
    author: "Lisa Wang",
    date: "Jan 3, 2026",
    readTime: "18 min read",
    slug: "freertos-basics-task-management",
    level: "Advanced",
  },
];

const categories = ["All", "IoT", "Embedded Systems", "PCB Design", "Robotics"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tutorial.category === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || tutorial.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-b from-emerald-50 to-background py-16">
          <div className="container-wide">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-emerald-100 text-primary">
                <BookOpen className="w-3 h-3 mr-1" />
                Learning Hub
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Tutorials & Guides
              </h1>
              <p className="text-lg text-muted-foreground">
                Step-by-step tutorials from beginner to advanced levels. Master embedded systems, IoT, and hardware engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative max-w-md flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>

              {/* Category & Level Filters */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(cat)}
                      className="whitespace-nowrap"
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Level Pills */}
            <div className="flex items-center gap-2 mt-4">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground mr-2">Level:</span>
              {levels.map((level) => (
                <Badge
                  key={level}
                  variant={selectedLevel === level ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-12">
          <div className="container-wide">
            {filteredTutorials.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No tutorials found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedLevel("All Levels");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutorials.map((tutorial, index) => (
                  <div
                    key={tutorial.slug}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <BlogCard {...tutorial} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tutorials;
