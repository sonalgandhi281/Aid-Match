import { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { Header } from '@/components/Header';
import { NGOCard } from '@/components/NGOCard';
import { EmergencyForm } from '@/components/EmergencyForm';
import { DonationFilter } from '@/components/DonationFilter';
import { mockNGOs, type DonationType } from '@/data/mockData';

const Index = () => {
  const [selectedDonationType, setSelectedDonationType] = useState<DonationType | null>(null);

  const filteredNGOs = useMemo(() => {
    if (!selectedDonationType) return mockNGOs;
    return mockNGOs.filter((ngo) => ngo.acceptedDonations.includes(selectedDonationType));
  }, [selectedDonationType]);

  const scrollToNGOs = () => {
    document.getElementById('ngo-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEmergency = () => {
    document.getElementById('emergency-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDonate = (id: string) => {
    const ngo = mockNGOs.find((n) => n.id === id);
    toast.success(`Thank you for choosing to donate to ${ngo?.ngoName}!`, {
      description: 'This is a prototype. In production, you would be redirected to a payment page.',
    });
  };

  const handleContact = (id: string) => {
    const ngo = mockNGOs.find((n) => n.id === id);
    toast.info(`Contact ${ngo?.ngoName}`, {
      description: 'Contact details would be shown here in the full application.',
    });
  };

  const handleEmergency = (id: string) => {
    const ngo = mockNGOs.find((n) => n.id === id);
    toast.warning(`Emergency request sent to ${ngo?.ngoName}`, {
      description: 'The NGO will be notified immediately.',
    });
  };

  const handleEmergencySubmit = (data: { name: string; contact: string; location: string; description: string }) => {
    toast.success('Emergency request submitted!', {
      description: `We've received your request, ${data.name}. Nearby NGOs will be notified.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header onHelpClick={scrollToNGOs} onNeedHelpClick={scrollToEmergency} />

      <main className="container mx-auto px-4 py-8">
        {/* NGO List Section */}
        <section id="ngo-list" className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground">Active Requirements</h2>
            <p className="text-muted-foreground">
              Browse real-time needs from verified NGOs. Every donation has a clear purpose.
            </p>
          </div>

          <DonationFilter
            selectedType={selectedDonationType}
            onTypeChange={setSelectedDonationType}
          />

          {filteredNGOs.length === 0 ? (
            <div className="rounded-lg border border-dashed bg-muted/30 p-8 text-center">
              <p className="text-muted-foreground">No NGOs currently require this item.</p>
              <button
                onClick={() => setSelectedDonationType(null)}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNGOs.map((ngo) => (
                <NGOCard
                  key={ngo.id}
                  ngo={ngo}
                  onDonate={handleDonate}
                  onContact={handleContact}
                  onEmergency={handleEmergency}
                />
              ))}
            </div>
          )}
        </section>

        {/* Emergency Form Section */}
        <section id="emergency-form" className="max-w-2xl mx-auto">
          <EmergencyForm onSubmit={handleEmergencySubmit} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>AidMatch — Hackathon Prototype</p>
          <p className="mt-1">Built to demonstrate need-based matching and transparent donations.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
