export default function Services() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 7H7v6h6V7z"/>
          <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
        </svg>
        Supercharge Your Spreadsheets
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
        Turn Words Into{&apos; &apos;}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Data Magic
        </span>
      </h2>
      <p className="text-lg md:text-xl text-slate-600">
        No formulas to memorize. No complex menus. Just tell our AI what you need, and watch your data come to life.
      </p>
    </div>

    {/* Services Grid - Asymmetric Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
      
      {/* Service 1 - Large Featured */}
      <div className="lg:col-span-7 group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Natural Language Formula Generation
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Stop wrestling with complex syntax. Just type "calculate the average sales for Q3" and get the perfect formula instantly. Works with VLOOKUP, SUMIFS, array formulas, and everything in between.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">VLOOKUP</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">SUMIFS</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Array Formulas</span>
              </div>
            </div>
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                  <p className="text-sm text-slate-600 mb-2">You type:</p>
                  <p className="text-blue-600 font-mono text-sm">"Show me top 5 products"</p>
                </div>
                <div className="flex items-center justify-center my-2">
                  <svg className="w-6 h-6 text-purple-500 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-slate-600 mb-2">AI generates:</p>
                  <p className="text-green-600 font-mono text-xs break-all">=LARGE(B:B,ROW(1:5))</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Vertical Card */}
      <div className="lg:col-span-5 group relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        <div className="relative p-8 md:p-10 h-full flex flex-col">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Instant Chart Creation
          </h3>
          <p className="text-purple-100 text-lg mb-6 leading-relaxed flex-1">
            "Show me a bar chart comparing sales by region" — done in seconds. Beautiful, publication-ready visualizations without touching a single chart menu.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">12</div>
              <div className="text-purple-200 text-sm">Chart Types</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">&lt;2s</div>
              <div className="text-purple-200 text-sm">Generation</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Service 3 - Horizontal Card */}
      <div className="lg:col-span-5 group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8 md:p-10 h-full flex flex-col">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 010 2H6v2a1 1 0 01-2 0V5zM4 13a1 1 0 011-1h2a1 1 0 110 2H5a1 1 0 01-1-1zm6-8a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm6 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-6 6a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm6 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-10 6a1 1 0 011-1h2a1 1 0 110 2H5a1 1 0 01-1-1zm6 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm6 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Automated Pivot Tables
          </h3>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed flex-1">
            Create complex pivot tables in plain English. "Break down revenue by product category and quarter" — instantly organized, perfectly formatted, ready to present.
          </p>
          <div className="flex items-center gap-3 text-emerald-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="font-medium">Zero configuration needed</span>
          </div>
        </div>
      </div>

      {/* Service 4 - Large Featured with Image */}
      <div className="lg:col-span-7 group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Smart Analysis Suggestions
              </h3>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Our AI doesn&apos;t just follow orders — it thinks ahead. Get proactive insights like "I noticed your sales dipped in March, want to see a trend analysis?" or "These two columns might correlate, should I check?"
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-slate-300">Anomaly detection alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-slate-300">Correlation recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-slate-300">Trend forecasting</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-56 flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="space-y-3">
                    <div className="bg-orange-500/20 backdrop-blur-sm rounded-lg p-3 border border-orange-400/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <span className="text-orange-300 text-xs font-medium">INSIGHT</span>
                      </div>
                      <p className="text-white text-sm">Sales down 15% vs last month</p>
                    </div>
                    <div className="bg-pink-500/20 backdrop-blur-sm rounded-lg p-3 border border-pink-400/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <span className="text-pink-300 text-xs font-medium">SUGGESTION</span>
                      </div>
                      <p className="text-white text-sm">Compare with competitor data?</p>
                    </div>
                    <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-3 border border-purple-400/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <span className="text-purple-300 text-xs font-medium">FORECAST</span>
                      </div>
                      <p className="text-white text-sm">Projected Q4: +22% growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl">
        <div className="text-left">
          <p className="text-white font-semibold text-lg mb-1">Ready to work smarter, not harder?</p>
          <p className="text-blue-100 text-sm">Join thousands who&apos;ve ditched formula frustration</p>
        </div>
        <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
          Start Free Trial
        </button>
      </div>
    </div>
  </div>
</section>
  );
}