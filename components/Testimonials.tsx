import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
  {/* Background decoration */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto relative">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Loved by data teams worldwide
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        From frustrated to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">fluent in data</span>
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        See how teams are turning natural language into powerful insights
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {/* Testimonial 1 - Featured Large */}
      <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-yellow-300" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-lg leading-relaxed mb-6 font-medium">
          "I went from spending 3 hours building pivot tables to typing &apos;show me sales by region and product category&apos; and getting exactly what I needed in 15 seconds. Our weekly reporting that took half a day now takes 20 minutes. This is legitimately game-changing."
        </p>
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-white/20">
            <Image 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" 
              width={56} 
              height={56} 
              alt="Sarah Chen"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-white">Sarah Chen</p>
            <p className="text-blue-100 text-sm">Operations Manager, TechFlow Inc</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-4 leading-relaxed">
          "Finally cracked VLOOKUP after years of struggling! Just asked &apos;match customer names with their purchase history&apos; and boom - perfect formula. Saved me from bothering our data team 5+ times a day."
        </p>
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
              width={48} 
              height={48} 
              alt="Marcus Williams"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-slate-900">Marcus Williams</p>
            <p className="text-slate-500 text-sm">Account Executive</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-4 leading-relaxed">
          "Generated a 12-chart dashboard in under 10 minutes that would&apos;ve taken me 2 days manually. The AI understood &apos;show trends, outliers, and correlations&apos; perfectly. My VP thought I hired a consultant."
        </p>
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" 
              width={48} 
              height={48} 
              alt="Priya Patel"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-slate-900">Priya Patel</p>
            <p className="text-slate-500 text-sm">Marketing Analyst</p>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-700">
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-100 mb-4 leading-relaxed text-lg">
          "Our finance team reduced month-end close from 5 days to 2 days. The AI handles complex SUMIFS, INDEX-MATCH combinations, and conditional formatting that used to require our Excel wizard. Now everyone on the team can do advanced analysis independently. ROI paid for itself in week one."
        </p>
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-600">
            <Image 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" 
              width={48} 
              height={48} 
              alt="James Rodriguez"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-white">James Rodriguez</p>
            <p className="text-slate-300 text-sm">CFO, GrowthScale Ventures</p>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">87%</div>
          <div className="text-slate-600 text-sm">Time saved on reports</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">12k+</div>
          <div className="text-slate-600 text-sm">Formulas generated daily</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">4.9/5</div>
          <div className="text-slate-600 text-sm">Average rating</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">500+</div>
          <div className="text-slate-600 text-sm">Teams using daily</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}