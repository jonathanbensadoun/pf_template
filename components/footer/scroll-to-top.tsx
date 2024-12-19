'use client';

import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ScrollToTop() {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="rounded-full"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}