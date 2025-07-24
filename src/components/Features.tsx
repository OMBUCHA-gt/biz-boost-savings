import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  TrendingDown, 
  PieChart, 
  AlertCircle, 
  Target, 
  Smartphone 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: "Smart Expense Tracking",
      description: "Automatically categorize and track all business expenses with AI-powered recognition.",
      color: "text-primary"
    },
    {
      icon: TrendingDown,
      title: "Cost-Saving Insights",
      description: "Get personalized recommendations to reduce costs and optimize spending patterns.",
      color: "text-secondary"
    },
    {
      icon: PieChart,
      title: "Detailed Analytics",
      description: "Visualize spending trends with interactive charts and comprehensive reports.",
      color: "text-accent"
    },
    {
      icon: AlertCircle,
      title: "Smart Alerts",
      description: "Receive real-time notifications about unusual spending or saving opportunities.",
      color: "text-destructive"
    },
    {
      icon: Target,
      title: "Budget Goals",
      description: "Set and track savings targets with progress monitoring and achievement rewards.",
      color: "text-success"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your financial data anywhere with our responsive mobile application.",
      color: "text-primary"
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Save More
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools and insights designed specifically for small and medium enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-soft transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;