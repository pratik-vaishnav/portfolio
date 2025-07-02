import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Code,
  Server,
  Cloud,
  Database,
  GitBranch,
  Shield,
  Zap,
  Users,
  Target,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const Experience = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-blue-500",
      skills: [
        { name: "Java", level: 95, years: "8+" },
        { name: "SQL", level: 90, years: "8+" },
        { name: "JavaScript", level: 75, years: "5+" },
        { name: "Shell Script", level: 85, years: "6+" },
        { name: "HTML/CSS", level: 80, years: "6+" },
      ],
    },
    {
      title: "Backend Frameworks",
      icon: GitBranch,
      color: "bg-green-500",
      skills: [
        { name: "Spring Boot", level: 95, years: "7+" },
        { name: "Spring Framework", level: 90, years: "8+" },
        { name: "Hibernate", level: 85, years: "6+" },
        { name: "Apache Kafka", level: 90, years: "4+" },
        { name: "ActiveMQ", level: 80, years: "3+" },
        { name: "Node.js", level: 65, years: "3+" },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: Code,
      color: "bg-cyan-500",
      skills: [
        { name: "React", level: 85, years: "4+" },
        { name: "Angular", level: 80, years: "3+" },
        { name: "TypeScript", level: 82, years: "3+" },
        { name: "JavaScript ES6+", level: 88, years: "5+" },
        { name: "HTML5/CSS3", level: 85, years: "6+" },
        { name: "Responsive Design", level: 80, years: "4+" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "bg-orange-500",
      skills: [
        { name: "AWS EC2", level: 90, years: "5+" },
        { name: "AWS RDS", level: 85, years: "4+" },
        { name: "AWS S3", level: 85, years: "4+" },
        { name: "Kubernetes", level: 85, years: "4+" },
        { name: "AWS EKS", level: 80, years: "3+" },
        { name: "AWS Lambda", level: 75, years: "3+" },
        { name: "Route 53", level: 80, years: "3+" },
        { name: "Load Balancers", level: 85, years: "4+" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "bg-purple-500",
      skills: [
        { name: "MySQL", level: 95, years: "8+" },
        { name: "PostgreSQL", level: 85, years: "5+" },
        { name: "SQL Server", level: 80, years: "4+" },
        { name: "Database Design", level: 90, years: "7+" },
        { name: "Query Optimization", level: 88, years: "6+" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Server,
      color: "bg-red-500",
      skills: [
        { name: "Jenkins", level: 80, years: "5+" },
        { name: "GitHub", level: 90, years: "7+" },
        { name: "Docker", level: 85, years: "4+" },
        { name: "Jira", level: 85, years: "6+" },
        { name: "Zenduty", level: 80, years: "2+" },
        { name: "Scouter", level: 75, years: "2+" },
        { name: "SVN", level: 70, years: "3+" },
      ],
    },
    {
      title: "Architecture & Design",
      icon: Shield,
      color: "bg-indigo-500",
      skills: [
        { name: "Microservices", level: 90, years: "5+" },
        { name: "REST APIs", level: 95, years: "7+" },
        { name: "System Design", level: 88, years: "6+" },
        { name: "Performance Tuning", level: 85, years: "5+" },
        { name: "Scalable Architecture", level: 88, years: "5+" },
        { name: "Payment Integration", level: 85, years: "4+" },
      ],
    },
  ];

  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Bluevine Technologies Pvt. Ltd.",
      period: "March 2024 – Present",
      location: "Remote",
      type: "Leadership Role",
      description:
        "Leading the GST product vertical with full ownership of real-time order processing, downstream integrations, and vendor communication pipelines.",
      keyAchievements: [
        "Designed and optimized REST APIs serving 1M+ requests daily across internal and external clients",
        "Architected cloud infrastructure using AWS stack (EC2, RDS, S3, EKS, IAM, Route53, MSK, Lambda)",
        "Developed responsive React-based admin dashboards for real-time system monitoring and management",
        "Implemented comprehensive monitoring and alerting via Zenduty ensuring 99.9% system reliability",
        "Led performance optimization initiatives using Scouter, improving response times by 40%",
        "Mentored junior developers and conducted sprint planning with cross-functional teams",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "AWS",
        "Kubernetes",
        "Kafka",
        "MySQL",
        "Zenduty",
        "Scouter",
      ],
      impact: "Critical backend services supporting enterprise GST compliance",
    },
    {
      title: "Senior Software Engineer",
      company: "Bluevine Technologies Pvt. Ltd.",
      period: "2021 – March 2024",
      location: "Remote",
      type: "Senior Role",
      description:
        "Contributed to GST product vertical development with focus on real-time processing and system optimization.",
      keyAchievements: [
        "Developed scalable microservices architecture handling real-time order processing",
        "Built React-based internal tools for system administration and monitoring",
        "Optimized database queries reducing processing time by 35%",
        "Implemented automated testing frameworks improving code quality",
        "Collaborated with QA and DevOps teams for seamless deployments",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "Kafka",
        "MySQL",
        "AWS",
        "Docker",
      ],
      impact: "Enhanced system performance and reliability",
    },
    {
      title: "Software Engineer",
      company: "Bluevine Technologies Pvt. Ltd.",
      period: "March 2020 – 2021",
      location: "Remote",
      type: "Individual Contributor",
      description:
        "Developed and maintained backend systems for GST-related services with focus on reliability and performance.",
      keyAchievements: [
        "Built robust backend APIs for GST compliance management",
        "Integrated third-party services for seamless data flow",
        "Participated in code reviews and agile development processes",
        "Contributed to system architecture decisions",
      ],
      technologies: ["Java", "Spring Framework", "MySQL", "REST APIs"],
      impact: "Foundation development for GST product suite",
    },
    {
      title: "Associate Java Developer",
      company: "e-Procurement Technologies Pvt. Ltd.",
      period: "November 2018 – July 2020",
      location: "On-site",
      type: "Developer Role",
      description:
        "Contributed to enterprise e-procurement modules including Auctions, Tenders, RFPs, and RFQs.",
      keyAchievements: [
        "Developed key features for Auction Tiger and Procure Tiger platforms",
        "Built Angular-based user interfaces for auction and tender management systems",
        "Implemented complex auction algorithms and bidding mechanisms",
        "Collaborated with BA, QA, and UI teams for feature delivery",
        "Maintained legacy systems while building new capabilities",
      ],
      technologies: [
        "Java",
        "Spring Framework",
        "Angular",
        "ActiveMQ",
        "JSP",
        "Servlets",
        "SQL Server",
      ],
      impact:
        "Enhanced procurement platform capabilities for enterprise clients",
    },
    {
      title: "Java Developer",
      company: "Xomic Infotech Pvt. Ltd.",
      period: "July 2017 – March 2019",
      location: "On-site",
      type: "Junior Developer",
      description:
        "Developed e-Procurement and e-GEM integrations for major banks including Axis and ICICI.",
      keyAchievements: [
        "Built payment gateway integrations for banking clients",
        "Developed custom utility JARs for reusable components",
        "Implemented e-procurement modules for banking sector",
        "Gained expertise in financial services integration",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "JSP",
        "JavaScript",
        "Payment Gateways",
      ],
      impact: "Enabled digital procurement for major banking institutions",
    },
  ];

  const internships = [
    {
      title: "Software Development Intern",
      company: "Government BiSAG",
      description: "Government sector software development experience",
    },
    {
      title: "Full Stack Java Intern",
      company: "Sculpt Soft Pvt. Ltd.",
      description: "Full-stack development with Java technologies",
    },
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", status: "Planned" },
    { name: "Oracle Java Certification", status: "Considering" },
    { name: "Kubernetes Certification", status: "Planned" },
  ];

  return (
    <PageTransition>
      <Layout>
        <div className="min-h-screen bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Experience & Skills
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                8+ years of backend development expertise across enterprise
                domains with proven leadership and technical excellence
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <Button asChild size="lg">
                  <a
                    href="/Pratik_Resume.pdf"
                    download="Pratik_Vaishnav_Resume.pdf"
                    className="flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Let's Connect
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Skills Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Technical Expertise
              </h2>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}
                        >
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {category.title}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">
                                {skill.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  {skill.years}
                                </Badge>
                                <span className="text-xs text-gray-500">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${category.color}`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Current Role Highlight */}
            <Card className="p-8 mb-12 border-l-4 border-l-primary-500 bg-gradient-to-r from-primary-50 via-white to-accent/5">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Current Role: Lead Software Engineer
                    </h2>
                    <p className="text-xl text-primary-600 font-semibold">
                      Bluevine Technologies Pvt. Ltd.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      Current Position
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                      Leadership Role
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>March 2024 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>Remote (India)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>Team Leadership</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Leading the GST product vertical with complete ownership of
                  real-time order processing systems, downstream integrations,
                  and vendor communication pipelines. Responsible for
                  architecting scalable solutions that serve millions of
                  requests daily.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          APIs serving 1M+ daily requests
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          40% performance improvement
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          99.9% system reliability
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          3x Employee of the Month
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">'Bias for Action' Award</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Java",
                        "Spring Boot",
                        "React",
                        "AWS",
                        "Kubernetes",
                        "Kafka",
                        "MySQL",
                        "Zenduty",
                        "Scouter",
                        "Docker",
                      ].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Career Journey
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-primary-600 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.impact}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-6">{exp.description}</p>

                      {exp.keyAchievements && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.keyAchievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-gray-700"
                              >
                                <ArrowRight className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Experience */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Internships */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary-600" />
                    Internships
                  </h3>
                  <div className="space-y-4">
                    {internships.map((internship, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-gray-200 pl-4"
                      >
                        <h4 className="font-semibold text-gray-900">
                          {internship.title}
                        </h4>
                        <p className="text-primary-600 font-medium">
                          {internship.company}
                        </p>
                        <p className="text-sm text-gray-600">
                          {internship.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Future Learning */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                    Continuous Learning
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Planned Certifications:
                      </h4>
                      <div className="space-y-2">
                        {certifications.map((cert, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {cert.status}
                            </Badge>
                            <span className="text-sm text-gray-700">
                              {cert.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Current Focus:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Advanced React patterns and Next.js</li>
                        <li>• Advanced Kubernetes orchestration</li>
                        <li>• Serverless architecture patterns</li>
                        <li>• Modern frontend-backend integration</li>
                        <li>• AI/ML integration in full-stack systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="p-8 text-center bg-gradient-to-r from-primary-600 to-accent text-white">
              <CardContent className="p-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Collaborate?
                </h2>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  With 8+ years of proven expertise and a track record of
                  delivering scalable solutions, I'm ready to tackle your next
                  backend challenge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="text-lg px-8 py-4"
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      Start a Project
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    <Link to="/projects" className="flex items-center gap-2">
                      <ExternalLink className="w-5 h-5" />
                      View Projects
                    </Link>
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

export default Experience;
