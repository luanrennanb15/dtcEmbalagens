# Site DTC Embalagens

Site institucional estático. Sem build, sem dependência, sem custo de servidor.
Para ver: abra o `index.html` no navegador (duplo clique).

## Identidade visual

Tudo foi extraído do cartão de visita que está em `imagens/`.

A marca é monocromática azul, sem nenhuma cor quente. As cores estão no topo de
`assets/css/style.css`, no bloco `:root`: o azul do cubo da logo é `#2a5ca8`
(`--cor-marca`), o azul institucional usado em títulos e no hero é `#1b4586`, e
o azul vivo dos botões é `#3d8be8`. Como a paleta é toda azul, o único contraste
forte do site é o verde do WhatsApp — isso é proposital, faz o botão de contato
saltar sem brigar com a marca.

A logo em `assets/img/logo.svg` é o cubo isométrico redesenhado a partir da foto
do cartão. Funciona bem, mas se o designer tiver o arquivo vetorial original,
vale substituir — a reconstrução é fiel na forma, não necessariamente no valor
exato dos azuis, que foram estimados de uma foto com pouca luz.

O nome segue o cartão: "DTC" em cinza-escuro e "EMBALAGENS" em azul, com
espaçamento largo.

## Como editar

Praticamente tudo que muda no dia a dia está em **um único arquivo**:
`assets/js/config.js`. Consultores, produtos, categorias, diferenciais e
segmentos saem de lá. Tudo que ainda precisa ser confirmado com o cliente está
marcado com `// TODO`.

Os dois números do cartão já estão configurados: Douglas (15) 98838-6382 e
Tainá (15) 98810-7191. O primeiro da lista é o contato padrão do botão
flutuante. O Instagram `@dtc_embalagem` também já está ligado.

Campos vazios no config simplesmente não aparecem no site. Isso é de propósito:
é melhor a seção sumir do que exibir um endereço ou CNPJ inventado.

## Responsividade

O layout tem cinco faixas, definidas no fim do `style.css`: 1200px (notebook
pequeno), 1024px (tablet deitado — hero e conteúdo empilham, diferenciais viram
2x2), 900px (tablet em pé — o menu vira hambúrguer), 560px (celular — tudo em
uma coluna, botões de largura total) e 380px (celular pequeno — reduz respiros).

Há mais duas regras de contexto. Uma para telas de toque, que aumenta os alvos
de clique, desliga os efeitos de hover (em toque eles ficam "grudados" depois do
clique) e força 16px nos campos do formulário, senão o iPhone dá zoom sozinho ao
focar num campo. Outra para celular deitado, que reduz as alturas para o
conteúdo não ficar espremido.

A altura do cabeçalho é a variável `--altura-cabecalho`. Ela é usada em três
lugares que precisam bater entre si: a altura da barra, a posição do topo do
menu mobile e o `scroll-padding` das âncoras. Se for mexer na altura do
cabeçalho, mexa só na variável.

Vale abrir no celular de verdade antes de publicar. O modo responsivo do
navegador (F12) acerta o layout, mas não reproduz teclado virtual, rolagem por
toque nem a barra do navegador aparecendo e sumindo.

## Preços

O site não mostra preço em lugar nenhum, e o `config.js` também não tem preço
dentro. Isso é intencional: o `config.js` é baixado pelo navegador de qualquer
visitante, então qualquer concorrente conseguiria abrir e ler a tabela inteira.

A tabela real está em `TABELA-PRECOS-INTERNA.md`, que é só referência e não é
lido pelo site. Ele já está no `.gitignore`, então nunca vai para o GitHub. Mas
atenção: se você publicar arrastando a pasta inteira para o Netlify, o arquivo
vai junto. Apague antes de fazer upload manual.

## O que ainda falta

As medidas do catálogo já são as reais, passadas pelo Douglas. Falta confirmar
duas coisas que ficaram ambíguas na lista dele, ambas anotadas no arquivo de
preços: se os sacos de lixo reforçados custam mesmo o mesmo valor nos quatro
tamanhos, e quantos copos vêm em cada caixa. Garrafas aparecem no cartão de
visita mas não vieram com medida nem preço, então estão no site como "sob
consulta".

Pegar também CNPJ, e-mail, cidade/região de atendimento e horário, e revisar a
lista de promessas na seção "A empresa" — há um comentário no `index.html`
marcando exatamente onde.

Fotos dos produtos fazem diferença grande na conversão. Basta salvar em
`assets/img/` e preencher o campo `imagem` de cada produto no config. Sem foto o
card mostra um ícone de caixa, que funciona mas converte menos.

## Formulário de orçamento

Sem configuração, o formulário monta a mensagem e abre o WhatsApp já preenchido
— funciona bem e não custa nada. Para receber por e-mail, crie uma conta
gratuita no Formspree, copie a URL do endpoint e cole em `CONFIG.formEndpoint`.

## Publicar

O site é estático, então qualquer hospedagem serve, e as boas são gratuitas.

### GitHub Pages

A pasta já é um repositório apontando para
`github.com/luanrennanb15/dtcEmbalagens`. No terminal, dentro da pasta:

```
git add .
git commit -m "Site DTC Embalagens"
git push origin main
```

Depois, no GitHub: **Settings → Pages → Source: Deploy from a branch →
Branch: main → pasta / (root) → Save**. Em um ou dois minutos o site fica em
`https://luanrennanb15.github.io/dtcEmbalagens/`.

O repositório precisa ser **público** — no plano gratuito o Pages só funciona
assim. Isso significa que qualquer pessoa consegue ler o código. O
`TABELA-PRECOS-INTERNA.md` e a pasta `imagens/` estão no `.gitignore`
justamente por isso, então não sobem. Confira com `git status` antes do commit:
se algum dos dois aparecer na lista, pare e verifique o `.gitignore`.

### Netlify

Para apresentar ao cliente, o Netlify costuma ficar melhor: o endereço sai como
`dtc-embalagens.netlify.app`, sem o nome de usuário e sem o `/dtcEmbalagens/` no
meio. É só arrastar a pasta em `app.netlify.com/drop` — não precisa de git nem
de conta para o primeiro teste. Só lembre de apagar o `TABELA-PRECOS-INTERNA.md`
antes, porque no upload manual o `.gitignore` não vale.

### Ao sair da demonstração

O `index.html` está com `noindex` ligado de propósito, para o Google não indexar
o endereço provisório e depois disputar posição com o domínio definitivo. Quando
publicar no domínio real, troque para `index, follow` e atualize as URLs de
`canonical` e `og:url` — há um comentário no arquivo marcando o lugar.

Cadastre também o negócio no Google Meu Negócio. Para uma distribuidora local
recém-aberta, o perfil no Google costuma trazer mais contato nos primeiros meses
do que o site sozinho — e o site serve justamente para dar credibilidade a quem
clicar de lá.
