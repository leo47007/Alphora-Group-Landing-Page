import { useState, useEffect } from 'react';

interface CryptoPrice {
  symbol: string;
  price: string;
  change: number;
}

const CRYPTO_IDS = [
  { id: 'bitcoin', symbol: 'BTC' },
  { id: 'ethereum', symbol: 'ETH' },
  { id: 'ripple', symbol: 'XRP' },
  { id: 'solana', symbol: 'SOL' },
  { id: 'cardano', symbol: 'ADA' },
  { id: 'chainlink', symbol: 'LINK' },
  { id: 'avalanche-2', symbol: 'AVAX' },
  { id: 'litecoin', symbol: 'LTC' },
  { id: 'polkadot', symbol: 'DOT' },
  { id: 'uniswap', symbol: 'UNI' },
  { id: 'aave', symbol: 'AAVE' },
  { id: 'near', symbol: 'NEAR' },
  { id: 'cosmos', symbol: 'ATOM' },
];

const fallbackData: CryptoPrice[] = [
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

const formatPrice = (price: number): string => {
  if (price >= 1000) {
    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } else if (price >= 1) {
    return '$' + price.toFixed(2);
  } else {
    return '$' + price.toFixed(4);
  }
};

const CryptoTicker = () => {
  const [cryptoData, setCryptoData] = useState<CryptoPrice[]>(fallbackData);
  const [isLive, setIsLive] = useState(false);

  const fetchPrices = async () => {
    try {
      const ids = CRYPTO_IDS.map(c => c.id).join(',');
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
      );
      
      if (!response.ok) throw new Error('Failed to fetch');
      
      const data = await response.json();
      
      const prices: CryptoPrice[] = CRYPTO_IDS.map(crypto => {
        const coinData = data[crypto.id];
        return {
          symbol: crypto.symbol,
          price: formatPrice(coinData?.usd || 0),
          change: coinData?.usd_24h_change || 0,
        };
      });
      
      setCryptoData(prices);
      setIsLive(true);
    } catch (error) {
      console.log('Using fallback crypto data');
      setIsLive(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every 60 seconds
    return () => clearInterval(interval);
  }, []);

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
      {isLive && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <span className="text-xs text-primary flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            LIVE
          </span>
        </div>
      )}
    </div>
  );
};

export default CryptoTicker;
