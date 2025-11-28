import { PageContainer } from '@/components/ui/layout';
import { getDictionary } from '../dictionaries';
import type { Locale } from '@/constants/i18n';

export default async function HelloWorldPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  const t = dictionary.helloworld as {
    title: string;
    welcome: string;
    description: string;
    exploreTitle: string;
    explore1: string;
    explore2: string;
    explore3: string;
    explore4: string;
  };

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          {t.welcome}
        </p>
        <p className="mb-4">
          {t.description}
        </p>
        <div className="bg-base-200 p-6 rounded-lg mt-6">
          <h2 className="text-xl font-semibold mb-3">{t.exploreTitle}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>{t.explore1}</li>
            <li>{t.explore2}</li>
            <li>{t.explore3}</li>
            <li>{t.explore4}</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
} 