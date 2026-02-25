import AppHeader from '@/components/shared/AppHeader';
import MenuButton from '@/components/shared/MenuButton';
import PasswordDialog from '@/components/auth/PasswordDialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Lock } from 'lucide-react';

const deerIcon = PlaceHolderImages.find(img => img.id === 'bill-watermark');

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 animate-slide-in">
        <div className="mx-auto grid w-full max-w-2xl items-start gap-6">
          <div className="grid gap-3">
            <MenuButton href="/products">Product Details & Rate</MenuButton>
            <MenuButton href="/measurements">Flutes Measurement</MenuButton>
            <MenuButton href="/polish-calculator">
              Polish Rate Calculator
            </MenuButton>
            
            <Separator className="my-2" />

            <MenuButton href="/employee-rules">Employee Rules</MenuButton>
            <MenuButton href="/flute-bamboo-quality">Flute & Bamboo Quality</MenuButton>
            
            <Separator className="my-2" />

            <PasswordDialog trigger={
              <div className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-border bg-gradient-to-r from-stone-900 to-zinc-900 p-4 text-left text-base font-medium transition-transform active:scale-[0.98] hover:border-primary/50">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span>CII</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive" className="bg-primary text-primary-foreground">SECURE</Badge>
                  <span className="text-primary font-bold">→</span>
                </div>
              </div>
            } />
            
            <MenuButton href="/billing">Receive & Bill</MenuButton>
          </div>
        </div>
      </main>
    </div>
  );
}

