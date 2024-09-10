import { LanguageCode } from "../../constants";
import React, { useEffect, useState } from "react";

export type UIStreamScreenProps = {
  sessionUrl: string;
  redirectUrl?: string;
  callbackUrl?: string;
  language?: LanguageCode;
  additionalData?: Map<string, string>;
  clearCookies?: boolean;
  forceAadhaar?: boolean;
  forceMobile?: boolean;
  onSessionComplete: (redirectUrl: string) => void;
};

export const UIStreamScreen = ({
  sessionUrl,
  redirectUrl,
  callbackUrl,
  language,
  additionalData,
  clearCookies,
  forceAadhaar,
  forceMobile,
  onSessionComplete,
}: UIStreamScreenProps) => {
  const [uistreamSessionUrl, setSessionUrl] = useState<string>();

  useEffect(() => {
    const url = new URL(sessionUrl);

    const upsertParam = (
      param: string,
      value: boolean | string | undefined
    ) => {
      if (value != undefined) {
        url.searchParams.set(param, String(value));
      }
    };

    upsertParam("redirect_url", redirectUrl);
    upsertParam("callback_url", callbackUrl);
    upsertParam("language", language);
    upsertParam("clear_cookies", clearCookies);
    upsertParam("force_aadhaar", forceAadhaar);
    upsertParam("force_mobile", forceMobile);

    // Explicitly set disable_multiple_tabs to false to avoid issues with iframe
    upsertParam("disable_multiple_tabs", "false");

    additionalData?.forEach((value, key) => upsertParam(key, String(value)));

    setSessionUrl(url.toString());
  }, [
    additionalData,
    callbackUrl,
    clearCookies,
    forceAadhaar,
    forceMobile,
    language,
    redirectUrl,
    sessionUrl,
  ]);

  useEffect(() => {
    const onMessage = (message: MessageEvent) => {
      if (message.origin.includes("uistream")) {
        const data = message.data;
        if (data.type == "redirect") {
          onSessionComplete(data.data.redirectUrl);
        }
      }
    };

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [onSessionComplete]);

  return <iframe src={uistreamSessionUrl} height="100%" width="100%" />;
};

UIStreamScreen.defaultProps = {
  redirectUrl: undefined,
  callbackUrl: undefined,
  language: undefined,
  additionalData: undefined,
  clearCookies: undefined,
  forceAadhaar: undefined,
  forceMobile: undefined,
} as Partial<UIStreamScreenProps>;
