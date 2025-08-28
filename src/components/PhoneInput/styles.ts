import { styled } from '@mui/material/styles';

export const PhoneInputContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '28rem',
}));

export const InputWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'hsl(var(--phone-input-bg))',
  border: '1px solid hsl(var(--phone-input-border))',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  transition: 'all 0.2s ease-in-out',
  '&:focus-within': {
    boxShadow: '0 0 0 2px hsl(var(--phone-input-focus))',
    outline: '2px solid transparent',
    outlineOffset: '2px',
  },
}));

export const CountryDropdownContainer = styled('div')(({ theme }) => ({
  position: 'relative',
}));

export const CountryButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.75rem',
  backgroundColor: 'hsl(var(--phone-dropdown-bg))',
  borderRight: '1px solid hsl(var(--phone-input-border))',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',
  outline: 'none',
  '&:hover': {
    backgroundColor: 'hsl(var(--phone-dropdown-hover))',
  },
  '&:focus': {
    outline: 'none',
  },
}));

export const FlagContainer = styled('div')(({ theme }) => ({
  width: '1.5rem',
  height: '1rem',
  backgroundColor: 'hsl(var(--phone-flag-bg))',
  borderRadius: '0.125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.75rem',
  fontWeight: 700,
  color: 'hsl(var(--phone-flag-text))',
}));

export const DialCode = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: 'hsl(var(--foreground))',
}));

export const ChevronIcon = styled('svg', {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen?: boolean }>(({ isOpen }) => ({
  width: '1rem',
  height: '1rem',
  transition: 'transform 0.2s ease-in-out',
  color: 'hsl(var(--muted-foreground))',
  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export const DropdownMenu = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  marginTop: '0.25rem',
  backgroundColor: 'hsl(var(--popover))',
  border: '1px solid hsl(var(--border))',
  borderRadius: '0.5rem',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  zIndex: 50,
  maxHeight: '15rem',
  overflowY: 'auto',
}));

export const CountryOption = styled('button')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.5rem 0.75rem',
  background: 'transparent',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: 'hsl(var(--phone-dropdown-hover))',
  },
}));

export const CountryName = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: 'hsl(var(--foreground))',
}));

export const CountryDialCode = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: 'hsl(var(--muted-foreground))',
  marginLeft: 'auto',
}));

export const PhoneNumberContainer = styled('div')(({ theme }) => ({
  flex: 1,
  position: 'relative',
}));

export const PhoneNumberInput = styled('input')(({ theme }) => ({
  width: '100%',
  padding: '0.75rem',
  background: 'transparent',
  color: 'hsl(var(--foreground))',
  fontSize: '0.875rem',
  border: 'none',
  outline: 'none',
  '&::placeholder': {
    color: 'hsl(var(--muted-foreground))',
  },
  '&:focus': {
    outline: 'none',
  },
}));

export const ClickOutside = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 40,
}));

export const ErrorText = styled('p')(({ theme }) => ({
  marginTop: '0.25rem',
  fontSize: '0.75rem',
  color: 'hsl(var(--destructive))',
}));

export const HelperText = styled('p')(({ theme }) => ({
  marginTop: '0.25rem',
  fontSize: '0.75rem',
  color: 'hsl(var(--muted-foreground))',
}));