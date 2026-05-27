import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/data/events";

const categoryColors: Record<string, string> = {
  Worship: "bg-accent/10 text-accent",
  Study: "bg-blue-100 text-blue-800",
  Youth: "bg-green-100 text-green-800",
  Women: "bg-pink-100 text-pink-800",
  Fellowship: "bg-yellow-100 text-yellow-800",
  Service: "bg-orange-100 text-orange-800",
};

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative py-20 text-white"
        style={{ backgroundImage: "url(/youth%20f2.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
          <p className="text-xl text-white/90">
            Stay connected with all our church activities and special events
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              const colorClass = categoryColors[event.category] ?? "bg-gray-100 text-gray-800";
              return (
                <Link key={event.slug} to={`/events/${event.slug}`} className="block group">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <Badge className={colorClass} variant="secondary">
                          {event.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{event.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary font-medium pt-2 group-hover:gap-2 transition-all text-sm">
                        View details <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
