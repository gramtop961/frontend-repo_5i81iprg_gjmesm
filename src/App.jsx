import BlueHeader from './components/BlueHeader';
import BlueHero from './components/BlueHero';
import BluePalette from './components/BluePalette';
import BlueFooter from './components/BlueFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(0deg,#EAF2FF,transparent),linear-gradient(90deg,#E8F3FF,transparent)] text-blue-900">
      <BlueHeader />
      <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <BlueHero />
        <BluePalette />
      </main>
      <BlueFooter />
    </div>
  );
}
