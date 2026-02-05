interface ProgressBarProps {
  funded: number;
  required: number;
}

export function ProgressBar({ funded, required }: ProgressBarProps) {
  const percentage = Math.min((funded / required) * 100, 100);
  
  return (
    <div className="w-full">
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
        <span>₹{funded.toLocaleString()} raised</span>
        <span>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
}
