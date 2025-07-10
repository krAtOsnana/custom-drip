import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Palette, Sparkles, Zap, Users, Shirt } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "tshirt",
    name: "T-Shirt",
    description: "Premium cotton t-shirts",
    price: "From $19.99",
    image: "/tshirt.jpg",
    popular: true
  },
  {
    id: "mug",
    name: "Coffee Mug",
    description: "Ceramic mugs 11oz & 15oz",
    price: "From $12.99",
    image: "/mug.jpg",
    popular: false
  },
  {
    id: "cap",
    name: "Baseball Cap",
    description: "Adjustable cotton caps",
    price: "From $16.99",
    image: "/cap.jpg",
    popular: true
  },
  {
    id: "lighter",
    name: "Custom Lighter",
    description: "Refillable metal lighters",
    price: "From $9.99",
    image: "/api/placeholder/300/300",
    popular: false
  },
  {
    id: "phoneCase",
    name: "Phone Case",
    description: "Premium Silicon Phone Case",
    price: "From $9.99",
    image: "/api/placeholder/300/300",
    popular: false
  }
];

const features = [
  {
    icon: Palette,
    title: "Design Freedom",
    description:
      "Upload images, add text, or create from scratch with our intuitive editor"
  },
  {
    icon: Sparkles,
    title: "AI Generation",
    description: "Generate unique designs with AI using simple text prompts"
  },
  {
    icon: Zap,
    title: "Instant Preview",
    description: "See your design on real products with live 3D preview"
  },
  {
    icon: Users,
    title: "Premium Quality",
    description: "High-quality printing on carefully selected premium products"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b  backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Shirt className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">CustomDrip</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#products"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              ✨ New: AI-Powered Design Generation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Create Custom Products That Tell Your Story
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Design and customize high-quality products with our intuitive
              editor. Upload images, add text, or generate unique designs with
              AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#products">Start Designing</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Everything you need to create
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional-grade tools and features to bring your creative
              vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="mb-4 mx-auto h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Product</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select from our curated collection of premium products, each
              carefully chosen for quality and printability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((product) => (
              <Link key={product.id} href={`/designer/${product.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-t-lg overflow-hidden">
                        <Image
                          src={product.image}
                          alt="product"
                          width={500}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {product.popular && (
                        <Badge className="absolute top-3 right-3">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-primary">
                          {product.price}
                        </span>
                        <span className="text-sm text-primary underline">
                          Customize →
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to create something amazing?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already designing custom products
            with CustomCraft
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            asChild
          >
            <a href="#products">Start Your First Design</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded flex items-center justify-center">
                <Palette className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">CustomCraft</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CustomCraft. Create with confidence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
