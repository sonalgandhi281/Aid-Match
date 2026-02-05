import { cn } from '@/lib/utils';

interface UrgencyBadgeProps {
  level: 'Low' | 'Medium' | 'High' | 'Critical';
}

export function UrgencyBadge({ level }: UrgencyBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          'bg-urgency-low/15 text-urgency-low': level === 'Low',
          'bg-urgency-medium/15 text-urgency-medium': level === 'Medium',
          'bg-urgency-high/15 text-urgency-high': level === 'High',
          'bg-urgency-critical/15 text-urgency-critical': level === 'Critical',
        }
      )}
    >
      {level} Urgency
    </span>
  );
}
