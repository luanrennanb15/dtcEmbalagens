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

## Fotos dos produtos

Os nove produtos têm foto, em `assets/img/produtos/`. As nove somam 444 KB e
carregam sob demanda, então não pesam na abertura da página.

As fotos foram padronizadas antes de entrar no site: recortadas na borda do
produto, redimensionadas para o produto ocupar 92% do quadro e coladas numa tela
branca de 900x675 (proporção 4:3, a mesma da moldura do card). É por isso que os
cards ficam idênticos mesmo os originais tendo tamanhos bem diferentes, de
491x419 a 1536x1024.

A de "Embalagens em Geral" exigiu um passo a mais: a faixa de produtos era muito
larga (2,9:1) e, espremida no card, os itens ficariam pequenos demais para
reconhecer. Em vez de encolher tudo, recortei um trecho de 4:3 com potes,
frascos e sacos zip — variedade suficiente para a mensagem do card, com os itens
em tamanho legível e nenhum cortado pela borda.

Cinco dos originais vieram com título e descrição escritos dentro da imagem.
Esse texto foi apagado no tratamento, de propósito: ele repetiria o que o card
já escreve logo abaixo, ficaria ilegível no tamanho real de exibição, não é lido
pelo Google e não funciona em leitor de tela. Texto é papel do HTML; a imagem
mostra o produto.

Para adicionar uma foto nova, o caminho seguro é repetir esse padrão: fundo
branco, produto centralizado, arquivo salvo em 900x675. Depois é só apontar o
campo `imagem` do produto no `config.js` para `assets/img/produtos/arquivo.jpg`.

Se a foto vier em outra proporção o site não quebra — o CSS usa `object-fit:
contain`, que reduz a imagem até caber inteira e nunca corta. Só vai sobrar
faixa branca dos lados, e o card ficará visualmente diferente dos outros.

Guarde os originais em `imagens/produtos/`, que está no `.gitignore` e não vai
para o site. Só as versões tratadas dentro de `assets/` são publicadas.

## Formulário de orçamento

Sem configuração, o formulário monta a mensagem e abre o WhatsApp já preenchido
— funciona bem e não custa nada. Para receber por e-mail, crie uma conta
gratuita no Formspree, copie a URL do endpoint e cole em `CONFIG.formEndpoint`.

## Publicar

O site é estático, então qualquer hospedagem serve. As opções gratuitas mais
simples são Netlify (arrastar a pasta em app.netlify.com/drop e está no ar),
Vercel e GitHub Pages — este último aproveita o repositório git que já existe na
pasta. Depois é só apontar o domínio para a hospedagem escolhida.

Ao publicar, atualize a URL nas meta tags do `index.html` (`canonical` e
`og:url`) e cadastre o negócio no Google Meu Negócio. Para uma distribuidora
local recém-aberta, o perfil no Google costuma trazer mais contato nos primeiros
meses do que o site sozinho — e o site serve justamente para dar credibilidade a
quem clicar de lá.
