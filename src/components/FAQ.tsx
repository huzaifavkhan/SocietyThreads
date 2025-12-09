import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What printing techniques do you offer?",
    answer: "Whether it’s DTF printing, machine printing, or embroidery, we use the best method for your design and fabric — so your custom apparel looks premium, lasts longer, and stands out.",
  },
  {
    question: "What’s the Turnaround time?",
    answer: "Most orders are ready within 2–3 weeks, and we’ll keep you updated every step of the way so your custom apparel arrives on time. ",
  },
  {
    question: "Can I request a rush order?",
    answer: "Need it faster? We can accommodate rush orders for an additional fee.",
  },
  {
    question: "What is the Minimum Order Quantity?",
    answer: "No big batches required! You can start with just 5 pieces and scale up as you go.",
  },
  {
    question: "What if I receive a defective product?",
    answer: "If there’s a defect or printing error, we’ll fix it for free or provide a partial refund — no hassle, no extra cost.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to the UK and beyond, so student groups, event teams, and small brands worldwide can get their custom apparel.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about getting started
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:text-accent hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
