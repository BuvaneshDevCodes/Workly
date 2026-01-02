import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { 
  Briefcase, 
  Zap, 
  Shield, 
  Users, 
  Target, 
  TrendingUp
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-[var(--bg-card)]/80 backdrop-blur-md border-b border-[var(--border-default)] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-text">Workly</div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-[var(--text-body)] hover:text-[var(--primary)] transition-smooth">
                Features
              </a>
              <a href="#why-us" className="text-[var(--text-body)] hover:text-[var(--primary)] transition-smooth">
                Why Us
              </a>
              <a href="#cta" className="text-[var(--text-body)] hover:text-[var(--primary)] transition-smooth">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with GSAP Animations */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-section)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-[var(--text-heading)] mb-4">
              Powerful Features for Job Seekers
            </h2>
            <p className="text-lg text-[var(--text-body)]">
              Everything you need to land your next opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="animate-slideInLeft bg-[var(--bg-card)] rounded-lg p-8 border border-[var(--border-default)] hover:border-[var(--primary)] transition-smooth delay-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-smooth">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">
                Smart Job Matching
              </h3>
              <p className="text-[var(--text-body)]">
                AI-powered recommendations that match your skills and preferences with the perfect job opportunities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="animate-fadeInUp bg-[var(--bg-card)] rounded-lg p-8 border border-[var(--border-default)] hover:border-[var(--secondary)] transition-smooth delay-200 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--secondary)] group-hover:text-white transition-smooth">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">
                One-Click Apply
              </h3>
              <p className="text-[var(--text-body)]">
                Apply to multiple jobs instantly with pre-filled applications and your professional profile.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="animate-slideInRight bg-[var(--bg-card)] rounded-lg p-8 border border-[var(--border-default)] hover:border-[var(--primary)] transition-smooth delay-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-smooth">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">
                Secure Profile
              </h3>
              <p className="text-[var(--text-body)]">
                Keep your data safe with enterprise-grade security and full control over your visibility.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="animate-slideInLeft bg-[var(--bg-card)] rounded-lg p-8 border border-[var(--border-default)] hover:border-[var(--secondary)] transition-smooth delay-400 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--secondary)] group-hover:text-white transition-smooth">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">
                Network & Community
              </h3>
              <p className="text-[var(--text-body)]">
                Connect with industry professionals, mentors, and peers to grow your professional network.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="animate-fadeInUp bg-[var(--bg-card)] rounded-lg p-8 border border-[var(--border-default)] hover:border-[var(--primary)] transition-smooth delay-500 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-smooth">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">
                Career Path Tools
              </h3>
              <p className="text-[var(--text-body)]">
                Get personalized career guidance, skill assessments, and learning resources to grow faster.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="animate-slideInRight bg-[var(--bg-card)] rounded-lg p-8 border border-[var(--border-default)] hover:border-[var(--secondary)] transition-smooth delay-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--secondary)] group-hover:text-white transition-smooth">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">
                Track Your Progress
              </h3>
              <p className="text-[var(--text-body)]">
                Monitor your applications, interview updates, and salary insights all in one dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold text-[var(--text-heading)] mb-6">
                Why Choose Workly?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--secondary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-heading)]">Trusted by 100K+ Job Seekers</h3>
                    <p className="text-[var(--text-body)]">Join thousands who found their dream job</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--secondary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-heading)]">5000+ Active Employers</h3>
                    <p className="text-[var(--text-body)]">Access opportunities from top companies</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--secondary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-heading)]">24/7 Support Available</h3>
                    <p className="text-[var(--text-body)]">Get help whenever you need it</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--secondary)] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-heading)]">100% Free to Use</h3>
                    <p className="text-[var(--text-body)]">No hidden fees, always transparent</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slideInRight">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-1">
                <div className="bg-[var(--bg-card)] rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-[var(--bg-section)] rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-[var(--bg-section)] rounded w-full animate-pulse delay-100"></div>
                    <div className="h-4 bg-[var(--bg-section)] rounded w-5/6 animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl mx-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-fadeInDown text-4xl font-bold text-white mb-6 delay-100">
            Ready to Find Your Dream Job?
          </h2>
          <p className="animate-fadeInUp text-xl text-white/90 mb-8 delay-200">
            Join thousands of successful job seekers and land your next opportunity
          </p>

          <div className="animate-scaleIn flex flex-col sm:flex-row gap-4 justify-center delay-300">
            <Link href="/auth/register">
              <Button className="bg-white hover:bg-slate-100 text-[var(--primary)] font-semibold h-12 px-8 text-base shadow-md hover:shadow-lg transition-all">
                Create Free Account
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button 
                variant="outline" 
                className="border-white text-dark hover:bg-white/20 dark:hover:bg-white/10 h-12 px-8 text-base transition-all"
              >
                Already a Member? Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-default)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-[var(--text-heading)] mb-4">Workly</h3>
              <p className="text-[var(--text-muted)]">The modern job search platform</p>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text-heading)] mb-4">Product</h4>
              <ul className="space-y-2 text-[var(--text-body)]">
                <li><a href="#" className="hover:text-[var(--primary)] transition-smooth">Features</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition-smooth">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text-heading)] mb-4">Company</h4>
              <ul className="space-y-2 text-[var(--text-body)]">
                <li><a href="#" className="hover:text-[var(--primary)] transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition-smooth">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text-heading)] mb-4">Legal</h4>
              <ul className="space-y-2 text-[var(--text-body)]">
                <li><a href="#" className="hover:text-[var(--primary)] transition-smooth">Privacy</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition-smooth">Terms</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition-smooth">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--border-default)] pt-8 text-center text-[var(--text-muted)]">
            <p>&copy; 2026 Workly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
