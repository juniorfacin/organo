import TextComp from '../TextComp';
import './FormApp.css';

const FormApp = () => {
    return (
        <section className="formApp">
            <form>
                <h2>Preencha os dados para criar o card do</h2>
                <TextComp label="Nome" placeholder="Digite o seu nome" />
                <TextComp label="Cargo" placeholder="Digite o seu cargo" />
                <TextComp label="Time" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}
export default FormApp;