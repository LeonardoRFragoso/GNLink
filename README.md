# GNLink - Site Institucional

Site institucional moderno e responsivo para a GNLink, empresa do setor de energia.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Styling utilitário
- **Framer Motion** - Animações
- **next-intl** - Internacionalização (PT/EN)
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── [locale]/           # Rotas com suporte a idiomas
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Homepage
│   └── globals.css         # Estilos globais
├── components/
│   ├── home/               # Componentes da homepage
│   ├── layout/             # Header, Footer
│   └── ui/                 # Componentes reutilizáveis
├── i18n/                   # Configuração de internacionalização
│   ├── request.ts
│   └── routing.ts
└── middleware.ts           # Middleware de idiomas
messages/
├── pt.json                 # Traduções em Português
└── en.json                 # Traduções em Inglês
```

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

## 🌐 Internacionalização

O site suporta dois idiomas:
- 🇧🇷 Português (padrão)
- 🇺🇸 English

As traduções estão em `messages/pt.json` e `messages/en.json`.

## 📱 Funcionalidades

- ✅ Menu responsivo com dropdown
- ✅ Seletor de idioma (PT/EN)
- ✅ Hero section animada
- ✅ Preview de projetos
- ✅ Preview de notícias
- ✅ Footer completo
- 🔲 Mapa interativo de projetos
- 🔲 Página de equipe
- 🔲 Página de ética/compliance
- 🔲 Blog de notícias
- 🔲 Formulário de contato
- 🔲 Formulário trabalhe conosco

## 🎨 Paleta de Cores

- **Primary**: Tons de teal (#008080)
- **Secondary**: Tons de azul (#1991e1)
- **Accent**: Tons de verde (#22c55e)
- **Dark**: Tons de cinza (#0f172a)

## 📄 Licença

MIT © GNLink
