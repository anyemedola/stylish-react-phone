import PhoneInput from '@/components/PhoneInput';
import { Phone } from 'lucide-react';

const Index = () => {
  const handlePhoneChange = (value: string, country: any) => {
    console.log('Phone:', value, 'Country:', country);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-phone-flag rounded-full mb-6">
            <Phone className="w-8 h-8 text-phone-flag-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Phone Input Component
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Beautiful phone number input with country code selection
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <PhoneInput
                onChange={handlePhoneChange}
                placeholder="912 345 678"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Select your country code and enter your phone number
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Features</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-phone-flag rounded-full"></div>
                  Country code dropdown
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-phone-flag rounded-full"></div>
                  Keyboard navigation
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-phone-flag rounded-full"></div>
                  Clean, modern design
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-phone-flag rounded-full"></div>
                  Fully customizable
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;