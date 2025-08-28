import styled from 'styled-components';

export const PhoneInputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 28rem; /* max-w-md */
`;

export const InputWrapper = styled.div`
  display: flex;
  background-color: hsl(var(--phone-input-bg));
  border: 1px solid hsl(var(--phone-input-border));
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    ring: 2px solid hsl(var(--phone-input-focus));
    ring-offset: 2px;
  }
`;

export const CountryDropdownContainer = styled.div`
  position: relative;
`;

export const CountryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: hsl(var(--phone-dropdown-bg));
  border-right: 1px solid hsl(var(--phone-input-border));
  transition: background-color 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: hsl(var(--phone-dropdown-hover));
  }

  &:focus {
    outline: none;
  }
`;

export const FlagContainer = styled.div`
  width: 1.5rem;
  height: 1rem;
  background-color: hsl(var(--phone-flag-bg));
  border-radius: 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: hsl(var(--phone-flag-text));
`;

export const DialCode = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--foreground));
`;

export const ChevronIcon = styled.svg<{ $isOpen: boolean }>`
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s ease-in-out;
  color: hsl(var(--muted-foreground));
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.25rem;
  background-color: hsl(var(--popover));
  border: 1px solid hsl(var(--border));
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  max-height: 15rem;
  overflow-y: auto;
`;

export const CountryOption = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  text-align: left;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: hsl(var(--phone-dropdown-hover));
  }
`;

export const CountryName = styled.span`
  font-size: 0.875rem;
  color: hsl(var(--foreground));
`;

export const CountryDialCode = styled.span`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  margin-left: auto;
`;

export const PhoneNumberContainer = styled.div`
  flex: 1;
  position: relative;
`;

export const PhoneNumberInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  color: hsl(var(--foreground));
  font-size: 0.875rem;
  border: none;
  outline: none;

  &::placeholder {
    color: hsl(var(--muted-foreground));
  }

  &:focus {
    outline: none;
  }
`;

export const ClickOutside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
`;

export const ErrorText = styled.p`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: hsl(var(--destructive));
`;

export const HelperText = styled.p`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
`;