export type PartnerType = "platform" | "business";

export type PartnerStatus = "onboarding" | "active" | "suspended";

export type AuthStatus =
  | "pending_auth"
  | "connected"
  | "token_invalid"
  | "needs_reauth"
  | "sync_failed"
  | "user_denied";

export type OnboardingStep = "setup_profile" | "connect_provider" | "complete";

export interface Partner {
  id: string;
  partner_type: PartnerType;
  name: string | null;
  email: string;
  phone: string | null;
  provider_id: string | null;
  auth_status: AuthStatus | null;
  integration_keys: string[];
  status: PartnerStatus;
  onboarding_step: OnboardingStep;
  created_at: string;
  updated_at: string;
}

export interface RegisterResponse {
  partner: Partner;
  onboarding_url: string;
  is_new: boolean;
}
