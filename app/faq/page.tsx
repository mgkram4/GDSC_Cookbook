"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  return (
    <div className="m-20">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Who made this ?</AccordionTrigger>
          <AccordionContent>GDSC Cal Poly Team</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What UN soltion are you trying to solve
          </AccordionTrigger>
          <AccordionContent>
            Zero Hunger, Good Health, No poverty
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What Google Tech does this use</AccordionTrigger>
          <AccordionContent>Firebase</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
