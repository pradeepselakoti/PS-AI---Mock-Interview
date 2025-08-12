# Prepwise

<div align="center">
  <br />
  <img src="https://github.com/user-attachments/assets/1c0131c7-9f2d-4e3b-b47c-9679e76d8f9a" alt="Prepwise - AI-Powered Interview Preparation Platform" width="800">
  <br />
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logoColor=white&logo=nextdotjs" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Vapi-5dfeca?style=for-the-badge&logoColor=black" alt="Vapi AI" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=for-the-badge&logoColor=white&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Firebase-DD2C00?style=for-the-badge&logoColor=white&logo=firebase" alt="Firebase" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logoColor=white&logo=typescript" alt="TypeScript" />
  </div>

  <h3 align="center">AI-Powered Job Interview Preparation Platform</h3>
  <p align="center">Master your interviews with intelligent voice agents and real-time feedback</p>

  <div align="center">
    <a href="#features"><strong>Features</strong></a> •
    <a href="#tech-stack"><strong>Tech Stack</strong></a> •
    <a href="#quick-start"><strong>Quick Start</strong></a> •
    <a href="#usage"><strong>Usage</strong></a>
  </div>
</div>

---

## 🚀 Overview

Prepwise is a cutting-edge interview preparation platform that leverages AI voice technology to provide realistic interview simulations. Built with modern web technologies, it offers personalized feedback and comprehensive analytics to help job seekers excel in their interviews.

### ✨ Why Prepwise?

- **AI-Powered Conversations**: Engage with intelligent voice agents that simulate real interview scenarios
- **Instant Feedback**: Receive detailed performance analysis and improvement suggestions
- **Customizable Interviews**: Tailor interviews based on role, experience level, and tech stack
- **Progress Tracking**: Monitor your improvement over time with detailed analytics

## 🎯 <a name="features">Features</a>

### 🔐 **Secure Authentication**
- Email/password authentication powered by Firebase
- Secure user session management
- Protected routes and user data

### 🎤 **AI Interview Simulation**
- Real-time voice interaction with Vapi AI agents
- Dynamic question generation using Google Gemini
- Natural conversation flow with context awareness

### 📊 **Comprehensive Feedback System**
- Detailed performance scoring across multiple categories:
  - Communication Skills
  - Technical Knowledge
  - Problem-Solving Abilities
  - Cultural & Role Fit
  - Confidence & Clarity
- Personalized improvement recommendations
- Strengths and weaknesses analysis

### 🎨 **Modern User Experience**
- Responsive design that works on all devices
- Intuitive dashboard for interview management
- Real-time interview transcription
- Professional UI with smooth animations

### 📈 **Interview Management**
- Create custom interviews with specific parameters
- Track interview history and progress
- Retake interviews to measure improvement
- Export interview results and feedback

## ⚡ <a name="tech-stack">Tech Stack</a>

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library

### Backend & Services
- **Firebase** - Authentication and real-time database
- **Vapi AI** - Voice AI integration for realistic conversations
- **Google Gemini** - AI-powered question generation and feedback
- **Zod** - Runtime type validation

### Development Tools
- **ESLint & Prettier** - Code quality and formatting
- **Git** - Version control

## 🚀 <a name="quick-start">Quick Start</a>

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/prepwise.git
   cd prepwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Vapi AI Configuration
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

   # Google AI Configuration
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key

   # Application Configuration
   NEXT_PUBLIC_BASE_URL=http://localhost:3000

   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

   # Firebase Admin SDK (for server-side operations)
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_CLIENT_EMAIL=your_firebase_client_email
   FIREBASE_PRIVATE_KEY=your_firebase_private_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 <a name="usage">Usage Guide</a>

### Getting Started

1. **Sign Up/Sign In**
   - Create a new account or sign in with existing credentials
   - Complete your profile setup

2. **Create Your First Interview**
   - Click on "Create Interview" from the dashboard
   - Select your target role (e.g., Frontend Developer, Data Scientist)
   - Choose experience level (Junior, Mid-level, Senior)
   - Select relevant tech stack
   - Choose interview focus (Technical, Behavioral, or Mixed)

3. **Take the Interview**
   - Click "Start Interview" when ready
   - Engage in natural conversation with the AI interviewer
   - Answer questions clearly and confidently

4. **Review Feedback**
   - Receive detailed performance analysis
   - Review scores across different categories
   - Read personalized improvement suggestions
   - Track your progress over time

### Best Practices

- **Prepare your environment**: Use a quiet space with good internet connection
- **Test your microphone**: Ensure clear audio input for best AI interaction
- **Practice regularly**: Consistency is key to improvement
- **Review feedback thoroughly**: Use insights to focus your preparation

## 📁 Project Structure

```
prepwise/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── constants/             # Application constants
├── types/                 # TypeScript type definitions
└── public/               # Static assets
```

## 🔧 Configuration

### Firebase Setup

1. Create a new Firebase project
2. Enable Authentication with Email/Password
3. Set up Firestore database
4. Copy configuration keys to your `.env.local`

### Vapi AI Setup

1. Sign up for Vapi AI account
2. Create a new voice agent workflow
3. Configure voice settings and responses
4. Copy API keys and workflow ID

### Google AI Setup

1. Enable Google Generative AI API
2. Create API key with appropriate permissions
3. Add key to environment variables

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check our [Issues](https://github.com/yourusername/prepwise/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🚀 Roadmap

### Upcoming Features
- [ ] Video interview capabilities
- [ ] Industry-specific interview templates
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Integration with job boards
- [ ] Team collaboration features

---

<div align="center">
  <p>Built with ❤️ by <a href="https://www.linkedin.com/in/pradeep-selakoti-346a57269/" target="_blank">Pradeep Selakoti</a></p>
  <p>
    <a href="https://www.linkedin.com/in/pradeep-selakoti-346a57269/" target="_blank">
      <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logoColor=white&logo=linkedin" alt="LinkedIn" />
    </a>
    <a href="https://x.com/pradeepselakoti" target="_blank">
      <img src="https://img.shields.io/badge/-Twitter-000000?style=for-the-badge&logoColor=white&logo=x" alt="Twitter" />
    </a>
  </p>
  <p>
    <a href="#top">Back to top</a>
  </p>
</div>
