public class iPhone implements ReprodutorMusical, AparelhoTelefonico, NavegadorInternet {
    private boolean ligado;
    private String musicaAtual;
    private String numeroAtual;
    private String paginaAtual;

    public iPhone() {
        this.ligado = false;
    }

    public void ligar() {
        this.ligado = true;
    }

    public void desligar() {
        this.ligado = false;
    }

    public boolean estaLigado() {
        return ligado;
    }

    public void tocarMusica(String musica) {
        this.musicaAtual = musica;
        System.out.println("Tocando música: " + musica);
    }

    public void pausarMusica() {
        System.out.println("Música pausada.");
    }

    public void avancarMusica() {
        System.out.println("Avançar para a próxima música.");
    }

    public void retrocederMusica() {
        System.out.println("Retroceder para a música anterior.");
    }

    public void fazerChamada(String numero) {
        this.numeroAtual = numero;
        System.out.println("Chamando o número: " + numero);
    }

    public void receberChamada(String numero) {
        System.out.println("Recebendo chamada do número: " + numero);
    }

    public void enviarMensagem(String numero, String mensagem) {
        System.out.println("Enviando mensagem para o número " + numero + ": " + mensagem);
    }

    public void abrirPagina(String url) {
        this.paginaAtual = url;
        System.out.println("Abrindo página: " + url);
    }

    public void pesquisar(String termo) {
        System.out.println("Pesquisando por: " + termo);
    }
}
