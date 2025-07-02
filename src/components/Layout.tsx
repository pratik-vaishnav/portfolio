import { ReactNode } from "react";
import Header from "./Header";
import Chatbot from "./Chatbot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">{children}</main>
      <Chatbot />
    </div>
  );
};

export default Layout;
