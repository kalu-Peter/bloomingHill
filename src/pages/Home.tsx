import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, Calendar, BookOpen, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  // Carousel media items (photos and videos)
  const mediaItems = [
    { type: "image", src: "/pastor.jpeg", alt: "Senior Pastor" },
    { type: "image", src: "/pW.jpeg", alt: "Praise and Worship" },
    { type: "image", src: "/g2.jpeg", alt: "Church Fellowship" },
    { type: "image", src: "/youth%20f2.jpeg", alt: "Youth Ministry" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [mediaItems.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Carousel */}
      <section className="relative h-[45vh] md:h-[90vh] overflow-hidden flex items-center justify-center text-primary-foreground">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              )}
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to{" "}
            <span className="text-accent">Blooming Hill Methodist Church</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            A loving community where faith grows and hearts are transformed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-gray-100 text-black border-0"
            >
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Welcome to Our Church Family
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Blooming Hill Methodist Church, we believe that everyone has a
            place in God's family. Whether you're taking your first steps of
            faith or have been walking with Jesus for years, we invite you to
            join us as we grow together in love, service, and devotion to our
            Savior.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Get Connected
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>About Us</CardTitle>
                <CardDescription>
                  Learn about our mission, vision, and leadership
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/about">Discover More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Events</CardTitle>
                <CardDescription>
                  Stay updated with our church activities and services
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/events">View Events</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Groups</CardTitle>
                <CardDescription>
                  Join our ministry groups and connect with others
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/groups">Find Your Group</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Giving</CardTitle>
                <CardDescription>
                  Support our ministry through online giving
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/giving">Give Online</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Join Us for Worship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Heart className="h-5 w-5 text-accent mr-2" />
                  Sunday School
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">8:00 AM & 9:30 PM</p>
                <p className="text-muted-foreground">Children Classes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Heart className="h-5 w-5 text-accent mr-2" />
                  Sunday Worship
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">9:30 AM & 12:30 PM</p>
                <p className="text-muted-foreground">
                  Traditional & Contemporary Services
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Heart className="h-5 w-5 text-accent mr-2" />
                  Tuesday Chapters
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">4:00 PM</p>
                <p className="text-muted-foreground">Tuesday Bible Study</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Heart className="h-5 w-5 text-accent mr-2" />
                  Wednesday Prayer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold">5:00 PM</p>
                <p className="text-muted-foreground">
                  Midweek Prayer & Bible Study
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
