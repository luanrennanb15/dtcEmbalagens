# Site DTC Embalagens

Site institucional estático. Sem build, sem dependência, sem custo de servidor.
Para ver: abra o `index.html` no navegador (duplo clique).

## Identidade visual

Tudo foi extraído do cartão de visita que está em `imagens/`.

A marca é monocromática azul, sem nenhuma cor quente. As cores estão no topo de
`assets/css/style.css`, no bloco `:root`, e foram amostradas da arte digital
oficial da DTC (o guia de tamanhos) — não estimadas da foto do cartão, que
saíram bem mais claras por causa da iluminação. Os valores reais são `#0050b3`
para o azul da marca e `#002d7e` para o navy institucional.

A logo em `assets/img/logo.svg` é o cubo isométrico refeito com essa cor. O logo
real é de uma cor só, com as faces separadas apenas por vãos brancos — a versão
anterior tinha três tons de azul, o que estava errado. O nome segue o cartão:
"DTC" em cinza-escuro e "EMBALAGENS" em azul, com espaçamento largo.

### Sobre o verde do WhatsApp

Existem dois verdes no `:root`, e a diferença é proposital. O verde oficial do
WhatsApp (`#25d366`) é claro demais para receber texto branco em cima: dá
1,98:1 de contraste, quando o mínimo legível é 4,5:1. Então `--cor-whatsapp`
é uma versão escurecida (`#0a8339`, 4,86:1) usada nos botões com texto, e
`--cor-whatsapp-oficial` só aparece no botão flutuante, que no celular é apenas
o ícone — reconhecível pela forma e pela cor, sem texto para ler.

Escurecer o verde criou um segundo problema: no hero navy ele deixa de se
destacar do fundo. As duas exigências se excluem matematicamente (uma pede
luminância abaixo de 0,183, a outra acima de 0,202). A saída foi dar ao botão
um contorno claro por dentro, que separa do fundo sem clarear o preenchimento.

Todas as combinações de cor do site foram medidas e passam no mínimo de
contraste da WCAG.

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

## Guia de tamanhos

A arte `assets/img/guia-tamanhos.jpg` ganhou seção própria entre o catálogo e
"A empresa". No desktop ela fica ao lado do texto; no celular vai abaixo, com
largura limitada para não virar uma parede. Clicar abre a imagem em tamanho
real, o que no celular aciona o visualizador nativo com zoom — sem precisar de
biblioteca de lightbox.

**Atenção:** a arte lista sete medidas (25x35, 30x40, 35x45, 38x48, 40x50, 45x60
e 70x90), mas a lista de preços do Douglas só cobre quatro delas. Ou o catálogo
está incompleto, ou a arte anuncia medidas que ele não tem. Vale alinhar antes
de publicar.

## Fotos dos produtos

Todos os produtos do catálogo têm foto, em `assets/img/produtos/`. Elas carregam
sob demanda, então não pesam na abertura da página.

Garrafas plásticas estão fora do ar por enquanto — o produto está comentado no
`config.js` e o texto do site não menciona mais garrafas, para não prometer o
que o catálogo não mostra. A foto continua salva. Para reativar, apague as
linhas de comentário em volta do bloco no `config.js` e recoloque a palavra nos
textos (descrição da home, intro do catálogo, rodapé e meta tags).

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
