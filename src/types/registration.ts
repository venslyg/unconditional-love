export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  churchOrGroup: string;
  quantity: number;
  agreeToTerms: boolean;
  agreeToPhotoConsent: boolean;
}

export interface FeeSummary {
  unitPrice: number;
  quantity: number;
  total: number;
  currency: 'LKR';
  formattedTotal: string;
}

