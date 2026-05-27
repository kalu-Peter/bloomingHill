import { useParams, Link } from "react-router-dom";
import { groups } from "@/data/groups";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ArrowLeft, X } from "lucide-react";
import { useState } from "react";

const GroupDetail = () => {
  const { slug } = useParams();
  const group = groups.find((g) => g.slug === slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!group) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Group not found.</p>
          <Link to="/groups" className="text-primary underline">
            Back to Ministry Groups
          </Link>
        </div>
      </div>
    );
  }

  const Icon = group.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative py-32 text-white"
        style={
          group.heroImage
            ? { backgroundImage: `url(${group.heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }
            : undefined
        }
      >
        {/* overlay: dark for image hero, primary colour otherwise */}
        <div
          className={`absolute inset-0 ${group.heroImage ? "bg-black/55" : "bg-primary"}`}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <Icon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{group.name}</h1>
          <p className="text-xl text-white/90">{group.description}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">

        {/* Back link */}
        <Link
          to="/groups"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Ministry Groups
        </Link>

        {/* Bible Verse */}
        <Card className="border-l-4 border-l-primary bg-primary/5">
          <CardContent className="pt-6 pb-6">
            <blockquote className="text-lg italic text-foreground leading-relaxed mb-3">
              "{group.verse}"
            </blockquote>
            <p className="text-sm font-semibold text-primary">— {group.verseRef}</p>
          </CardContent>
        </Card>

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About This Ministry</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{group.longDescription}</p>
        </div>

        {/* Meeting Details */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Meeting Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="flex items-center gap-3 pt-6">
                <Calendar className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Day</p>
                  <p className="font-semibold">{group.day}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 pt-6">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Time</p>
                  <p className="font-semibold">{group.time}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 pt-6">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold">{group.location}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Images */}
        {group.images.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group.images.map((src, i) => (
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
              src={group.images[lightbox]}
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
                {lightbox + 1} / {group.images.length}
              </span>
              <button
                className="text-white hover:text-gray-300 disabled:opacity-30 transition-colors"
                disabled={lightbox === group.images.length - 1}
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

export default GroupDetail;
