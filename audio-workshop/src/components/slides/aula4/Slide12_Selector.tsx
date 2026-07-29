import { SlideTitle } from '../../ui/SlideTitle';
import { MicrophoneSelector } from '../../ui/MicrophoneSelector';
import { slide12Notes } from './notes';
export { slide12Notes };

export const Slide12_Selector: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <SlideTitle title="Qual microfone escolher?" subtitle="Guia rápido de decisão por situação" badge="Escolha" />
    <div className="w-full max-w-5xl my-auto">
      <MicrophoneSelector />
    </div>
  </div>
);
