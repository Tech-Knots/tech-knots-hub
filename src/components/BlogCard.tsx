import { Link } from "react-router-dom";
import { Clock, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

const BlogCard = ({
  title,
  excerpt,
  image,
  category,
  author,
  date,
  readTime,
  slug,
  featured = false,
}: BlogCardProps) => {
  if (featured) {
    return (
      <Link
        to={`/blog/${slug}`}
        className="group block bg-card rounded-2xl overflow-hidden border border-border card-hover"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              {category}
            </Badge>
          </div>
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Read Article
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${slug}`}
      className="group block bg-card rounded-xl overflow-hidden border border-border card-hover"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
          {category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{date}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
