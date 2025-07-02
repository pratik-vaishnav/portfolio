import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Calendar,
  Award,
  Code,
  Server,
  Cloud,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const skills = [
    { name: "Java", level: "Expert", color: "bg-orange-500", years: "8+" },
    {
      name: "Spring Boot",
      level: "Expert",
      color: "bg-green-500",
      years: "7+",
    },
    { name: "React", level: "Advanced", color: "bg-cyan-500", years: "4+" },
    { name: "Angular", level: "Advanced", color: "bg-red-500", years: "3+" },
    { name: "AWS", level: "Advanced", color: "bg-yellow-500", years: "5+" },
    { name: "MySQL", level: "Expert", color: "bg-blue-600", years: "8+" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "End-to-end application development with Java/Spring Boot backends and React/Angular frontends",
    },
    {
      icon: Server,
      title: "Backend Architecture",
      description:
        "Designed and optimized REST APIs serving 1M+ daily requests with microservices architecture",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Extensive AWS experience with containerized deployments using Docker and Kubernetes",
    },
    {
      icon: Database,
      title: "Modern UI/UX",
      description:
        "Responsive web applications with React hooks, Angular components, and modern JavaScript",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/30 to-purple-100/40"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 hover:scale-105 transition-transform duration-300 shadow-sm"
                >
                  <MapPin className="w-3 h-3 mr-1" />
                  Based in India
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  8+ Years Experience
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Pratik Vaishnav
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lead Full-Stack Developer & Cloud Architect
              </h2>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed">
                Experienced Lead Full-Stack Developer with 8+ years of expertise
                in building end-to-end web applications. Specializing in
                Java/Spring Boot backends, React/Angular frontends, and AWS
                cloud infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 relative overflow-hidden group"
                >
                  <Link
                    to="/experience"
                    className="flex items-center gap-2 relative z-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    View Experience
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-lg px-10 py-5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 relative group overflow-hidden"
                >
                  <a
                    href="/Pratik_Resume.pdf"
                    download="Pratik_Vaishnav_Resume.pdf"
                    className="flex items-center gap-2 relative z-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                      8+
                    </div>
                    <div className="absolute inset-0 text-3xl md:text-4xl font-bold text-blue-600 opacity-0 group-hover:opacity-20 animate-ping">
                      8+
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-2 group-hover:text-gray-800 transition-colors duration-300">
                    Years Experience
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                      3x
                    </div>
                    <div className="absolute inset-0 text-3xl md:text-4xl font-bold text-purple-600 opacity-0 group-hover:opacity-20 animate-ping">
                      3x
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-2 group-hover:text-gray-800 transition-colors duration-300">
                    Employee of Month
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                      50+
                    </div>
                    <div className="absolute inset-0 text-3xl md:text-4xl font-bold text-green-600 opacity-0 group-hover:opacity-20 animate-ping">
                      50+
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-2 group-hover:text-gray-800 transition-colors duration-300">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                      100%
                    </div>
                    <div className="absolute inset-0 text-3xl md:text-4xl font-bold text-orange-600 opacity-0 group-hover:opacity-20 animate-ping">
                      100%
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-2 group-hover:text-gray-800 transition-colors duration-300">
                    Professional Quality
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-6 scale-105 group-hover:rotate-12 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-3xl transform -rotate-3 scale-105 group-hover:-rotate-6 transition-transform duration-700"></div>

                {/* Main image container */}
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl ring-1 ring-gray-900/5 group-hover:shadow-3xl transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="https://cdn.builder.io/api/v1/assets/d1758924c55c4985a5cd6699a070ab55/img_1469-832a33?format=webp&width=800"
                      alt="Pratik Vaishnav - Lead Full-Stack Developer"
                      className="w-80 h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Premium live status indicator */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full relative">
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                        <div className="relative w-full h-full bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-gray-700">
                        Active
                      </span>
                    </div>

                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>

                  {/* Enhanced floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-gray-50 rounded-full p-5 shadow-2xl border border-gray-100 group-hover:-translate-y-1 transition-transform duration-500">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Code className="w-7 h-7 text-white relative z-10" />
                    </div>
                  </div>
                </div>

                {/* Floating tech icons */}
                <div className="absolute -top-8 -left-8 bg-white rounded-lg p-3 shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">J</span>
                  </div>
                </div>

                <div className="absolute top-8 -right-12 bg-white rounded-lg p-3 shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                  <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-12 bg-white rounded-lg p-3 shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                  <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">☁</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized in modern full-stack technologies with proven
              expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-6 text-center group hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 hover:from-blue-50 hover:to-purple-50"
              >
                <CardContent className="p-0">
                  <div className="relative mx-auto mb-4">
                    <div
                      className={`w-14 h-14 rounded-full ${skill.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Code className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Glowing ring effect */}
                    <div
                      className={`absolute inset-0 w-14 h-14 rounded-full ${skill.color} opacity-0 group-hover:opacity-30 animate-ping`}
                    ></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{skill.level}</p>
                  <p className="text-xs text-blue-600 font-medium">
                    {skill.years} years
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Excel At
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My expertise spans across full-stack development, cloud
              architecture, and modern web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Showcasing 8+ years of expertise in building scalable web
            applications with modern technologies. Passionate about continuous
            learning and delivering high-quality solutions in enterprise
            environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-4"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Professional Contact
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
            >
              <a
                href="/Pratik_Resume.pdf"
                download="Pratik_Vaishnav_Resume.pdf"
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
