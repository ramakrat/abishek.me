'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Resume from "@/components/resume";

const HomePage: React.FC = () => {

  const projects = [
    { id: 1, name: 'Project 1', description: 'Short description 1' },
    { id: 2, name: 'Project 2', description: 'Short description 2' },
    { id: 3, name: 'Project 3', description: 'Short description 3' },
  ];

  return (
    <div className="space-y-12">
      {/* Identity Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-6">
              <CardTitle className="text-2xl mb-2">me 👉</CardTitle>
              <p>I solve problems, write things, and talk to people. I like people who do what they like and treat people well.</p>
          </div>
        </CardContent>
      </Card>

      <Resume limit={3} />

      {/* Projects Section */}
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {projects.map(project => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                  <Button className="mt-2">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild className="mt-4 w-full">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Floating Mail Icon */}
      <Button variant="outline" size="icon" className="fixed bottom-8 right-8 rounded-full">
        <Link href="mailto:abishektr2+portfolio@gmail.com">✉️</Link>
      </Button>
    </div>
  );
};

export default HomePage;