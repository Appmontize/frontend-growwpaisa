import React, { useState } from 'react';
import axios from 'axios';

const RazorpayPayment = () => {
    const [transactionId, setTransactionId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handlePayment = async () => {
        try {
            // Request the backend to create a Razorpay order
            const response = await axios.post('/api/create-order.php', { transactionId });
            const { orderId, amount, key } = response.data;

            // Initialize Razorpay
            const options = {
                key: key, // Razorpay API Key
                amount: amount.toString(),
                currency: "INR",
                name: "Your App Name",
                description: "Redeem Coins",
                order_id: orderId,
                handler: async function (response) {
                    // Send payment details to backend for verification
                    const verification = await axios.post('/api/verify-payment.php', {
                        transactionId,
                        ...response,
                    });

                    if (verification.data.success) {
                        setSuccessMessage("Payment successful!");
                    } else {
                        setSuccessMessage("Payment verification failed.");
                    }
                },
                prefill: {
                    name: "User Name",
                    email: "user@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error("Payment error:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                required
            />
            <button onClick={handlePayment}>Pay</button>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default RazorpayPayment;
