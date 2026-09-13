const questions = [
  {
    question: "Preciso trocar o sistema contábil que já uso?",
    answer:
      "A implantação conecta os dados e documentos da sua operação às rotinas da caduceu.ai. No diagnóstico, avaliamos as integrações disponíveis para o seu cenário.",
  },
  {
    question: "Minha equipe continua no controle?",
    answer:
      "Sim. As ações ficam registradas por cliente. Sua equipe acompanha pendências, revisa divergências e mantém a responsabilidade pelas decisões técnicas.",
  },
  {
    question: "Meus clientes verão a marca da caduceu.ai?",
    answer:
      "O atendimento pode usar a identidade do seu escritório. A configuração da experiência para o cliente é definida durante a implantação.",
  },
  {
    question: "O que acontece no diagnóstico?",
    answer:
      "Em 15 minutos, entendemos como sua equipe trabalha, quais tarefas mais consomem tempo e quais rotinas fazem sentido avaliar primeiro.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="section-tight faq">
      <div className="wrap faq-grid">
        <div className="section-head">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="heading">O que saber antes de começar</h2>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
