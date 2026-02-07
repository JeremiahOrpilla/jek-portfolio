# Jek.dev - Personal Portfolio

A playful, interactive personal portfolio website showcasing data analytics and programming expertise. Built with React, TypeScript, and Tailwind CSS with smooth animations, mouse parallax effects, and responsive design.

## 🎨 Features

- **Interactive Navigation** - Smooth scrolling between sections with active state tracking
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Fade-in, slide-in, scale, wobble, and floating animations
- **Mouse Parallax** - Subtle floating background elements that respond to mouse movement
- **Skill Progress Bars** - Animated progress indicators for technical skills
- **Dynamic Fun Facts** - Random developer facts that refresh every 5 seconds
- **Social Links** - Direct links to GitHub, LinkedIn, Facebook, Instagram, and Email
- **Professional Yet Playful** - Warm color scheme with friendly, approachable tone

## 📋 Sections

1. **Home** - Hero section with eye-catching headline and call-to-action
2. **About** - Personal bio with background and specializations
3. **Skills** - Technical toolkit with proficiency levels and categories
4. **Experience** - Professional journey with company details and descriptions
5. **Insights** - Data and code wisdom with thoughtful perspectives
6. **Fun** - Random facts, developer jokes, and playful humor
7. **Contact** - Social media links and collaboration opportunities

## 🛠️ Tech Stack

- **Frontend Framework** - React 19 with TypeScript
- **Styling** - Tailwind CSS 4 with custom animations
- **Routing** - Wouter for client-side navigation
- **Icons** - Lucide React
- **Build Tool** - Vite
- **Package Manager** - pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/JeremiahOrpilla/jek.dev.git
cd jek.dev

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build locally
pnpm preview
```

## 📁 Project Structure

```
jek.dev/
├── client/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable UI components
│   │   ├── App.tsx       # Main app component with routing
│   │   ├── main.tsx      # React entry point
│   │   └── index.css     # Global styles and theme
│   └── index.html        # HTML template
├── server/               # Backend server (Express)
├── package.json          # Project dependencies
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎯 Customization

### Update Personal Information

Edit `client/src/pages/Home.tsx` to customize:

- **Skills** - Modify the `skills` array with your technical expertise
- **Experience** - Update the `experience` array with your work history
- **Social Links** - Change URLs in the `socialLinks` array
- **Fun Facts** - Add your own jokes and facts to the `funFacts` array
- **Insights** - Update the `insights` array with your perspectives

### Customize Colors

Edit `client/src/index.css` to change the color scheme:

- `--warm-yellow: #f59e0b` - Primary accent color
- `--warm-amber: #d97706` - Secondary accent
- `--warm-gold: #fbbf24` - Tertiary accent
- `--background: #ffffff` - Main background
- `--foreground: #374151` - Main text color

### Add Custom Fonts

Update `client/index.html` to add Google Fonts or other font services:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

Then update the font families in `client/src/index.css`.

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect the configuration
   - Click "Deploy"

3. **Configure Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Environment Variables

No environment variables are required for this static site. If you add backend functionality, create a `.env.local` file:

```env
VITE_API_URL=your_api_url
```

## 📊 Performance

- **Optimized Bundle** - Code splitting and lazy loading
- **Fast Load Times** - Minified CSS and JavaScript
- **SEO Friendly** - Semantic HTML and meta tags
- **Mobile Optimized** - Responsive design with mobile-first approach

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload

# Production
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm check            # Type check with TypeScript
pnpm format           # Format code with Prettier
```

## 🎨 Design Philosophy

The portfolio follows a **warm, friendly aesthetic** with:

- Clean, readable typography
- Ample whitespace for breathing room
- Subtle animations that enhance rather than distract
- Professional yet approachable tone
- Accessible color contrast ratios
- Responsive design for all screen sizes

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the MIT License. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

If you'd like to improve this portfolio template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

- **Email** - [jeremiahorpilla00@gmail.com](mailto:jeremiahorpilla00@gmail.com)
- **GitHub** - [@JeremiahOrpilla](https://github.com/JeremiahOrpilla)
- **LinkedIn** - [Jeremiah Orpilla](https://linkedin.com/jeremiah-orpilla-b612322b7)
- **Instagram** - [@jekcatsu](https://instagram.com/jekcatsu)

## ⭐ Show Your Support

If you find this portfolio template useful, please consider giving it a star on GitHub!

---

**Made with ❤️ and code by Jeremiah Orpilla**
