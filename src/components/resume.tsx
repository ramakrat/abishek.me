'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type ResumeProps = {
  limit?: number; // how many accordion items to show
};

const Resume: React.FC<ResumeProps> = ({ limit }) => {
  const jobs = [
    { id: 1, title: "Latest Job", description: "Job description..." },
    { id: 2, title: "Previous Job", description: "Job description..." },
    { id: 3, title: "Older Job", description: "Job description..." },
    { id: 4, title: "Latest Job", description: "Job description..." },
    { id: 5, title: "Previous Job", description: "Job description..." },
    { id: 6, title: "Older Job", description: "Job description..." }
  ];

  const shownJobs = limit ? jobs.slice(0, limit) : jobs;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume</CardTitle>
      </CardHeader>

      <CardContent>
        <Accordion type="single" collapsible>
          {shownJobs.map((job) => (
            <AccordionItem key={job.id} value={`item-${job.id}`}>
              <AccordionTrigger>{job.title}</AccordionTrigger>
              <AccordionContent>{job.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Resume;