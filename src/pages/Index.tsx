import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import LatestPosts from "@/components/LatestPosts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <LatestPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
