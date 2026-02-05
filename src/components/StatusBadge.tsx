import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'Open' | 'In Progress' | 'Fulfilled';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          'bg-status-open/15 text-status-open': status === 'Open',
          'bg-status-progress/15 text-status-progress': status === 'In Progress',
          'bg-status-fulfilled/15 text-status-fulfilled': status === 'Fulfilled',
        }
      )}
    >
      {status}
    </span>
  );
}
