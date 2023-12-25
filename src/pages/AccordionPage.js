import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "apadks",
      label: "Label - 1",
      content: "Content - 1",
    },
    {
      id: "apadfgks",
      label: "Label - 2",
      content: "Content - 2",
    },
    {
      id: "apadkqwes",
      label: "Label - 3",
      content: "Content - 3",
    },
  ];

  return <Accordion items={items} />;
}
export default AccordionPage;
