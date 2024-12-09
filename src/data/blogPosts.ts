export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Collaborative Practice Agreements: A Guide for NPs',
    excerpt: 'Learn about the key components of collaborative practice agreements and how they support your independent practice.',
    author: 'Dr. Sarah Mitchell',
    date: 'March 15, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Practice Management'
  },
  {
    id: '2',
    title: 'State-by-State Guide to NP Practice Authority',
    excerpt: 'A comprehensive overview of NP practice authority and collaboration requirements across different states.',
    author: 'Dr. Sarah Mitchell',
    date: 'March 10, 2024',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Regulations'
  },
  {
    id: '3',
    title: 'Building a Successful Independent NP Practice',
    excerpt: 'Essential tips and strategies for establishing and growing your independent nurse practitioner practice.',
    author: 'Dr. Sarah Mitchell',
    date: 'March 5, 2024',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Business Growth'
  }
];