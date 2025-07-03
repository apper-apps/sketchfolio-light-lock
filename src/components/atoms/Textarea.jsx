const Textarea = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  rows = 4,
  className = '',
  ...props 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-primary">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 border-primary/20 focus:border-accent focus:outline-none transition-colors duration-200 placeholder-primary/50 resize-none ${
          error ? 'border-error focus:border-error' : ''
        }`}
        required={required}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-error">{error}</p>
      )}
    </div>
  );
};

export default Textarea;