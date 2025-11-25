import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function Dropdown({ label, items }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
        {label}
        <ChevronDownIcon className="w-4 h-4" />
      </MenuButton>

      <MenuItems className="absolute left-0 mt-2 w-40 origin-top-left bg-white border border-gray-200 rounded-md shadow-md focus:outline-none z-50">
        <div className="py-1">
          {items.map((item) => (
            <MenuItem key={item.label}>
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
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
                { label: "Text Generator", href: "/product-1" },
                { label: "Image Generator", href: "/product-2" },
                { label: "Code Generator", href: "/product-3" },
                { label: "Video Generator", href: "/product-4" },
                { label: "Email Generator", href: "/product-5" },
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
            <button className=" text-gray-700 hover:text-purple-500 px-6 py-3 font-semibold   transition">
              Sign In
            </button>

            <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition">
              Get Started Free
            </button>
          </nav>


          <button className="md:hidden text-gray-700 focus:outline-none">
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
      <section className="min-h-screen flex flex-col items-center justify-center mt-42 pb-12 bg-white text-center space-y-6 px-4">

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
            className="absolute top-30 right-16 animate-pulse"
            alt=""
          />
          <img
            src="https://ai-agent.preview.uideck.com/assets/images/hero/shape-left-1.svg"
            className="absolute left-[145px] top-[298px] animate-pulse"
            alt=""
          />
          <img
            src="https://ai-agent.preview.uideck.com/assets/images/hero/shape-left-2.svg"
            className="absolute left-16 top-[70px] animate-pulse"
            alt=""
          />
          <img
            src="https://ai-agent.preview.uideck.com/assets/images/hero/shape-right-2.svg"
            className="absolute top-[316px] right-[298px] animate-pulse"
            alt=""
          />
        </div>

        <div className="w-236 bg-linear-to-br relative mt-20 p-0 flex justify-center items-center">
          <img
            src="https://ai-agent.preview.uideck.com/assets/images/hero/hero-img.jpg"
            alt=""
            className="w-236 rounded-2xl"
          />
        </div>

        {/* BRANDS */}
        <div className="relative z-30 mx-auto m-0 p-0 w-full bg-linear-to-br from-purple-500 to-white">
          <p className="text-center text-white text-lg font-medium mt-4">
            Trusted by worlds largest companies including...
          </p>

          <div className="flex flex-wrap justify-center items-center gap-7 md:gap-14 mt-10">
            {["br-1", "br-2", "br-3", "br-4", "br-5", "br-6", "br-7"].map((item) => (
              <img
                key={item}
                src={`https://ai-agent.preview.uideck.com/assets/images/brands/${item}.svg`}
                className="transition hover:opacity-100"
                alt=""
              />
            ))}
          </div>
        </div>
      </section>

<section className="min-h-screen flex flex-col items-center justify-center mt-0 pb-12 bg-white text-center space-y-6 px-4">
  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700">
Core Features
  </h2>
  <p>
    Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.
  </p>


</section>



    </>
  );
}
