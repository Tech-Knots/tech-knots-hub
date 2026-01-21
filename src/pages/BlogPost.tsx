import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, Download, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock blog post data
const blogPost = {
  title: "Building a Smart Home Hub with ESP32 and MQTT",
  excerpt: "Learn how to create a centralized IoT hub that connects all your smart devices using ESP32, MQTT protocol, and a custom dashboard.",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80",
  category: "IoT",
  author: {
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    role: "IoT Engineer",
  },
  date: "January 15, 2026",
  readTime: "12 min read",
  content: `
## Introduction

In this comprehensive guide, we'll build a complete smart home hub using the ESP32 microcontroller and MQTT protocol. This project will serve as the central nervous system for your IoT devices, enabling seamless communication and control.

## Prerequisites

Before we begin, make sure you have the following components:

- ESP32 Development Board
- DHT22 Temperature/Humidity Sensor
- Relay Module (4-channel)
- PIR Motion Sensor
- Breadboard and Jumper Wires
- 5V Power Supply

## Setting Up the Development Environment

First, we need to set up our development environment. We'll be using PlatformIO with VS Code for this project.

\`\`\`cpp
#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

// WiFi credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// MQTT Broker
const char* mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);
\`\`\`

## Circuit Diagram

The circuit connections are straightforward. Connect the DHT22 to GPIO4, the PIR sensor to GPIO5, and the relay module to GPIO12-15.

## MQTT Topics Structure

We'll organize our MQTT topics in a hierarchical structure for easy management:

\`\`\`
home/
├── living_room/
│   ├── temperature
│   ├── humidity
│   └── motion
├── bedroom/
│   ├── light/state
│   └── light/set
└── kitchen/
    └── appliances/
\`\`\`

## Implementing the Main Logic

Here's the core implementation of our smart home hub:

\`\`\`cpp
void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
  
  dht.begin();
  pinMode(PIR_PIN, INPUT);
  
  for (int i = 0; i < 4; i++) {
    pinMode(RELAY_PINS[i], OUTPUT);
    digitalWrite(RELAY_PINS[i], HIGH);
  }
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  
  // Read and publish sensor data every 5 seconds
  static unsigned long lastMsg = 0;
  if (millis() - lastMsg > 5000) {
    lastMsg = millis();
    publishSensorData();
  }
}
\`\`\`

## Conclusion

You now have a fully functional smart home hub that can be expanded with additional sensors and actuators. The MQTT protocol provides a robust and scalable foundation for your IoT ecosystem.
  `,
  tags: ["ESP32", "MQTT", "IoT", "Smart Home", "Arduino"],
  relatedPosts: [
    { title: "Getting Started with LoRa", slug: "getting-started-lora-iot" },
    { title: "STM32 vs Arduino", slug: "stm32-vs-arduino-comparison" },
  ],
};

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <div className="container-wide">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-background transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <Badge className="mb-4 bg-primary text-primary-foreground">
                {blogPost.category}
              </Badge>
              <h1 className="text-3xl lg:text-5xl font-bold text-background max-w-4xl mb-4">
                {blogPost.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <img
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-background">{blogPost.author.name}</div>
                    <div className="text-sm">{blogPost.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container-wide py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Action Bar */}
              <div className="flex items-center gap-3 pb-6 mb-8 border-b border-border">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bookmark className="w-4 h-4" />
                  Save
                </Button>
              </div>

              {/* Article Content */}
              <div className="prose prose-slate max-w-none">
                <div
                  className="text-foreground leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: blogPost.content
                      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>')
                      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="code-block my-6 text-sm overflow-x-auto"><code>$2</code></pre>')
                      .replace(/`([^`]+)`/g, '<code class="font-mono text-sm bg-muted px-1.5 py-0.5 rounded text-primary">$1</code>')
                      .replace(/- (.*)/g, '<li class="ml-4 text-muted-foreground">$1</li>')
                      .replace(/\n\n/g, '</p><p class="text-muted-foreground">')
                  }}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Download Section */}
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <h4 className="font-semibold text-foreground mb-4">Project Files</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Download Source Code
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Circuit Schematic (PDF)
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </Button>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-4">Table of Contents</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        Prerequisites
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        Setting Up the Environment
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        Circuit Diagram
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        MQTT Topics Structure
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        Main Logic Implementation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        Conclusion
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Related Posts */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Related Articles</h4>
                  <ul className="space-y-3">
                    {blogPost.relatedPosts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
