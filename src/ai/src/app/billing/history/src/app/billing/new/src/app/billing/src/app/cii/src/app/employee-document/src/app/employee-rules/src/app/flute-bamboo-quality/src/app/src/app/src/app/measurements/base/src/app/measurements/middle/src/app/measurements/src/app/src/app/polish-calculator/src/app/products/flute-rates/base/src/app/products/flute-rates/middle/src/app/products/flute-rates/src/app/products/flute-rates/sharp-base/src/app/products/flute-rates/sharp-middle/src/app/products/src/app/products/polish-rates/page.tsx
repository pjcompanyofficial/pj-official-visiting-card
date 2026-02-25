import AppHeader from '@/components/shared/AppHeader';
import RateCard from '@/components/shared/RateCard';
import { polishingRates } from '@/lib/data';

export default function PolishRatesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 animate-slide-in">
        <div className="mx-auto grid w-full max-w-2xl items-start gap-6">
            <h2 className="text-2xl font-bold text-center text-primary">Polishing Rates</h2>
            <div className="grid gap-3">
                {polishingRates.map(rate => (
                    <RateCard key={rate.range} label={rate.range} value={`₹${rate.price}`} />
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}
