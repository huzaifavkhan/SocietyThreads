import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: "From $18.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Oversized Hoodie",
    price: "From $34.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Crewneck Sweatshirt",
    price: "From $28.99",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Tank Top",
    price: "From $14.99",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop",
  },
  {
    id: 5,
    name: "Long Sleeve Tee",
    price: "From $22.99",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=500&fit=crop",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Beautiful bestselling blanks,{" "}
            <span className="text-accent">ready for your vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium quality garments perfect for your custom designs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                      Customize
                    </Button>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-muted-foreground">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
