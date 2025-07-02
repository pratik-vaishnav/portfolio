import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Github, Calendar, Layers } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "GST Real-time Processing System",
      description:
        "Leading the development of real-time order processing system for GST compliance with downstream integrations and vendor communication pipelines.",
      technologies: ["Java", "Spring Boot", "AWS", "Kafka", "Kubernetes"],
      status: "Production",
      category: "Enterprise System",
    },
    {
      title: "E-Procurement Platform",
      description:
        "Contributed to modules including Auctions, Tenders, RFPs, and RFQs for enterprise procurement solutions.",
      technologies: ["Java", "Spring Framework", "ActiveMQ", "SQL Server"],
      status: "Production",
      category: "Enterprise Platform",
    },
    {
      title: "Banking Integration System",
      description:
        "Developed e-Procurement and e-GEM integrations for major banks including Axis and ICICI with payment gateway integrations.",
      technologies: ["Java", "Spring Boot", "MySQL", "Payment Gateways"],
      status: "Production",
      category: "Financial Services",
    },
  ];

  return (
    <PageTransition>
      <Layout>
        <div className="min-h-screen bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Projects & Contributions
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Showcasing enterprise-level projects and technical contributions
                across various domains
              </p>
            </div>

            {/* Featured Projects Preview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Layers className="w-6 h-6 text-primary-600" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge
                        className={`text-xs ${
                          project.status === "Production"
                            ? "bg-green-100 text-green-800 border-green-300"
                            : "bg-blue-100 text-blue-800 border-blue-300"
                        }`}
                      >
                        {project.status}
                      </Badge>
                      <Button variant="ghost" size="sm" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Private
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <Card className="p-8 text-center border-2 border-dashed border-primary-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Detailed Project Portfolio Coming Soon
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  I'm preparing comprehensive case studies of my projects
                  including technical architecture, challenges solved,
                  performance improvements, and business impact. Many projects
                  are enterprise-level and require proper documentation before
                  sharing.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900 mb-2">
                      What's Coming:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Detailed technical case studies</li>
                      <li>• Architecture diagrams and solutions</li>
                      <li>• Performance optimization examples</li>
                      <li>• Open source contributions</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Project Categories:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Enterprise Backend Systems</li>
                      <li>• Cloud Infrastructure Projects</li>
                      <li>• API Integration Solutions</li>
                      <li>• Real-time Processing Systems</li>
                    </ul>
                  </div>
                </div>

                <Badge variant="secondary" className="px-4 py-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Available in Next Update
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default Projects;
