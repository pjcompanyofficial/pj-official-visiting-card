import AppHeader from '@/components/shared/AppHeader';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ProcessingInfo from '@/components/quality/ProcessingInfo';
import { Separator } from '@/components/ui/separator';

export default function FluteBambooQualityPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 animate-slide-in">
        <div className="mx-auto grid w-full max-w-4xl items-start gap-6">
            <h2 className="text-2xl font-bold text-center text-primary">Flute & Bamboo Quality</h2>

            <Card>
                <CardHeader>
                    <CardTitle>Flute Quality Tiers</CardTitle>
                    <CardDescription>Details about our range of flutes.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                        <h3 className="font-semibold text-lg text-foreground">Normal Quality Flutes</h3>
                        <p className="text-muted-foreground">Price Range: <span className="font-bold text-primary">₹400 – ₹8,000</span></p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <h3 className="font-semibold text-lg text-foreground">Premium Quality Flutes</h3>
                        <p className="text-muted-foreground">Price Range: <span className="font-bold text-primary">₹700 – ₹20,000</span></p>
                    </div>
                </CardContent>
            </Card>

            <Separator />
            
            <ProcessingInfo />

        </div>
      </main>
    </div>
  );
}
