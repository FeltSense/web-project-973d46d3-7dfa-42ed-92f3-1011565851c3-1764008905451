export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl"></div>
  </div>

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left content */}
      <div className="text-center lg:text-left space-y-6 sm:space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-blue-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-700">AI-Powered Data Analysis</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
          Talk to your
          <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            spreadsheets
          </span>
          <span className="block mt-2 text-slate-900">like a pro</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Transform natural language into powerful formulas, stunning charts, and complex pivot tables instantly. 
          <span className="block mt-2 font-medium text-slate-700">No spreadsheet expertise required.</span>
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200 shadow-sm">
            <span className="text-sm font-medium text-slate-700">⚡ Instant Formulas</span>
          </div>
          <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200 shadow-sm">
            <span className="text-sm font-medium text-slate-700">📊 Auto Charts</span>
          </div>
          <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200 shadow-sm">
            <span className="text-sm font-medium text-slate-700">🎯 Smart Pivots</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button 
            onClick={() => console.log('Start free trial clicked')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>
          
          <button 
            onClick={() => console.log('Watch demo clicked')}
            className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:bg-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Social proof */}
        <div className="pt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start text-sm text-slate-600">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white shadow-md"></div>
          </div>
          <p>
            <span className="font-semibold text-slate-900">12,000+ analysts</span> already saving 10+ hours per week
          </p>
        </div>
      </div>

      {/* Right content - Interactive demo mockup */}
      <div className="relative lg:ml-8">
        
        {/* Floating card with chat interface */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <span className="ml-auto text-white/90 text-sm font-medium">SheetAI Copilot</span>
            </div>
          </div>

          {/* Chat content */}
          <div className="p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-hidden">
            
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-5 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[85%]">
                <p className="text-sm leading-relaxed">Calculate average revenue by product category and show top 5 performers</p>
              </div>
            </div>

            {/* AI response with typing indicator */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md flex-shrink-0">
                AI
              </div>
              <div className="bg-slate-100 px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%]">
                <p className="text-sm text-slate-700 mb-3">I&apos;ll help you with that! Here&apos;s what I created:</p>
                
                {/* Formula preview */}
                <div className="bg-white rounded-lg p-3 mb-3 border border-slate-200 font-mono text-xs text-slate-800 overflow-x-auto">
                  =AVERAGEIF(B:B, "Category", C:C)
                </div>

                {/* Mini chart visualization */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded" style={{width: '85%'}}></div>
                    <span className="text-xs text-slate-600">$45K</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded" style={{width: '72%'}}></div>
                    <span className="text-xs text-slate-600">$38K</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded" style={{width: '65%'}}></div>
                    <span className="text-xs text-slate-600">$34K</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded" style={{width: '58%'}}></div>
                    <span className="text-xs text-slate-600">$31K</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-gradient-to-r from-rose-500 to-rose-600 rounded" style={{width: '50%'}}></div>
                    <span className="text-xs text-slate-600">$27K</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-3">✨ Formula and chart added to your sheet</p>
              </div>
            </div>

            {/* Input area */}
            <div className="pt-4">
              <div className="bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3">
                <input 
                  type="text" 
                  placeholder="Describe what you need..."
                  className="flex-1 bg-transparent text-slate-700 placeholder-slate-400 outline-none text-sm"
                  readOnly
                />
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2 rounded-lg hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating feature cards */}
        <div className="hidden lg:block absolute -right-8 top-12 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 px-4 py-3 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-white">
              ✓
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Formula Generated</p>
              <p className="text-xs text-slate-600">0.8 seconds</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute -left-8 bottom-24 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 px-4 py-3 animate-float delay-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
              📊
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Chart Created</p>
              <p className="text-xs text-slate-600">Instantly</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Feature highlights strip */}
    <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      
      <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
          💬
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Natural Language Formulas</h3>
        <p className="text-sm text-slate-600 leading-relaxed">Just describe what you need in plain English. Our AI translates it into perfect formulas instantly.</p>
      </div>

      <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
          📈
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Visualizations</h3>
        <p className="text-sm text-slate-600 leading-relaxed">Generate beautiful, professional charts and graphs in seconds. No manual configuration needed.</p>
      </div>

      <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
          ⚡
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Pivot Tables</h3>
        <p className="text-sm text-slate-600 leading-relaxed">Complex data analysis made simple. Create sophisticated pivot tables with a single command.</p>
      </div>

    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .delay-300 {
      animation-delay: 0.3s;
    }
    .delay-700 {
      animation-delay: 0.7s;
    }
  `}</style>
</div>
  );
}