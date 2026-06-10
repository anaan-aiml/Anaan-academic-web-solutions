export interface Service {
  id: string;
  category: "academic" | "webdev";
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  technologies?: string[];
  features?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "all" | "academic" | "webdev";
  technologies: string[];
  features: string[];
  highlight: boolean;
  demoUrl?: string;
  sourceUrl?: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  category: "Assignment Support" | "Website Development" | "Presentation Assistance" | "Assessment Guidance";
  studentAvatarLetter: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "process";
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  budget: string;
  deadline: string;
  description: string;
  createdAt: string;
  status: "pending" | "reviewed" | "quoted" | "completed";
  quotedPrice?: number;
}

export interface ProjectTrack {
  id: string;
  clientId: string;
  clientName: string;
  projectTitle: string;
  category: "academic" | "webdev";
  status: "received" | "quoted" | "in_development" | "delivered" | "completed";
  progress: number; // 0 to 100
  originalDeadline: string;
  quotedPrice: number;
  paymentStatus: "pending" | "partially_paid" | "fully_paid";
  timeline: {
    status: string;
    title: string;
    date: string;
    completed: boolean;
    remark?: string;
  }[];
  files: {
    id: string;
    name: string;
    uploadedBy: "client" | "admin";
    uploadedAt: string;
    size: string;
  }[];
  revisions: {
    id: string;
    description: string;
    status: "requested" | "ongoing" | "resolved";
    createdAt: string;
  }[];
  messages: {
    id: string;
    sender: "client" | "admin" | "ai";
    senderName: string;
    text: string;
    timestamp: string;
  }[];
}

export interface UserSession {
  id: string;
  fullName: string;
  email: string;
  role: "admin" | "client";
}
