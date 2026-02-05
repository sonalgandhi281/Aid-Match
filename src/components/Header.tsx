import { Heart, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onHelpClick: () => void;
  onNeedHelpClick: () => void;
}

export function Header({ onHelpClick, onNeedHelpClick }: HeaderProps) {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              AidMatch
            </h1>
            <p className="mt-1 text-muted-foreground">
              Connecting donors, NGOs, and people in need through transparent, purpose-driven giving
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button onClick={onHelpClick} className="gap-2">
              <Heart className="h-4 w-4" />
              I want to help
            </Button>
            <Button onClick={onNeedHelpClick} variant="outline" className="gap-2">
              <HandHeart className="h-4 w-4" />
              I need help
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
