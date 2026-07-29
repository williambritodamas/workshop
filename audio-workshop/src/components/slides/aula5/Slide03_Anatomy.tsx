import { SlideTitle } from '../../ui/SlideTitle';
import { MixerOverview } from '../../ui/MixerOverview';
import { slide03Notes } from './notes';
export { slide03Notes };

export const Slide03_Anatomy: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1920&auto=format&fit=crop" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Conhecendo uma mesa" subtitle="Clique nas regiões para explorar os controles" badge="Anatomy" />
    <div className="relative z-10 w-full max-w-5xl my-auto">
      <MixerOverview />
    </div>
  </div>
);
