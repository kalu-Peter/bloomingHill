import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pastSeniorPastors = [
  { name: "Pastor —", period: "— – —" },
];

const pastChairmen = [
  { name: "—", period: "— – —" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-primary-foreground/90">
            Learn more about our church family, mission, and leadership
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To love God passionately, love others unconditionally, and serve our community 
                  faithfully. We are committed to making disciples who make disciples, spreading 
                  the gospel of Jesus Christ throughout our city and beyond.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a thriving church community where every person experiences God's love, 
                  grows in their faith, and finds their purpose in serving others. We envision 
                  a church that transforms lives and impacts our community for generations to come.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Church History */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Grace Community Church was founded in 1985 by a small group of families who shared 
              a vision for creating a warm, welcoming church home in the heart of our community. 
              What started as a gathering of 25 people in a local school gymnasium has grown into 
              a vibrant congregation of over 800 members.
            </p>
            <p className="text-lg leading-relaxed">
              Throughout our journey, we have remained committed to our core values of authentic 
              worship, meaningful fellowship, compassionate service, and biblical teaching. Today, 
              we continue to be a beacon of hope and love in our community, always ready to welcome 
              new families into our church family.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>

          {/* Senior Pastor */}
          <div className="mb-14">
            <h3 className="text-2xl font-semibold mb-6 text-center">Senior Pastor</h3>
            <div className="flex justify-center">
              <Card className="w-full max-w-sm hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/pastor.jpeg"
                      alt="Pastor Lucy Kisilu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">Pastor Lucy Kisilu</CardTitle>
                  <Badge variant="secondary">Senior Pastor</Badge>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Church Leadership */}
          <div className="mb-14">
            <h3 className="text-2xl font-semibold mb-6 text-center">Church Leadership</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Chairman */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">PK</span>
                  </div>
                  <CardTitle className="text-lg">Peter Kilawa</CardTitle>
                  <Badge variant="outline">Chairman</Badge>
                </CardHeader>
              </Card>

              {/* Secretary */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xl text-muted-foreground">—</span>
                  </div>
                  <CardTitle className="text-lg text-muted-foreground">Secretary</CardTitle>
                  <Badge variant="outline">Secretary</Badge>
                </CardHeader>
              </Card>

              {/* Treasurer */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xl text-muted-foreground">—</span>
                  </div>
                  <CardTitle className="text-lg text-muted-foreground">Treasurer</CardTitle>
                  <Badge variant="outline">Treasurer</Badge>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Past Leaders */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Past Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Past Senior Pastors */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Senior Pastors</h3>
              <div className="space-y-3">
                {pastSeniorPastors.map((pastor, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center justify-between py-4 px-5">
                      <span className="font-medium">{pastor.name}</span>
                      <span className="text-sm text-muted-foreground">{pastor.period}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Past Chairmen */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Chairmen</h3>
              <div className="space-y-3">
                {pastChairmen.map((chairman, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center justify-between py-4 px-5">
                      <span className="font-medium">{chairman.name}</span>
                      <span className="text-sm text-muted-foreground">{chairman.period}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Worship</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We worship God with authentic hearts and voices, celebrating His goodness and grace.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Fellowship</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We build meaningful relationships and support one another as a loving church family.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We serve our community with compassion, meeting needs and sharing God's love.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We pursue spiritual growth through Bible study, prayer, and discipleship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;