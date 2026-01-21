import { Link } from "react-router-dom";
import { 
  Cpu, 
  Wifi, 
  Microchip, 
  Server, 
  Gauge, 
  CircuitBoard, 
  BatteryCharging, 
  Bot 
} from "lucide-react";

const categories = [
  {
    name: "Embedded Systems",
    description: "Microcontrollers, firmware, and real-time systems",
    icon: Cpu,
    path: "/embedded",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "IoT Projects",
    description: "Connected devices and smart solutions",
    icon: Wifi,
    path: "/iot",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Arduino & ESP32",
    description: "Development boards and prototyping",
    icon: Microchip,
    path: "/tutorials",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Raspberry Pi",
    description: "Single-board computing projects",
    icon: Server,
    path: "/tutorials",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Sensors & Modules",
    description: "Component guides and interfacing",
    icon: Gauge,
    path: "/tutorials",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "PCB Design",
    description: "Circuit layout and manufacturing",
    icon: CircuitBoard,
    path: "/tutorials",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Power Electronics",
    description: "Power supplies and energy systems",
    icon: BatteryCharging,
    path: "/tutorials",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Robotics",
    description: "Mechatronics and automation",
    icon: Bot,
    path: "/tutorials",
    color: "bg-rose-100 text-rose-700",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into specialized topics covering every aspect of hardware development
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.path}
              className="group p-6 bg-card rounded-xl border border-border card-hover animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
