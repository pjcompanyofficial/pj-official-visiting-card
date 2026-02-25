"use client";

import { useState, type ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Label } from '../ui/label';

const CORRECT_PASSWORD = "PJ-ECC dashboard*432Hz";

interface PasswordDialogProps {
  trigger: ReactElement;
  targetPath?: string;
}

export default function PasswordDialog({ trigger, targetPath = '/cii' }: PasswordDialogProps) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handlePasswordCheck = () => {
    if (password === CORRECT_PASSWORD) {
      toast({ title: "Access Granted", description: "Redirecting..." });
      router.push(targetPath);
      setOpen(false);
      setPassword('');
    } else {
      toast({
        variant: 'destructive',
        title: "Access Denied",
        description: "The password you entered is incorrect.",
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handlePasswordCheck();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Secure Access</DialogTitle>
          <DialogDescription>
            This section is password protected. Please enter the password to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password-input" className="text-right">
              Password
            </Label>
            <Input
              id="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
              className="col-span-3"
              autoFocus
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handlePasswordCheck}>Unlock</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
