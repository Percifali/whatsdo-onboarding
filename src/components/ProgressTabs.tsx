interface ProgressTabsProps {
  currentStepIdx: number;
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <circle cx="10" cy="10" r="10" fill="#1ab942" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GreenDot() {
  return (
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "#1ab942",
        flexShrink: 0,
      }}
    />
  );
}

export function ProgressTabs({ currentStepIdx }: ProgressTabsProps) {
  return (
    <nav
      style={{ marginTop: 126, width: 480, maxWidth: "100%" }}
      aria-label="Onboarding progress"
    >
      <div style={{ display: "flex", gap: 16 }}>
        {/* Tab 1: Your info */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              paddingBottom: 8,
            }}
          >
            {currentStepIdx > 0 ? <CheckIcon /> : <GreenDot />}
            <span
              style={{
                fontWeight: 700,
                fontSize: 16,
                lineHeight: "20px",
                color: "black",
              }}
            >
              Your info
            </span>
          </div>
          <div
            style={{
              height: 4,
              width: "100%",
              background: currentStepIdx > 0 ? "#1ab942" : "black",
            }}
          />
        </div>

        {/* Tab 2: Connect provider */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              paddingBottom: 8,
            }}
          >
            {currentStepIdx > 1 ? (
              <CheckIcon />
            ) : currentStepIdx === 1 ? (
              <GreenDot />
            ) : null}
            <span
              style={{
                fontWeight: 700,
                fontSize: 16,
                lineHeight: "20px",
                color: "black",
                opacity: currentStepIdx < 1 ? 0.5 : 1,
              }}
            >
              Connect provider
            </span>
          </div>
          <div
            style={{
              height: 4,
              width: "100%",
              background: currentStepIdx > 1 ? "#1ab942" : "black",
            }}
          />
        </div>
      </div>
    </nav>
  );
}
