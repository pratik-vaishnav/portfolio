import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Linkedin,
  Github,
  Download,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Professional networking and inquiries",
      value: "pratikvaishnav2013@gmail.com",
      action: "Send Email",
      href: "mailto:pratikvaishnav2013@gmail.com",
      primary: true,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking and updates",
      value: "Connect with me",
      action: "View Profile",
      href: "https://www.linkedin.com/in/pratik-vaishnav-244573a8",
      available: true,
    },
    {
      icon: Phone,
      title: "Phone/WhatsApp",
      description: "Direct communication when needed",
      value: "+91 9879957167",
      action: "Call/Message",
      href: "tel:+919879957167",
      whatsapp: "https://wa.me/919879957167",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Open source contributions and projects",
      value: "pratik-vaishnav",
      action: "View Repositories",
      href: "https://github.com/pratik-vaishnav",
      available: true,
    },
  ];

  const contactInfo = {
    location: "India (IST Timezone)",
    response: "Within 24 hours",
    purpose: "Professional Networking",
  };

  return (
    <PageTransition>
      <Layout>
        <div className="min-h-screen bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Professional Contact
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Feel free to reach out for professional networking, technical
                discussions, or sharing insights about software development.
              </p>
            </div>

            {/* Availability Status */}
            <Card className="p-6 mb-8 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Professional Contact
                    </h2>
                    <p className="text-gray-600">
                      Connect for technical discussions and professional
                      networking
                    </p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                    {contactInfo.purpose}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      Response time: {contactInfo.response}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {contactInfo.location}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-lg transition-shadow duration-300 ${
                    method.primary
                      ? "ring-2 ring-primary-200 bg-primary-50/30"
                      : ""
                  } ${method.available === false ? "opacity-60" : ""}`}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          method.primary ? "bg-primary-100" : "bg-gray-100"
                        }`}
                      >
                        <method.icon
                          className={`w-6 h-6 ${
                            method.primary
                              ? "text-primary-600"
                              : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                          {method.title}
                          {method.primary && (
                            <Badge variant="secondary" className="text-xs">
                              Preferred
                            </Badge>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {method.description}
                        </p>
                        <p className="text-sm text-gray-800 font-medium mb-3">
                          {method.value}
                        </p>

                        {method.available !== false ? (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant={method.primary ? "default" : "outline"}
                              asChild
                            >
                              <a
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                {method.action === "Send Email" ? (
                                  <Mail className="w-4 h-4" />
                                ) : method.action === "Call/Message" ? (
                                  <Phone className="w-4 h-4" />
                                ) : (
                                  <ExternalLink className="w-4 h-4" />
                                )}
                                {method.action}
                              </a>
                            </Button>
                            {method.whatsapp && (
                              <Button size="sm" variant="outline" asChild>
                                <a
                                  href={method.whatsapp}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  <MessageSquare className="w-4 h-4" />
                                  WhatsApp
                                </a>
                              </Button>
                            )}
                          </div>
                        ) : (
                          <Badge variant="outline" className="text-xs">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Interests */}
            <Card className="p-8 mb-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Professional Interests
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Technical Discussions
                    </h3>
                    <p className="text-sm text-gray-600">
                      Backend architecture, API design, and cloud technologies
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Industry Networking
                    </h3>
                    <p className="text-sm text-gray-600">
                      Connecting with fellow developers and technology
                      enthusiasts
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <ExternalLink className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Knowledge Sharing
                    </h3>
                    <p className="text-sm text-gray-600">
                      Best practices, performance optimization, and technical
                      insights
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button size="lg" asChild className="text-lg px-8 py-4">
                  <a
                    href="mailto:pratikvaishnav2013@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4"
                >
                  <a
                    href="https://wa.me/919879957167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Feel free to reach out for professional networking or technical
                discussions
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </PageTransition>
  );
};

export default Contact;
