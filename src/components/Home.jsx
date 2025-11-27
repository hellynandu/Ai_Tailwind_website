import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import textSvg from '../assets/text.svg?raw'
import imageSvg from '../assets/image.svg?raw'
import codeSvg from '../assets/code.svg?raw'
import videoSvg from '../assets/video.svg?raw'
import emailSvg from '../assets/email.svg?raw'

function Dropdown({ label, items }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
        {({ open }) => (
          <>
            {label}
            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </>
        )}
      </MenuButton>

      <MenuItems className="absolute left-0 mt-2 w-48 origin-top-left bg-white border border-gray-200 rounded-md shadow-md focus:outline-none z-50">
        <div className="py-2">
          {items.map((item) => (
            <MenuItem key={item.label}>
              <a
                href={item.href}
                className="flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.icon && <div className="w-4 h-4 mr-2 shrink-0" dangerouslySetInnerHTML={{__html: item.icon}} />}
                {item.label}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
export default function Home() {
  const [activeTab, setActiveTab] = useState('text')
  const [showAll, setShowAll] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeFAQ, setActiveFAQ] = useState(null)
  const [isAnnual, setIsAnnual] = useState(false)

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <header className="fixed top-0 w-full bg-white backdrop-blur-sm shadow-md z-50 border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-6">
          <div id="logo">
            <a href="/">
              <img
                src="https://ai-agent.preview.uideck.com/assets/images/logo-black.svg"
                alt="Logo"
              />
            </a>
          </div>

          <nav className="nav-links hidden md:flex items-center justify-center gap-6">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition">Home</a>

            <Dropdown
              label="Products"
              items={[
                { label: "Text Generator", href: "/product-1", icon: textSvg },
                { label: "Image Generator", href: "/product-2", icon: imageSvg },
                { label: "Code Generator", href: "/product-3", icon: codeSvg },
                { label: "Video Generator", href: "/product-4", icon: videoSvg },
                { label: "Email Generator", href: "/product-5", icon: emailSvg },
              ]}
            />

            <Dropdown
              label="Pages"
              items={[
                { label: "Dashboard", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog Grid", href: "/blog" },
                { label: "Blog Details", href: "/blog-details" },
                { label: "Sign In", href: "/sign-in" },
                { label: "Sign Up", href: "/sign-up" },
                { label: "Reset Password", href: "/reset-password" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "404 Error", href: "/404" },

              ]}
            />

            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
          </nav>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <a href="#home" className="block px-6 py-2 text-gray-700 hover:text-gray-900">Home</a>
              <div className="px-6 py-2">
                <Dropdown
                  label="Products"
                  items={[
                    { label: "Text Generator", href: "/product-1", icon: textSvg },
                    { label: "Image Generator", href: "/product-2", icon: imageSvg },
                    { label: "Code Generator", href: "/product-3", icon: codeSvg },
                    { label: "Video Generator", href: "/product-4", icon: videoSvg },
                    { label: "Email Generator", href: "/product-5", icon: emailSvg },
                  ]}
                />
              </div>
              <div className="px-6 py-2">
                <Dropdown
                  label="Pages"
                  items={[
                    { label: "Dashboard", href: "/about" },
                    { label: "Pricing", href: "/pricing" },
                    { label: "Blog Grid", href: "/blog" },
                    { label: "Blog Details", href: "/blog-details" },
                    { label: "Sign In", href: "/sign-in" },
                    { label: "Sign Up", href: "/sign-up" },
                    { label: "Reset Password", href: "/reset-password" },
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "404 Error", href: "/404" },
                  ]}
                />
              </div>
              <a href="#contact" className="block px-6 py-2 text-gray-700 hover:text-gray-900">Contact</a>
              <div className="px-6 py-2">
                <button className="block w-full text-gray-700 hover:text-purple-500 px-6 py-3 font-semibold">
                  Sign In
                </button>
                <button className="block w-full bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 mt-2">
                  Get Started Free
                </button>
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center gap-4">
            <button className=" text-gray-700 hover:text-purple-500 px-6 py-3 font-semibold   transition">
              Sign In
            </button>

            <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition">
              Get Started Free
            </button>
          </div>


          <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center mt-40 pb-4 bg-white text-center space-y-6 px-4">

        {/* ICON + SUBTITLE */}
        <div className="flex items-center gap-3 border-2 border-purple-800 rounded-full px-4 py-2">
          <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.1699 0.58575C14.9429 -0.19525 13.7499 -0.19525 13.5229 0.58575L13.2029 1.69275C12.5109 4.07875 11.5669 5.94175 8.99994 6.58375L7.80794 6.88175C7.63097 6.91697 7.47168 7.01246 7.35721 7.15195C7.24274 7.29144 7.18018 7.4663 7.18018 7.64675C7.18018 7.8272 7.24274 8.00206 7.35721 8.14155C7.47168 8.28104 7.63097 8.37653 7.80794 8.41175L8.99994 8.70975C11.5669 9.35275 12.5109 11.2157 13.2029 13.6007L13.5229 14.7078C13.7499 15.4897 14.9429 15.4897 15.1699 14.7078L15.4899 13.6007C16.1819 11.2157 17.1269 9.35275 19.6939 8.71075L20.8839 8.41175C21.0609 8.37653 21.2202 8.28104 21.3347 8.14155C21.4491 8.00206 21.5117 7.8272 21.5117 7.64675C21.5117 7.4663 21.4491 7.29144 21.3347 7.15195C21.2202 7.01246 21.0609 6.91697 20.8839 6.88175L19.6939 6.58375C17.1269 5.94175 16.1819 4.07875 15.4899 1.69375L15.1699 0.58575Z"
              fill="url(#paint0_linear)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.28304 11.8368C5.14704 11.3488 4.43104 11.3488 4.29604 11.8368L4.10304 12.5288C3.68805 14.0188 3.12205 15.1838 1.58104 15.5858L0.867045 15.7718C0.759268 15.7971 0.663206 15.8581 0.594451 15.9448C0.525695 16.0316 0.488281 16.1391 0.488281 16.2498C0.488281 16.3605 0.525695 16.4679 0.594451 16.5547C0.663206 16.6415 0.759268 16.7025 0.867045 16.7278L1.58104 16.9148C3.12104 17.3158 3.68805 18.4808 4.10304 19.9708L4.29604 20.6628C4.43104 21.1518 5.14704 21.1518 5.28304 20.6628L5.47605 19.9708C5.89005 18.4808 6.45805 17.3158 7.99804 16.9148L8.71204 16.7278C8.81982 16.7025 8.91588 16.6415 8.98464 16.5547C9.05339 16.4679 9.09081 16.3605 9.09081 16.2498C9.09081 16.1391 9.05339 16.0316 8.98464 15.9448C8.91588 15.8581 8.81982 15.7971 8.71204 15.7718L7.99804 15.5858C6.45805 15.1848 5.89005 14.0198 5.47605 12.5288L5.28304 11.8368Z"
              fill="url(#paint1_linear)"
            />

            <defs>
              <linearGradient id="paint0_linear" x1="7.18" y1="0" x2="21.51" y2="15.29">
                <stop stopColor="#FF58D5" />
                <stop offset="1" stopColor="#FFA0E7" />
              </linearGradient>

              <linearGradient id="paint1_linear" x1="9.09" y1="11.47" x2="0.48" y2="21.02">
                <stop stopColor="#7A5AF8" />
                <stop offset="1" stopColor="#B5A2FF" />
              </linearGradient>
            </defs>
          </svg>

          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Powerful AI Kit for AI Products, Tools and Startups
          </h2>
        </div>

        {/* MAIN HEADINGS */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700">
            AI UI Kit and Templates for
          </h1>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700">
            Tailwind CSS and Figma
          </h1>
        </div>

        {/* DESCRIPTION */}
        <p className="max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
          Transform Your Vision into Reality: Unleash Your Creativity and Build Cutting-Edge AI Startups,
          Tools, and Products with Our UI Kit designed to accelerate development and innovation.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition w-full sm:w-auto">
            View Tools
          </button>

          <a
            href="https://www.youtube.com/watch?v=_iHmNaQBtKk"
            className="rounded-full flex h-12 gap-3 items-center text-sm border  bg-purple-500 text-white border-gray-100 p-1.5 pr-6"
          >
            <span className="w-9 h-9 rounded-full from-purple-500 to-pink-400 inline-flex items-center justify-center text-sm font-medium">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path
                  d="M3.5 3.71077L3.5 12.3482C3.5 13.5211 4.78545 14.2402 5.78489 13.6265L12.8183 9.30776C13.7717 8.7223 13.7717 7.33672 12.8183 6.75125L5.7849 2.43251C4.78545 1.81882 3.5 2.53795 3.5 3.71077Z"
                  fill="white"
                />
              </svg>
            </span>
            Watch Intro
          </a>
        </div>

        {/* FLOATING SHAPES */}
        <div className="hidden lg:block">
          <img
            src="https://ai-agent.preview.uideck.com/assets/images/hero/shape-right-1.svg"
            className="absolute top-30 right-16 animate-bounce"
            alt=""
          />
          <img
            src="https://ai-agent.preview.uideck.com/assets/images/hero/shape-left-1.svg"
            className="absolute left-[145px] top-[298px] animate-bounce"
            alt=""
          />
          <img
            src="https://ai-agent.preview.uideck.com/assets/images/hero/shape-left-2.svg"
            className="absolute left-16 top-[70px] animate-bounce"
            alt=""
          />
          <img
            src="https://ai-agent.preview.uideck.com/assets/images/hero/shape-right-2.svg"
            className="absolute top-[316px] right-[298px] animate-bounce"
            alt=""
          />
        </div>

        {/* BRANDS */}
        <div className="relative z-30 mx-auto  w-full bg-[linear-gradient(to_bottom,#ffffff,#bc83f2)]">
          <img src="https://ai-agent.preview.uideck.com/assets/images/hero/hero-img.jpg" alt="Hero" className="w-236 mx-auto justify-center items-center rounded-lg shadow-lg  py-5 px-4" />


          <p className="text-center text-white text-lg font-medium mt-55">
            Trusted by worlds largest companies including...
          </p>

          <div className="flex  gap-4 md:gap-6 items-center justify-center px-4 py-6 ">
            {["br-1", "br-2", "br-3", "br-4", "br-5", "br-6", "br-7"].map((item) => (
              <img
                key={item}
                src={`https://ai-agent.preview.uideck.com/assets/images/brands/${item}.svg`}
                className="h-10 w-auto items-center justify-center  transition hover:opacity-100"
                alt=""
              />
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center pb-4 bg-gray-100 space-y-6 px-4">
        <div className="flex flex-col items-center justify-center mt-8 pb-4 bg-gray-100 text-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700">
            Core Features
          </h2>
          <p>
            Unlock the Potential of Innovation. Discover the Advanced AI Tools <br />
            Transforming Your Ideas into Reality with Unmatched Precision and <br /> Intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-4">
          {[
            {
              icon: '/content.svg',
              title: "Seamless Content Creation AI--",
              description: "Let our AI-powered service simplify your content creation process. Start using AI today!"
            },
            {
              icon: '/ideas.svg',
              title: "Your Ideas, Powered by Our Technology--",
              description: "Discover how AI can transform your ideas into captivating content with our high-quality service."
            },
            {
              icon: '/intelligent.svg',
              title: "Intelligent Writing by Powerful AI--",
              description: "Effortlessly access AI-generated content for your blogs, websites, and more with our high-quality, convenient service."
            },
            {
              icon: '/generation.svg',
              title: "AI Generation Made Life--",
              description: "Experience effortless content creation with our AI service. Write less, accomplish more."
            },
            {
              icon: '/ai.svg',
              title: "Premium AI-Generated Content--",
              description: "Get expertly crafted content in no time with our AI service. Where quality meets speed."
            },
            {
              icon: '/writer.svg',
              title: "Super Fast AI Writing Companion--",
              description: "Partner with AI to create content that connects with your audience. Give it a try now."
            }
          ].map((feature, index) => (
            <div key={index} className="core-feature-wrapper bg-gray-100 p-9  rounded-2xl border   border-gray-200 dark:border-white/3 dark:bg-white/5">
              <div className="flex  gap-3 mb-4">

                <div className="core-feature-icon bg-purple-600 rounded-full w-12 h-12 flex items-center  justify-center">
                  <img src={feature.icon} alt="" />
                </div>
              </div>
              <h3 className="mb-4 text-gray-800  dark:text-white/90 font-bold text-xl md:text-2xl max-w-[312px]">
                {feature.title}
              </h3>
              <p className="text-gray-500 max-w-[312px] dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      <section className="min-h-screen flex flex-col items-center justify-center pb-4 bg-white text-center space-y-6 px-4">
        <div className="flex flex-col items-center justify-center mt-4   pb-4 bg-white text-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700">
            All the AI tools you need, at <br />your Fingertips.
          </h2>
          <p>
            Unlock the Potential of Innovation, Discover the Advanced AI Tools Transforming Your <br /> Ideas into Reality with Unmatched Precision and Intelligence.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <div className="border border-gray-300 rounded-full p-2 bg-gray-100 mb-8">
            <div className="flex flex-wrap justify-center">
              {[
                { id: 'text', label: 'Text Generator', icon: '/text1.svg' },
                { id: 'image', label: 'Image Generator', icon: '/image1.svg' },
                { id: 'code', label: 'Code Generator', icon: '/code1.svg' },
                { id: 'video', label: 'Video Generator', icon: '/video1.svg' },
                { id: 'email', label: 'Email Generator', icon: '/email1.svg' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full mx-1 ${activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'bg-gray-100 text-black'
                    }`}
                >
                  <img src={tab.icon} alt="" className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden bg-gray-100 rounded-3xl p-6">
            {activeTab === 'text' && (
              <div className="p-3">
                <img
                  src="https://ai-agent.preview.uideck.com/assets/images/tab-image/tab-image-1.jpg"
                  alt="Text Generator"
                  className="w-full rounded-2xl block"
                />
              </div>
            )}
            {activeTab === 'image' && (
              <div className="p-3">
                <img
                  src="https://ai-agent.preview.uideck.com/assets/images/tab-image/tab-image-2.jpg"
                  alt="Image Generator"
                  className="w-full rounded-2xl block"
                />
              </div>
            )}
            {activeTab === 'code' && (
              <div className="p-3">
                <img
                  src="https://ai-agent.preview.uideck.com/assets/images/tab-image/tab-image-3.jpg"
                  alt="Code Generator"
                  className="w-full rounded-2xl block"
                />
              </div>
            )}
            {activeTab === 'video' && (
              <div className="p-3">
                <img
                  src="https://ai-agent.preview.uideck.com/assets/images/tab-image/tab-image-4.jpg"
                  alt="Video Generator"
                  className="w-full rounded-2xl block"
                />
              </div>
            )}
            {activeTab === 'email' && (
              <div className="p-3">
                <img
                  src="https://ai-agent.preview.uideck.com/assets/images/tab-image/tab-image-5.jpg"
                  alt="Email Generator"
                  className="w-full rounded-2xl block"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90">
            Easiest way to generate text
          </h2>
          <p className="max-w-xl mx-auto mb-6 text-sm text-gray-500 dark:text-gray-400">
            Unlock the Potential of Innovation. Discover the Advanced AI
            Tools Transforming Your Ideas into Reality with Unmatched
            Precision and Intelligence.
          </p>
          <button className="px-6 py-3 text-sm font-medium text-white transition-colors rounded-full bg-purple-500 hover:bg-purple-600">
            Try it now for free
          </button>
        </div>
      </section>
      <section className="bg-gray-900 py-14 md:py-28">
        <div className="wrapper">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="max-w-lg mx-auto mb-3 font-bold text-center text-white dark:text-white/90 text-3xl md:text-4xl">
              The key benefits of using our tools.
            </h2>
            <p className="max-w-2xl mx-auto text-base font-normal leading-6 text-white/50">
              Unlock the Potential of Innovation. Discover the Advanced AI
              Tools Transforming Your Ideas into Reality with Unmatched
              Precision and Intelligence.
            </p>
          </div>
          <div className="max-w-[1008px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6">
                <div className="relative flex flex-col justify-between bg-purple-500 rounded-[20px] p-9 md:p-13">
                  <div className="max-w-sm mb-32 ">
                    <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
                      Craft Professional-Grade Content with AI
                    </h3>
                    <p className="text-base text-white/70">
                      Transform your ideas into groundbreaking realities with
                      advanced AI tools.
                    </p>
                  </div>
                  <div>
                    <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/ind-1.svg" className="absolute left-8 top-[61%] floating-1 animate-bounce" alt="" />
                    <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/ind-2.svg" className="absolute right-28 top-[55%] floating-2 animate-bounce" alt="" />
                    <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/ind-3.svg" className="right-8 absolute bottom-[15%] floating-3 animate-bounce" alt="" />
                    <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/bn-1.svg" className="-mb-8 md:-mb-11" alt="" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 bg-sky-500 rounded-[20px] ">
                <div className="benefits-bg rounded-[20px] p-12 overflow-hidden">
                  <div>
                    <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/bn-2.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold max-w-xs text-white text-2xl md:text-3xl mb-4">
                      Boost your Productivity 10X with our AI agent tools.
                    </h3>
                    <p className="text-base max-w-sm text-white/70">
                      Unlock the Potential of Innovation, Discover the
                      Advanced AI Tools Intelligence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-12">
                <div className="lg:px-12 p-8 bg-[#2D0B70] lg:pb-0 lg:p-12 relative rounded-[20px] h-full lg:flex lg:flex-row justify-between bg-cover flex-col gap-5">
                  <div className="max-w-sm relative z-10">
                    <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
                      Overcome Writer's Block Today
                    </h3>
                    <p className="text-base text-white/70 mb-8">
                      Discover the cutting-edge AI tools that bring your ideas
                      to life with exceptional accuracy.
                    </p>
                    <a href="contact.html" className="font-medium inline-block text-sm text-white rounded-full bg-purple-500 hover:bg-purple-600 transition py-3 px-6">
                      Try it now for Free
                    </a>
                  </div>
                  <div>
                    <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/bn-3.svg" className="hidden lg:block relative z-10" alt="" />
                  </div>
                  <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/blur-shape.png" alt="" className="h-full w-full z-0 absolute top-0 right-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-28 py-14 relative">
        <div className="wrapper">
          <div>
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
                What our users say
              </h2>
              <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
                Unlock the Potential of Innovation. Discover the Advanced AI
                Tools Transforming Your Ideas into Reality with Unmatched
                Precision and Intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  name: "Ralph Edwards",
                  company: "Big Kahuna Burger Ltd",
                  testimonial: "TailAdmin has been a game-changer for our development process. The clean code and intuitive design make it easy to customize and integrate into our projects.",
                  avatar: "https://ai-agent.preview.uideck.com/assets/images/users/user-1.png"
                },
                {
                  name: "Albert Flores",
                  company: "Biffco Enterprises Ltd.",
                  testimonial: "The flexibility and performance of TailAdmin are outstanding. It has significantly reduced our development time and improved our application's user experience.",
                  avatar: "https://ai-agent.preview.uideck.com/assets/images/users/user-2.png"
                },
                {
                  name: "Jenny Wilson",
                  company: "Acme Co.",
                  testimonial: "As a developer, I appreciate the well-structured components and documentation. TailAdmin is a reliable choice for modern web applications.",
                  avatar: "https://ai-agent.preview.uideck.com/assets/images/users/user-3.png"
                },
                {
                  name: "Esther Howard",
                  company: "Barone LLC.",
                  testimonial: "The design system is comprehensive and the code quality is top-notch. TailAdmin has become an essential part of our toolkit.",
                  avatar: "https://ai-agent.preview.uideck.com/assets/images/users/user-4.png"
                },
                {
                  name: "Darlene Robertson",
                  company: "Abstergo Ltd.",
                  testimonial: "Implementing TailAdmin was straightforward, and the results exceeded our expectations. Highly recommended for any React project.",
                  avatar: "https://ai-agent.preview.uideck.com/assets/images/users/user-5.png"
                },
                {
                  name: "Devon Lane",
                  company: "Binford Ltd.",
                  testimonial: "The component library is extensive and the theming options are perfect for our brand. TailAdmin delivers on all fronts.",
                  avatar: "https://ai-agent.preview.uideck.com/assets/images/users/user-6.png"
                },
                {
                  name: "Cameron Williamson",
                  company: "TechCorp Inc.",
                  testimonial: "TailAdmin's responsive design and accessibility features make it ideal for building inclusive web applications.",
                  avatar: "https://ai-agent.preview.uideck.com/assets/images/users/user-1.png"
                },
                {
                  name: "Brooklyn Simmons",
                  company: "Innovate Solutions",
                  testimonial: "The performance optimizations in TailAdmin are impressive. Our app loads faster and runs smoother than ever.",
                  avatar: "https://ai-agent.preview.uideck.com/assets/images/users/user-2.png"
                },
                {
                  name: "Leslie Alexander",
                  company: "FutureTech Labs",
                  testimonial: "TailAdmin provides excellent TypeScript support and modern development practices. It's a pleasure to work with.",
                  avatar: "https://ai-agent.preview.uideck.com/assets/images/users/user-3.png"
                }
              ].slice(0, showAll ? 9 : 6).map((testimonial, index) => (
                <div key={index} className="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                  <div className="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/3 rounded-2xl">
                    <div>
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-base dark:text-white/90">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/3">
                    <p className="text-base leading-6 text-gray-700 dark:text-gray-400">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center relative z-10">
              <button onClick={() => setShowAll(!showAll)} className="inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-6 py-3.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 dark:hover:bg-gray-900 rounded-full shadow-theme-xs hover:bg-gray-50 focus:outline-none">
                <span>{showAll ? 'Show less...' : 'Show more...'}</span>
              </button>
            </div>
          </div>
        </div>
        {!showAll && <div className="white-gradient h-[264px] w-full absolute bottom-0"></div>}
      </section>

<section className="py-14 md:py-28 bg-gray-50 overflow-hidden dark:bg-white/3">
          <div className="wrapper">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
                Start Your Content Creation Journey with AI
              </h2>
              <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
                Collaborate with AI to generate content that resonates with your
                audience, drives and delivers meaningful results across all
                platforms.
              </p>
            </div>

            <div>
              <div className="flex justify-center relative z-30 mt-12">
                <div className="relative flex p-1 bg-white dark:bg-dark-primary rounded-full shadow-theme-xs">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`relative px-6 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                      !isAnnual ? 'bg-gray-800 dark:bg-white/5 text-white' : 'bg-transparent dark:text-gray-400 text-gray-700'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`relative flex items-center pl-6 pr-2 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                      isAnnual ? 'bg-gray-800 dark:bg-white/5 text-white' : 'bg-transparent text-gray-700 dark:text-gray-400'
                    }`}
                  >
                    Annually
                    <span className="ml-2 bg-orange-400 text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="mt-12 z-30 relative space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-6xl lg:mx-auto lg:grid-cols-4">
                  <div className="bg-white dark:bg-dark-primary rounded-[20px] shadow-one">
                    <div className="p-8">
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
                        Free
                      </h2>
                      <p className="flex items-baseline mt-4">
                        <span className="text-4xl font-semibold text-gray-800 dark:text-white/90">$0</span>
                        <span className="ml-1 text-sm font-normal text-gray-500 dark:text-gray-400">Per month</span>
                      </p>
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                        Sed ut perspiciatis unde omnis iste natus ut perspic
                        iatis.
                      </p>
                      <button className="block w-full px-8 py-3.5 dark:bg-dark-primary dark:text-white/90 transition dark:hover:bg-gray-800 dark:border-gray-800 mt-7 text-sm font-medium text-center text-gray-800 cursor-pointer bg-white border border-gray-200 rounded-full hover:bg-gray-50">
                        Try it for free
                      </button>
                    </div>
                    <div className="px-8 pb-7">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="shrink-0 text-gray-500 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Some limited features only
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 text-gray-500 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            400 messaging limits
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className=" text-gray-500 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Limited Projects
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className=" text-gray-500 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            20,000 Words
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-dark-primary relative border-2 border-primary-500 rounded-[20px] shadow-one">
                    <div className="p-8">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
                          Plus plan
                        </h2>
                        <span className="px-2 py-1 text-xs font-medium dark:text-pir rounded-full dark:bg-primary-500/15 bg-primary-50 text-primary-500">
                          Popular
                        </span>
                      </div>
                      <p className="flex items-baseline mt-4">
                        <span className="text-4xl font-semibold text-gray-800 dark:text-white/90">{isAnnual ? '$16' : '$20'}</span>
                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">Per month</span>
                      </p>
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                        Billed at periods under limits, see rates of people who
                        use.
                      </p>
                      <button className="block w-full bg-linear-to-r from-purple-500 to-pink-500 px-8 py-3.5 mt-7 text-sm font-medium text-center text-white rounded-full">
                        Purchase Now
                      </button>
                    </div>
                    <div className="px-8 pb-7">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className=" dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Everything in Free
                          </p>
                        </li>
                        <li className="flex items-start dark:text-gray-400 text-gray-500">
                          <div className="shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            2000 messaging limits
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Unlimited Projects
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Open AI Key Integration
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            80,000 Words
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Consistent support
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-[20px] dark:bg-dark-primary shadow-one">
                    <div className="p-8">
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
                        Pro plan
                      </h2>
                      <p className="flex items-baseline mt-4">
                        <span className="text-4xl font-semibold text-gray-800 dark:text-white/90">{isAnnual ? '$24' : '$30'}</span>
                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">Per month</span>
                      </p>
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                        Billed at periods under limits, see rates of people who
                        use.
                      </p>
                      <button className="block w-full dark:hover:bg-primary-500 transition dark:bg-white/5 hover:bg-gray-900 px-8 py-3.5 mt-6 text-sm font-medium text-center rounded-full text-white bg-gray-700">
                        Purchase Now
                      </button>
                    </div>
                    <div className="px-8 pb-7">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Everything in Free
                          </p>
                        </li>
                        <li className="flex items-start dark:text-gray-400 text-gray-500">
                          <div className="shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            5000 messaging limits
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Unlimited Projects
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Open AI Key Integration
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            1,00,000 Words
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Consistent support
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-[20px] dark:bg-dark-primary shadow-one">
                    <div className="p-8">
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
                        Enterprise
                      </h2>
                      <p className="flex items-baseline mt-4">
                        <span className="text-4xl font-semibold text-gray-800 dark:text-white/90">Let's talk</span>
                      </p>
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                        Sed ut perspiciatis unde omnis iste natus ut perspic
                        iatis.
                      </p>
                      <button className="block dark:hover:bg-primary-500 w-full px-8 transition dark:bg-white/5 hover:bg-gray-900 py-3.5 mt-6 text-sm font-medium text-center rounded-full text-white bg-gray-700">
                        Contact Sales
                      </button>
                    </div>
                    <div className="px-8 pb-7">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Everything in Free
                          </p>
                        </li>
                        <li className="flex items-start dark:text-gray-400 text-gray-500">
                          <div className="shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            5000 messaging limits
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Unlimited Projects
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                            <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                              Open AI Key Integration
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="shrink-0 dark:text-gray-400 text-gray-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Unlimited Words
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="shrink-0 dark:text-gray-400 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                              <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </div>
                          <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                            Consistent support
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute hidden lg:block top-0 z-10">
                  <svg width="1099" height="960" viewBox="0 0 1099 960" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2" filter="url(#filter0_f_9282_10364)">
                      <circle cx="479.835" cy="480.254" r="179.665" fill="#FF58D5"></circle>
                    </g>
                    <g opacity="0.1" filter="url(#filter1_f_9282_10364)">
                      <circle cx="619.165" cy="480.254" r="179.665" fill="#4E6EFF"></circle>
                    </g>
                    <defs>
                      <filter id="filter0_f_9282_10364" x="0.169678" y="0.589355" width="959.33" height="959.33" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_9282_10364"></feGaussianBlur>
                      </filter>
                      <filter id="filter1_f_9282_10364" x="139.5" y="0.589355" width="959.33" height="959.33" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_9282_10364"></feGaussianBlur>
                      </filter>
                    </defs>
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-28">
          <div className="wrapper">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
                Frequently Asked Questions
              </h2>
              <p className="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
                Answered all frequently asked questions, Still confused? feel
                free contact with us
              </p>
            </div>
            <div className="max-w-[600px] mx-auto">
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => toggleFAQ(1)}
                  >
                    <span className="text-lg font-medium text-gray-800 dark:text-white/90">Do I get free updates?</span>
                    <span className="shrink-0 ml-6">
                      {activeFAQ === 1 ? (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3094)">
                            <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="#98A2B3"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3094">
                              <rect width="24" height="24" fill="white" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3101)">
                            <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3101">
                              <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </span>
                  </button>
                  {activeFAQ === 1 && (
                    <div className="mt-5">
                      <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean luctus magna quis tellus euismod, eget pharetra leo
                        mollis. Donec eget lacus non elit blandit pharetra vitae
                        volutpat libero.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 2 */}
                <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => toggleFAQ(2)}
                  >
                    <span className="text-lg font-medium text-gray-800 dark:text-white/90">What does the number of "Projects" refer to?</span>
                    <span className="shrink-0 ml-6">
                      {activeFAQ === 2 ? (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3094)">
                            <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="currentColor"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3094">
                              <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3101)">
                            <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3101">
                              <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </span>
                  </button>
                  {activeFAQ === 2 && (
                    <div className="mt-4">
                      <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
                        The number of "Projects" refers to the total number of
                        separate workspaces you can create and manage within your
                        account. Each project can have its own settings, team
                        members, and resources.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 3 */}
                <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => toggleFAQ(3)}
                  >
                    <span className="text-lg font-medium text-gray-800 dark:text-white">Can I upgrade to a higher plan?</span>
                    <span className="shrink-0 ml-6">
                      {activeFAQ === 3 ? (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3094)">
                            <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="currentColor"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3094">
                              <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3101)">
                            <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3101">
                              <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </span>
                  </button>
                  {activeFAQ === 3 && (
                    <div className="mt-4">
                      <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
                        Yes, you can upgrade to a higher plan at any time. When
                        you upgrade, you'll be charged the prorated difference for
                        the remainder of your current billing cycle. Your new
                        features will be available immediately after upgrading.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 4 */}
                <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => toggleFAQ(4)}
                  >
                    <span className="text-lg font-medium text-gray-800 dark:text-white/90">What does "Unlimited Projects" mean?</span>
                    <span className="shrink-0 ml-6">
                      {activeFAQ === 4 ? (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3094)">
                            <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="currentColor"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3094">
                              <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3101)">
                            <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3101">
                              <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </span>
                  </button>
                  {activeFAQ === 4 && (
                    <div className="mt-4">
                      <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
                        "Unlimited Projects" means you can create as many projects
                        as you need without any restrictions. This allows you to
                        organize your work efficiently without worrying about
                        hitting a project limit.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 5 */}
                <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => toggleFAQ(5)}
                  >
                    <span className="text-lg font-medium text-gray-800 dark:text-white/90">How can I add Open AI Key?</span>
                    <span className="shrink-0 ml-6">
                      {activeFAQ === 5 ? (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3094)">
                            <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="currentColor"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3094">
                              <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_9283_3101)">
                            <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_9283_3101">
                              <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </span>
                  </button>
                  {activeFAQ === 5 && (
                    <div className="mt-4">
                      <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
                        To add your OpenAI API key, go to your account settings
                        and navigate to the "API Keys" section. Click on "Add New
                        Key", paste your OpenAI API key, and save your changes.
                        The key will be securely stored and used for all
                        AI-powered features.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
<footer className="relative overflow-hidden bg-gray-900">
        <span className="absolute top-0 -translate-x-1/2 left-1/2">
          <svg width="1260" height="457" viewBox="0 0 1260 457" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_11105_867)">
              <circle cx="630" cy="-173.299" r="230" fill="#3B2EFF"></circle>
            </g>
            <defs>
              <filter id="filter0_f_11105_867" x="0" y="-803.299" width="1260" height="1260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_11105_867"></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </span>
        <div className="relative z-10 py-16 xl:py-24">
          <div className="container px-5 mx-auto sm:px-7">
            <div className="grid gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-3 xl:col-span-4">
                <div>
                  <a href="index.html" className="block mb-6">
                    <img src="https://ai-agent.preview.uideck.com/assets/images/logo-white.svg" alt="" />
                  </a>
                  <p className="block text-sm text-gray-400 mb-9">
                    Create Smarter, Faster, and Effortless <br /> AI Tools, Products and Startups with AI Agent - AI UI Kit.                  </p>
                  <div className="flex">
                    <a href="https://www.linkedin.com/company/pimjo/posts/?feedView=all" target="_blank" className="text-gray-400 hover:text-white/80 size-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clip-path="url(#clip0_11105_879)">
                          <path d="M13.5447 3.68965C12.5249 3.22173 11.4313 2.87699 10.2879 2.67954C10.2671 2.67573 10.2463 2.68525 10.2356 2.7043C10.0949 2.95444 9.93915 3.28077 9.83006 3.53727C8.60027 3.35316 7.37679 3.35316 6.17221 3.53727C6.0631 3.27507 5.90166 2.95444 5.76038 2.7043C5.74966 2.68589 5.72886 2.67636 5.70803 2.67954C4.56527 2.87636 3.47171 3.2211 2.45129 3.68965C2.44246 3.69346 2.43488 3.69982 2.42986 3.70806C0.355594 6.80697 -0.212634 9.82971 0.0661201 12.815C0.0673814 12.8296 0.0755799 12.8435 0.086932 12.8524C1.45547 13.8574 2.78114 14.4676 4.08219 14.872C4.10301 14.8784 4.12507 14.8707 4.13832 14.8536C4.44608 14.4333 4.72043 13.9902 4.95565 13.5241C4.96953 13.4968 4.95628 13.4645 4.92791 13.4537C4.49275 13.2886 4.0784 13.0873 3.67982 12.8588C3.64829 12.8404 3.64577 12.7953 3.67477 12.7737C3.75865 12.7108 3.84255 12.6454 3.92264 12.5794C3.93713 12.5674 3.95732 12.5648 3.97435 12.5724C6.59286 13.7679 9.4277 13.7679 12.0153 12.5724C12.0323 12.5642 12.0525 12.5667 12.0677 12.5788C12.1478 12.6448 12.2316 12.7108 12.3161 12.7737C12.3451 12.7953 12.3433 12.8404 12.3117 12.8588C11.9131 13.0918 11.4988 13.2886 11.063 13.453C11.0346 13.4638 11.022 13.4968 11.0359 13.5241C11.2762 13.9895 11.5505 14.4327 11.8526 14.853C11.8652 14.8707 11.8879 14.8784 11.9087 14.872C13.2161 14.4676 14.5417 13.8574 15.9103 12.8524C15.9223 12.8435 15.9298 12.8302 15.9311 12.8156C16.2647 9.36431 15.3723 6.36636 13.5655 3.7087C13.5611 3.69982 13.5535 3.69346 13.5447 3.68965ZM5.34668 10.9973C4.55833 10.9973 3.90876 10.2735 3.90876 9.38464C3.90876 8.49578 4.54574 7.77202 5.34668 7.77202C6.15392 7.77202 6.79721 8.50214 6.78459 9.38464C6.78459 10.2735 6.14761 10.9973 5.34668 10.9973ZM10.6632 10.9973C9.87484 10.9973 9.22526 10.2735 9.22526 9.38464C9.22526 8.49578 9.86222 7.77202 10.6632 7.77202C11.4704 7.77202 12.1137 8.50214 12.1011 9.38464C12.1011 10.2735 11.4704 10.9973 10.6632 10.9973Z" fill="currentColor" fill-opacity="0.8"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_11105_879">
                            <rect width="16" height="16" fill="currentColor" transform="translate(0 0.919434)"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href="https://x.com/PimjoHQ" target="_blank" className="text-gray-400 hover:text-white/80 size-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M12.2176 2.18848H14.4666L9.55323 7.80414L15.3334 15.4458H10.8076L7.26277 10.8112L3.20671 15.4458H0.956369L6.2117 9.43921L0.666748 2.18848H5.30749L8.51168 6.4247L12.2176 2.18848ZM11.4283 14.0997H12.6745L4.63034 3.4639H3.29306L11.4283 14.0997Z" fill="currentColor"></path>
                      </svg>
                    </a>
                    <a href="https://github.com/PIMJO" target="_blank" className="text-gray-400 hover:text-white/80 size-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <g clip-path="url(#clip0_11105_885)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00009 1.25293C6.10091 1.25392 4.264 1.92657 2.81783 3.15061C1.37166 4.37465 0.410521 6.07027 0.106282 7.93426C-0.197957 9.79825 0.174536 11.7091 1.15717 13.325C2.13979 14.941 3.66848 16.1568 5.46987 16.7549C5.86729 16.8287 6.01698 16.5824 6.01698 16.3729C6.01698 16.1635 6.00903 15.5563 6.00638 14.8924C3.78085 15.3732 3.31057 13.9533 3.31057 13.9533C2.9476 13.0312 2.42301 12.7889 2.42301 12.7889C1.69706 12.2962 2.47733 12.3054 2.47733 12.3054C3.28143 12.3621 3.70402 13.1261 3.70402 13.1261C4.41672 14.3418 5.57585 13.9901 6.03155 13.7847C6.10309 13.2696 6.31107 12.9193 6.54025 12.7204C4.76247 12.5202 2.89461 11.8378 2.89461 8.78988C2.88359 7.9994 3.1786 7.23496 3.71859 6.65472C3.63646 6.4545 3.36224 5.64575 3.79675 4.54722C3.79675 4.54722 4.46839 4.33383 5.99712 5.36256C7.30836 5.00601 8.69183 5.00601 10.0031 5.36256C11.5305 4.33383 12.2008 4.54722 12.2008 4.54722C12.6366 5.64312 12.3624 6.45187 12.2803 6.65472C12.822 7.23506 13.1176 8.00083 13.1056 8.79251C13.1056 11.8471 11.2337 12.5202 9.45331 12.7164C9.73945 12.964 9.99512 13.4475 9.99512 14.1903C9.99512 15.2546 9.98585 16.1108 9.98585 16.3729C9.98585 16.585 10.1302 16.8326 10.5356 16.7549C12.3372 16.1567 13.866 14.9407 14.8487 13.3245C15.8313 11.7082 16.2036 9.79713 15.899 7.93296C15.5944 6.0688 14.6328 4.37317 13.1861 3.14933C11.7395 1.9255 9.90215 1.25329 8.00274 1.25293H8.00009Z" fill="currentColor"></path>
                          <path d="M3.02954 12.6743C3.01232 12.7139 2.94873 12.7257 2.89707 12.6981C2.84541 12.6704 2.80699 12.619 2.82554 12.5782C2.84408 12.5374 2.90635 12.5268 2.95801 12.5545C3.00967 12.5821 3.04941 12.6348 3.02954 12.6743Z" fill="currentColor"></path>
                          <path d="M3.35423 13.0339C3.3268 13.0476 3.29541 13.0514 3.26545 13.0447C3.23548 13.038 3.2088 13.0211 3.18997 12.997C3.13831 12.9417 3.1277 12.8653 3.16744 12.831C3.20719 12.7968 3.27873 12.8126 3.33039 12.8679C3.38205 12.9232 3.39398 12.9996 3.35423 13.0339Z" fill="currentColor"></path>
                          <path d="M3.66958 13.4908C3.62056 13.525 3.5371 13.4908 3.49074 13.4223C3.47791 13.41 3.46772 13.3953 3.46075 13.379C3.45379 13.3627 3.4502 13.3452 3.4502 13.3275C3.4502 13.3098 3.45379 13.2922 3.46075 13.2759C3.46772 13.2596 3.47791 13.2449 3.49074 13.2326C3.53975 13.1997 3.62321 13.2326 3.66958 13.2998C3.71594 13.367 3.71727 13.4565 3.66958 13.4908Z" fill="currentColor"></path>
                          <path d="M4.09725 13.9334C4.05353 13.9822 3.96478 13.969 3.89192 13.9031C3.81906 13.8373 3.80183 13.7477 3.84555 13.7003C3.88926 13.6529 3.97802 13.666 4.05353 13.7306C4.12904 13.7951 4.14361 13.886 4.09725 13.9334Z" fill="currentColor"></path>
                          <path d="M4.69753 14.1917C4.67766 14.2536 4.58758 14.2813 4.4975 14.2549C4.40742 14.2286 4.3478 14.1548 4.36502 14.0916C4.38225 14.0284 4.47365 13.9994 4.56506 14.0284C4.65646 14.0573 4.71475 14.1271 4.69753 14.1917Z" fill="currentColor"></path>
                          <path d="M5.35189 14.2361C5.35189 14.3006 5.27771 14.3559 5.18233 14.3572C5.08695 14.3586 5.00879 14.3059 5.00879 14.2413C5.00879 14.1768 5.08297 14.1215 5.17835 14.1201C5.27373 14.1188 5.35189 14.1702 5.35189 14.2361Z" fill="currentColor"></path>
                          <path d="M5.96118 14.1349C5.9731 14.1994 5.90687 14.2666 5.81149 14.2824C5.71611 14.2982 5.63265 14.26 5.62073 14.1968C5.60881 14.1336 5.67769 14.0651 5.77042 14.0479C5.86315 14.0308 5.94926 14.0703 5.96118 14.1349Z" fill="currentColor"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_11105_885">
                            <rect width="16" height="16" fill="currentColor" transform="translate(0 0.919434)"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/PimjoHQ" target="_blank" className="text-gray-400 hover:text-white/80 size-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <g clip-path="url(#clip0_11105_895)">
                          <path d="M10.5 11.0444H12.375L13.125 8.04443H10.5V6.54443C10.5 5.7724 10.5 5.04443 12 5.04443H13.125V2.52451C12.8807 2.49207 11.9573 2.41943 10.9822 2.41943C8.9463 2.41943 7.5 3.66208 7.5 5.94422V8.04443H5.25V11.0444H7.5V17.4194H10.5V11.0444Z" fill="currentColor"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_11105_895">
                            <rect width="18" height="18" fill="currentColor" transform="translate(0 0.919434)"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 xl:col-span-5">
                <div className="grid sm:grid-cols-3 gap-7">
                  <div>
                    <span className="block mb-6 text-sm text-gray-400">Services</span>
                    <nav className="flex flex-col space-y-3">
                      <a href="#" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Status
                      </a>
                      <a href="pricing.html" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Pricing
                      </a>
                      <a href="#" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        FAQ
                      </a>
                      <a href="#" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Help Docs
                      </a>
                      <a href="privacy.html" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Privacy Policy
                      </a>
                    </nav>
                  </div>
                  <div>
                    <span className="block mb-6 text-sm text-gray-400">Features</span>
                    <nav className="flex flex-col space-y-3">
                      <a href="#" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        HTML File Upload
                      </a>
                      <a href="#" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        HTML website hosting
                      </a>
                      <a href="#" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Free Image Hosting
                      </a>
                      <a href="#" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Upload PDF Online
                      </a>
                      <a href="#" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Free Zip file hosting
                      </a>
                    </nav>
                  </div>
                  <div>
                    <span className="relative block mb-6 text-sm text-gray-400">Account</span>
                    <nav className="flex flex-col space-y-3">
                      <a href="signin.html" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Login
                      </a>
                      <a href="signup.html" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Sign Up
                      </a>
                      <a href="forgot-password.html" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Reset Password
                      </a>
                      <a href="contact.html" className="text-sm font-normal text-gray-400 transition hover:text-white">
                        Support
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div>
                  <span className="block mb-6 text-sm text-gray-400">Stay In Touch</span>
                  <p className="block mb-5 text-sm text-gray-400">
                    subscribe now for exclusive insights and offers!
                  </p>
                  <form>
                    <div className="flex flex-col items-center gap-2 w-full sm:max-w-64">
                      <input type="text" placeholder="Enter your email" className="w-full h-12 p-4 text-sm text-white border border-gray-700 rounded-full placeholder:text-center placeholder:text-gray-400 placeholder:text-sm text-center placeholder:font-normal focus:outline-0" />
                      <button className="w-full px-6 py-3 text-sm font-medium text-white transition rounded-full cursor-pointer bg-purple-500 hover:bg-purple-600">
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container relative z-10 px-5 mx-auto sm:px-7">
            <div className="py-5 text-center">
              <p className="text-sm text-gray-500">
                © 2025 AI Agent - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>









    </>
  );
}
