import BlueHeader from './components/BlueHeader';
import BlueHero from './components/BlueHero';
import BluePalette from './components/BluePalette';
import BlueFooter from './components/BlueFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(0deg,#FFF1F2,transparent),linear-gradient(90deg,#FFE4E6,transparent)] text-red-900">
      <BlueHeader />
      <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <BlueHero />
        <BluePalette />
      </main>
      <BlueFooter />
    </div>
  );
}
