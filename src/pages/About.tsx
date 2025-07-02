import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Heart,
  Award,
  Lightbulb,
  Target,
  Users,
  Code,
  BookOpen,
  Music,
  Trophy,
  Download,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Ownership & Accountability",
      description:
        "I take full ownership of my work and am accountable for delivering quality solutions that meet business objectives.",
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description:
        "Leading by example while fostering teamwork and knowledge sharing across development teams.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "Staying updated with latest technologies and best practices to deliver modern, scalable solutions.",
    },
    {
      icon: Award,
      title: "Excellence in Delivery",
      description:
        "Committed to delivering high-quality, performance-optimized solutions that exceed expectations.",
    },
  ];

  const journey = [
    {
      year: "2013-2017",
      title: "Foundation Years",
      description:
        "Completed Computer Engineering with 8.40 CGPA, building strong fundamentals in programming and system design.",
    },
    {
      year: "2017-2019",
      title: "Early Career",
      description:
        "Started as Java Developer at Xomic Infotech, working on e-Procurement systems and banking integrations.",
    },
    {
      year: "2018-2020",
      title: "Growth Phase",
      description:
        "Moved to e-Procurement Technologies, contributing to enterprise modules like Auctions, Tenders, and RFPs.",
    },
    {
      year: "2020-Present",
      title: "Leadership Era",
      description:
        "Joined Bluevine Technologies, progressed from Software Engineer to Lead, earning multiple recognitions.",
    },
  ];

  const interests = [
    {
      icon: BookOpen,
      title: "Reading",
      description:
        "Inspirational stories and thoughts that fuel personal growth",
    },
    {
      icon: Trophy,
      title: "Cricket",
      description:
        "Following and playing cricket, understanding teamwork dynamics",
    },
    {
      icon: Music,
      title: "Music",
      description: "Singing song rhythms and appreciating musical compositions",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Upholding honesty, responsibility, and integrity in all aspects",
    },
  ];

  return (
    <PageTransition>
      <Layout>
        <div className="min-h-screen bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Pratik Vaishnav
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A passionate backend developer with 8+ years of experience
                building scalable enterprise systems. Driven by innovation,
                excellence, and the pursuit of creating solutions that make a
                real impact.
              </p>
            </div>

            {/* Personal Story */}
            <Card className="p-8 mb-12 bg-gradient-to-r from-primary-50 to-white border-l-4 border-l-primary-500">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  My Story
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    My journey into software development began during my
                    Computer Engineering studies at Government Engineering
                    College, Modasa, where I graduated with an 8.40 CGPA. What
                    started as curiosity about how systems work evolved into a
                    passion for building robust, scalable backend solutions.
                  </p>
                  <p className="mb-4">
                    Over the past 8+ years, I've had the privilege of working
                    across diverse domains - from e-procurement and banking to
                    taxation systems. Each project taught me something new,
                    whether it was optimizing database queries for millions of
                    records, designing fault-tolerant microservices, or leading
                    teams through complex technical challenges.
                  </p>
                  <p className="mb-4">
                    Currently, as a Lead Software Engineer at Bluevine
                    Technologies (Yubi), I'm proud to lead the GST product
                    vertical, where we process real-time orders and manage
                    critical integrations that businesses depend on. Being
                    recognized as Employee of the Month three times and
                    receiving the 'Bias for Action' Award for my proactive
                    approach and swift decision-making has been incredibly
                    motivating, but what drives me most is the impact our
                    solutions have on real businesses.
                  </p>
                  <p>
                    I believe in writing code that not only works but is
                    maintainable, scalable, and elegant. When I'm not coding,
                    you'll find me reading inspirational stories, following
                    cricket, or exploring new technologies that could solve
                    tomorrow's problems.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Values & Philosophy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Values & Philosophy
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Journey Timeline */}
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  My Journey
                </h2>
                <div className="space-y-8">
                  {journey.map((phase, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {phase.title}
                          </h3>
                          <Badge variant="outline">{phase.year}</Badge>
                        </div>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education & Achievements */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Education */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-l-primary-200 pl-4">
                      <h4 className="font-semibold text-gray-900">
                        Bachelor of Engineering
                      </h4>
                      <p className="text-primary-600 font-medium">
                        Computer Engineering
                      </p>
                      <p className="text-sm text-gray-600">
                        Government Engineering College, Modasa
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          2013 – 2017
                        </span>
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          CGPA: 8.40 / 10.00
                        </Badge>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Key Learning Areas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Data Structures</Badge>
                        <Badge variant="secondary">Algorithms</Badge>
                        <Badge variant="secondary">Database Systems</Badge>
                        <Badge variant="secondary">Software Engineering</Badge>
                        <Badge variant="secondary">Computer Networks</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recognition */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-primary-600" />
                    Recognition & Achievements
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-yellow-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          3x Employee of the Month
                        </h4>
                        <p className="text-sm text-gray-600">
                          Recognized for exceptional ownership and contributions
                          to key product deliveries at Bluevine Technologies
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-purple-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Bias for Action Award
                        </h4>
                        <p className="text-sm text-gray-600">
                          Received at Yubi in recognition of proactive approach,
                          swift decision-making, and consistent ownership in
                          driving impactful outcomes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Team Leadership
                        </h4>
                        <p className="text-sm text-gray-600">
                          Successfully leading GST product vertical with
                          responsibility for real-time processing and team
                          coordination
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interests & Hobbies */}
            <Card className="p-8 mb-12">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Beyond Coding
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {interests.map((interest, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <interest.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {interest.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {interest.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Approach */}
            <Card className="p-8 mb-12 bg-gradient-to-r from-gray-50 to-primary-50">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  My Technical Approach
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Development Philosophy
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Code className="w-5 h-5 text-primary-600 mt-0.5" />
                        <span>
                          Write clean, maintainable code that future developers
                          (including myself) will thank me for
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-5 h-5 text-primary-600 mt-0.5" />
                        <span>
                          Focus on solving real business problems with scalable,
                          efficient solutions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-primary-600 mt-0.5" />
                        <span>
                          Collaborate effectively with cross-functional teams to
                          deliver exceptional results
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What Drives Me
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Lightbulb className="w-5 h-5 text-accent mt-0.5" />
                        <span>
                          Continuous learning and staying ahead of technology
                          trends
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-5 h-5 text-accent mt-0.5" />
                        <span>
                          Building systems that can handle growth and scale
                          gracefully
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="w-5 h-5 text-accent mt-0.5" />
                        <span>
                          Creating positive impact through technology and
                          mentoring others
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="p-8 text-center bg-gradient-to-r from-primary-600 to-accent text-white">
              <CardContent className="p-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Let's Build Something Great Together
                </h2>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  I'm passionate about continuous learning, sharing technical
                  knowledge, and building meaningful professional connections
                  within the software development community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="text-lg px-8 py-4"
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      Get In Touch
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    <a
                      href="/Pratik_Resume.pdf"
                      download="Pratik_Vaishnav_Resume.pdf"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      View Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default About;
