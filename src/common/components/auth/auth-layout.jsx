export default function AuthLayout({ children, title, subtitle, imageSrc }) {
  return (
    <main className="h-screen  flex items-center justify-center">
      {/* Left Image */}
      <div className="hidden lg:flex w-full lg:max-w-1/2 h-full max-h-full">
        <div className="max-h-full w-full max-w-full h-full">
          <img
            src={imageSrc}
            alt={title}
            className="max-w-full w-full min-h-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full max-w-xl mx-auto ">
        <div className="mb-6 flex flex-col justify-center text-center items-center">
          {title && <h1 className="text-2xl font-semibold mb-4">{title}</h1>}
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>

        {children}
      </div>
    </main>
  );
}
