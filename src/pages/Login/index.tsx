import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

const Login: React.FC = (props) => {

  const history = useHistory();
  const {signInWithGoogle, user, signOut} = useAuth();

  async function signIn(){
    if (!user) await signInWithGoogle();
    history.push('/profile');
  }

  return(
    <main>
      <div className="enter">
        <h1>CQM Helper</h1>
        <span>Site desenvovido para o auxilio na pratica do CQM, utilzando a mesa radiônica</span>
        <p>Name: {user?.name}</p>
        <p>Id: {user?.id}</p>
        <p>Email: {user?.email}</p>

        <div className="login">
          <Button onClick={signIn}>Fazer login comm google</Button>
          <Button onClick={signOut}>Sair</Button>
        </div>
      </div>
    </main>
  );
}

export default Login;