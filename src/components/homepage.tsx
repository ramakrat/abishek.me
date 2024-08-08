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
            <Image src="/profile.jpeg" alt="profile image" width={100} height={100} className="rounded-full" />
            <div>
              <CardTitle className="text-2xl mb-2">Your Name</CardTitle>
              <p>I build pixel-perfect, engaging, and accessible digital experiences.</p>
            </div>
          </div>
          <form className="mt-4">
            <Input type="text" placeholder="Get in touch" />
            <Button type="submit" className="mt-2">Send</Button>
          </form>
        </CardContent>
      </Card>

      <Resume />

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
      <Button variant="outline" size="icon" className="fixed bottom-4 right-4 rounded-full">
        <Link href="mailto:abishektr2+portfolio@gmail.com">✉️</Link>
      </Button>
    </div>
  );
};

export default HomePage;