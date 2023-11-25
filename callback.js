const code = window.location.searchParams.get('code');

// Openfort API endpoint to exchange the authorization code for an access token
const tokenUrl = 'https://api.openfort.xyz/oauth2/token';

// Your Openfort application ID and client secret
const appId = 'YOUR_OPENFORT_APP_ID';
const clientSecret = 'YOUR_OPENFORT_CLIENT_SECRET';

// Redirect URL used for authorization
const redirectUrl = 'http://localhost:3000/callback';

// Exchange the authorization code for an access token
fetch(tokenUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: appId,
        client_secret: clientSecret,
        redirect_uri: redirectUrl,
        code: code
    })
}).then(response => response.json()).then(data => {
    const accessToken = data.access_token;

    // Use the access token to make requests to the Openfort API
    // ...

    // Hide login form and show game area
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.game-area').innerHTML = '<h1>Game Area</h1>';
});
