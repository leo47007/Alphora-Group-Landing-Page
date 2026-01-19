import { useState, useEffect } from 'react';

interface CryptoPrice {
  symbol: string;
  price: string;
  change: number;
}

const cryptoData: CryptoPrice[] = [
  { symbol: 'BTC', price: '$93,014.01', change: -2.48 },
  { symbol: 'ETH', price: '$3,215.57', change: -2.18 },
  { symbol: 'XRP', price: '$2.01', change: -2.29 },
  { symbol: 'SOL', price: '$134.33', change: -4.91 },
  { symbol: 'ADA', price: '$0.3706', change: -5.17 },
  { symbol: 'LINK', price: '$12.93', change: -5.21 },
  { symbol: 'AVAX', price: '$12.81', change: -6.36 },
  { symbol: 'LTC', price: '$71.55', change: -0.36 },
  { symbol: 'DOT', price: '$2.05', change: -2.89 },
  { symbol: 'UNI', price: '$5.02', change: -4.97 },
  { symbol: 'AAVE', price: '$165.32', change: -2.55 },
  { symbol: 'NEAR', price: '$1.61', change: -5.39 },
  { symbol: 'ATOM', price: '$2.47', change: 0.28 },
];

const CryptoTicker = () => {
  return (
    <div className="w-full overflow-hidden bg-background/50 border-y border-border py-3">
      <div className="flex animate-marquee animate-marquee-pause">
        {[...cryptoData, ...cryptoData, ...cryptoData, ...cryptoData].map((crypto, index) => (
          <div
            key={`${crypto.symbol}-${index}`}
            className="flex items-center gap-2 px-8 shrink-0"
          >
            <span className="text-foreground font-medium">{crypto.symbol}</span>
            <span className="text-muted-foreground">{crypto.price}</span>
            <span className={crypto.change >= 0 ? 'text-primary' : 'text-red-500'}>
              {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
