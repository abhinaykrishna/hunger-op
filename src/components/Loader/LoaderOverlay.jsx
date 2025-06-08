const LoaderOverlay = ({ isVisible, children, backdrop = 'dark', blur = true, className = '' }) => {
  const backdropClasses = {
    dark: 'bg-black/50',
    light: 'bg-white/70',
    transparent: 'bg-transparent',
    root: 'bg-[#0e1e32]',
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
      fixed inset-0 z-50 flex items-center justify-center
      ${backdropClasses[backdrop]}
      ${blur ? 'backdrop-blur-sm' : ''}
      transition-all duration-300 ease-in-out
      ${className}
    `}
    >
      <div className='flex flex-col items-center space-y-4'>{children}</div>
    </div>
  );
};

export default LoaderOverlay;
