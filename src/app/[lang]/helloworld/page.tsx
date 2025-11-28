import { PageContainer } from '@/components/ui/layout';

export default async function HelloWorldPage() {
  
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">Hello World!</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Welcome to our static website! This is a simple demo page showcasing our component system.
        </p>
        <p className="mb-4">
          This page demonstrates how our internationalization system works with static content.
        </p>
        <div className="bg-base-200 p-6 rounded-lg mt-6">
          <h2 className="text-xl font-semibold mb-3">What you can explore:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Component examples in the Examples section</li>
            <li>Multi-language support (English/Spanish)</li>
            <li>Responsive design with DaisyUI</li>
            <li>Modern TypeScript and Next.js architecture</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
} 