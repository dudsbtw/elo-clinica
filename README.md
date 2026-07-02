# Clínica Elo — Saúde Integrada

Site fictício desenvolvido como projeto de portfólio para freelance web.

## Sobre o projeto

Clínica multidisciplinar de saúde localizada em Campinas — SP, com foco em odontologia, psicologia e fisioterapia. O site foi desenvolvido priorizando transmitir confiança, acolhimento e profissionalismo.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (sem frameworks)
- JavaScript puro (ES2020+, sem dependências)
- Hospedagem: Vercel (deploy via GitHub)

## Funcionalidades

- Layout responsivo (mobile-first)
- Menu mobile com overlay e fechamento por ESC
- Scroll reveal com IntersectionObserver
- Active link no scroll
- FAQ com accordion (JS puro, um item aberto por vez)
- Formulário de agendamento ilustrativo
- Botão flutuante do WhatsApp (ilustrativo)
- Tooltips ilustrativos ativados no clique
- Ícones SVG inline (sem dependências externas)

## Estrutura

```
clinica-elo/
├── css/
│   ├── style.css        ← estilos globais
│   └── responsive.css   ← breakpoints (1024px, 768px, 480px)
├── img/
├── js/
│   └── main.js          ← interações
└── index.html
```

## Seções

- **Hero** — layout split com shape orgânico e foto arredondada
- **Especialidades** — 3 cards com ícones SVG, card de destaque em azul
- **Sobre** — imagem com card flutuante e números de impacto
- **Equipe** — cards de profissionais com CRO/CRP/CREFITO
- **Depoimentos** — cards com foto, estrelas e especialidade
- **FAQ** — accordion com animação CSS (max-height)
- **Agendamento** — dados de contato com ícones SVG + formulário ilustrativo
- **Footer** — links e redes sociais ilustrativas

## Como rodar

```bash
# Clone e abra com Live Server (VS Code)
# ou qualquer servidor local
npx http-server .
```

---

Desenvolvido por [Eduardo Frois](https://www.linkedin.com/in/eduardo-frois)
