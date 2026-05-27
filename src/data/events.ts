export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  longDescription: string;
  category: string;
  images: string[];
  heroImage?: string;
}

export const events: Event[] = [
  {
    slug: "sunday-worship",
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:30 AM & 12:30 PM",
    location: "Church",
    category: "Worship",
    description: "Join us for inspiring worship, biblical teaching, and fellowship.",
    longDescription:
      "Every Sunday we gather as a church family to worship God, hear the preaching of His Word, and encourage one another in the faith. Whether you are a long-time member or visiting for the first time, you are welcome here. Come expecting to encounter God and leave refreshed and strengthened for the week ahead.",
    images: [],
  },
  {
    slug: "wednesday-fellowship",
    title: "Wednesday Fellowship",
    date: "Every Wednesday",
    time: "4:30 PM",
    location: "Church",
    category: "Fellowship",
    description: "Mid-week gathering for prayer, the Word, and fellowship.",
    longDescription:
      "Our Wednesday Fellowship is a mid-week gathering that refreshes and strengthens believers through the Word, prayer, and community. In the middle of busy weeks, we gather to refocus on what matters most, our relationship with God and with one another. It is a time of open worship, Bible sharing, and encouragement for the journey ahead.",
    images: [],
  },
  {
    slug: "mbuluni-fellowship",
    title: "Mbuluni Methodist Fellowship",
    date: "April 2026",
    time: "TBA",
    location: "Mbuluni",
    category: "Fellowship",
    description: "A fellowship gathering bringing together members from across the Methodist community.",
    longDescription:
      "The Mbuluni Methodist Fellowship is a special gathering that unites members from across the Methodist community for a time of shared worship, testimonies, and celebration of God's faithfulness. It is a joyful occasion that strengthens the bonds between congregations and reminds us that we are part of something greater than any single church.",
    images: [
      "/g2.jpeg",
      "/youth%20f2.jpeg",
      "/youth%20f3.jpeg",
      "/youth%20f4.jpeg",
      "/youth%20f5.jpeg",
      "/youth%20fll.jpeg",
    ],
    heroImage: "/g2.jpeg",
  },
  {
    slug: "youth-ministry",
    title: "Youth Ministry",
    date: "Every Sunday",
    time: "2:00 PM",
    location: "Ntombura Hall",
    category: "Youth",
    description: "A vibrant space for the youth to grow in faith and community.",
    longDescription:
      "Our Youth Ministry is a dynamic and welcoming community for young people to encounter God, build lasting friendships, and grow as leaders in the faith. We gather every Sunday at Ntombura Hall for worship, Bible study, and open conversations about faith and life. We believe the youth are not just the future of the church, they are the church today.",
    images: [
      "/youth%20f2.jpeg",
      "/youth%20f3.jpeg",
      "/youth%20f4.jpeg",
      "/youth%20f5.jpeg",
      "/youth%20fll.jpeg",
    ],
    heroImage: "/youth%20f2.jpeg",
  },
  {
    slug: "home-ministry",
    title: "Home Ministry",
    date: "Every Tuesday",
    time: "4:30 PM",
    location: "Home Visit",
    category: "Service",
    description: "Fellowship and spiritual growth through home visitation.",
    longDescription:
      "Our Home Ministry brings the church to your doorstep, visiting members and families with prayer, encouragement, and the Word of God. We believe the church extends beyond its walls and into the homes and communities where our members live. Whether you are going through a difficult season or simply in need of fellowship and prayer, our team is here to walk with you.",
    images: [],
  },
];
