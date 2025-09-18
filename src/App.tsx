import { Users, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Separator } from './components/ui/separator';
import enigmaLogo from 'figma:asset/50c049e898540ad4485a3911ef0fe986f8112bcf.png';

export default function App() {
  return (
    <div className="min-h-screen bg-background dark flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full space-y-8">
        {/* Logo Section */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <img 
              src={enigmaLogo} 
              alt="Enigma RP Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-medium text-foreground">
              Ursar Roleplay
            </h1>
            <p className="text-muted-foreground">2025</p>
          </div>
        </div>

        {/* Main Message */}
        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="space-y-4 text-left">
              <p className="text-lg text-foreground leading-relaxed">
                Después de 2 meses increíbles, 
                <span className="text-[#ddb420] font-medium"> Ursar Roleplay</span> ha llegado a su fin.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                No vamos a dar los motivos específicos de esta decisión, pero como equipo creemos que es lo mejor. 
                Ha sido una experiencia brutal y hemos conocido a gente increíble por el camino. 
                En serio, gracias a todos los que habéis formado parte de esta comunidad.
              </p>

              <Separator className="my-6" />

              <p className="text-foreground leading-relaxed">
                Pero esto no es un adiós definitivo. Hemos decidido transformar el proyecto en algo nuevo: 
                <span className="text-[#ddb420] font-medium"> Enigma RP</span>. 
                Mismo espíritu, mismas ganas, pero con ideas frescas y ganas de mejorar todo lo que hemos aprendido.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Si queréis acompañarnos en esta nueva aventura, sería genial. 
                Si no, también lo entendemos perfectamente y os deseamos lo mejor.
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="p-6 border-[#ddb420]/20 bg-[#ddb420]/5">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-[#ddb420]" />
              <h2 className="text-xl text-foreground">Enigma RP</h2>
            </div>
            
            <p className="text-muted-foreground">
              Es el mismo Discord que Ursar, pero renovado con la nueva identidad y enfoque de Enigma RP.
            </p>
            
            <Button 
              asChild
              size="lg"
              className="bg-[#ddb420] hover:bg-[#ddb420]/90 text-black font-medium"
            >
              <a 
                href="https://discord.gg/EC8vekXmsE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Únete al Discord
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            — Staff de Enigma RP
          </p>
        </div>
      </div>
    </div>
  );
}