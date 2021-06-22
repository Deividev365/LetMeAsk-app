import {useHistory} from 'react-router-dom'

import {firebase} from '../services/firebase';


import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import {Button} from '../components/Button';


import '../styles/auth.scss';
import { auth } from '../services/firebase';

export function Home() {

    //const history = useHistory();


    // function to change pages and signIm //
    function handleCreateRoom() {

        const provider = new firebase.auth.GoogleAuthProvider

        auth.signInWithPopup(provider).then(result => {
            
            console.log(result);

        });


      //  history.push('/rooms/new');
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