import { useState, useCallback } from "react";

interface InstallButtonProps {
  apkUrl: string;
  sticky?: boolean;
}

const InstallButton = ({ apkUrl, sticky = false }: InstallButtonProps) => {
  const [state, setState] = useState<"idle" | "downloading">("idle");

  const handleClick = useCallback(() => {
    setState("downloading");
    
    // Trigger download
    const a = document.createElement("a");
    a.href = apkUrl;
    a.download = "CashVision.apk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => setState("idle"), 3000);
  }, [apkUrl]);

  return (
    <button
      onClick={handleClick}
      className={`w-full rounded-lg font-display font-medium text-base py-3 px-6 transition-all duration-200
        bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98]
        ${state === "downloading" ? "install-downloading" : ""}
        ${sticky ? "fixed bottom-0 left-0 right-0 z-50 rounded-none sm:static sm:rounded-lg" : ""}
      `}
    >
      {state === "idle" ? "Install" : (
        <span className="flex items-center justify-center gap-2">
          Downloading
          <span className="flex gap-0.5">
            <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
          </span>
        </span>
      )}
    </button>
  );
};

export default InstallButton;
