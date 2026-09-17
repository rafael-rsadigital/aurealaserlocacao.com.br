# Áurea Laser Locação

Site institucional em Astro para locação do Ácrus HTM Triple Wave para clínicas de estética na Baixada Santista.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build e deploy

```bash
npm run build
npm run preview
```

O build gera HTML estático em `dist/`, sitemap por meio da integração oficial do Astro e `robots.txt` em `public/`. O projeto pode ser publicado em qualquer hospedagem compatível com arquivos estáticos.

## Arquitetura

- `src/data/site.ts`: domínio, WhatsApp, cidades e dados centralizados.
- `src/components/`: SEO, CTA e FAQ reutilizáveis.
- `src/layouts/BaseLayout.astro`: HTML base, navegação, breadcrumbs, footer e CTA flutuante.
- `src/pages/`: páginas comerciais, cidades e blog.
- `public/images/`: logo e imagem pública do equipamento.

## Diretriz editorial

O site deve escrever como uma empresa que aluga um equipamento para clínicas de estética, e não como uma agência de marketing. Priorize informações concretas sobre o Ácrus HTM, duração da locação, preços, data de atendimento, entrega, montagem, cidades atendidas, profissional habilitada e reserva.

Prefira “alugue o Ácrus HTM por 6, 8 ou 12 horas”, “consulte a disponibilidade para a data da sua clínica” e “entrega e montagem conforme as condições combinadas”. Evite expressões abstratas ou promocionais sem informação, como “potencialize sua operação”, “solução flexível”, “experiência diferenciada”, “tecnologia que transforma sua agenda”, “estratégia personalizada” e “mais possibilidades para seu negócio”.

Antes de publicar qualquer nova copy, verifique se ela responde a uma dúvida real da clínica ou explica uma condição da locação. Não invente preços, cobertura, profissionais, certificações, resultados, avaliações ou itens incluídos que não estejam confirmados nos dados do projeto.

## Antes de publicar

Confirmar com a empresa o número do WhatsApp, condições contratuais, áreas exatas de atendimento, informações sobre aplicadora/profissionais e textos legais. Não foram incluídos preços, avaliações, endereço, certificações ou promessas não confirmadas.

As URLs legadas auditadas foram redirecionadas: `/locacao-acrus.html` para `/locacao-laser/` e `/acrus-htm-triple-wave.html` para `/acrus-htm/`.
