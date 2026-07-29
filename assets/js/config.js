/* ============================================================
   DTC EMBALAGENS — ARQUIVO DE CONFIGURAÇÃO
   ------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para mudar
   contatos, textos e produtos do site.
   Tudo marcado com  // TODO  ainda precisa ser confirmado.

   ATENÇÃO: não coloque preço aqui. Este arquivo fica público
   no site e qualquer concorrente consegue abrir e ler.
   A tabela de preços está em TABELA-PRECOS-INTERNA.md.
   ============================================================ */

const CONFIG = {
  // ---------- DADOS DA EMPRESA ----------
  empresa: {
    nome: "DTC Embalagens",
    slogan: "Preço baixo todo dia e qualidade garantida!", // do cartão de visita
    descricaoCurta:
      "Sacolas plásticas, copos descartáveis, sacos de lixo e sacos acoplados. Atendimento direto com quem vende, preço por volume e entrega na região.",
    cnpj: "", // TODO: pedir. CNPJ visível pesa MUITO para cliente indústria.
    fundacao: "2025", // TODO: confirmar ano de abertura
  },

  // ---------- CONSULTORES / WHATSAPP ----------
  // O primeiro da lista é o contato padrão (botão flutuante e CTAs).
  consultores: [
    {
      nome: "Douglas",
      cargo: "Comercial",
      whatsapp: "5515988386382",
      exibicao: "(15) 98838-6382",
    },
    {
      nome: "Tainá",
      cargo: "Comercial",
      whatsapp: "5515988107191",
      exibicao: "(15) 98810-7191",
    },
  ],

  // ---------- OUTROS CONTATOS ----------
  contato: {
    email: "", // TODO: não estava no cartão — pedir
    instagram: "https://instagram.com/dtc_embalagem",
    instagramUser: "@dtc_embalagem",
    // TODO: confirmar cidade/região. O DDD 15 é da região de Sorocaba (SP),
    // mas não vou afirmar sem confirmação. Campo vazio = a seção some.
    cidade: "",
    uf: "",
    endereco: "", // TODO: se houver ponto físico, preencher — aumenta a confiança
    horario: "", // TODO: ex. "Segunda a sexta, 8h às 18h"
  },

  // ---------- MENSAGEM PADRÃO DO WHATSAPP ----------
  mensagemPadrao:
    "Olá! Vim pelo site da DTC Embalagens e gostaria de solicitar um orçamento.",

  // ---------- FORMULÁRIO DE ORÇAMENTO ----------
  // Cole a URL do Formspree (gratuito) em https://formspree.io
  // Vazio = o formulário monta a mensagem e abre o WhatsApp já preenchido.
  formEndpoint: "", // TODO

  // ---------- DIFERENCIAIS ----------
  diferenciais: [
    {
      icone: "tag",
      titulo: "Preço baixo todo dia",
      texto:
        "Trabalhamos com margem enxuta e venda em pacote, fardo e caixa fechada. Quanto mais você leva, melhor fica a conta.",
    },
    {
      icone: "shield",
      titulo: "Qualidade garantida",
      texto:
        "Sacola que não rasga na alça e copo que não trinca na mão. Se o item não servir para sua operação, a gente resolve.",
    },
    {
      icone: "headset",
      titulo: "Você fala com quem vende",
      texto:
        "Sem call center e sem intermediário. Chame Douglas ou Tainá no WhatsApp e a resposta vem de quem fecha o pedido.",
    },
    {
      icone: "truck",
      titulo: "Entrega na região",
      texto:
        "Atendemos comércios e empresas da região. Combine dia e horário que funciona para o seu estoque.",
    },
  ],

  // ---------- CATEGORIAS ----------
  categorias: [
    { id: "sacolas", nome: "Sacolas Plásticas" },
    { id: "copos", nome: "Copos" },
    { id: "sacos-lixo", nome: "Sacos de Lixo" },
    { id: "diversos", nome: "Embalagens em Geral" },
  ],

  // ---------- PRODUTOS ----------
  // Medidas e formas de venda conforme a tabela passada pelo Douglas.
  // O campo "unidade" mostra como o produto é vendido — isso responde
  // metade das dúvidas antes do cliente perguntar.
  produtos: [
    {
      nome: "Sacola Branca Alça Camiseta",
      categoria: "sacolas",
      descricao:
        "A sacola mais pedida do comércio. Alça camiseta reforçada, boa para mercado, padaria e loja de rua.",
      medidas: ["30x40cm", "38x48cm", "40x50cm", "45x60cm"],
      unidade: "Pacote de 3 kg ou 5 kg, conforme a medida",
      imagem: "assets/img/produtos/sacola-branca.jpg",
    },
    {
      nome: "Sacola Preta Alça Camiseta",
      categoria: "sacolas",
      descricao:
        "Mesma resistência da branca, na versão preta — indicada para quem precisa de discrição no que vai dentro.",
      medidas: ["30x40cm", "40x50cm"],
      unidade: "Pacote de 5 kg",
      imagem: "assets/img/produtos/sacola-preta.jpg",
    },
    {
      nome: "Sacola Amarela Alça Camiseta",
      categoria: "sacolas",
      descricao:
        "Opção colorida para quem quer destacar a sacola do comércio na rua.",
      medidas: ["38x48cm"],
      unidade: "Pacote de 3 kg",
      imagem: "assets/img/produtos/sacola-amarela.jpg",
    },
    {
      nome: "Sacola Milheira Plástico Virgem",
      categoria: "sacolas",
      descricao:
        "Feita em plástico virgem: mais resistente, mais transparente e com acabamento melhor que a sacola reciclada. Vendida por milheiro, com contagem certa.",
      medidas: ["25x35cm", "38x48cm"],
      unidade: "Pacote com 1.000 unidades",
      imagem: "assets/img/produtos/sacola-milheira.jpg",
    },
    {
      nome: "Copo Descartável",
      categoria: "copos",
      descricao:
        "Copos para água, café, refrigerante e chopp. Resistência uniforme, sem trincar na hora de servir.",
      medidas: ["50ml", "80ml", "150ml", "180ml", "770ml"],
      unidade: "Caixa fechada",
      imagem: "assets/img/produtos/copo-descartavel.jpg",
    },
    {
      nome: "Saco de Lixo Reforçado",
      categoria: "sacos-lixo",
      descricao:
        "Espessura reforçada para uso comercial e resíduo pesado. Não rasga na hora de retirar do cesto.",
      medidas: ["20L", "40L", "60L", "100L"],
      unidade: "Pacote fechado",
      imagem: "assets/img/produtos/saco-lixo.jpg",
    },
    {
      nome: "Saco Acoplado (picotado)",
      categoria: "diversos",
      descricao:
        "Saco plástico em bloco picotado, destacado folha a folha. Prático no balcão de hortifruti, açougue e padaria.",
      medidas: ["400 folhas", "500 folhas"],
      unidade: "Bloco",
      imagem: "assets/img/produtos/saco-acoplado.jpg",
    },
    {
      nome: "Garrafas Plásticas",
      categoria: "diversos",
      descricao:
        "Garrafas para envase de água, sucos e bebidas. Consulte capacidades e disponibilidade.",
      medidas: ["Sob consulta"], // TODO: pedir medidas e forma de venda ao Douglas
      unidade: "",
      imagem: "assets/img/produtos/garrafas.jpg",
    },
    {
      nome: "Embalagens Plásticas em Geral",
      categoria: "diversos",
      descricao:
        "Não achou o item na lista? Trabalhamos com linha ampla e conseguimos sob encomenda. Mande o que você precisa que a gente cota.",
      medidas: ["Sob encomenda"],
      unidade: "",
      imagem: "",
    },
  ],

  // ---------- SEGMENTOS ATENDIDOS ----------
  // TODO: confirmar quais o cliente realmente atende hoje
  segmentos: [
    "Mercados e mercearias",
    "Padarias e confeitarias",
    "Hortifrutis e açougues",
    "Bares, lanchonetes e distribuidoras",
    "Lojas e comércio em geral",
    "Buffets, festas e eventos",
  ],
};
