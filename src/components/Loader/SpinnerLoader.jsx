const SpinnerLoader = ({ size }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div
      className={`${sizeClasses[size]} border-[#C27539] border-4 border-t-transparent rounded-full animate-spin`}
    />
  );
};

export default SpinnerLoader;
