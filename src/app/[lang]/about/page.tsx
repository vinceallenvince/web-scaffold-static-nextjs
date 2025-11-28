import { Metadata } from 'next';
import { getDictionary } from '../dictionaries';
import type { Locale } from '@/constants/i18n';
import { PageContainer } from '@/components/ui/layout';

// Generate metadata dynamically based on the locale
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  const t = dictionary.about as { title: string; description: string };
  
  return {
    title: t.title,
    description: t.description,
  };
}

export default async function AboutPage({
  params
}: { 
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  const t = dictionary.about as {
    title: string;
    description: string;
  };

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          {t.description}
        </p>
      </div>
    </PageContainer>
  );
} 