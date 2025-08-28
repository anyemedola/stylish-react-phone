import React, { useState } from 'react';
import * as S from './styles';

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
  className,
  error,
  helperText
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
    <S.PhoneInputContainer className={className}>
      <S.InputWrapper>
        {/* Country Code Dropdown */}
        <S.CountryDropdownContainer>
          <S.CountryButton
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <S.FlagContainer>
              {selectedCountry.flag}
            </S.FlagContainer>
            <S.DialCode>
              {selectedCountry.dialCode}
            </S.DialCode>
            <S.ChevronIcon 
              isOpen={isDropdownOpen}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </S.ChevronIcon>
          </S.CountryButton>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <S.DropdownMenu>
              {countries.map((country) => (
                <S.CountryOption
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                >
                  <S.FlagContainer>
                    {country.flag}
                  </S.FlagContainer>
                  <S.CountryName>{country.name}</S.CountryName>
                  <S.CountryDialCode>
                    {country.dialCode}
                  </S.CountryDialCode>
                </S.CountryOption>
              ))}
            </S.DropdownMenu>
          )}
        </S.CountryDropdownContainer>

        {/* Phone Number Input */}
        <S.PhoneNumberContainer>
          <S.PhoneNumberInput
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder={placeholder}
          />
        </S.PhoneNumberContainer>
      </S.InputWrapper>

      {/* Error or Helper Text */}
      {error && helperText && <S.ErrorText>{helperText}</S.ErrorText>}
      {!error && helperText && <S.HelperText>{helperText}</S.HelperText>}

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <S.ClickOutside
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </S.PhoneInputContainer>
  );
};

export default PhoneInput;
export { PhoneInput };