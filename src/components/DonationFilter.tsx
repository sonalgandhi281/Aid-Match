import { Heart } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DONATION_TYPES, type DonationType } from '@/data/mockData';

interface DonationFilterProps {
  selectedType: DonationType | null;
  onTypeChange: (type: DonationType | null) => void;
}

export function DonationFilter({ selectedType, onTypeChange }: DonationFilterProps) {
  return (
    <div className="mb-6 rounded-lg border bg-card p-4">
      <div className="flex items-center gap-2 mb-3">
        <Heart className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-foreground">Donate Something Specific</span>
      </div>
      <Select
        value={selectedType ?? 'all'}
        onValueChange={(value) => onTypeChange(value === 'all' ? null : (value as DonationType))}
      >
        <SelectTrigger className="w-full sm:w-64">
          <SelectValue placeholder="What do you want to donate?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All donation types</SelectItem>
          {DONATION_TYPES.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
