"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const leadSchema = z.object({
  fullName: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres"),
  workEmail: z.string().trim().email("Debe ser un correo electrónico válido"),
  companyName: z.string().trim().min(2, "La empresa debe tener al menos 2 caracteres"),
  jobTitle: z.string().trim().min(2, "El cargo debe tener al menos 2 caracteres").max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(7).max(25).optional().or(z.literal("")),
  companySize: z
    .enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"], {
      message: "Selecciona el tamaño de tu empresa"
    }),
  message: z.string().trim().max(2000).optional(),
  consent: z.literal(true, {
    message: "Debes aceptar las políticas de privacidad",
  }),
});

type LeadInput = z.infer<typeof leadSchema>;

export function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      companyName: "",
      jobTitle: "",
      phone: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: LeadInput) => {
      // Filtrar campos vacíos opcionales para evitar enviar strings vacíos
      const payload = {
        ...data,
        jobTitle: data.jobTitle || undefined,
        phone: data.phone || undefined,
        message: data.message || undefined,
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Ocurrió un error al enviar el formulario.");
      }

      return res.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      reset();
    },
  });

  const onSubmit = (data: LeadInput) => {
    mutation.mutate(data);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-primary placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all";

  const labelClasses = "block text-sm font-medium text-neutral-600 mb-2";

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              Hablemos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empieza a operar en piloto automático
            </h2>
            <p className="font-sans text-lg text-neutral-600 mb-8 leading-relaxed">
              Déjanos tus datos para agendar una llamada exploratoria de 15 minutos. 
              Analizaremos tus procesos actuales y descubriremos el ROI potencial de automatizar tu empresa con IA.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Análisis Gratuito</h4>
                  <p className="text-sm text-neutral-500">Mapeamos tus ineficiencias clave y diseñamos una solución nativa.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-neutral-100">
            {isSuccess ? (
              <div className="text-center py-12 animate-fade-up">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">¡Solicitud Enviada!</h3>
                <p className="text-neutral-600 mb-8">
                  Hemos recibido tu información correctamente. Nos pondremos en contacto contigo en breve para coordinar el diagnóstico.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="w-full">
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className={labelClasses}>Nombre Completo *</label>
                    <input id="fullName" {...register("fullName")} className={inputClasses} placeholder="Juan Pérez" />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="workEmail" className={labelClasses}>Email de Trabajo *</label>
                    <input id="workEmail" type="email" {...register("workEmail")} className={inputClasses} placeholder="juan@empresa.com" />
                    {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className={labelClasses}>Empresa *</label>
                    <input id="companyName" {...register("companyName")} className={inputClasses} placeholder="Acme Corp" />
                    {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="companySize" className={labelClasses}>Tamaño de Empresa *</label>
                    <select id="companySize" {...register("companySize")} className={inputClasses} defaultValue="">
                      <option value="" disabled>Selecciona el tamaño</option>
                      <option value="1-10">1-10 empleados</option>
                      <option value="11-50">11-50 empleados</option>
                      <option value="51-200">51-200 empleados</option>
                      <option value="201-500">201-500 empleados</option>
                      <option value="501-1000">501-1000 empleados</option>
                      <option value="1000+">1000+ empleados</option>
                    </select>
                    {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="jobTitle" className={labelClasses}>Cargo (Opcional)</label>
                  <input id="jobTitle" {...register("jobTitle")} className={inputClasses} placeholder="Director de Operaciones" />
                  {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>¿Cuál es tu mayor desafío operativo actual? (Opcional)</label>
                  <textarea id="message" {...register("message")} className={`${inputClasses} resize-none h-28`} placeholder="Cuéntanos brevemente qué procesos te gustaría optimizar..." />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                    {...register("consent")}
                  />
                  <label htmlFor="consent" className="text-sm text-neutral-500 leading-tight">
                    Acepto las <a href="#" className="underline hover:text-primary">Políticas de Privacidad</a> y consiento el tratamiento de mis datos. *
                  </label>
                </div>
                {errors.consent && <p className="text-red-500 text-xs -mt-4">{errors.consent.message}</p>}

                {mutation.isError && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm border border-red-100">
                    {mutation.error.message}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg rounded-lg shadow-lg shadow-accent/20"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Procesando...
                    </span>
                  ) : "Agendar Diagnóstico Gratuito"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
