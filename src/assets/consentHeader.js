window.dataLayer = window.dataLayer || [];
gtag = function gtag(){dataLayer.push(arguments);}

if(localStorage.getItem('consentMode') === null){
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'denied',
    });
} else {
    gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));
}