import React, { useState } from 'react';

// Simple utility function to combine class names
const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

const countries: Country[] = [
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: 'PT' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: 'ES' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: 'FR' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: 'US' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: 'BR' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: 'DE' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: 'IT' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: 'GB' },
];

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string, country: Country) => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value = '',
  onChange,
  placeholder = '912 345 678',
  className
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(value);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    onChange?.(phoneNumber, country);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPhoneNumber(newValue);
    onChange?.(newValue, selectedCountry);
  };

  const formatPhoneNumber = (number: string) => {
    // Basic formatting for demonstration
    const cleaned = number.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`;
    }
    return number;
  };

  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <div className="flex bg-phone-input border border-phone-input-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-phone-input-focus focus-within:ring-offset-2 transition-all duration-200">
        {/* Country Code Dropdown */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-3 bg-phone-dropdown hover:bg-phone-dropdown-hover transition-colors duration-200 border-r border-phone-input-border focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="w-6 h-4 bg-phone-flag rounded-sm flex items-center justify-center text-xs font-bold text-phone-flag-foreground">
              {selectedCountry.flag}
            </div>
            <span className="text-sm font-medium text-foreground">
              {selectedCountry.dialCode}
            </span>
            <svg 
              className={cn(
                "w-4 h-4 transition-transform duration-200 text-muted-foreground",
                isDropdownOpen && "rotate-180"
              )}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {countries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  className="w-full flex items-center gap-3 px-3 py-2 hover:bg-phone-dropdown-hover transition-colors duration-150 text-left"
                  onClick={() => handleCountrySelect(country)}
                >
                  <div className="w-6 h-4 bg-phone-flag rounded-sm flex items-center justify-center text-xs font-bold text-phone-flag-foreground">
                    {country.flag}
                  </div>
                  <span className="text-sm text-foreground">{country.name}</span>
                  <span className="text-sm text-muted-foreground ml-auto">
                    {country.dialCode}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <div className="flex-1 relative">
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder={placeholder}
            className="w-full px-3 py-3 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default PhoneInput;
export { PhoneInput };