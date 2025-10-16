import { useEffect, useState } from 'react';

const countries = [
  { name: 'United States', flag: '🇺🇸', code: 'US' },
  { name: 'United Kingdom', flag: '🇬🇧', code: 'GB' },
  { name: 'Canada', flag: '🇨🇦', code: 'CA' },
  { name: 'Germany', flag: '🇩🇪', code: 'DE' },
  { name: 'France', flag: '🇫🇷', code: 'FR' },
  { name: 'Netherlands', flag: '🇳🇱', code: 'NL' },
  { name: 'Switzerland', flag: '🇨🇭', code: 'CH' },
  { name: 'Sweden', flag: '🇸🇪', code: 'SE' },
  { name: 'Japan', flag: '🇯🇵', code: 'JP' },
  { name: 'Singapore', flag: '🇸🇬', code: 'SG' },
  { name: 'Australia', flag: '🇦🇺', code: 'AU' },
  { name: 'Brazil', flag: '🇧🇷', code: 'BR' },
  { name: 'India', flag: '🇮🇳', code: 'IN' },
  { name: 'South Korea', flag: '🇰🇷', code: 'KR' },
  { name: 'Spain', flag: '🇪🇸', code: 'ES' },
  { name: 'Italy', flag: '🇮🇹', code: 'IT' },
  { name: 'Mexico', flag: '🇲🇽', code: 'MX' },
  { name: 'Turkey', flag: '🇹🇷', code: 'TR' },
  { name: 'Poland', flag: '🇵🇱', code: 'PL' },
  { name: 'Norway', flag: '🇳🇴', code: 'NO' },
  { name: 'Denmark', flag: '🇩🇰', code: 'DK' },
  { name: 'Finland', flag: '🇫🇮', code: 'FI' },
  { name: 'Austria', flag: '🇦🇹', code: 'AT' },
  { name: 'Belgium', flag: '🇧🇪', code: 'BE' },
  { name: 'Portugal', flag: '🇵🇹', code: 'PT' },
  { name: 'Czech Republic', flag: '🇨🇿', code: 'CZ' },
  { name: 'New Zealand', flag: '🇳🇿', code: 'NZ' },
  { name: 'South Africa', flag: '🇿🇦', code: 'ZA' },
  { name: 'UAE', flag: '🇦🇪', code: 'AE' },
  { name: 'Israel', flag: '🇮🇱', code: 'IL' },
];

export default function CountryCarousel() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const doubledCountries = [...countries, ...countries, ...countries];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#061E38] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#061E38] to-transparent z-10"></div>

      <div
        className="flex gap-6"
        style={{
          transform: `translateX(${offset}px)`,
          width: 'fit-content',
        }}
        onTransitionEnd={() => {
          if (offset <= -(countries.length * 200)) {
            setOffset(0);
          }
        }}
      >
        {doubledCountries.map((country, index) => (
          <div
            key={`${country.code}-${index}`}
            className="flex-shrink-0 w-44 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="text-5xl mb-2 text-center">{country.flag}</div>
            <div className="text-center text-sm font-medium text-gray-300">
              {country.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
