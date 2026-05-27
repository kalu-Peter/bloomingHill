import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  CreditCard,
  DollarSign,
  Users,
  Building,
  Globe,
} from "lucide-react";

const Giving = () => {
  const givingOptions = [
    {
      amount: "$25",
      description: "Helps provide meals for our community food bank",
      icon: Heart,
    },
    {
      amount: "$50",
      description: "Supports our youth ministry programs and activities",
      icon: Users,
    },
    {
      amount: "$100",
      description: "Contributes to facility maintenance and improvements",
      icon: Building,
    },
    {
      amount: "$250",
      description: "Supports our global missions and outreach efforts",
      icon: Globe,
    },
  ];

  const impactAreas = [
    {
      title: "Local Community",
      description:
        "Your generosity helps us serve our neighbors through food banks, community events, and outreach programs.",
      percentage: "40%",
    },
    {
      title: "Ministry Programs",
      description:
        "Supporting our various ministries including youth, children's programs, and adult education.",
      percentage: "30%",
    },
    {
      title: "Facility & Operations",
      description:
        "Maintaining our church building and ensuring smooth operations for all activities.",
      percentage: "20%",
    },
    {
      title: "Global Missions",
      description:
        "Spreading the gospel worldwide through missions, church planting, and humanitarian aid.",
      percentage: "10%",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Give</h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Your generosity makes ministry possible and transforms lives in our
            community and beyond
          </p>
          <div className="flex items-center justify-center space-x-2 text-accent">
            <Heart className="h-6 w-6" />
            <span className="text-lg">
              "Give, and it will be given to you" - Luke 6:38
            </span>
          </div>
        </div>
      </section>

      {/* Online Giving Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Give Online</h2>
            <p className="text-lg text-muted-foreground">
              Secure, convenient, and easy online giving to support God's work
              through our church
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Give Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 text-accent mr-2" />
                  Quick Give
                </CardTitle>
                <CardDescription>
                  Choose a preset amount or enter your own to give quickly and
                  securely
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {givingOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-accent/5"
                      >
                        <IconComponent className="h-5 w-5 text-accent" />
                        <span className="font-semibold">{option.amount}</span>
                      </Button>
                    );
                  })}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <DollarSign className="h-5 w-5 text-accent" />
                    <span className="font-medium">Custom Amount</span>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Give Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recurring Giving */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 text-accent mr-2" />
                  Recurring Giving
                </CardTitle>
                <CardDescription>
                  Set up automatic monthly giving to consistently support our
                  ministry
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-md">
                    <span>Monthly Tithe</span>
                    <Button variant="outline" size="sm">
                      Set Up
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border rounded-md">
                    <span>Weekly Offering</span>
                    <Button variant="outline" size="sm">
                      Set Up
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border rounded-md">
                    <span>Special Projects</span>
                    <Button variant="outline" size="sm">
                      Set Up
                    </Button>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <p className="text-sm text-muted-foreground">
                    Recurring giving helps us plan and budget for ministry
                    activities throughout the year. You can modify or cancel
                    your recurring gifts at any time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where Your Gifts Go</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to transparency in how your generous gifts are
              used to further God's kingdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                    <span className="text-2xl font-bold text-accent">
                      {area.percentage}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Other Ways to Give
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Sunday Offering</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Bring your offering to any Sunday worship service
                </p>
                <p className="text-sm text-muted-foreground">
                  Offering boxes available at church entrances
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Mail Your Gift</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Send checks to our church address
                </p>
                <p className="text-sm text-muted-foreground">
                  <br />
                  Blooming Hill Church
                  <br />
                  Kinango, Kenya
                  <br />
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Stock Donations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Donate appreciated securities for tax benefits
                </p>
                <Button variant="outline" size="sm">
                  Contact Office
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial/Thank You */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Thank You for Your Generosity
          </h2>
          <blockquote className="text-lg text-muted-foreground italic mb-6">
            "Because of your faithful giving, we've been able to serve over 500
            families this year, support three missionary families overseas, and
            provide life-changing programs for our youth and children. Your
            generosity is making an eternal impact."
          </blockquote>
          <p className="font-semibold">- Pastor John Smith</p>
        </div>
      </section>
    </div>
  );
};

export default Giving;
