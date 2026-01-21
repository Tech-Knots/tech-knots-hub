import { useLocation } from "react-router-dom";
import { Cpu, Wifi, Wrench, BookOpen, Star, FileCode } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";

const categoryData: Record<string, {
  title: string;
  description: string;
  icon: typeof Cpu;
  color: string;
}> = {
  embedded: {
    title: "Embedded Systems",
    description: "Microcontrollers, firmware development, RTOS, and low-level programming for hardware engineers.",
    icon: Cpu,
    color: "bg-emerald-100 text-emerald-700",
  },
  iot: {
    title: "IoT Projects",
    description: "Connected devices, smart home automation, wireless protocols, and cloud integration.",
    icon: Wifi,
    color: "bg-blue-100 text-blue-700",
  },
  "hardware-projects": {
    title: "Hardware Projects",
    description: "Complete DIY projects with schematics, code, and step-by-step build instructions.",
    icon: Wrench,
    color: "bg-amber-100 text-amber-700",
  },
  reviews: {
    title: "Reviews",
    description: "In-depth reviews of development boards, tools, components, and engineering equipment.",
    icon: Star,
    color: "bg-purple-100 text-purple-700",
  },
  schematics: {
    title: "Schematics",
    description: "Circuit diagrams, PCB layouts, and downloadable design files for your projects.",
    icon: FileCode,
    color: "bg-rose-100 text-rose-700",
  },
};

const posts = [
  {
    title: "Getting Started with STM32 Development",
    excerpt: "A comprehensive guide to setting up your STM32 development environment and writing your first program.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    category: "Embedded Systems",
    author: "Alex Chen",
    date: "Jan 18, 2026",
    readTime: "10 min read",
    slug: "getting-started-stm32",
  },
  {
    title: "FreeRTOS Task Management Fundamentals",
    excerpt: "Learn how to create and manage tasks in FreeRTOS for real-time embedded applications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
    category: "Embedded Systems",
    author: "Sarah Miller",
    date: "Jan 14, 2026",
    readTime: "15 min read",
    slug: "freertos-task-management",
  },
  {
    title: "Understanding Interrupt Priority in ARM Cortex-M",
    excerpt: "Deep dive into NVIC, interrupt priorities, and best practices for handling interrupts.",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&auto=format&fit=crop&q=60",
    category: "Embedded Systems",
    author: "Mike Johnson",
    date: "Jan 10, 2026",
    readTime: "12 min read",
    slug: "arm-cortex-interrupt-priority",
  },
  {
    title: "Building a Bootloader from Scratch",
    excerpt: "Create your own bootloader for firmware updates over UART, I2C, or CAN bus.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    category: "Embedded Systems",
    author: "David Park",
    date: "Jan 5, 2026",
    readTime: "20 min read",
    slug: "custom-bootloader",
  },
];

const CategoryPage = () => {
  const location = useLocation();
  const path = location.pathname.slice(1); // Remove leading slash
  const category = categoryData[path] || categoryData.embedded;
  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-b from-emerald-50 to-background py-16">
          <div className="container-wide">
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {category.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12">
          <div className="container-wide">
            <div className="mb-8">
              <Badge variant="secondary" className="text-sm">
                {posts.length} Articles
              </Badge>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <div
                  key={post.slug}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
