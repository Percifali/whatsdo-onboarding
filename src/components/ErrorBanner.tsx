interface ErrorBannerProps {
  message: string;
  onDismiss?: () => void;
}

const ERROR_MESSAGES: Record<string, string> = {
  cancelled:
    "You cancelled the authorization. Please try again when you're ready.",
  already_connected: "This account is already connected to a provider.",
  merchant_already_connected:
    "This merchant account is already connected to another partner.",
  missing_scopes:
    "The required permissions were not granted. Please try again and accept all requested permissions.",
  token_exchange_failed:
    "We couldn't complete the connection. Please try again.",
};

export function ErrorBanner({ message, onDismiss }: ErrorBannerProps) {
  const displayMessage =
    ERROR_MESSAGES[message] || `Something went wrong. ${message}`;

  return (
    <div
      style={{
        marginTop: 24,
        padding: 16,
        background: "#fef2f2",
        border: "1px solid #fecaca",
        borderRadius: 8,
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        width: 480,
        maxWidth: "100%",
      }}
      role="alert"
    >
      <div
        style={{ flex: 1, fontSize: 14, lineHeight: "20px", color: "#b91c1c" }}
      >
        {displayMessage}
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          style={{
            color: "#f87171",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
            flexShrink: 0,
          }}
          aria-label="Dismiss error"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
