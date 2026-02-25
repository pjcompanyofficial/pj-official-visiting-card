import AppHeader from '@/components/shared/AppHeader';
import MenuButton from '@/components/shared/MenuButton';
import PasswordDialog from '@/components/auth/PasswordDialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function BillingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 animate-slide-in">
        <div className="mx-auto grid w-full max-w-2xl items-start gap-6">
            <h2 className="text-2xl font-bold text-center text-primary">Receive & Bill</h2>
            <div className="grid gap-3">
                <MenuButton href="/billing/new">Generate New Bill</MenuButton>
                <MenuButton href="/billing/history">Bills History</MenuButton>
                <MenuButton href="/employee-document">Employee Document</MenuButton>
                <PasswordDialog trigger={
                  <div className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-border bg-gradient-to-r from-stone-900 to-zinc-900 p-4 text-left text-base font-medium transition-transform active:scale-[0.98] hover:border-primary/50">
                    <span>CII</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive" className="bg-primary text-primary-foreground">SECURE</Badge>
                      <span className="text-primary font-bold">→</span>
                    </div>
                  </div>
                } />
                <Separator className="my-2" />
                <MenuButton href="/app-structure">Wave Application Structure</MenuButton>
            </div>
        </div>
      </main>
    </div>
  );
}
