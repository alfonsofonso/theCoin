const loginButton = document.getElementById('login-button');
const gameArea = document.querySelector('.game-area');
var coin = document.getElementById("coin-flip");
var coinH = document.getElementById("coin-heads");
var coinT = document.getElementById("coin-tails");
var parrafo = document.getElementById("parrafo")
var contexto;
var osc,lfo;
var volumen,mainVol;

loginButton.addEventListener('click', () => {
    postData("https://api.openfort.xyz/v1/players")
    
    // Openfort API endpoint to initiate the login process
    const loginUrl = 'https://api.openfort.xyz/iam/v1/auth/signup';
    const page2="http://localhost/the_coin/cain/page2.html"
    // Your Openfort application ID
    const appId = 'pk_test_038c0bb5-46a3-5b25-baa5-8f31958a92a3';

    // Redirect URL to return to after successful login
    const redirectUrl = 'http://localhost:3000/callback';

    // Generate the login URL with necessary parameters
    const authorizeUrl = new URL(page2);
    authorizeUrl.searchParams.set('client_id', appId);
    authorizeUrl.searchParams.set('redirect_uri', redirectUrl);
    authorizeUrl.searchParams.set('response_type', 'code');
    authorizeUrl.searchParams.set('scope', 'openid');

    // Rediredestinationct to the Openfort login page
    window.location.href = authorizeUrl.toString();
   
});

function flipa(n){
    console.log("flipo",coin);
    hazSonido()
   coin= document.getElementById("coin-flip");
    coinH = document.getElementById("coin-heads");
    coinT = document.getElementById("coin-tails");
    parrafo = document.getElementById("parrafo")
    var dado=Math.random();
    if(dado<.5){
        console.log("cara")
       // coin.className="flipando"
        coin.id="acac";
    
        //coinH.className="coin-heads2"
        coinH.id="acac2";
    
        //coinT.className="coin-tails2"
        coinT.id="acac3"

        if (n == 1){
            parrafo.innerText = "YOU WON THE COIN!"            
        }else{
            parrafo.innerText = "YOU HAVE LOST YOUR MONEY!"
        }

    }else{
        console.log("cruz")
        //coin.className="flipando"
        coin.id="acac";//id nuevo de coin-flip
    
        //coinH.className="coin-heads2"
        coinH.id="acac3";
    
        //coinT.className="coin-tails2"
        coinT.id="acac2"

        if (n == 0){
            parrafo.innerText = "YOU WON THE COIN!"            
        }else{
            parrafo.innerText = "YOU HAVE LOST YOUR MONEY!"
        }
    }
   
}

// Example POST method implementation:
function postData(url = "", data = {}) {
    console.log("probando",url)
    // Default options are marked with *
    const response =  fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Autorization": "Bearer sk_test_90b5ca2d-f1d7-54ba-92b1-adf236e7af23"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    console.log("respuesta",response)
    return response.json; // parses JSON response into native JavaScript objects
  }
  
 
  function hazSonido(){
    contexto=new AudioContext();
    osc=contexto.createOscillator()
    osc.frequency.value=1400;
   lfo=contexto.createOscillator()
   lfo.frequency.value=1;
   mainVol=contexto.createGain()
    volumen=contexto.createGain()
    volumen.connect(mainVol)
    mainVol.gain.value=.8;
    mainVol.connect(contexto.destination)
    osc.connect(volumen)
    lfo.connect(volumen.gain)
    mainVol.gain.exponentialRampToValueAtTime(0.001,contexto.currentTime+8)
    lfo.start()
    osc.start();
  }