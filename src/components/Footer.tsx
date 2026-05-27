import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold">Blooming Hill Methodist Church</span>
            </div>
            <p className="text-primary-foreground/80">
              A loving community where faith grows and hearts are transformed by God's grace.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Kwale County, Kinango, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@bloominghillmethodist.org</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Times</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <div className="text-sm">
                  <div>Sunday School: 8:00 AM & 9:30 PM</div>
                  <div>Sunday Worship: 9:30 AM & 12:30 PM</div>
                  <div>Wednesday Prayer: 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </a>
              <a href="/events" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Upcoming Events
              </a>
              <a href="/giving" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Online Giving
              </a>
              <a href="/groups" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Ministry Groups
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="text-center text-sm text-primary-foreground/60">
            <p>&copy; 2025 Blooming Hill Methodist Church. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;