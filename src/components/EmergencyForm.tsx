import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EmergencyFormProps {
  onSubmit: (data: { name: string; contact: string; location: string; description: string }) => void;
}

export function EmergencyForm({ onSubmit }: EmergencyFormProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, contact, location, description });
    setName('');
    setContact('');
    setLocation('');
    setDescription('');
  };

  return (
    <Card className="border-urgency-critical/30 bg-urgency-critical/5">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="h-5 w-5 text-urgency-critical" />
          Send Emergency Request
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          If you or someone you know needs urgent help, fill out this form to notify nearby NGOs.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="contact" className="text-sm font-medium">
                Contact Number
              </label>
              <Input
                id="contact"
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, Area, or Address"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="text-sm font-medium">
              Describe Your Need
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe what help you need..."
              rows={3}
              required
            />
          </div>

          <Button type="submit" className="w-full sm:w-auto">
            Submit Emergency Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
