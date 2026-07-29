/* ============================================================
   DTC EMBALAGENS — SCRIPT PRINCIPAL
   Lê tudo de config.js e monta as seções dinâmicas.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- ÍCONES SVG ---------- */
  const ICONES = {
    truck:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    package:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    shield:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    headset:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    whats:
      '<svg class="icone" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    mail:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    pin:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    phone:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    box:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="52" height="52"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    check:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    tag:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
    insta:
      '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    caixa:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
  };

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  /* ============================================================
     LINK DO WHATSAPP
     A DTC tem dois consultores. O índice 0 é o contato padrão.
     ============================================================ */
  function linkWhats(mensagem, indice) {
    const consultor = CONFIG.consultores[indice || 0] || CONFIG.consultores[0];
    const numero = (consultor.whatsapp || "").replace(/\D/g, "");
    const texto = encodeURIComponent(mensagem || CONFIG.mensagemPadrao);
    return `https://wa.me/${numero}?text=${texto}`;
  }

  function iniciais(nome) {
    return nome.trim().charAt(0).toUpperCase();
  }

  function aplicarLinksWhats() {
    $$("[data-whats]").forEach((el) => {
      el.href = linkWhats(el.dataset.whats || "");
      el.target = "_blank";
      el.rel = "noopener";
    });
  }

  /* ============================================================
     CABEÇALHO E MENU MOBILE
     ============================================================ */
  function iniciarCabecalho() {
    const cabecalho = $("#cabecalho");
    const btn = $("#menuBtn");
    const nav = $("#nav");

    const aoRolar = () =>
      cabecalho.classList.toggle("cabecalho--rolado", window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });

    function fechar() {
      nav.classList.remove("aberto");
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const aberto = nav.classList.toggle("aberto");
      btn.setAttribute("aria-expanded", String(aberto));
    });

    // Fecha ao clicar num link do menu
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) fechar();
    });

    // Fecha ao tocar fora do menu
    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("aberto")) return;
      if (!nav.contains(e.target) && !btn.contains(e.target)) fechar();
    });

    // Fecha com Esc
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") fechar();
    });

    // Se o aparelho girar ou a janela crescer até virar desktop,
    // o menu precisa voltar ao estado normal.
    let larguraAnterior = window.innerWidth;
    window.addEventListener("resize", () => {
      if (window.innerWidth !== larguraAnterior) {
        larguraAnterior = window.innerWidth;
        if (window.innerWidth > 900) fechar();
      }
    });
  }

  /* ============================================================
     SEÇÕES DINÂMICAS
     ============================================================ */
  function listaConsultores(mensagem) {
    const seta =
      '<svg class="icone consultor__seta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

    return CONFIG.consultores
      .map(
        (c, i) => `
      <a class="consultor" href="${linkWhats(mensagem, i)}" target="_blank" rel="noopener">
        <span class="consultor__avatar">${iniciais(c.nome)}</span>
        <span class="consultor__dados">
          <strong>${c.nome}${c.cargo ? " · " + c.cargo : ""}</strong>
          <span>${c.exibicao}</span>
        </span>
        ${seta}
      </a>`
      )
      .join("");
  }

  function montarConsultores() {
    const alvos = ["#consultoresHero", "#consultoresContato"];
    alvos.forEach((sel) => {
      const el = $(sel);
      if (el) el.innerHTML = listaConsultores();
    });

    const insta = $("#instaHero");
    if (insta && CONFIG.contato.instagram) {
      insta.href = CONFIG.contato.instagram;
      insta.target = "_blank";
      insta.rel = "noopener";
      insta.textContent = CONFIG.contato.instagramUser || "Instagram";
    } else if (insta) {
      insta.closest("p").remove();
    }
  }

  function montarDiferenciais() {
    $("#gradeDiferenciais").innerHTML = CONFIG.diferenciais
      .map(
        (d) => `
      <article class="card-dif revelar">
        <div class="card-dif__icone">${ICONES[d.icone] || ICONES.package}</div>
        <h3>${d.titulo}</h3>
        <p>${d.texto}</p>
      </article>`
      )
      .join("");
  }

  function montarSegmentos() {
    $("#segmentos").innerHTML = CONFIG.segmentos
      .map((s) => `<div class="segmento">${ICONES.check}<span>${s}</span></div>`)
      .join("");
  }

  /* ============================================================
     CATÁLOGO
     ============================================================ */
  function nomeCategoria(id) {
    const cat = CONFIG.categorias.find((c) => c.id === id);
    return cat ? cat.nome : id;
  }

  function cardProduto(p) {
    const msg = `Olá! Vim pelo site e gostaria de um orçamento para: ${p.nome}.`;
    const medidas = (p.medidas || [])
      .map((m) => `<span class="medida">${m}</span>`)
      .join("");
    const img = p.imagem
      ? `<img src="${p.imagem}" alt="${p.nome}" loading="lazy" />`
      : ICONES.box;

    // Como o produto é vendido — responde metade das dúvidas antes de perguntar.
    const unidade = p.unidade
      ? `<div class="card-produto__unid">${ICONES.caixa}<span>${p.unidade}</span></div>`
      : "";

    return `
      <article class="card-produto revelar">
        <div class="card-produto__img">${img}</div>
        <div class="card-produto__corpo">
          <div class="card-produto__cat">${nomeCategoria(p.categoria)}</div>
          <h3>${p.nome}</h3>
          <p>${p.descricao}</p>
          ${medidas ? `<div class="medidas">${medidas}</div>` : ""}
          ${unidade}
          <a href="#" class="btn btn--secundario" data-whats="${msg}">Solicitar orçamento</a>
        </div>
      </article>`;
  }

  function renderizarProdutos(filtro) {
    const lista =
      filtro === "todos"
        ? CONFIG.produtos
        : CONFIG.produtos.filter((p) => p.categoria === filtro);

    $("#gradeProdutos").innerHTML = lista.map(cardProduto).join("");
    aplicarLinksWhats();
    observarRevelar();
  }

  function montarCatalogo() {
    const filtros = [{ id: "todos", nome: "Todos" }, ...CONFIG.categorias];

    $("#filtros").innerHTML = filtros
      .map(
        (f, i) =>
          `<button class="filtro${i === 0 ? " ativo" : ""}" data-filtro="${f.id}">${f.nome}</button>`
      )
      .join("");

    $("#filtros").addEventListener("click", (e) => {
      const btn = e.target.closest(".filtro");
      if (!btn) return;
      $$(".filtro").forEach((b) => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      renderizarProdutos(btn.dataset.filtro);
    });

    renderizarProdutos("todos");
  }

  /* ============================================================
     CONTATO E RODAPÉ
     ============================================================ */
  function montarContato() {
    const c = CONFIG.contato;
    const blocos = [];

    // Só renderiza o que existe de verdade. Campo vazio no config = seção some.
    if (c.instagram)
      blocos.push([
        ICONES.insta,
        "Instagram",
        `<a href="${c.instagram}" target="_blank" rel="noopener">${c.instagramUser || "Instagram"}</a>`,
      ]);
    if (c.email)
      blocos.push([
        ICONES.mail,
        "E-mail",
        `<a href="mailto:${c.email}">${c.email}</a>`,
      ]);

    const local = [c.endereco, c.cidade && c.uf ? `${c.cidade} / ${c.uf}` : c.cidade]
      .filter(Boolean)
      .join(" · ");
    if (local) blocos.push([ICONES.pin, "Onde estamos", `<span>${local}</span>`]);
    if (c.horario)
      blocos.push([ICONES.clock, "Atendimento", `<span>${c.horario}</span>`]);

    $("#contatoBlocos").innerHTML = blocos
      .map(
        ([icone, titulo, valor]) => `
      <div class="contato__bloco">
        <div class="contato__bloco__icone">${icone}</div>
        <div><strong>${titulo}</strong>${valor}</div>
      </div>`
      )
      .join("");

    // ---- rodapé ----
    const rodape = CONFIG.consultores.map(
      (co, i) =>
        `<li><a href="${linkWhats("", i)}" target="_blank" rel="noopener">${co.nome} · ${co.exibicao}</a></li>`
    );
    if (c.instagram)
      rodape.push(
        `<li><a href="${c.instagram}" target="_blank" rel="noopener">${c.instagramUser || "Instagram"}</a></li>`
      );
    if (c.email)
      rodape.push(`<li><a href="mailto:${c.email}">${c.email}</a></li>`);
    if (local) rodape.push(`<li>${local}</li>`);
    $("#rodapeContato").innerHTML = rodape.join("");

    $("#rodapeCopy").textContent = `© ${new Date().getFullYear()} ${CONFIG.empresa.nome}. Todos os direitos reservados.`;
    if (CONFIG.empresa.cnpj)
      $("#rodapeCnpj").textContent = `CNPJ ${CONFIG.empresa.cnpj}`;
  }

  /* ============================================================
     FORMULÁRIO DE ORÇAMENTO
     ============================================================ */
  function montarFormulario() {
    const select = $("#produto");
    select.innerHTML =
      '<option value="">Selecione ou descreva abaixo</option>' +
      CONFIG.produtos.map((p) => `<option>${p.nome}</option>`).join("") +
      '<option value="Outro">Outro / não listado</option>';

    const form = $("#formOrcamento");
    const status = $("#formStatus");

    function mostrar(tipo, texto) {
      status.className = "form-status " + tipo;
      status.textContent = texto;
      status.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const dados = Object.fromEntries(new FormData(form).entries());

      if (!dados.nome.trim() || !dados.telefone.trim()) {
        mostrar("erro", "Preencha pelo menos seu nome e telefone.");
        return;
      }

      const botao = form.querySelector('button[type="submit"]');
      botao.disabled = true;
      botao.textContent = "Enviando...";

      // --- Opção A: envio por Formspree (se configurado) ---
      if (CONFIG.formEndpoint) {
        try {
          const resp = await fetch(CONFIG.formEndpoint, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(form),
          });
          if (!resp.ok) throw new Error("falha");
          form.reset();
          mostrar(
            "ok",
            "Solicitação enviada! Retornamos em até 24 horas úteis."
          );
        } catch (err) {
          mostrar(
            "erro",
            "Não conseguimos enviar agora. Chame no WhatsApp que respondemos na hora."
          );
        } finally {
          botao.disabled = false;
          botao.textContent = "Enviar solicitação";
        }
        return;
      }

      // --- Opção B: sem endpoint, abre o WhatsApp com tudo preenchido ---
      const linhas = [
        "*Solicitação de orçamento — site DTC Embalagens*",
        `Nome: ${dados.nome}`,
        dados.empresa ? `Empresa: ${dados.empresa}` : "",
        `Telefone: ${dados.telefone}`,
        dados.email ? `E-mail: ${dados.email}` : "",
        dados.produto ? `Produto: ${dados.produto}` : "",
        dados.quantidade ? `Quantidade: ${dados.quantidade}` : "",
        dados.mensagem ? `Detalhes: ${dados.mensagem}` : "",
      ].filter(Boolean);

      window.open(linkWhats(linhas.join("\n")), "_blank", "noopener");
      form.reset();
      mostrar("ok", "Abrimos o WhatsApp com seu pedido preenchido. É só enviar!");
      botao.disabled = false;
      botao.textContent = "Enviar solicitação";
    });
  }

  /* ============================================================
     ANIMAÇÃO DE ENTRADA
     ============================================================ */
  let observador;
  function observarRevelar() {
    if (!("IntersectionObserver" in window)) {
      $$(".revelar").forEach((el) => el.classList.add("visivel"));
      return;
    }
    if (!observador) {
      observador = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("visivel");
              observador.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }
    $$(".revelar:not(.visivel)").forEach((el) => observador.observe(el));
  }

  /* ============================================================
     DADOS ESTRUTURADOS (SEO local)
     ============================================================ */
  function injetarSchema() {
    const c = CONFIG.contato;
    // Pasta onde o site está. Funciona tanto na raiz de um domínio próprio
    // quanto num subcaminho, como no GitHub Pages (/usuario/repositorio/).
    const base = window.location.href.split(/[?#]/)[0].replace(/[^/]*$/, "");
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: CONFIG.empresa.nome,
      slogan: CONFIG.empresa.slogan,
      description: CONFIG.empresa.descricaoCurta,
      url: base,
      logo: base + "assets/img/logo.svg",
      telephone: CONFIG.consultores.map((co) => "+" + co.whatsapp),
      email: c.email || undefined,
      sameAs: c.instagram ? [c.instagram] : undefined,
      address: c.cidade
        ? {
            "@type": "PostalAddress",
            streetAddress: c.endereco || undefined,
            addressLocality: c.cidade,
            addressRegion: c.uf || undefined,
            addressCountry: "BR",
          }
        : undefined,
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.textContent = JSON.stringify(schema);
    document.head.appendChild(tag);
  }

  /* ============================================================
     INICIALIZAÇÃO
     ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof CONFIG === "undefined") {
      console.error("config.js não carregou.");
      return;
    }
    if (CONFIG.empresa.descricaoCurta) {
      const el = $("#heroTexto");
      if (el) el.textContent = CONFIG.empresa.descricaoCurta;
    }
    iniciarCabecalho();
    montarConsultores();
    montarDiferenciais();
    montarSegmentos();
    montarCatalogo();
    montarContato();
    montarFormulario();
    aplicarLinksWhats();
    observarRevelar();
    injetarSchema();
  });
})();
