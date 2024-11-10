export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            AI-Powered Translation
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Break language barriers with advanced neural machine translation
          </p>
        </div>
      </div>
    </div>
  );
}