import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonLink } from '../button';
import { Container } from '../layout/container';
import { H1 } from '../typography/heading';
import { FeatureCard } from './FeatureCard';
import type { Locale } from "@/constants/i18n";
import { getDictionary } from "@/app/[lang]/dictionaries";

interface HomeHeroProps {
  className?: string;
  lang: string;
}

export async function HomeHero({ className, lang }: HomeHeroProps) {
  const dictionary = await getDictionary(lang as Locale);

  return (
    <section className={cn('hero bg-gradient-to-br py-24 md:py-32', className)}>
      <div className="hero-content w-full">
        <Container fluid>
          <div className="flex flex-col space-y-12 w-full">
            <div className="animate-fadeIn">
              <H1 className="mb-6 tracking-tight">
                {dictionary.home.welcomePrefix}{' '}
                <span className="text-primary font-bold">{dictionary.home.welcomeHighlight}</span>
                {dictionary.home.welcomeSuffix && ` ${dictionary.home.welcomeSuffix}`}
              </H1>
              
              <p className="text-lg md:text-xl text-base-content/80 max-w-2xl mb-8">
                {dictionary.home.description}
              </p>
            </div>
            
            <div className="animate-fadeIn">
              <ButtonLink 
                href={`/${lang}/examples/buttons`} 
                size="lg"
                variant="primary"
                className="font-medium"
              >
                View Examples
              </ButtonLink>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-fadeIn">
              {/* Feature cards */}
              <FeatureCard 
                title="Static & Fast" 
                description="Optimized static site with excellent performance and SEO." 
              />
              <FeatureCard 
                title="Modern UI" 
                description="Built with Next.js, Tailwind CSS, and DaisyUI components." 
              />
              <FeatureCard 
                title="Component Library" 
                description="Comprehensive set of reusable UI components and examples." 
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
} 