import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Download,
  Mail,
  Phone,
  ExternalLink,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: () => void;
    icon?: React.ReactNode;
  }>;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        text: "Hi! I'm Pratik's AI assistant. I can help you learn about his full-stack development experience, technical skills, and background. What would you like to know?",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "View Experience",
            action: () => (window.location.href = "/experience"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
          {
            label: "Download Resume",
            action: () => {
              const link = document.createElement("a");
              link.href = "/Pratik_Resume.pdf";
              link.download = "Pratik_Vaishnav_Resume.pdf";
              link.click();
            },
            icon: <Download className="w-4 h-4" />,
          },
          {
            label: "Contact Info",
            action: () => handleUserMessage("How can I contact Pratik?"),
          },
        ],
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  const generateResponse = (userMessage: string): Message => {
    const message = userMessage.toLowerCase();

    // Experience related
    if (
      message.includes("experience") ||
      message.includes("work") ||
      message.includes("job")
    ) {
      return {
        id: Date.now().toString(),
        text: "Pratik has 8+ years of full-stack development experience! He's currently a Lead Software Engineer at Bluevine Technologies, where he leads the GST product vertical. He works with Java/Spring Boot backends, React/Angular frontends, and AWS cloud infrastructure.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "View Full Experience",
            action: () => (window.location.href = "/experience"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Skills related
    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech") ||
      message.includes("java") ||
      message.includes("aws")
    ) {
      return {
        id: Date.now().toString(),
        text: "Pratik is a full-stack developer specializing in Java/Spring Boot for backend, React/Angular for frontend, AWS cloud services, Kubernetes, Kafka, and modern web development. He has expertise in both MySQL/PostgreSQL databases and responsive UI design.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "See All Skills",
            action: () => {
              // If already on homepage, scroll to skills section
              if (window.location.pathname === "/") {
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                // If on other page, navigate to homepage skills section
                window.location.href = "/#skills";
              }
            },
          },
        ],
      };
    }

    // Contact related
    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("phone") ||
      message.includes("reach")
    ) {
      return {
        id: Date.now().toString(),
        text: "You can connect with Pratik at pratikvaishnav2013@gmail.com or call/WhatsApp him at +91 9879957167. He's also on LinkedIn and GitHub for professional networking.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "Send Email",
            action: () => window.open("mailto:pratikvaishnav2013@gmail.com"),
            icon: <Mail className="w-4 h-4" />,
          },
          {
            label: "WhatsApp",
            action: () => window.open("https://wa.me/919879957167", "_blank"),
            icon: <Phone className="w-4 h-4" />,
          },
          {
            label: "Contact Page",
            action: () => (window.location.href = "/contact"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Location/availability
    if (
      message.includes("location") ||
      message.includes("remote") ||
      message.includes("available") ||
      message.includes("hire")
    ) {
      return {
        id: Date.now().toString(),
        text: "Pratik is based in India (IST timezone) and works as a Lead Software Engineer. He has extensive experience working with international teams and distributed systems. This portfolio showcases his technical skills and professional journey.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "Get In Touch",
            action: () => (window.location.href = "/contact"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Education
    if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("college") ||
      message.includes("degree")
    ) {
      return {
        id: Date.now().toString(),
        text: "Pratik has a Bachelor's in Computer Engineering from Government Engineering College, Modasa (2013-2017) with an impressive 8.40/10.00 CGPA.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "Learn More",
            action: () => (window.location.href = "/about"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Achievements
    if (
      message.includes("achievement") ||
      message.includes("award") ||
      message.includes("recognition")
    ) {
      return {
        id: Date.now().toString(),
        text: "Pratik has been recognized as Employee of the Month 3 times at Bluevine Technologies (Yubi) and received the 'Bias for Action' Award for his proactive approach, swift decision-making, and consistent ownership in driving impactful outcomes.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "View About Page",
            action: () => (window.location.href = "/about"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Blog
    if (
      message.includes("blog") ||
      message.includes("writing") ||
      message.includes("article")
    ) {
      return {
        id: Date.now().toString(),
        text: "Pratik shares his technical insights and experiences on his blog at pratik-vaishnav.blogspot.com. You can find articles about software development, best practices, and technology trends.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "Visit Blog",
            action: () =>
              window.open("https://pratik-vaishnav.blogspot.com/", "_blank"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Projects
    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("work")
    ) {
      return {
        id: Date.now().toString(),
        text: "Pratik has worked on enterprise-level projects including GST real-time processing systems, e-procurement platforms, and banking integrations. Many are enterprise projects with detailed case studies coming soon!",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "View Projects",
            action: () => (window.location.href = "/projects"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Default response with helpful suggestions
    return {
      id: Date.now().toString(),
      text: "I'd be happy to help! You can ask me about Pratik's experience, technical skills, education, achievements, or how to contact him. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
      actions: [
        {
          label: "Tell me about his experience",
          action: () => handleUserMessage("Tell me about his experience"),
        },
        {
          label: "What are his skills?",
          action: () => handleUserMessage("What are his skills?"),
        },
        {
          label: "How can I contact him?",
          action: () => handleUserMessage("How can I contact him?"),
        },
      ],
    };
  };

  const handleUserMessage = (message: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse = generateResponse(message);
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleUserMessage(inputValue.trim());
    }
  };

  const quickActions = [
    {
      label: "Experience",
      action: () => handleUserMessage("Tell me about his experience"),
    },
    {
      label: "Skills",
      action: () => handleUserMessage("What are his technical skills?"),
    },
    {
      label: "Blog",
      action: () =>
        window.open("https://pratik-vaishnav.blogspot.com/", "_blank"),
    },
    {
      label: "Contact",
      action: () => handleUserMessage("How can I contact Pratik?"),
    },
    {
      label: "Resume",
      action: () => {
        const link = document.createElement("a");
        link.href = "/Pratik_Resume.pdf";
        link.download = "Pratik_Vaishnav_Resume.pdf";
        link.click();
      },
    },
  ];

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <Card
          className={cn(
            "fixed bottom-20 right-4 w-80 md:w-96 h-96 shadow-2xl border-0 z-50 transition-all duration-300",
            isMinimized ? "h-14" : "h-96",
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-600 to-accent text-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Pratik's Assistant</h3>
                <p className="text-xs opacity-90">Usually replies instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-60">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-2",
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start",
                    )}
                  >
                    {message.sender === "bot" && (
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-3 h-3 text-primary-600" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[70%] rounded-lg p-3 text-sm",
                        message.sender === "user"
                          ? "bg-primary-600 text-white"
                          : "bg-gray-100 text-gray-900",
                      )}
                    >
                      <p>{message.text}</p>
                      {message.actions && (
                        <div className="mt-3 space-y-2">
                          {message.actions.map((action, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={action.action}
                              className="w-full justify-start text-xs h-8"
                            >
                              {action.icon && (
                                <span className="mr-2">{action.icon}</span>
                              )}
                              {action.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                    {message.sender === "user" && (
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-3 h-3 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-2 justify-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-primary-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary-100 text-xs"
                        onClick={action.action}
                      >
                        {action.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything about Pratik..."
                    className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    disabled={isTyping}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={!inputValue.trim() || isTyping}
                    className="px-3"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </>
          )}
        </Card>
      )}

      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50 transition-all duration-300",
          isOpen ? "scale-95" : "scale-100 hover:scale-105",
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            {/* Notification pulse */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </Button>
    </>
  );
};

export default Chatbot;
