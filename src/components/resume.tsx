'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Resume: React.FC = () => {
  const projects = [
    { id: 1, name: 'Project 1', description: 'Short description 1' },
    { id: 2, name: 'Project 2', description: 'Short description 2' },
    { id: 3, name: 'Project 3', description: 'Short description 3' },
  ];

  return (
      <Card>
        <CardHeader>
          <CardTitle>Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Latest Job</AccordionTrigger>
              <AccordionContent>
                Job description...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Previous Job</AccordionTrigger>
              <AccordionContent>
                Job description...
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button className="mt-4">View Full Resume</Button>
        </CardContent>
      </Card>
  );
};

export default Resume;