import { MapPin, Tag, CircleDollarSign, Phone, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { UrgencyBadge } from './UrgencyBadge';
import { StatusBadge } from './StatusBadge';
import { ProgressBar } from './ProgressBar';
import type { NGORequirement } from '@/data/mockData';

interface NGOCardProps {
  ngo: NGORequirement;
  onDonate: (id: string) => void;
  onContact: (id: string) => void;
  onEmergency: (id: string) => void;
}

export function NGOCard({ ngo, onDonate, onContact, onEmergency }: NGOCardProps) {
  const isFulfilled = ngo.donation.status === 'Fulfilled';

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg leading-tight">{ngo.ngoName}</h3>
          <UrgencyBadge level={ngo.urgencyLevel} />
        </div>
        
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" />
            {ngo.category}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {ngo.location}
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div>
          <p className="text-sm font-medium text-foreground">Current Requirement</p>
          <p className="mt-1 text-sm text-muted-foreground">{ngo.currentRequirement}</p>
        </div>

        <div className="rounded-lg border bg-secondary/30 p-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Donation Transparency
            </span>
            <StatusBadge status={ngo.donation.status} />
          </div>
          
          <p className="text-sm text-foreground">{ngo.donation.purpose}</p>
          
          <div className="flex items-center gap-2 text-sm">
            <CircleDollarSign className="h-4 w-4 text-primary" />
            <span className="font-medium">₹{ngo.donation.amountRequired.toLocaleString()}</span>
            <span className="text-muted-foreground">required</span>
          </div>

          <ProgressBar 
            funded={ngo.donation.amountFunded} 
            required={ngo.donation.amountRequired} 
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 pt-3">
        <Button 
          size="sm" 
          onClick={() => onDonate(ngo.id)}
          disabled={isFulfilled}
          className="flex-1"
        >
          {isFulfilled ? 'Fulfilled' : 'Donate'}
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => onContact(ngo.id)}
          className="gap-1"
        >
          <Phone className="h-3.5 w-3.5" />
          Contact
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => onEmergency(ngo.id)}
          className="gap-1 text-urgency-critical hover:text-urgency-critical"
        >
          <AlertCircle className="h-3.5 w-3.5" />
          Emergency
        </Button>
      </CardFooter>
    </Card>
  );
}
