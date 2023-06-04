const firebaseConfig = {
  apiKey: "AIzaSyD6KGl0EfSfdZPCgjsMxvvz-ZvCtwY-my0",
  authDomain: "portal-financeiro-fd620.firebaseapp.com",
  projectId: "portal-financeiro-fd620",
  storageBucket: "portal-financeiro-fd620.appspot.com",
  messagingSenderId: "45212553291",
  appId: "1:45212553291:web:e14bca32483cf774ae3dce"
};
firebase.initializeApp(firebaseConfig);

function enviarEmail() {
  var email = document.getElementById("recuperarEmail").value;
  var emailData = {
      to: email,
      subject: "Recuperação de senha",
      body: "Olá, você solicitou a recuperação de senha. Aqui estão as suas informações de login: ..."
 } };