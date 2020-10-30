import * as React from "react";
import { Card, CardContent, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const PrivacyPage = function () {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Typography variant='h4'>{t("privacy_and_terms")}</Typography>
      <Paper variant='outlined'>
        <Tabs
          value={value}
          onChange={(e, v) => setValue(v)}
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='PRIVACY POLICY' />
          <Tab label='TERMS AND CONDITIONS' />
        </Tabs>
      </Paper>
      <Card variant='outlined'>
        <CardContent>
          <div hidden={value !== 0}>
            <PrivacyContent />
          </div>
          <div hidden={value !== 1}>
            <TermsContent />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const PrivacyContent = function () {
  return (
    <div>
      <Typography variant='body1'>
        This privacy policy has been compiled to better serve those who are concerned with how their 'Personally
        Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information
        security, is information that can be used on its own or with other information to identify, contact, or locate a
        single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear
        understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in
        accordance with our website.
      </Typography>
      <Typography variant='body1'>
        <strong>Information Collection and Use</strong>
      </Typography>
      <Typography variant='body1'>
        For a better experience, while using our Service, we may require you to provide us with certain personally
        identifiable information. The information that we request will be retained by us and used as described in this
        privacy policy. The app does use third party services that may collect information used to identify you.
      </Typography>
      <Typography variant='body1'>
        <strong>Security</strong>
      </Typography>
      <Typography variant='body1'>
        We value your trust in providing us your Personal Information, thus we are striving to use commercially
        acceptable means of protecting it. But remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. We implement a
        variety of security measures when a user enters, submits, or accesses their information to maintain the safety
        of your personal information.
      </Typography>
      <Typography variant='body1'>
        <strong>Cookies</strong>
      </Typography>
      <Typography variant='body1'>
        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are
        sent to your browser from the websites that you visit and are stored on your device's internal memory. This
        Service does not use these “cookies” explicitly. However, the site may use third party code and libraries that
        use “cookies” to collect information and improve their services. You have the option to either accept or refuse
        these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may
        not be able to use some features of this site.
      </Typography>
      <Typography variant='body1'>
        <strong>Third-party disclosure</strong>
      </Typography>
      <Typography variant='body1'>
        We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless
        we provide users with advance notice. This does not include website hosting partners and other parties who
        assist us in operating our website, conducting our business, or serving our users, so long as those parties
        agree to keep this information confidential. We may also release information when it's release is appropriate to
        comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
        <br />
        However, non-personally identifiable visitor information may be provided to other parties for marketing,
        advertising, or other uses.
      </Typography>
      <Typography variant='body1'>
        <strong>Third-party links</strong>
      </Typography>
      <Typography variant='body1'>
        We may include or offer third-party links in our services. These third-party sites have separate and independent
        privacy policies. We therefore have no responsibility or liability for the content and activities of these
        linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these
        sites.
      </Typography>
      <Typography variant='body1'>
        <strong>Change your personal information</strong>
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>By logging in to your account</Typography>
        </li>
        <li>
          <Typography variant='body1'>By chatting with us or by sending us a support ticket</Typography>
        </li>
      </ul>
      <Typography variant='body1'>
        <strong>How does our site handle Do Not Track signals?</strong>
      </Typography>
      <Typography variant='body1'>
        We honor the Do Not Track setting configured on the user’s web browser, but if there is an error on the server
        in sending data to the client, the error details may be saved.
      </Typography>
      <Typography variant='body1'>
        <strong>Does our site allow third-party behavioral tracking?</strong>
      </Typography>
      <Typography variant='body1'>
        It's also important to note that we allow third-party behavioral tracking.
      </Typography>
      <Typography variant='body1'>
        <strong>Fair Information Practices</strong>
      </Typography>
      <Typography variant='body1'>
        The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts
        they include have played a significant role in the development of data protection laws around the globe.
        Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply
        with the various privacy laws that protect personal information.
      </Typography>
      <Typography variant='body1'>
        <strong>CAN SPAM Act</strong>
      </Typography>
      <Typography variant='body1'>
        We collect your email address in order to send information, respond to inquiries, and/or other requests or
        questions.
      </Typography>
      <ul>
        <li>
          <Typography variant='body1'>Not use false or misleading subjects or email addresses.</Typography>
        </li>
        <li>
          <Typography variant='body1'>Identify the message as an advertisement in some reasonable way.</Typography>
        </li>
        <li>
          <Typography variant='body1'>Include the physical address of our business or site headquarters.</Typography>
        </li>
        <li>
          <Typography variant='body1'>
            Monitor third-party email marketing services for compliance, if one is used.
          </Typography>
        </li>
        <li>
          <Typography variant='body1'>Honor opt-out/unsubscribe requests quickly.</Typography>
        </li>
        <li>
          <Typography variant='body1'>
            Allow users to unsubscribe by using the link at the bottom of each email.
          </Typography>
        </li>
      </ul>
      <Typography variant='body1'>
        <strong>Changes to This Privacy Policy</strong>
      </Typography>
      <Typography variant='body1'>
        We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for
        any changes. These changes are effective immediately after they are posted on this page.
      </Typography>
      <Typography variant='body1'>
        <strong>Children’s Privacy</strong>
      </Typography>
      <Typography variant='body1'>
        myTOA Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable
        information from children under 13. In the case we discover that a child under 13 has provided us with personal
        information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that
        your child has provided us with personal information, please contact us so that we will be able to take
        necessary actions.
      </Typography>
      <Typography variant='body1'>
        <strong>Contacting Us</strong>
      </Typography>
      <Typography variant='body1'>
        If there are any questions regarding this privacy policy, you may contact us using the information below.
      </Typography>
      <Typography variant='body1'>The Orange Alliance</Typography>
      <Typography variant='body1'>contact@theorangealliance.org</Typography>
      <Typography variant='body1'>Last Edited on 2019-06-08</Typography>
      <Typography variant='body1'></Typography>
    </div>
  );
};

const TermsContent = function () {
  return (
    <div>
      <Typography variant='body1'>
        <strong>This site is under an MIT License (MIT)</strong>
      </Typography>
      <Typography variant='body1'>Copyright (c) 2019 The Orange Alliance</Typography>
      <Typography variant='body1'>Copyright (c) 2014 The Blue Alliance</Typography>
      <Typography variant='body1'>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </Typography>
      <Typography variant='body1'>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </Typography>
      <Typography variant='body1'>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </Typography>
      <Typography variant='body1'>
        You must be at least 13 years old or the minimum legal age in your country to use myTOA.
      </Typography>
    </div>
  );
};

export default PrivacyPage;
