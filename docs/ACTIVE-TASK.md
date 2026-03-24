# ACTIVE-TASK: Sistema de Captura de Leads B2B Nativo

## 1. Esquema Zod (Strict)
```typescript
import { z } from 'zod';

export const leadSchema = z.object({
  nombre: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  empresa: z.string().min(2, "Nombre de empresa requerido"),
  telefono: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Formato internacional inválido"),
  dolor: z.string().min(10, "Por favor describe brevemente tu principal desafío"),
});

export type LeadInput = z.infer<typeof leadSchema>;
```

## 2. Arquitectura (Next.js App Router)
- **Framework:** Next.js 15+ (App Router).
- **Endpoint:** `app/api/leads/route.ts` (POST).
- **Frontend:** Componente Server/Client híbrido con `react-hook-form` + `@hookform/resolvers/zod`.
- **Estado/Data:** `tanstack/react-query` para mutaciones asíncronas.
- **Validación:** Zod compartido en backend y frontend.

## 3. Checklist de Implementación
- [ ] **Estructura:** Configurar carpetas `/api/leads` y `/components/forms`.
- [ ] **Backend (obrero_core):** Crear `app/api/leads/route.ts` con validación Zod y manejo de errores (CORS/Rate limiting básico).
- [ ] **Frontend (frontend_heavy):** Crear `LeadForm.tsx` usando `react-hook-form` y `zodResolver`.
- [ ] **Integración (frontend_heavy):** Implementar `useMutation` con `tanstack/react-query` para conectar el formulario con la API.
- [ ] **UI/UX:** Agregar estados de carga y feedback de éxito/error.
