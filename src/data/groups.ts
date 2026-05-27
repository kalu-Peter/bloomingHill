import { Heart, Music, Sparkles, Users, LucideIcon } from "lucide-react";

export interface Group {
  slug: string;
  name: string;
  icon: LucideIcon;
  day: string;
  time: string;
  location: string;
  description: string;
  longDescription: string;
  verse: string;
  verseRef: string;
  images: string[];
  heroImage?: string;
}

export const groups: Group[] = [
  {
    slug: "home-ministry",
    name: "Home Ministry",
    icon: Heart,
    day: "Tuesday",
    time: "4:30 PM",
    location: "Home Visit",
    description: "Fellowship and spiritual growth for members of all ages.",
    longDescription:
      "Our Home Ministry brings the church to your doorstep, visiting members and families with prayer, encouragement, and the Word of God. We believe the church extends beyond its walls and into the homes and communities where our members live. Whether you are unable to attend services, going through a difficult season, or simply in need of fellowship and prayer, our Home Ministry team is here to walk with you.",
    verse:
      "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another.",
    verseRef: "Hebrews 10:24-25",
    images: [],
  },
  {
    slug: "wednesday-fellowship",
    name: "Wednesday Fellowship",
    icon: Users,
    day: "Wednesday",
    time: "4:30 PM",
    location: "Church",
    description: "Mid-week gathering for prayer, the Word, and fellowship.",
    longDescription:
      "Our Wednesday Fellowship is a mid-week gathering that refreshes and strengthens believers through the Word, prayer, and community. In the middle of busy weeks, we gather to refocus on what matters most, our relationship with God and with one another. It is a time of open worship, Bible sharing, and encouragement for the journey ahead.",
    verse:
      "For where two or three are gathered in my name, there am I among them.",
    verseRef: "Matthew 18:20",
    images: [],
  },
  {
    slug: "praise-and-worship",
    name: "Praise and Worship",
    icon: Music,
    day: "Saturday",
    time: "4:00 PM",
    location: "Church",
    description: "Come ready to worship, rehearsal and praise service open to all.",
    longDescription:
      "Our Praise and Worship team leads the congregation in heartfelt, Spirit-filled worship every week. We meet on Saturdays to rehearse and prepare, ensuring that every service is a meaningful encounter with God. We welcome anyone with a passion for worship, whether you sing, play an instrument, or simply love to glorify God. Come as you are and let your heart be lifted.",
    verse:
      "Shout for joy to the Lord, all the earth. Worship the Lord with gladness; come before him with joyful songs.",
    verseRef: "Psalm 100:1-2",
    images: ["/pW.jpeg", "/pw2.jpeg"],
    heroImage: "/pW.jpeg",
  },
  {
    slug: "youth-ministry",
    name: "Youth Ministry",
    icon: Sparkles,
    day: "Sunday",
    time: "2:00 PM",
    location: "Ntombura Hall",
    description: "A vibrant space for the youth to grow in faith and community.",
    longDescription:
      "Our Youth Ministry is a dynamic and welcoming community for young people to encounter God, build lasting friendships, and grow as leaders in the faith. We gather every Sunday at Ntombura Hall for worship, Bible study, and open conversations about faith and life. We believe the youth are not just the future of the church — they are the church today.",
    verse:
      "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
    verseRef: "1 Timothy 4:12",
    images: [],
  },
];
