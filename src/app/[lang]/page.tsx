import { HomeHero } from "@/components/ui/hero/server";
import { PageContainer } from "@/components/ui/layout";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <PageContainer centered>
      <HomeHero lang={lang} />
    </PageContainer>
  );
} 