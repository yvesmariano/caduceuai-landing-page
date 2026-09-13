export const CONTACT_URL =
  "mailto:contato@caduceu.ai?subject=Diagn%C3%B3stico%20do%20meu%20escrit%C3%B3rio";

export const ctaLabel = "Agendar diagnóstico gratuito";

export const fragmentedItems = [
  {
    title: "Dados em lugares diferentes",
    desc: "Informações divididas entre o sistema contábil, bancos, documentos, mensagens e planilhas.",
  },
  {
    title: "Controle manual de prazos",
    desc: "A equipe confere listas e planilhas para saber quais competências estão em dia.",
  },
  {
    title: "Trabalho repetido",
    desc: "Os mesmos dados são copiados, conferidos e atualizados em mais de uma ferramenta.",
  },
  {
    title: "Status preso com cada pessoa",
    desc: "Para entender uma pendência, é preciso perguntar a quem executou aquela etapa.",
  },
  {
    title: "Problemas descobertos tarde",
    desc: "Divergências aparecem quando a entrega está próxima ou o cliente pede uma resposta.",
  },
];

export const centralizedItems = [
  {
    title: "Carteira em uma visão única",
    desc: "Veja competências, pendências e próximos passos organizados por CNPJ.",
  },
  {
    title: "Dados conectados às rotinas",
    desc: "Sistemas, bancos e documentos alimentam o mesmo fluxo operacional.",
  },
  {
    title: "Automação do trabalho repetitivo",
    desc: "Agentes preparam documentos, conciliam dados e mantêm cada etapa atualizada.",
  },
  {
    title: "Revisão orientada por exceções",
    desc: "Sua equipe recebe as divergências que exigem análise e mantém o controle das decisões.",
  },
  {
    title: "Histórico de cada ação",
    desc: "Consulte o que foi feito, quando aconteceu e qual etapa precisa de atenção.",
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
    meta: "Checklist de divergências",
  },
  {
    code: "02 / NOTAS",
    title: "Emissão fiscal em lote",
    desc: "NFS-e e NF-e para a carteira inteira, com validação de tomador, CNAE e retenções.",
    meta: "NFS-e · NF-e",
  },
  {
    code: "03 / CAIXA",
    title: "Conciliação automática",
    desc: "Casa extrato, adquirente e nota, agrupa exceções em padrões e aprende suas regras.",
    meta: "Revisão por exceção",
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
    desc: "Cobra documentos e responde o cliente no WhatsApp, encaminhando para sua equipe as questões que exigem atenção.",
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
    desc: "Reúna o sistema contábil, bancos e documentos dos clientes em uma implantação orientada por carteira.",
  },
  {
    n: "II",
    title: "Automatize o trabalho repetitivo",
    desc: "Apuração, emissão, conciliação e declarações seguem fluxos com registro de cada ação.",
  },
  {
    n: "III",
    title: "Revise e mantenha o controle",
    desc: "Sua equipe acompanha pendências, revisa divergências e dedica mais tempo à análise e ao atendimento.",
  },
];

export const workflow = [
  { label: "Documentos recebidos", status: "Conferido" },
  { label: "Conciliação", status: "2 divergências" },
  { label: "Guia", status: "Aguardando revisão" },
];
