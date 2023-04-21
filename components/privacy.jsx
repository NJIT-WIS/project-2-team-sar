import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Privacy = () => {
    return ( 

        <Container className="my-5">
            <Row class="col-lg-10 mx-auto">
                <h1 className="text-left mb-4">Privacy Policy</h1>
                <p className="mt-2">Date Updated: April 22, 2023</p>
                <hr></hr>

                <div class="lead mt-2">
                    <p> MyWebClass ("us", "we", or "our") operates the mywebclass.org website (the "Site"). </p>
                    <p>Your privacy is important to us. It is MyWebClass' policy to respect your privacy regarding any information we may collect from you across our website, mywebclass.org, and other sites we own and operate.</p>
                    <p>This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</p>
                    <p>We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p>
                </div>
                <div class="lead">
                <h3 id="Information-collected">Information we collect</h3>
                    <hr></hr>
                    <p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email address, phone number, and postal address ("Personal Information").</p>
                    <p> We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>
                </div>    
                <h3 id="Log data">Log Data</h3>
                    <hr></hr>
                    <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").</p>
                    <p>This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
                    <p>In addition, we may use third-party services such as Google Analytics that collect, monitor and analyze this type of information in order to increase our Site's functionality. These third-party service providers have their own privacy policies addressing how they use such information.</p>

                <h3 id="GDPR Compliance">General Data Protection Rights(GDPR) Compliance</h3>
                    <hr></hr>
                    <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). We aim to take reasonable steps to allow you to correct, amend, delete or limit the use of your Personal Data.</p>
                    <p>If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, pleasae contact us.</p>
                    <p>In certain circumstances, you have the following data protection rights:</p>
                    <ul>
                        <li>The right to access, update or delete the information we have on you.</li>
                        <li>The right of rectification.</li>
                        <li>The right to object.</li>
                        <li>The right of restriction.</li>
                        <li>The right to data portability.</li>
                        <li>The right to withdraw consent.</li>
                    </ul>
                    <p>Please note that we may ask you to verify your identity before responding to such requests.</p>
                    <p>If you are a resident of the EEA, you have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the EEA.</p>
                </Row>
        </Container>

    );
};

export default Privacy;