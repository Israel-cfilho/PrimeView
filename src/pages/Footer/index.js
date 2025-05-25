import { FooterContainer, Text, Link, Links } from "./FooterStyled";

function Footer() {
    return (
        <FooterContainer>
            <Text>&copy; 2025 PrimeView. Todos os direitos reservados.</Text>
            <Links>
                <Link href="#">Termos de Uso</Link>
                <Link href="#">Privacidade</Link>
                <Link href="#">Contato</Link>
            </Links>
        </FooterContainer>
    )
}

export default Footer;