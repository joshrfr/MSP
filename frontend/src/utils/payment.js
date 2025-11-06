export const initiateCheckout = async (planId, userEmail = '', userName = '') => {
  try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || window.location.origin;
    const originUrl = window.location.origin;
    
    const response = await fetch(`${backendUrl}/api/payments/checkout/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan_id: planId,
        origin_url: originUrl,
        user_email: userEmail || undefined,
        user_name: userName || undefined
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    
    // Redirect to Stripe Checkout
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error('No checkout URL received');
    }
  } catch (error) {
    console.error('Payment error:', error);
    alert('Unable to process payment. Please call us at (850) 610-3889 for assistance.');
  }
};
