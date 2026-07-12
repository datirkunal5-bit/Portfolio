export default function PageContainer({ children, className = '' }) {
  return (
    <div className={`mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24 ${className}`}>
      {children}
    </div>
  );
}
