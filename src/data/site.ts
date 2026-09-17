export const site = {
  name: 'Áurea Laser Locação',
  domain: 'https://aurealaserlocacao.com.br',
  description: 'Locação do equipamento Ácrus HTM Triple Wave para clínicas de estética na Baixada Santista.',
  whatsapp: '5512982906130',
  region: 'Baixada Santista',
  logo: '/images/logo-aurea-premium.png',
  equipmentImage: '/images/acrus-htm.png',
  promotion: {
    title: 'Condição especial por tempo limitado',
    plans: [
      { duration: '6 horas', from: 'R$ 700', price: 'R$ 500' },
      { duration: '8 horas', from: 'R$ 800', price: 'R$ 600' },
      { duration: '12 horas', from: 'R$ 900', price: 'R$ 700' }
    ],
    shipping: 'No Guarujá, não há taxa de frete. Para as demais cidades, consulte a disponibilidade e o frete.'
  },
  cities: [
    { name: 'Guarujá', slug: 'guaruja', context: 'uma operação de Laser Day com logística regional e preparação técnica no espaço da clínica.' },
    { name: 'Santos', slug: 'santos', context: 'uma agenda de depilação a laser organizada sem a compra de um equipamento próprio.' },
    { name: 'Praia Grande', slug: 'praia-grande', context: 'um dia de atendimentos com equipamento profissional e suporte de entrega e montagem.' },
    { name: 'São Vicente', slug: 'sao-vicente', context: 'uma alternativa flexível para testar ou ampliar a oferta de depilação a laser.' },
    { name: 'Cubatão', slug: 'cubatao', context: 'um Laser Day planejado de acordo com a agenda e a disponibilidade do equipamento.' },
    { name: 'Bertioga', slug: 'bertioga', context: 'uma operação de laser para clínica com entrega técnica previamente combinada.' }
  ],
  socialLinks: [
    { label: 'Instagram', url: 'https://www.instagram.com/aurealaserlocacao/' }
  ]
};

export function whatsappUrl(message = 'Olá! Gostaria de consultar a disponibilidade do Ácrus HTM para a minha clínica.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
