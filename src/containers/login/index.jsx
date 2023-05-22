import'../login/style.css'
import { useState } from 'react';
function Login() {
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

    return(
        <div className="containeres">
            <div className="containeres-login">
                <div className="wrap-login">
                    <form action="" className="login-form">
                        <span className="login-form-title">Bem Vindo a Pagina da ENPCT!</span>
                        <span className="login-form-title">
                        <img src="/src/components/img/ENPCT_Logo.png" alt="Logo da ENPCT" />  
                        </span>

                        <div className="wrap-input">
                            <input className={email !== "" ? 'has-val input' : 'input'}
                             type="email"
                             value={email}
                             onChange={e => setEmail(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input className={password !== "" ? 'has-val input' : 'input'}
                            type="password"
                            value={password}
                             onChange={e => setPassword(e.target.value)}  />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="containeres-login-form-btn">
                          <button className="login-btn">Login</button>  
                        </div>

                        <div className="text-center">
                            <span className="text1">Esqueceu a Senha?</span>
                            <a className="text2" href="#" >Recuperar</a>
                        </div>



                    </form>
                </div>
            </div>

        </div>

    );
}

export default Login;