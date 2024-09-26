
import Modal from "../Modal.jsx";

// eslint-disable-next-line react/prop-types
const TermsAndConditionModal = ({onClose, isOpen}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} portalId='modal-terms-and-conditions' height='[570px]' width='3/4'>
      <div className="modal-content">
        <div className='sticky top-0 left-0 z-50 bg-white'>
          <h3
            className="font-bold font-archivo text-[22px] md:text-[36px] text-center px-[25px] md:px-[45px] pt-[30px] pb-[10px]">
            Terms & Condition!
          </h3>
        </div>
        <div className="modal-box no-modal-overlay p-[25px] md:p-[45px] overflow-auto h-[calc(100%-128px)] ">
          <div className='no-modal-overlay'>
            <span className='text-[18px] font-archivo font-medium text-[#333333]'>Access:</span>
            <p className='text-[15px] font-archivo font-normal py-4'>When you create an account with us, you must provide
              us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach
              of the Terms, which may result in immediate termination of your account on our Service. You are
              responsible for safeguarding the password that you use to access the Service and for any activities or
              actions under your password, whether your password is with our Service or a third-party service. You agree
              not to disclose your password to any third party. You must notify us immediately upon becoming aware of
              any breach of security or unauthorized use of your account.</p>
            <span className='text-[18px] font-archivo font-medium text-[#333333]'>Governing law:</span>
            <p className='text-[15px] font-archivo font-normal py-4'>These Terms shall be governed and construed in
              accordance with the laws of Bangladesh, without regard to its conflict of law provisions. Our failure to
              enforce any right or provision of these Terms will not be considered a waiver of those rights. If any
              provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
              these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our
              Service, and supersede and replace any prior agreements we might have between us regarding the
              Service.</p>
            <span className='text-[18px] font-archivo font-medium text-[#333333]'>1. WHAT INFORMATION DO WE COLLECT AND FOR WHAT PURPOSE?</span>
            <p className='text-[15px] font-archivo font-normal pt-4 pb-2'>The information we collect may include a variety of
              personal data collected about our users so we can provide you with good user experience. Some of the
              information that is collected may be automatically for the different protocols that have been introduced
              over the years.</p>
            <p className='text-[15px] font-archivo font-light py-2'>The range of information that we may collect from
              our users may include:</p>
            <p className='text-[15px] font-archivo font-light py-2'>User Information: “TSports.com” may collect
              information from and about you, such as:</p>
            <p className='text-[15px] font-archivo font-light py-2'>Your account registration information, such as your
              name and email address; account id, display name, profile picture. Your purchase and free-trial sign-up
              history; Your usage history; Traffic source (e.g., how you found the content); and Your general geographic
              location (based upon IP address). Payment Information: If you subscribe or sign up for a free trial
              through the “TSports.com” OTT Service, you must provide valid payment card or mobile payment wallet
              information. This information is collected directly by our payment vendors or gateway provider and is not
              received or stored by “TSports.com” or any.</p>
            <p className='text-[15px] font-archivo font-light py-2'>Information Collected Automatically:”TSports.com”
              collects information about your use of our websites and applications or apps. This may include your
              activities, your IP address, location information, your browser type, your Internet service provider
              (ISP), referring/exit pages, your operating system or device type, date/time stamps, and related
              metadata.</p>
            <p className='text-[15px] font-archivo font-light pt-2 pb-4'>Comments: You may choose to post a comment or
              participate in a forum, where available. This information will be available to the public. You may also
              choose to provide other information about yourself in connection with surveys, contests, special offers,
              customer support inquiries, and other communications with us.</p>

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>2. MONITORING USER ACTIVITY</span>
            <p className='text-[15px] font-archivo font-light py-4'>We may, at our own discretion, monitor the user activity and communications that take place on our service, such as messaging or notes, in order to protect our users and monitor the workflow of our service. You do hereby confirm that you have no expectation of privacy with respect to any such communications or postings, and you expressly consent to such monitoring.</p> 
            <p className='text-[15px] font-archivo font-light py-4'>We use all of the information from and about you to handle, maintain, operate and provide to you the features of the app and website services. We may use this collected information to communicate with you, such as to send you pop up messages, email messages, opt-in text messages, and push notifications. We may also send emails and messages related to our services such as account verification, payment confirmation messages, account update message, other important messages that may become necessary such as heads up for system upgrade or downtime in future for some reason. Since these messages are related to our important updates and services and warnings it’s possible that you may not opt-out of these messages.</p> 

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>3. TRACKING AND THIRD-PARTY DATA</span>
            <p className='text-[15px] font-archivo font-light py-4'>Tracking: we use standard tracking technologies such as pixels and cookies to track user activity. Third-Party Platforms: When you use an application that runs on a third-party platform (e.g., AWS, Google, etc.), the provider of that third-party platform may collect information about you and your use of our application. Analytics and Advertising: We may use third-party analytics services to collect data about usage of our services. We may allow advertising platforms (including third part advertising agencies, networks, and delivery platforms) to collect data regarding advertisements that we may place on our websites. Third-party analytics tools and providers may use cookies to track your activities.</p> 

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>4. YOUR INFORMATION AND RIGHTS</span>
            <p className='text-[15px] font-archivo font-light py-4'>You can request access to your personal information, or correct or update or inaccurate personal information we hold about you. When you visit the “Profile & Information” portion of our website, where you have the ability to access and see a broad range of information about your account, including your contact information, your payment information, and various related information about your account (such as the content you have subscribed, viewed and rated). You must be signed in to access the “Account”. If you no longer want to continue, simply access the “Account” section of our website and uncheck those items to unsubscribe. Alternatively, click the “unsubscribe”. Please note that you cannot unsubscribe from Service-related correspondence from us, such as messages relating to your account transactions. For other requests, or if you have a question regarding our privacy practices, please contact us to support@TSports.com. We respond to all requests we receive from individuals wishing to exercise their protection rights in accordance with applicable.</p> 

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>5. ACCOUNT SECURITY</span>
            <p className='text-[15px] font-archivo font-light py-4'>We use security measures to protect the loss, misuse, and unauthorized alteration of the information under our control. Please be advised, however, that we cannot guarantee that our security measures will prevent disruptions or unauthorized access from occurring. You are solely responsible for (a) maintaining the security of your account(s) and (b) all activity that occurs under your account(s). You must notify us immediately if you suspect any unauthorized access to or use of your account(s). If you forget your account login information, you may request that we send it to the email address associated with your account(s).</p> 
            <p className='text-[15px] font-archivo font-light py-4'>You are solely responsible for (a) maintaining the security of your account(s) and (b) all activity that occurs under your account(s). You must notify us immediately if you suspect any unauthorized access to or use of your account(s). If you forget your account login information, you may request that we send it to the email address associated with your account(s).</p>

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>6. General Data Protection Regulation (GDPR)</span>
            <p className='text-[15px] font-archivo font-light py-4'>If you want to delete your activities for T Sports App, you can remove your information by following these steps:</p> 

            <ul>
              <li className='text-[15px] font-archivo font-light py-2'>1. Go to your Profile menu and click GDPR (General Data Protection Regulation) from the drop-down menu.</li>
              <li className='text-[15px] font-archivo font-light py-2'>2. You need to stop “Auto Renew” if it is activated to your service before deleting your T Sports account. So, enable Stop Auto Renew checkbox and click Continue to Account Deletion button.</li>
              <li className='text-[15px] font-archivo font-light py-2'>3. In the next page it will prompt with a Radio Button with a reminder that “This is permanent. When you delete your T Sports account, you won’t be able to retrieve the content or information you’ve shared on T Sports”</li>
              <li className='text-[15px] font-archivo font-light py-2'>4. Another reminder page will appear and you will be prompt “If you want to permanently delete your T Sports account, let us know. Once the deletion process begins, you won’t be able to reactivate your account or retrieve             any of the content or information you have added”. Click Delete Account button.</li>
              <li className='text-[15px] font-archivo font-light py-2'>5. Final warning page will appear of Data deletion.</li>
              <li className='text-[15px] font-archivo font-light py-2'>6. After clicking the Delete button you will get confirmation of your data deletion.</li>
              <li className='text-[15px] font-archivo font-light pt-2 pb-4'>7. DISCLOSURES TO THIRD PARTIES</li>
            </ul>

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>“TSports.com” may disclose information about you as follows:</span>
            <p className='text-[15px] font-archivo font-light py-4'>Authorized Service Providers: We may disclose your information to service providers involved in operating the “TSports.com” OTT Service. This includes payment providers, email service providers, content delivery networks, cloud storage providers, analytics service tools etc.</p>

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>7. DISPUTE RESOLUTION</span>
            <p className='text-[15px] font-archivo font-light py-4'>We are committed to working with you to obtain a fair resolution of any complaint. We encourage you to begin by contacting our service desk. We endeavor to respond to requests promptly.</p>

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>8. HOW WE COLLECT & USE GEO LOCATION DATA</span>
            <p className='text-[15px] font-archivo font-light py-4'>TSports.com collects your location information through your device GPS. We collect and use location data in real time to restrict/allow access to specific contents due to territory restriction set by International Cricket Council (ICC), English Premier League (EPL), Indian Premier League (BPL), Bangladesh Cricket Board (BCB) and other authorities. As content distributor, TSports.com is required to collect Location information and allow users access inside allowed territories only, as set by mentioned authorities. However, TSports.com does not store any location information or the actual location, they are used in real time only.</p>

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>9. HOW DO WE USE COOKIES?</span>
            <p className='text-[15px] font-archivo font-light py-4'>We uses cookies in a range of ways to improve your experience on our website, including data collected through cookies and cellphone usage, log file, device identifiers, location data, and clear gifs information to:</p>

            <ul>
              <li className='text-[15px] font-archivo font-light py-2 mx-3 list-disc'>
                 Remember this information so, you will not have to re-enter and re-login every time you visit or use our services;
              </li>
              <li className='text-[15px] font-archivo font-light py-2 mx-3 list-disc'>
                Provide custom, personalized information, and content, including pop up messages and notifications;
              </li>
              <li className='text-[15px] font-archivo font-light py-2 mx-3 list-disc'>
                Monitoring of our service and find out how effective it is;
              </li>
              <li className='text-[15px] font-archivo font-light py-2 mx-3 list-disc'>
                Monitoring of our service and find out how effective it is;
              </li>
              <li className='text-[15px] font-archivo font-light py-2 mx-3 list-disc'>
                Monitor traffic reports and visitor’s information and finding out the key demographics patterns to see the global usage of our service and products;
              </li>
              <li className='text-[15px] font-archivo font-light py-2 mx-3 list-disc'>
                Diagnose or fix problems that are related to our services; and
              </li>
              <li className='text-[15px] font-archivo font-light pt-2 pb-4 mx-3 list-disc'>
                Other work that may enhance the quality of our service.
              </li>
            </ul>

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>10. AMENDMENT AND CHANGES IN PRIVACY POLICY</span>
            <p className='text-[15px] font-archivo font-light py-4'>We reserve the right to amend, change, delete, and exchange any information from time to time. All the changes will be notified through our Website ( https://www.TSports.com ). We encourage you to keep checking this Privacy Policy page from time to time. You will be deemed to be in acceptance of any new changes that we do and after that you continue to use any or all of our services.</p>

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>11. Profile and Data Deletion</span>
            <p className='text-[15px] font-archivo font-light py-4'>As per regulations, you will need to request to TSports to delete your profile and data permanently via a Phone call to our support or Email. TSports will delete your profile immediately after receiving your request. You will be logged out from the App once the profile is deleted. However, due to regulations, your data will be retained for 60 days before it is permanently deleted. After 60 days all your data will be permanently deleted. Please note that all your subscriptions and purchases will be lost as soon as your profile is deleted. You will not be able to recover them even if you register using the same phone number or social login details again. The updated TSports Support number can be found at http://tsports.com and the email address to request to delete is digitalsupport@tsports.com</p>

            <span className='text-[18px] font-archivo font-medium text-[#333333]'>12. CONTACT US</span>
            <p className='text-[15px] font-archivo font-light py-4'>If you have any questions or concerns about this terms and condition, please contact us to: <br/> support@TSports.com </p>

          </div>
        </div>
        <div className="terms-modal-footer px-[45px] py-[25px] sticky bottom-0 z-50 bg-white">
          <form method="dialog" className="termscon-action-buttons flex justify-between gap-4 md:gap-8">
            <button
              onClick={onClose}
              className='w-[50%] bg-tsGrey hover:bg-gray-200 font-archivo text-[16px] md:text-[20px] text-black font-light py-[10px] md:py-[17px] rounded-md'>
              Cancel
            </button>
            <button
              className='w-[50%] bg-tsRed hover:bg-red-700 font-archivo text-[16px] md:text-[20px] text-white font-light py-[10px] md:py-[17px] rounded-md'>
              Accept
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default TermsAndConditionModal;