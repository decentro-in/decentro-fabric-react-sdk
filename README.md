# Decentro Fabric SDK

Welcome to the **Decentro Fabric React SDK**! This React SDK allows you to seamlessly integrate UIStream workflows into your applications. With UIStream, you can empower your users to interact with Decentro's powerful features while maintaining a near-native experience.

## Features

- **UIStream Flows**: UIStream flows provide dynamic UI components for specific functionalities. Here are some of the most commonly used flows:

  - **DIGILOCKER_AADHAAR**: Retrieve Aadhaar documents from sources like DigiLocker, UIDAI, or CKYC and send the document BASE64 in the callback URL.
  - **DIGILOCKER_AADHAAR_PAN**: Streamline the entire DigiLocker workflow through a single API, enabling seamless interaction with DigiLocker services.
  - **DIGILOCKER_CAR_INSURANCE_POLICY**: Fetch Car Insurance Policy documents dynamically from issuers on DigiLocker.
  - **DIGILOCKER_VEHICLE_REGISTRATION_CERTIFICATE**: Obtain Vehicle Registration Certificate documents in real-time from DigiLocker.

## Getting Started

1. **Installation**: Add the Decentro Fabric React SDK to your `package.json` file:

   ```json
   "dependencies": {
    "decentrotech-fabric-react-sdk": "^0.1.1",
   }
   ```

2. **Usage**:

   Generate UIStream Session link as [documented here](https://docs.decentro.tech/docs/kyc-and-onboarding-workflows-uistreams).

   Use the following snippets as guides to add UIStream screen to your React app.

   Or use our sample React app [open sourced here](https://github.com/decentro-in/decentro-fabric-react-sdk-example)

   ```tsx
   import { UIStreamScreen, LanguageCode } from "decentrotech-fabric-react-sdk";

   // Initialize UIStream Screen
   <UIStreamScreen
     sessionUrl={sessionUrl}
     redirectUrl={UISTREAM_REDIRECT_URL}
     callbackUrl={UISTREAM_CALLBACK_URL}
     language={LanguageCode.HINDI}
     additionalData={new Map([["mobile", "XXXXXXXXXX"]])}
     forceAadhaar={true}
     forceMobile={false}
     onSessionComplete={(redirectUrl) => setSessionCompleteUrl(redirectUrl)}
   />;
   ```


3. **API Documentation**: Explore the detailed [UIStreams documentation](https://docs.decentro.tech/docs/kyc-and-onboarding-workflows-uistreams) for more information.

4. **Sample App**: Check out our [sample app on GitHub](https://github.com/decentro-in/decentro-fabric-flutter-sdk-sample) to see UIStream in action.

## License

This SDK is closed-source and proprietary. Please refer to the [LICENSE.md](LICENSE.md) file for licensing details.

---

_Decentro_ - Building the future of fintech infrastructure 🚀
Learn more at [decentro.tech](https://decentro.tech/)
