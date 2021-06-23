import {useHistory} from 'react-router-dom';


import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import {Button} from '../components/Button';


import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';

export function Home() {

    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();


    // function to change pages and signIm //
    async function handleCreateRoom() {

        if(!user) {
            await signInWithGoogle();
        }

            history.push('/rooms/new');
        }
        

    

    return(
        <div id = "page-auth">

            <aside>
                <img src={illustrationImg} alt="illustration-img" />                
                <strong>Crie Salas de Q&amp;A ao-vivo.</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real.</p>
            </aside>


            <main>

                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk-Logo-img" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="googleIcon-logo" />
                        Crie a Sua Sala com o Google

                    </button>

                    <div className="separator">Ou entre em uma sala</div>

                    <form>
                        <input
                         type="text"
                         placeholder="Digite o Código da sala"
                         
                         
                         
                         />
                         <Button type="submit">Entrar na Sala</Button>
                    </form>

                </div>


            </main>




        </div>
    )
}