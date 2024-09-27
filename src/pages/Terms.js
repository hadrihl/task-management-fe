import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Terms = () => {

    return (
        <div class="App">
            <Navbar />

            <header className="App-header">
                <h2>Terms and Conditions</h2>
                <div className='terms'>
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing and using the To-Do List App, you confirm your acceptance of these terms. If you do not agree with any part of these terms and conditions, you should discontinue using the app immediately.</p>

                    <h3>2. User Accounts</h3>
                    <p>In some instances, creating an account may be necessary to access specific features. It is your responsibility to keep your account information confidential, and you are solely responsible for any activity that occurs under your account. If you become aware of unauthorized use of your account, you should notify us immediately.</p>
                
                    <h3>3. Use of the App</h3>
                    <p>The To-Do List App is intended for personal use only. You are not permitted to use the app for any illegal or unauthorized purposes. Modification, distribution, or sale of any part of the app is prohibited. Should you violate these terms, we reserve the right to suspend or terminate your access without prior notice.</p>

                    <h3>4. Data and Privacy</h3>
                    <p>We take your privacy seriously. All user data, including tasks and account information, is stored securely, and we ensure that your data is not shared with third parties, except as required by law. By using the app, you consent to the collection and use of your data in accordance with our Privacy Policy.</p>

                    <h3>5. Intellectual Property</h3>
                    <p>All content, including designs, text, logos, and graphics, is the intellectual property of the creators of the To-Do List App. You agree not to copy, modify, or distribute any part of the app’s content without prior written permission from us.</p>

                    <h3>6. Limitation of Liability</h3>
                    <p>The To-Do List App is provided on an "as is" basis, without any guarantees or warranties, either express or implied. While we aim for the app to function smoothly, we cannot guarantee that it will be error-free or available at all times. To the fullest extent permitted by law, we are not liable for any damages or losses that may arise from your use of the app.</p>

                    <h3>7. Modification of the Terms</h3>
                    <p>We may revise these terms and conditions at any time. Any updates will be reflected in the "Last updated" date at the top of this page. Continued use of the app following any changes constitutes your acceptance of the updated terms.</p>

                    <h3>8. Termination</h3>
                    <p>If necessary, we reserve the right to terminate or suspend your access to the app at any time, without prior notice, particularly in the event of a breach of these terms.</p>

                    <h3>9. Governing Law</h3>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of Malaysia. Any disputes arising from your use of the app shall be subject to the jurisdiction of the courts in Malaysia.</p>

                    <h3>10. Contact Information</h3>
                    <p>If you have any questions about these terms and conditions, or require assistance, please contact us at <a href="mailto:support@todolistapp.com.my">support@todolistapp.com.my</a></p>
                </div>
            </header>

            <Footer />
        </div>
    ) 

}

export default Terms;