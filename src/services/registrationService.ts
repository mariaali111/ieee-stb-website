import { EventRegistrationData } from '../types/event';

export interface RegistrationResult {
  success: boolean;
  registrationId?: string;
  message: string;
  timestamp: string;
}

/**
 * Service Abstraction layer for IEEE Week registration.
 * Easily plug in a real REST API endpoint, Firebase, Supabase, or Google Forms submission here.
 */
class RegistrationService {
  private apiEndpoint: string | null = null; // Set URL when backend endpoint is available

  public async register(data: EventRegistrationData): Promise<RegistrationResult> {
    // 1. Basic validation check before dispatching
    this.validateData(data);

    // 2. If a real backend endpoint is configured, invoke HTTP POST
    if (this.apiEndpoint) {
      try {
        const response = await fetch(this.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Registration server returned code ${response.status}`);
        }

        const json = await response.json();
        return {
          success: true,
          registrationId: json.id || `REG-${Date.now()}`,
          message: 'Registration successfully confirmed on server!',
          timestamp: new Date().toISOString(),
        };
      } catch (err: any) {
        throw new Error(err?.message || 'Failed to submit registration request.');
      }
    }

    // 3. Fallback / Client Simulation (API Ready)
    // Simulates network latency (800ms) and returns structured response.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simple mock error condition for testing if email is test-error@test.com
        if (data.email.toLowerCase() === 'test-error@test.com') {
          reject(new Error('Simulated API Error: User is already registered for this event.'));
          return;
        }

        const randomCode = Math.floor(100000 + Math.random() * 900000);
        const registrationId = `IEEE2026-${data.eventId.toUpperCase().slice(0, 5)}-${randomCode}`;

        // Save to local storage cache so user retains registration history locally
        try {
          const existing = JSON.parse(localStorage.getItem('ieee_week_registrations') || '[]');
          existing.push({ ...data, registrationId, registeredAt: new Date().toISOString() });
          localStorage.setItem('ieee_week_registrations', JSON.stringify(existing));
        } catch (e) {
          // Ignore local storage error in restricted privacy mode
        }

        resolve({
          success: true,
          registrationId,
          message: `Registration confirmed! Badge code: ${registrationId}`,
          timestamp: new Date().toISOString(),
        });
      }, 850);
    });
  }

  private validateData(data: EventRegistrationData): void {
    if (!data.fullName || data.fullName.trim().length < 2) {
      throw new Error('Please enter a valid full name (minimum 2 characters).');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      throw new Error('Please provide a valid email address.');
    }
    if (!data.phone || data.phone.trim().length < 7) {
      throw new Error('Please provide a valid contact phone number.');
    }
    if (!data.college || data.college.trim().length < 2) {
      throw new Error('Please specify your College / Institution name.');
    }
    if (data.ieeeMembershipStatus === 'Member' && (!data.ieeeMemberId || data.ieeeMemberId.trim().length < 4)) {
      throw new Error('IEEE Members must provide a valid IEEE Member ID.');
    }
  }

  /**
   * Helper to set API endpoint for future integration
   */
  public setApiEndpoint(endpoint: string) {
    this.apiEndpoint = endpoint;
  }
}

export const registrationService = new RegistrationService();
