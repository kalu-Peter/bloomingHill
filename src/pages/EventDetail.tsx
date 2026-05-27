import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "@/data/events";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft, X } from "lucide-react";

const categoryColors: Record<string, string> = {
  Worship: "bg-accent/10 text-accent",
  Study: "bg-blue-100 text-blue-800",
  Youth: "bg-green-100 text-green-800",
  Women: "bg-pink-100 text-pink-800",
  Fellowship: "bg-yellow-100 text-yellow-800",
  Service: "bg-orange-100 text-orange-800",
};

const EventDetail = () => {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Event not found.</p>
          <Link to="/events" className="text-primary underline">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const colorClass = categoryColors[event.category] ?? "bg-gray-100 text-gray-800";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative py-32 text-white"
        style={
          event.heroImage
            ? { backgroundImage: `url(${event.heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }
            : undefined
        }
      >
        <div className={`absolute inset-0 ${event.heroImage ? "bg-black/55" : "bg-primary"}`} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Badge className={`${colorClass} mb-4`} variant="secondary">
            {event.category}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{event.title}</h1>
          <p className="text-xl text-white/90">{event.description}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">

        {/* Back link */}
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About This Event</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{event.longDescription}</p>
        </div>

        {/* Details */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Event Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="flex items-center gap-3 pt-6">
                <Calendar className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Date</p>
                  <p className="font-semibold">{event.date}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 pt-6">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Time</p>
                  <p className="font-semibold">{event.time}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 pt-6">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold">{event.location}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gallery */}
        {event.images.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {event.images.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setLightbox(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={event.images[lightbox]}
              alt=""
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <button
                className="text-white hover:text-gray-300 disabled:opacity-30 transition-colors"
                disabled={lightbox === 0}
                onClick={() => setLightbox(lightbox - 1)}
              >
                ← Previous
              </button>
              <span className="text-gray-400 text-sm">
                {lightbox + 1} / {event.images.length}
              </span>
              <button
                className="text-white hover:text-gray-300 disabled:opacity-30 transition-colors"
                disabled={lightbox === event.images.length - 1}
                onClick={() => setLightbox(lightbox + 1)}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
