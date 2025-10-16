
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Flame, Sparkles, Moon, Sun, Music, Users, ScrollText, Ship } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Inicio", url: createPageUrl("Inicio"), icon: Ship },
  { title: "Las Musas", url: createPageUrl("Musas"), icon: Music, subtitle: "Marina" },
  { title: "Hékate", url: createPageUrl("Hekate"), icon: Moon, subtitle: "Clara" },
  { title: "Apolo", url: createPageUrl("Apolo"), icon: Sun, subtitle: "David" },
  { title: "Hestia", url: createPageUrl("Hestia"), icon: Flame, subtitle: "Coke" },
  { title: "Hermes", url: createPageUrl("Hermes"), icon: Sparkles, subtitle: "Todos" },
  { title: "Actas", url: createPageUrl("Actas"), icon: ScrollText },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --gold: #D4AF37;
          --bronze: #CD7F32;
          --dark-bg: #1a1410;
          --darker-bg: #0f0a08;
          --cream: #F5E6D3;
          --terracotta: #E07856;
        }
        
        body {
          background: var(--dark-bg);
          color: var(--cream);
        }

        .greek-pattern {
          background-image: 
            repeating-linear-gradient(90deg, transparent, transparent 10px, var(--gold) 10px, var(--gold) 12px),
            repeating-linear-gradient(0deg, transparent, transparent 10px, var(--gold) 10px, var(--gold) 12px);
          background-size: 20px 20px;
          opacity: 0.1;
        }

        .greek-border {
          border: 2px solid var(--gold);
          border-image: repeating-linear-gradient(
            45deg,
            var(--gold),
            var(--gold) 10px,
            var(--bronze) 10px,
            var(--bronze) 20px
          ) 1;
        }

        .golden-glow {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }
      `}</style>

      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r-2 border-gold" style={{ background: 'linear-gradient(180deg, #1a1410 0%, #2a1810 100%)' }}>
          <div className="absolute inset-0 greek-pattern pointer-events-none" />
          
          <SidebarHeader className="border-b-2 border-gold p-6 relative">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative golden-glow"
                   style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #CD7F32 100%)' }}>
                <Ship className="w-8 h-8 text-black" />
              </div>
              <div className="text-center">
                <h2 className="font-bold text-xl" style={{ color: 'var(--gold)', fontFamily: 'serif' }}>
                  Los Argonautas
                </h2>
                <p className="text-xs" style={{ color: 'var(--cream)' }}>Mitología Griega</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-2 relative">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`transition-all duration-300 rounded-lg mb-1 ${
                          location.pathname === item.url 
                            ? 'golden-glow' 
                            : 'hover:bg-opacity-20'
                        }`}
                        style={{
                          background: location.pathname === item.url 
                            ? 'linear-gradient(90deg, rgba(212,175,55,0.2) 0%, rgba(205,127,50,0.2) 100%)'
                            : 'transparent',
                          borderLeft: location.pathname === item.url ? '3px solid var(--gold)' : 'none'
                        }}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-3 py-3 w-full">
                          <item.icon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                          <div className="flex-1">
                            <span className="font-semibold" style={{ color: 'var(--cream)' }}>
                              {item.title}
                            </span>
                            {item.subtitle && (
                              <p className="text-xs opacity-70" style={{ color: 'var(--gold)' }}>
                                {item.subtitle}
                              </p>
                            )}
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <div className="mt-8 px-4">
              <div className="greek-border p-4 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />
                <p className="text-xs text-center relative z-10" style={{ color: 'var(--cream)', fontStyle: 'italic' }}>
                  "En busca del Vellocino de Oro"
                </p>
              </div>
            </div>
          </SidebarContent>

          <div className="border-t-2 border-gold p-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                   style={{ border: '2px solid var(--gold)' }}>
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f13e666fb41c6a7e3c893b/b034449cd_imagen_2025-10-16_221922867.png"
                  alt="Logo Los Argonautas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: 'var(--cream)' }}>
                  Proyecto Escolar
                </p>
                <p className="text-xs" style={{ color: 'var(--gold)' }}>
                  Asignatura de Mitología
                </p>
              </div>
            </div>
          </div>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-opacity-95 border-b-2 border-gold px-6 py-4 md:hidden"
                  style={{ background: 'var(--darker-bg)' }}>
            <div className="flex items-center gap-4">
              <SidebarTrigger className="p-2 rounded-lg transition-colors duration-200"
                             style={{ background: 'rgba(212,175,55,0.1)' }} />
              <h1 className="text-xl font-bold" style={{ color: 'var(--gold)', fontFamily: 'serif' }}>
                Los Argonautas
              </h1>
            </div>
          </header>

          <div className="flex-1 relative">
            <div className="absolute inset-0 greek-pattern pointer-events-none" />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
