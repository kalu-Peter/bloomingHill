import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { groups } from "@/data/groups";
import { ArrowRight } from "lucide-react";

const Groups = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ministry Groups</h1>
          <p className="text-xl text-primary-foreground/90">
            Find your community and grow in faith together
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ministry Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <Link key={group.slug} to={`/groups/${group.slug}`} className="block group">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{group.name}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mt-2">{group.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-1 text-sm text-muted-foreground">
                      <p><strong>Day:</strong> {group.day}</p>
                      <p><strong>Time:</strong> {group.time}</p>
                      <p><strong>Location:</strong> {group.location}</p>
                      <div className="flex items-center gap-1 text-primary font-medium pt-2 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-4 w-4" />
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

export default Groups;
