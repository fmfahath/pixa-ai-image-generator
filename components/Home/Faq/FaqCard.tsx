import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export function FaqCard() {
    return (
        <Accordion type="single" collapsible defaultValue="item-1" className="text-white">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl lg:text-2xl">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl lg:text-2xl">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl lg:text-2xl">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-base md:text-lg">
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default FaqCard
