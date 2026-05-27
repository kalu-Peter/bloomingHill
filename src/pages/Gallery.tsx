import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  { src: "/pastor.jpeg",            caption: "Senior Pastor" },
  { src: "/pW.jpeg",                caption: "Praise and Worship" },
  { src: "/pw2.jpeg",               caption: "Praise and Worship" },
  { src: "/g2.jpeg",                caption: "Mbuluni Methodist Fellowship" },
  { src: "/fellow%20games.jpeg",    caption: "Church Fellowship" },
  { src: "/youth%20f2.jpeg",        caption: "Youth Ministry" },
  { src: "/youth%20f3.jpeg",        caption: "Youth Ministry" },
  { src: "/youth%20f4.jpeg",        caption: "Youth Ministry" },
  { src: "/youth%20f5.jpeg",        caption: "Youth Ministry" },
  { src: "/youth%20fll.jpeg",       caption: "Youth Ministry" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-primary-foreground/90">
            Moments from our church family
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelected(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm font-medium px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selected].src}
              alt={photos[selected].caption}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {photos[selected].caption}
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="text-white hover:text-gray-300 disabled:opacity-30 transition-colors"
                disabled={selected === 0}
                onClick={() => setSelected(selected - 1)}
              >
                ← Previous
              </button>
              <span className="text-gray-400 text-sm">
                {selected + 1} / {photos.length}
              </span>
              <button
                className="text-white hover:text-gray-300 disabled:opacity-30 transition-colors"
                disabled={selected === photos.length - 1}
                onClick={() => setSelected(selected + 1)}
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

export default Gallery;
