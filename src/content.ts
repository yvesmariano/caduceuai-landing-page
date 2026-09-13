export const ctaLabel = "Começar agora";

export const empresasItems = [
  {
    title: "Contabilidade completa no seu nome",
    desc: "Escrituração, balanço, folha e guias — produzidos pelos agentes, assinados pelo seu CRC.",
  },
  {
    title: "Endereço fiscal incluso",
    desc: "Sede comercial válida para o CNPJ do cliente, com correspondência digitalizada.",
  },
  {
    title: "Certificado digital grátis",
    desc: "e-CNPJ A1 emitido e renovado sem custo, todo ano, para cada cliente da carteira.",
  },
  {
    title: "Agente de IA no financeiro do cliente",
    desc: "Conectado a bancos, gateways e notas: responde e alerta o cliente sem passar por você.",
  },
  {
    title: "Migração da carteira sem custo",
    desc: "Onboarding em lote das empresas que você já atende, sem parar o faturamento delas.",
  },
];

export const contadoresItems = [
  {
    title: "Agente de declarações",
    desc: "IRPF, ECD, ECF e DCTF pré-montadas a partir dos dados do cliente, prontas para revisão.",
  },
  {
    title: "Agente de emissão fiscal",
    desc: "NFS-e e NF-e em lote, com validação de tomador, CNAE e retenções.",
  },
  {
    title: "Conciliação automática",
    desc: "Extratos, adquirentes e notas casados em minutos — só as exceções chegam a você.",
  },
  {
    title: "Painel multi-CNPJ",
    desc: "Status de cada competência, pendências e prazos da carteira inteira em uma tela.",
  },
  {
    title: "White-label",
    desc: "Seus clientes acessam o agente com a marca do seu escritório.",
  },
];

export const integrations = [
  "Domínio",
  "Alterdata",
  "Questor",
  "Sage",
  "Omie",
  "Bling",
  "Itaú",
  "Stone",
];

export const agents = [
  {
    code: "01 / DECLARAÇÕES",
    title: "Agente de declarações",
    desc: "Monta IRPF, ECD, ECF e DCTF a partir do que já está escriturado, com checklist de divergências.",
    meta: "6 min de revisão por peça",
  },
  {
    code: "02 / NOTAS",
    title: "Emissão fiscal em lote",
    desc: "NFS-e e NF-e para a carteira inteira, com validação de tomador, CNAE e retenções.",
    meta: "5.400+ municípios",
  },
  {
    code: "03 / CAIXA",
    title: "Conciliação automática",
    desc: "Casa extrato, adquirente e nota, agrupa exceções em padrões e aprende suas regras.",
    meta: "95% de match automático",
  },
  {
    code: "04 / FISCAL",
    title: "Apuração e guias",
    desc: "Apura o regime de cada cliente e emite DAS, DARF e ISS antes do vencimento.",
    meta: "Simples · Presumido · Real",
  },
  {
    code: "05 / FOLHA",
    title: "Departamento pessoal",
    desc: "Admissões, férias, rescisões e encargos com o eSocial da carteira em ordem.",
    meta: "eSocial · FGTS Digital",
  },
  {
    code: "06 / ATENDIMENTO",
    title: "Agente de relacionamento",
    desc: "Cobra documentos, responde o cliente no WhatsApp e só te escala o que precisa de contador.",
    meta: "white-label",
  },
];

export const aiIntegrations = [
  {
    name: "Claude",
    tag: "MCP",
    desc: "Servidor MCP oficial: o Claude enxerga balanços, extratos e obrigações da carteira como ferramentas e responde com dado real, não com achismo.",
    snippet: "claude mcp add caduceu \\\n  --scope escritorio",
  },
  {
    name: "ChatGPT",
    tag: "GPT + Actions",
    desc: "Publique um GPT interno do escritório com Actions apontando para a sua conta — a equipe consulta cliente, competência e pendência por conversa.",
    snippet: "POST /v1/clientes/{id}/apuracao\nAuthorization: Bearer cad_sk_…",
  },
  {
    name: "n8n / Make",
    tag: "Nó nativo",
    desc: "Nó pronto e webhooks para orquestrar rotinas: cobrar documento, disparar emissão, avisar o cliente quando a guia sai.",
    snippet: "trigger: competencia.fechada\n→ node: Caduceu · emitir DAS",
  },
  {
    name: "API REST",
    tag: "Aberta",
    desc: "Tudo que o agente faz existe como endpoint: clientes, lançamentos, notas, guias, declarações e conciliação. Chaves com escopo por cliente.",
    snippet: "GET /v1/carteira?status=aberta",
  },
  {
    name: "Webhooks",
    tag: "Tempo real",
    desc: "Assine eventos e reaja no seu sistema: nota emitida, guia disponível, exceção de conciliação, prazo em risco.",
    snippet: "nota.emitida · guia.disponivel\nexcecao.criada · prazo.risco",
  },
  {
    name: "Seu próprio modelo",
    tag: "BYO LLM",
    desc: "Rode os agentes sobre o modelo que você contratou — Claude, GPT, Gemini ou um open-source em nuvem privada.",
    snippet: "llm: anthropic | openai | azure\nregion: br-sao-paulo",
  },
];

export const platformNotes = [
  {
    title: "Permissão por cliente",
    desc: "Cada chave e cada integração enxerga só os CNPJs que você liberou — com log de quem leu o quê.",
  },
  {
    title: "Toda ação é auditável",
    desc: "Chamadas de IA e de API entram na mesma trilha das ações humanas, prontas para fiscalização e revisão do CRC.",
  },
  {
    title: "Sem lock-in de dados",
    desc: "Exportação completa em formato aberto e nos layouts dos principais sistemas contábeis, quando você quiser.",
  },
];

export const steps = [
  {
    n: "I",
    title: "Conecte a carteira",
    desc: "Seu sistema contábil, bancos e documentos dos clientes — importação em lote, sem redigitar nada.",
  },
  {
    n: "II",
    title: "Os agentes assumem a rotina",
    desc: "Apuração, emissão, conciliação e declarações rodando sozinhas, com trilha de auditoria por decisão.",
  },
  {
    n: "III",
    title: "Sua equipe só revisa exceções",
    desc: "O time sai da digitação e vai para o que é cobrado caro: revisão técnica, consultoria e novos contratos.",
  },
];

export const stats = [
  { value: "100x", label: "mais clientes por analista" },
  { value: "95%", label: "da conciliação sem toque humano" },
  { value: "6 min", label: "de revisão por declaração" },
  { value: "3 dias", label: "para migrar a carteira inteira" },
];
